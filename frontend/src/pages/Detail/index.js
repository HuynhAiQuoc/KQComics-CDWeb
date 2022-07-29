
import 'bootstrap/dist/css/bootstrap.min.css';
import './Detail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faArrowLeft, faSortAlphaDown, faSortAlphaUp, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faEye, faThumbsUp, faUser } from '@fortawesome/free-regular-svg-icons';

import Comment from './Comment/index.js';
import Description from './Description/index.js'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import data from '~/data/data.json';

import { useTranslation } from 'react-i18next';
import ComicService from '~/service/comic.service';
import CommentService from '~/service/comment.service';
import HistoryService from '~/service/history.service';
import AuthService from '~/service/auth.service';

import FormatService from '~/service/format.service';


function Detail() {

    const { t } = useTranslation();

    const [showModal, setShowModal] = useState(false);
    const [listComics] = useState(() => { return [...data]; });
    const [listComments, setListComments] = useState([]);
    const [lastComment, setLastComment] = useState({});
    const [searchParams] = useSearchParams();
    const [titleNo, setTitleNo] = useState(() => {
        return searchParams.get('titleNo');
    });

    const [episodes, setEpisodes] = useState([{}]);
    const [historyComic, setHistoryComic] = useState({});

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            HistoryService.getSingleHistory(Number(user.id), Number(titleNo)).then(res => {
                if (res.data) {
                    setHistoryComic(res.data)
                }
            })
        } else {

        }
    }, [titleNo])

    useEffect(() => {
        CommentService.getComments(Number(titleNo)).then(res => {
            setListComments(res.data)
        })
    }, [titleNo]);

    useEffect(() => {
        if (listComments.length > 0) {
            setLastComment(listComments[listComments.length - 1]);
        }
    }, [listComments])

    useEffect(() => {
        setTitleNo(searchParams.get('titleNo'));
    }, [searchParams])

    useEffect(() => {
        ComicService.getEpisodes(titleNo).then(res => {
            setEpisodes(res || [{}])
        })
    }, [titleNo])

    const [firstEpisode, setFirstEpisode] = useState(1)
    const [isSortAscending, setIsSortAscending] = useState(true)


    useEffect(() => {
        const re = episodes.reduce(function (res, obj) {
            return (obj.episodeNo < res.episodeNo) ? obj : res;
        })
        setFirstEpisode(re.episodeNo || 1);
    }, [episodes]);

    const findComic = (tNo) => {
        return listComics.find(obj => {
            return obj.titleNo === parseInt(tNo)
        })
    }

    const [comic, setComic] = useState(() => {
        return findComic(titleNo);
    });

    useEffect(() => {
        setComic(findComic(titleNo));
    }, [titleNo])


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    const handleSetComments = (comments) => {
        setListComments(comments)
    }

    const handleSortEpisode = () => {
        if (isSortAscending) {
            setEpisodes(episodes.sort((a, b) => a.episodeNo - b.episodeNo));
        } else {
            setEpisodes(episodes.sort((a, b) => parseFloat(b.episodeNo) - parseFloat(a.episodeNo)));
        }
        setIsSortAscending(!isSortAscending);
    }


    return (
        <>
            <div className="spacing-header padding-around">
                <div className="pt-lg-4">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 p-0">
                            <div className="ps-lg-2 pe-lg-2">
                                <div className="background-header p-3 p-lg-4 rounded-custom">
                                    <div className="row">
                                        <div className="d-flex d-lg-none mb-3 justify-content-between">
                                            <div>

                                            </div>
                                            <button
                                                className="btn-open-comment"
                                                onClick={() => setShowModal(true)}
                                            >
                                                <FontAwesomeIcon icon={faCommentDots} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="d-flex">
                                            <img className="story-image" src={'https://webtoon-phinf.pstatic.net' + comic.thumbnail} alt="" />
                                            <div className="story-information ms-4 d-flex flex-column justify-content-between">
                                                <div className="text-white">
                                                    <h3 className="story-title">
                                                        {comic.title}
                                                    </h3>
                                                    <p className="story-author mt-2 mb-2 mt-lg-3 mb-lg-2">{t('detail.authorTitle')}:  {comic.titleAuthorList[0].authorName}</p>
                                                    <p className="story-genres mt-2 mb-2">{t('detail.genre')}:  {comic.representGenre}</p>
                                                    <div className="d-flex mt-2 mt-lg-4">
                                                        <div className="me-4">
                                                            <FontAwesomeIcon className="me-1" icon={faEye} />
                                                            <span className="">
                                                                {FormatService.numFormatter(comic.readCount)}
                                                            </span>
                                                        </div>
                                                        <div className="">
                                                            <FontAwesomeIcon className="me-1" icon={faThumbsUp} />
                                                            <span className="">
                                                                {FormatService.numFormatter(comic.likeitCount)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-none d-sm-flex">
                                                    <Link
                                                        to={'/reader?titleNo=' + comic.titleNo + '&episodeNo=' + firstEpisode}
                                                        className="btn-start-read"
                                                    >
                                                        {t('detail.startRead')}
                                                    </Link>
                                                    {
                                                        (historyComic.id) ? (
                                                            <Link to={'/reader?titleNo=' + comic.titleNo + '&episodeNo=' + historyComic.episodeNo}
                                                                className="btn__continue-reading"
                                                            >
                                                                {t('history.continueBtn')}
                                                            </Link>
                                                        ) : (<></>)
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex d-sm-none mt-3 justify-content-center">
                                            <Link to={'/reader?titleNo=' + comic.titleNo + '&episodeNo=' + firstEpisode} className="btn-start-read">
                                                {t('detail.startRead')}
                                            </Link>
                                            {
                                                (historyComic.id) ? (
                                                    <Link to={'/reader?titleNo=' + comic.titleNo + '&episodeNo=' + historyComic.episodeNo}
                                                        className="btn__continue-reading"
                                                    >
                                                        {t('history.continueBtn')}
                                                    </Link>
                                                ) : (<></>)
                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="d-lg-none d-block mt-5">
                                            <Description content={comic.synopsis} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-lg-2 pe-lg-2 mt-4 mb-4">
                                <div className="background-header rounded-custom text-white">
                                    <div className="d-flex justify-content-between  p-3 p-lg-4">
                                        <h5 className="list-chapter-title">{t('detail.episodesTitle')}</h5>
                                        <button className="btn-sort-chapter" onClick={handleSortEpisode}>
                                            {
                                                isSortAscending ? (
                                                    <FontAwesomeIcon icon={faSortAlphaUp} />
                                                ) : (
                                                    <FontAwesomeIcon icon={faSortAlphaDown} />
                                                )
                                            }
                                        </button>
                                    </div>
                                    <div className="">

                                        {
                                            (episodes.length === 1)
                                                ?
                                                (
                                                    <div className="d-flex align-items-center justify-content-center pb-4">
                                                        <FontAwesomeIcon icon={faSpinner} className="loading-icon m-0" />
                                                    </div>
                                                )
                                                :
                                                (
                                                    episodes.map(e => (
                                                        <Link
                                                            key={e.episodeNo}
                                                            to={'/reader?titleNo=' + comic.titleNo + '&episodeNo=' + e.episodeNo}>

                                                            <div className="chapter-item">
                                                                <img className="rounded-3 me-3" src={'https://webtoon-phinf.pstatic.net' + e.thumbnailImageUrl} alt="" />
                                                                <p className="chapter-item-title">{e.episodeTitle}</p>
                                                            </div>
                                                        </Link>
                                                    ))
                                                )
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-lg-block d-none p-0">
                            <div>
                                <div className="ps-lg-3 pe-lg-3">
                                    <div className="background-header p-4 rounded-custom">
                                        <Description content={comic.synopsis} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 mb-4">
                                <div className="ps-lg-3 pe-lg-3">
                                    <div className="background-header p-4 rounded-custom">
                                        <div className="story-description">
                                            <h5>{t('detail.commentTitle')}</h5>
                                            <div className="mt-3">
                                                {
                                                    (listComments.length > 0) ?
                                                        (
                                                            <div className="comment-element d-flex">
                                                                <div className="me-2 pt-2">
                                                                    <div className="comment-user-icon">
                                                                        <FontAwesomeIcon icon={faUser} />
                                                                    </div>
                                                                </div>
                                                                <div className="comment-block">
                                                                    <div className="comment-header">
                                                                        <span className="comment-author">{lastComment.username}</span>
                                                                        <span className="comment-time">{lastComment.createAt}</span>
                                                                    </div>
                                                                    <p className="comment-content">{lastComment.content}</p>
                                                                    <div className="comment-footer d-flex">
                                                                        <div className="me-3">
                                                                            <button className="btn-favorite">
                                                                                <FontAwesomeIcon icon={faThumbsUp} />
                                                                            </button>
                                                                            <span className="text-gray">0</span>
                                                                        </div>
                                                                        <div className="me-3">
                                                                            <FontAwesomeIcon className="me-2 icon-comment" icon={faCommentDots} />
                                                                            <span className="text-gray">0</span>
                                                                        </div>
                                                                        <button className="border-0 bg-transparent btn-reply">
                                                                            {t('detail.replyBtn')}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                        :
                                                        (
                                                            <div className="comment-element-null">
                                                                <FontAwesomeIcon className="comment__element-null-icon" icon={faCommentDots} />
                                                                <p className="mb-1">{t('detail.comment.descriptionFirst')}</p>
                                                                <p>{t('detail.comment.descriptionSecond')}</p>
                                                            </div>

                                                        )
                                                }


                                                <div className="ms-4 ps-2 mt-3">
                                                    <button
                                                        className={`btn-show-all-comment ` + ((listComments.length > 0) ? `d-block` : `d-none`)}
                                                        onClick={() => setShowModal(true)}
                                                    >
                                                        {t('detail.showCommentBtn')}
                                                    </button>
                                                    <br />
                                                    <button
                                                        className="btn-add-comment mt-3"
                                                        onClick={() => setShowModal(true)}
                                                    >
                                                        {t('detail.addCommentBtn')}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Comment handleSetComments={handleSetComments} titleNo={titleNo} showModal={showModal} onClose={() => setShowModal(false)} />

        </>
    );

}

export default Detail;