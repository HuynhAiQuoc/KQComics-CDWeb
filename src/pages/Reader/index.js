import './Reader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight, faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react/headless';
// import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional


import { useState, useEffect, useRef } from 'react';

function Reader() {

    const [showEpisodeList, setShowEpisodeList] = useState(false);

    const episodeRef = useRef();

    const handleShowEpisodeList = () => {
        setShowEpisodeList(!showEpisodeList);
    }

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
    })

    return (
        <>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='background-header header-height-reader fixed-top'>
                        <div className="d-flex align-items-center justify-content-between h-100 ps-5 pe-4">
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <Link to={`/detail?titleNo=`} className="text-white previous-icon">
                                        <FontAwesomeIcon icon={faLongArrowLeft} />
                                    </Link>
                                </div>
                                <div className="ms-5">
                                    <Link to={'/'}>
                                        <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5734 1.33953C14.7595 -0.209304 16.911 -0.450273 18.3789 0.801309C19.8467 2.05289 20.0751 4.32307 18.8889 5.87191L6.07487 22.6041C5.1647 23.7926 3.6434 24.2467 2.2781 23.7373C0.912793 23.228 0 21.8659 0 20.3379V3.60572C0 1.6144 1.52988 0.000121701 3.41709 0.000121622C5.30429 0.000121542 6.83417 1.6144 6.83417 3.60572V10.1394L13.5734 1.33953ZM16.4213 24.0001C14.2097 24.0001 12.3335 22.2955 12.3335 19.7173C12.3335 17.1391 16.4213 12.7326 16.4213 12.7326C16.4213 12.7326 20.3423 17.1911 20.3423 19.7173C20.3423 22.2434 18.6329 24.0001 16.4213 24.0001Z" fill="#FFCC00">
                                            </path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="h-100  position-relative background-black d-flex align-items-center text-white">
                                <div className="ps-4 pe-4">
                                    <Tippy content="Previous episode">
                                    <Link to={''} className="change-episode-btn">
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                    </Link>
                                    </Tippy>
                                </div>
                                <div className="d-flex flex-column align-items-center tippy-episode-list">
                                    <h6>
                                        <Link to={`/detail?titleNo=`} className="text-white title-hover">
                                            After School Lessons for Unripe Apples
                                        </Link>
                                    </h6>
                                    <Tippy
                                        visible={showEpisodeList}
                                        interactive={true}
                                        render={attrs => (
                                            <div ref={episodeRef} className="box-list-episode" tabIndex="-1" {...attrs}>
                                                <Link to={'/'} className="episode-link episode-link--active">
                                                    <div className="episode-link-inner">
                                                        <span>Episode 1</span>
                                                    </div>
                                                </Link>
                                                <Link to={''} className="episode-link">
                                                    <div className="episode-link-inner">
                                                        <span>Episode 2</span>
                                                    </div>
                                                </Link>
                                                <Link to={''} className="episode-link">
                                                    <div className="episode-link-inner">
                                                        <span>Episode 3</span>
                                                    </div>
                                                </Link>
                                                <Link to={''} className="episode-link">
                                                    <div className="episode-link-inner">
                                                        <span>Episode 4</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        )}>
                                        <button
                                            onClick={handleShowEpisodeList}
                                            className="list-episode-btn border-0 bg-transparent text-gray font-weight-bolder">
                                            Episode 1 <FontAwesomeIcon icon={faAngleDown} />
                                        </button>
                                    </Tippy>
                                </div>
                                <div className="ps-4 pe-4">
                                    {/* <Tippy content="Next episode"> */}
                                    <Link to={''} className="change-episode-btn">
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </Link>
                                    {/* </Tippy> */}
                                </div>
                            </div>
                            <div className="">
                                end
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='spacing-header'>
                        <div className='col-md-8 col-lg-6 ms-auto me-auto'>
                            <img className="w-100" src="https://webtoon-phinf.pstatic.net/20220620_196/1655659216185X9ibj_JPEG/16556592161772964333.jpg?type=q90" alt="" />
                            <img className="w-100" src="https://webtoon-phinf.pstatic.net/20220620_63/1655659214829Q7aq6_JPEG/16556592148132964331.jpg?type=q90" alt="" />
                            <img className="w-100" src="https://webtoon-phinf.pstatic.net/20220620_261/1655659216872Hzcl3_JPEG/16556592168622964333.jpg?type=q90" alt="" />
                            <img className="w-100" src="https://webtoon-phinf.pstatic.net/20220620_287/1655659214467XSpVG_JPEG/16556592144572964334.jpg?type=q90" alt="" />
                            <img className="w-100" src="https://webtoon-phinf.pstatic.net/20220620_164/1655659213273xw5rw_JPEG/16556592132652964332.jpg?type=q90" alt="" />
                            <img className="w-100" src="https://webtoon-phinf.pstatic.net/20220620_59/1655659214415RxxRc_JPEG/16556592144072964333.jpg?type=q90" alt="" />
                            <img className="w-100" src="https://webtoon-phinf.pstatic.net/20220620_73/1655659216477agR7x_JPEG/16556592164642964335.jpg?type=q90" alt="" />
                            <img className="w-100" src="https://webtoon-phinf.pstatic.net/20220620_131/1655659217362KKeD7_JPEG/16556592173532964336.jpg?type=q90" alt="" />
                            <img className="w-100" src="https://webtoon-phinf.pstatic.net/20220620_295/1655659217218B6orL_JPEG/16556592172092964331.jpg?type=q90" alt="" />
                            <img className="w-100" src="https://webtoon-phinf.pstatic.net/20220620_265/1655659219532VU0Uz_JPEG/16556592195232964338.jpg?type=q90" alt="" />
                            <img className="w-100" src="https://webtoon-phinf.pstatic.net/20220620_260/1655659218846e0Bxn_JPEG/16556592188312964335.jpg?type=q90" alt="" />
                            <img className="w-100" src="https://webtoon-phinf.pstatic.net/20220620_265/1655659222459k8x7o_JPEG/16556592224472964330.jpg?type=q90" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Reader;