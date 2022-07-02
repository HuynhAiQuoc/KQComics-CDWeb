
import 'bootstrap/dist/css/bootstrap.min.css';
import './Detail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSortAlphaUp } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots, faEye, faThumbsUp, faUser } from '@fortawesome/free-regular-svg-icons';

import Comment from './Comment/index.js';
import Description from './Description/index.js'

import { useState } from 'react'

function Detail() {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="spacing-header padding-around">
                <div className="pt-lg-4">
                    <div className="row">
                        <div className="col-md-12 col-lg-8 p-0">
                            <div className="ps-lg-2 pe-lg-2">
                                <div className="background-header p-3 p-lg-4 rounded-custom ">
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
                                            <img className="story-image" src="http://st.nettruyenco.com/data/comics/98/initial-d.jpg" alt="" />
                                            <div className="story-information ms-4 d-flex flex-column justify-content-between">
                                                <div>
                                                    <h3 className="story-title">
                                                        Devouring Realm
                                                    </h3>
                                                    <p className="story-author mt-2 mb-2">Tác giả:  John</p>
                                                    <p className="story-genres mt-2 mb-2">Thể loại:  Manhua</p>
                                                    <div className="d-flex mt-2">
                                                        <div className="me-4">
                                                            <FontAwesomeIcon className="me-1" icon={faEye} />
                                                            <span className="">400.032</span>
                                                        </div>
                                                        <div className="">
                                                            <FontAwesomeIcon className="me-1" icon={faThumbsUp} />
                                                            <span className="">40</span>
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
                                            <Description />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-lg-2 pe-lg-2 mt-4 mb-4">
                                <div className="background-header rounded-custom text-white">
                                    <div className="d-flex justify-content-between  p-3 p-lg-4">
                                        <h5 className="list-chapter-title">Danh sách chương</h5>
                                        <button className="btn-sort-chapter">
                                            <FontAwesomeIcon icon={faSortAlphaUp} />
                                        </button>
                                    </div>
                                    <div className="">
                                        <div className="chapter-item">
                                            <img className="rounded-3 me-3" src="https://i1.inkr.com/p/2021/7/26/8/1690896-493.jpeg/76.webp" alt="" />
                                            <p className="chapter-item-title">Chapter 1</p>
                                        </div>
                                        <div className="chapter-item">
                                            <img className="rounded-3 me-3" src="https://i1.inkr.com/p/2021/7/27/6/1943248-117.png/76.webp" alt="" />
                                            <p className="chapter-item-title">Chapter 2</p>
                                        </div>
                                        <div className="chapter-item">
                                            <img className="rounded-3 me-3" src="https://i1.inkr.com/p/2021/7/26/8/1693360-986.jpeg/76.webp" alt="" />
                                            <p className="chapter-item-title">Chapter 3</p>
                                        </div>
                                        <div className="chapter-item">
                                            <img className="rounded-3 me-3" src="https://i1.inkr.com/p/2021/7/26/8/1671600-754.jpeg/76.webp" alt="" />
                                            <p className="chapter-item-title">Chapter 4</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-lg-block d-none p-0">
                            <div>
                                <div className="ps-lg-3 pe-lg-3">
                                    <div className="background-header p-4 rounded-custom">
                                        <Description />
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
}

export default Detail;