import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots, faPaperPlane, faThumbsUp, faUser } from '@fortawesome/free-regular-svg-icons';


function Comment(props) {

    const handleCloseCommentDialog = () => {
        props.onClose();
    }
 

    return (
        <>
            <Modal
                show={props.showModal}
                onHide={props.onClose}
                className="comment-container"
            >
                <Modal.Header className="border-0 modal-comment-header">
                    <p className="m-0 modal-comment-title">3 Comments</p>
                    <button
                        className="btn-close-modal-comment"
                        onClick={handleCloseCommentDialog}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </Modal.Header>
                <Modal.Body className="modal-comment-body  pt-3">
                    <div className="comment-element d-flex mb-4">
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
                    <div className="comment-element d-flex mb-4">
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
                    <div className="comment-element d-flex mb-4">
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
                    <div className="comment-element d-flex mb-4">
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
                </Modal.Body>

                <Modal.Footer className="border-0 modal-comment-footer">
                    <div className="comment-field">
                        <input type="text" className="comment-field-input" placeholder="Add your comment" />
                        <button type="button" className="comment-field-btn">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default Comment;