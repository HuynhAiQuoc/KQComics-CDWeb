import React from 'react';

import './Reader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp, faArrowUp, faHome, faListUl, faLongArrowUp, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react/headless';
// import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom'
import Footer from '~/components/Layout/Footer'
import data from '~/data/data.json';


import { useTranslation } from 'react-i18next';
 
import ComicService from '~/service/comic.service'

function Reader() {

    const { t } = useTranslation();

    const [searchParams] = useSearchParams();
    const [showEpisodeList, setShowEpisodeList] = useState(false);
    const [visibleTopBtn, setVisibleTopBtn] = useState(false);
    const [listComics] = useState(() => { return [...data]; });
    const [titleNo] = useState(() => { return searchParams.get('titleNo'); })

    const [currentEpisode, setCurrentEpisode] = useState(() => {
        return parseInt(searchParams.get('episodeNo'));
    });

    const [episodes, setEpisodes] = useState(
        [{
            "episodeNo": 107,
            "titleNo": 2113,
            "episodeTitle": "(S2) Episode 50",
            "thumbnailImageUrl": "/20220609_167/16547143908824EtFM_PNG/thumb_165471436252121131075.png?type=q70",
        }]
    );

    const [firstEpisode, setFirstEpisode] = useState(0)

    const [lastEpisode, setLastEpisode] = useState(0)

    const [titleCurrentEpisode, setTitleCurrentEpisode] = useState(null);

    const [titleComic] = useState(() => {
        return listComics.find(obj => {
            return obj.titleNo === parseInt(titleNo)
        }).title;
    })

    const episodeRef = useRef();

    const [listImages, setListImages] = useState(
        [
            {
                "sortOrder": 1,
                "cutId": 315,
                "url": "/20210716_109/1626380107606NjqzR_JPEG/1626380103911309311.jpg?type=q70",
            }
        ]
    )

    const getTitleEpisode = () => {
        const ob = episodes.find(obj => {
            return (currentEpisode === obj.episodeNo)
        });
        return ob ? ob.episodeTitle : ''
    }

    const handleShowEpisodeList = () => {
        setShowEpisodeList(!showEpisodeList);
    }

    useEffect(() => {
        ComicService.getEpisodes(titleNo).then(res => {
            setEpisodes((res).sort((a, b) => b.episodeNo - a.episodeNo))
        })
    }, [])


    useEffect(() => {
        ComicService.getInformation(titleNo, currentEpisode).then(res => {
            setListImages((res).sort((a, b) => a.sortOrder - b.sortOrder))
        })
    }, [titleNo, currentEpisode])


    useEffect(() => {
        setFirstEpisode(episodes[episodes.length - 1].episodeNo);
        setLastEpisode(episodes[0].episodeNo);
    }, [episodes])


    useEffect(() => {
        const handler = (event) => {
            if (!episodeRef.current.contains(event.target)) {
                setShowEpisodeList(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, []);

    useEffect(() => {
        setCurrentEpisode(parseInt(searchParams.get('episodeNo')));
    })

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        setTitleCurrentEpisode(getTitleEpisode);
        setShowEpisodeList(false);
    }, [currentEpisode, episodes])


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisibleTopBtn(true)
        }
        else if (scrolled <= 300) {
            setVisibleTopBtn(false)
        }
    };


    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='background-header header-height-reader fixed-top'>
                        <div className="d-flex align-items-center justify-content-center h-100 ps-md-5 pe-md-5 ps-sm-1 pe-sm-1">
                            <div className="d-flex align-items-center">
                                <div className="me-lg-5 me-3 me-sm-4">
                                    <Link to={'/'} className="redirect-home-btn">
                                        <FontAwesomeIcon icon={faHome} />
                                    </Link>
                                </div>
                            </div>
                            <div className="h-100  position-relative background-black d-flex align-items-center text-white">
                                <div className="ps-2 pe-3 ps-sm-4 pe-sm-4">
                                    <Link
                                        to={'/reader?titleNo=' + titleNo + '&episodeNo=' + (currentEpisode - 1)}
                                        className={`change-episode-btn ` + ((currentEpisode === firstEpisode) ? `disable-link` : ``)}
                                    >
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                    </Link>
                                </div>
                                <div className="d-flex flex-column align-items-center tippy-episode-list">
                                    <h6 className='d-none d-sm-block'>
                                        <Link to={`/detail?titleNo=`} className="text-white title-hover">
                                            {titleComic}
                                        </Link>
                                    </h6>
                                    <Tippy
                                        visible={showEpisodeList}
                                        interactive={true}
                                        render={attrs => (
                                            <div ref={episodeRef} className="box-list-episode" tabIndex="-1" {...attrs}>
                                                {
                                                    episodes.map((item) => (
                                                        <Link
                                                            key={item.episodeNo}
                                                            to={'/reader?titleNo=' + titleNo + '&episodeNo=' + item.episodeNo}
                                                            className={`episode-link` + ((currentEpisode === item.episodeNo) ? ` episode-link--active` : ``)}
                                                        >
                                                            <div className="episode-link-inner">
                                                                <span>{item.episodeTitle}</span>
                                                            </div>
                                                        </Link>
                                                    ))
                                                }
                                            </div>
                                        )}>
                                        <button
                                            onClick={handleShowEpisodeList}
                                            className="list-episode-btn border-0 bg-transparent text-gray font-weight-bolder">
                                            {titleCurrentEpisode + ` `}
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </button>
                                    </Tippy>
                                </div>
                                <div className="ps-3 pe-2 ps-sm-4 pe-sm-4">
                                    <Link
                                        to={'/reader?titleNo=' + titleNo + '&episodeNo=' + (currentEpisode + 1)}
                                        className={`change-episode-btn ` + ((currentEpisode === lastEpisode) ? `disable-link` : ``)}
                                    >
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </Link>
                                </div>
                            </div>
                            <div className="">
                                <div className="ms-lg-5 ms-3 ms-sm-4">
                                    <Link to={`/detail?titleNo=` + titleNo} className="text-white previous-icon">
                                        <FontAwesomeIcon icon={faListUl} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='spacing-header'>
                        <div className='col-md-8 col-lg-6 ms-auto me-auto'>
                            {
                                (listImages.length === 1) ? (
                                    <div className="d-flex align-items-center justify-content-center pb-5 pt-5">
                                        <FontAwesomeIcon icon={faSpinner} className="loading-icon mt-5" />
                                    </div>
                                ) :
                                    (
                                        listImages.map(i => (
                                            <img className="w-100" key={i.sortOrder} src={'https://webtoon-phinf.pstatic.net' + i.url} alt="" />
                                        ))
                                    )
                            }
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='change-episode-footer'>
                        <Link
                            to={'/reader?titleNo=' + titleNo + '&episodeNo=' + (currentEpisode - 1)}
                            className={`change-episode-footer-btn ` + ((currentEpisode === firstEpisode) ? `disable-link` : ``)}
                        >
                            <FontAwesomeIcon icon={faAngleLeft} />
                            {t('reader.preEpisode')}
                        </Link>
                        <Link
                            to={'/reader?titleNo=' + titleNo + '&episodeNo=' + (currentEpisode + 1)}
                            className={`change-episode-footer-btn ` + ((currentEpisode === lastEpisode) ? `disable-link` : ``)}

                        >
                            {t('reader.nextEpisode')}
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>

                    </div>
                </div>

                <div className='row'>
                    <Footer />
                </div>

                <div className='position-fixed scroll-top-element'>
                    <button className={`scroll-top-element-btn ` + ((visibleTopBtn) ? `d-block` : `d-none`)}
                        onClick={scrollToTop}>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Reader;