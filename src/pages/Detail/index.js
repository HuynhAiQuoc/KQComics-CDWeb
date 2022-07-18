
import 'bootstrap/dist/css/bootstrap.min.css';
import './Detail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCompactDisc, faSortAlphaDesc, faSortAlphaDown, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots, faEye, faThumbsUp, faUser } from '@fortawesome/free-regular-svg-icons';

import Comment from './Comment/index.js';
import Description from './Description/index.js'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'


import data from '~/data/data.json'


function Detail() {

    const [showModal, setShowModal] = useState(false);
    const [listComics] = useState(() => { return [...data]; });
    const [searchParams] = useSearchParams();
    const [episodes, setEpisodes] = useState(
        [
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1657846871000,
                "episodeNo": 107,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1657846871000,
                "readCount": 64385,
                "episodeTitle": "(S2) Episode 50",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 107,
                "thumbnailImageUrl": "/20220609_167/16547143908824EtFM_PNG/thumb_165471436252121131075.png?type=q70",
                "bgmYn": "N",
                "likeCount": 11718,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1657242067000,
                "episodeNo": 106,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1657242067000,
                "readCount": 84061,
                "episodeTitle": "(S2) Episode 49",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 106,
                "thumbnailImageUrl": "/20220519_33/1652946984552ivr3z_PNG/thumb_165294666877721131066.png?type=q70",
                "bgmYn": "N",
                "likeCount": 13944,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1656637265000,
                "episodeNo": 105,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1656637265000,
                "readCount": 90136,
                "episodeTitle": "(S2) Episode 48",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 105,
                "thumbnailImageUrl": "/20220519_204/1652946630199VWBkT_PNG/thumb_165294644243621131058.png?type=q70",
                "bgmYn": "N",
                "likeCount": 14690,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1656032464000,
                "episodeNo": 104,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1656032464000,
                "readCount": 95160,
                "episodeTitle": "(S2) Episode 47",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 104,
                "thumbnailImageUrl": "/20220519_127/1652946426823h2eIl_PNG/thumb_165294637167221131047.png?type=q70",
                "bgmYn": "N",
                "likeCount": 15040,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1655427670000,
                "episodeNo": 103,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1655427670000,
                "readCount": 99333,
                "episodeTitle": "(S2) Episode 46",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 103,
                "thumbnailImageUrl": "/20220428_120/1651131323381PYwAN_PNG/thumb_165113120691921131033.png?type=q70",
                "bgmYn": "N",
                "likeCount": 16497,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1654822867000,
                "episodeNo": 102,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1654822867000,
                "readCount": 101992,
                "episodeTitle": "(S2) Episode 45",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 102,
                "thumbnailImageUrl": "/20220428_216/1651131195339tJYru_PNG/thumb_165113099032921131025.png?type=q70",
                "bgmYn": "N",
                "likeCount": 16343,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1654218068000,
                "episodeNo": 101,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1654218068000,
                "readCount": 105868,
                "episodeTitle": "(S2) Episode 44",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 101,
                "thumbnailImageUrl": "/20220428_294/1651130975201TlFV0_PNG/thumb_165113088058021131019.png?type=q70",
                "bgmYn": "N",
                "likeCount": 16333,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1653613267000,
                "episodeNo": 100,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1653613267000,
                "readCount": 110187,
                "episodeTitle": "(S2) Episode 43",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 100,
                "thumbnailImageUrl": "/20220407_266/1649326951771v4ucC_PNG/thumb_164932690484821131003.png?type=q70",
                "bgmYn": "N",
                "likeCount": 16939,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1653008474000,
                "episodeNo": 99,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1653008474000,
                "readCount": 113341,
                "episodeTitle": "(S2) Episode 42",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 99,
                "thumbnailImageUrl": "/20220407_132/1649326882992Mc6FJ_PNG/thumb_16493264424622113997.png?type=q70",
                "bgmYn": "N",
                "likeCount": 18161,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1652403672000,
                "episodeNo": 98,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1652403672000,
                "readCount": 115853,
                "episodeTitle": "(S2) Episode 41",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 98,
                "thumbnailImageUrl": "/20220407_72/1649326399032TY4S8_PNG/thumb_16493261371572113981.png?type=q70",
                "bgmYn": "N",
                "likeCount": 17706,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1651798870000,
                "episodeNo": 97,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1651798870000,
                "readCount": 116338,
                "episodeTitle": "(S2) Episode 40",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 97,
                "thumbnailImageUrl": "/20220331_275/1648718611155sLvuG_PNG/thumb_16487182281652113978.png?type=q70",
                "bgmYn": "N",
                "likeCount": 18809,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1651194070000,
                "episodeNo": 96,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1651194070000,
                "readCount": 118839,
                "episodeTitle": "(S2) Episode 39",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 96,
                "thumbnailImageUrl": "/20220317_107/1647504822725gk5fh_PNG/thumb_16475042977462113964.png?type=q70",
                "bgmYn": "N",
                "likeCount": 18675,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1650589272000,
                "episodeNo": 95,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1650589272000,
                "readCount": 122168,
                "episodeTitle": "(S2) Episode 38",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 95,
                "thumbnailImageUrl": "/20220317_162/16475042636883g5IW_PNG/thumb_16475038749702113954.png?type=q70",
                "bgmYn": "N",
                "likeCount": 18946,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1649984472000,
                "episodeNo": 94,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1649984472000,
                "readCount": 123749,
                "episodeTitle": "(S2) Episode 37",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 94,
                "thumbnailImageUrl": "/20220303_17/1646295220213aurVe_PNG/thumb_16462951743712113949.png?type=q70",
                "bgmYn": "N",
                "likeCount": 19982,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1649379673000,
                "episodeNo": 93,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1649379673000,
                "readCount": 124242,
                "episodeTitle": "(S2) Episode 36",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 93,
                "thumbnailImageUrl": "/20220303_145/1646295138240HIpkd_PNG/thumb_16462946143842113936.png?type=q70",
                "bgmYn": "N",
                "likeCount": 19813,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1648774872000,
                "episodeNo": 92,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1648774872000,
                "readCount": 128978,
                "episodeTitle": "(S2) Episode 35",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 92,
                "thumbnailImageUrl": "/20220224_140/1645660891597UtRIH_PNG/thumb_16456608789862113928.png?type=q70",
                "bgmYn": "N",
                "likeCount": 19898,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1648170072000,
                "episodeNo": 91,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1648170072000,
                "readCount": 131286,
                "episodeTitle": "(S2) Episode 34",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 91,
                "thumbnailImageUrl": "/20220217_270/1645091655433yv5tM_JPEG/16450916554192113915.jpg?type=q70",
                "bgmYn": "N",
                "likeCount": 20537,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1647565271000,
                "episodeNo": 90,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1647565271000,
                "readCount": 135725,
                "episodeTitle": "(S2) Episode 33",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 90,
                "thumbnailImageUrl": "/20220210_102/1644453345403Dj5Jg_PNG/thumb_16444532789812113902.png?type=q70",
                "bgmYn": "N",
                "likeCount": 20876,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1646964066000,
                "episodeNo": 89,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1646964066000,
                "readCount": 141495,
                "episodeTitle": "(S2) Episode 32",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 89,
                "thumbnailImageUrl": "/20220126_90/1643193783769FtlfV_JPEG/16431937837632113892.jpg?type=q70",
                "bgmYn": "N",
                "likeCount": 21032,
                "creatorNote": "",
                "likeit": false
            },
            {
                "dailyPassEpisode": false,
                "rewardAdEpisode": false,
                "passUseRestrictEpisode": false,
                "registerYmdt": 1646359267000,
                "episodeNo": 88,
                "serviceStatus": "SERVICE",
                "titleNo": 2113,
                "exposureYmdt": 1646359267000,
                "readCount": 141363,
                "episodeTitle": "(S2) Episode 31",
                "modifyYmdt": 1657846872000,
                "episodeSeq": 88,
                "thumbnailImageUrl": "/20220126_4/1643193696100UesSt_JPEG/16431936960872113887.jpg?type=q70",
                "bgmYn": "N",
                "likeCount": 23193,
                "creatorNote": "",
                "likeit": false
            }
        ]
    )

    const [isSortAscending, setIsSortAscending] = useState(true)

    const [comic] = useState(() => {
        const titleNo = searchParams.get('titleNo');
        return listComics.find(obj => {
            return obj.titleNo === parseInt(titleNo)
        })
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    },[])


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
                                            <button className="btn-previous">
                                                <FontAwesomeIcon icon={faArrowLeft} />
                                            </button>
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
                                                <div>
                                                    <h3 className="story-title">
                                                        {comic.title}
                                                    </h3>
                                                    <p className="story-author mt-2 mb-2 mt-lg-3 mb-lg-2">Tác giả:  {comic.titleAuthorList[0].authorName}</p>
                                                    <p className="story-genres mt-2 mb-2">Thể loại:  {comic.representGenre}</p>
                                                    <div className="d-flex mt-2 mt-lg-4">
                                                        <div className="me-4">
                                                            <FontAwesomeIcon className="me-1" icon={faEye} />
                                                            <span className="">
                                                                {numFormatter(comic.readCount)}
                                                            </span>
                                                        </div>
                                                        <div className="">
                                                            <FontAwesomeIcon className="me-1" icon={faThumbsUp} />
                                                            <span className="">
                                                                {numFormatter(comic.likeitCount)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn-start-read">
                                                    Đọc từ đầu
                                                </button>
                                            </div>
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
                                        <h5 className="list-chapter-title">Danh sách chương</h5>
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
                                            episodes.map(e => (
                                                <div className="chapter-item" key={e.episodeNo}>
                                                    <img className="rounded-3 me-3" src={'https://webtoon-phinf.pstatic.net' + e.thumbnailImageUrl} alt="" />
                                                    <p className="chapter-item-title">{e.episodeTitle}</p>
                                                </div>
                                            ))
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
                                            <h5>3 Comments</h5>
                                            <div className="mt-3">
                                                <div className="comment-element d-flex">
                                                    <div className="me-2 pt-2">
                                                        <div className="comment-user-icon">
                                                            <FontAwesomeIcon icon={faUser} />
                                                        </div>
                                                    </div>
                                                    <div className="comment-block">
                                                        <div className="comment-header">
                                                            <span className="comment-author">Happy Bunny</span>
                                                            {/* <span className="comment-position">Commented on Chapter 1 • </span> */}
                                                            <span className="comment-time">on Jun 4, 2022 at 06:21 AM</span>
                                                        </div>
                                                        <p className="comment-content">Deliberately scoring last and then talking down to the teacher is pretty obnoxious. I want to slap you. Stop writing garbage.</p>
                                                        <div className="comment-footer d-flex">
                                                            <div className="me-3">
                                                                <button className="btn-favorite">
                                                                    <FontAwesomeIcon icon={faThumbsUp} />
                                                                </button>
                                                                <span className="text-gray">4</span>
                                                            </div>
                                                            <div className="me-3">
                                                                <FontAwesomeIcon className="me-2 icon-comment" icon={faCommentDots} />
                                                                <span className="text-gray">0</span>
                                                            </div>
                                                            <button className="border-0 bg-transparent btn-reply">Reply</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ms-4 ps-2 mt-3">
                                                    <button
                                                        className="btn-show-all-comment"
                                                        onClick={() => setShowModal(true)}

                                                    >
                                                        Xem tất cả bình luận
                                                    </button><br />
                                                    <button
                                                        className="btn-add-comment mt-3"
                                                        onClick={() => setShowModal(true)}
                                                    >Thêm bình luận</button>
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

            <Comment showModal={showModal} onClose={() => setShowModal(false)} />

        </>
    );

    function numFormatter(num) {
        if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
        } else if (num > 1000000 && num < 999999999) {
            return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
        } else if (num > 1000000000) {
            return (num / 1000000000).toFixed(1) + 'B'
        } else if (num < 900) {
            return num; // if value < 1000, nothing to do
        }
    }
}

export default Detail;