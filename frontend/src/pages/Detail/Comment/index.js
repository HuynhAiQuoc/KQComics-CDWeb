import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots, faPaperPlane, faThumbsUp, faUser } from '@fortawesome/free-regular-svg-icons';

import { useTranslation } from 'react-i18next';

import { useState, useEffect, useRef } from 'react';

import CommentService from '~/service/comment.service';
import AuthService from '~/service/auth.service';


function Comment(props) {

    const { t } = useTranslation();

    const handleCloseCommentDialog = () => {
        props.onClose();
    }

    const commentRef = useRef();
    const [listComments, setListComments] = useState([]);
    const [newComment, setNewComment] = useState([])

    useEffect(() => {
        CommentService.getComments(Number(props.titleNo)).then(res => {
            setListComments(res.data)
        })
    }, [props.titleNo]);


    const handleSubmitAddComment = (event) => {
        event.preventDefault();
        const user = AuthService.getCurrentUser();
        if (user) {
            CommentService.add(newComment, Number(user.id), Number(props.titleNo)).then(res => {
                setListComments(pre => {
                    return [...pre, res.data]
                })
                setNewComment('');
            })
        } else {
            alert(t('detail.comment.loginRequired'));
        }
    }

    return (
        <>
            <Modal
                show={props.showModal}
                onHide={props.onClose}
                className="comment-container"
            >
                <Modal.Header className="border-0 modal-comment-header">
                    <p className="m-0 modal-comment-title">{t('detail.commentTitle')}</p>
                    <button
                        className="btn-close-modal-comment"
                        onClick={handleCloseCommentDialog}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </Modal.Header>
                <Modal.Body className="modal-comment-body  pt-3">

                    {
                        (listComments.length > 0) ?
                            (
                                listComments.map(comment => (
                                    <div className="comment-element d-flex mb-4" key={comment.id}>
                                        <div className="me-2 pt-2">
                                            <div className="comment-user-icon">
                                                <FontAwesomeIcon icon={faUser} />
                                            </div>
                                        </div>
                                        <div className="comment-block">
                                            <div className="comment-header">
                                                <span className="comment-author">{comment.username}</span>
                                                <span className="comment-time">{comment.createAt}</span>
                                            </div>
                                            <p className="comment-content">{comment.content}</p>
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
                                                <button type="button" className="border-0 bg-transparent btn-reply">{t('detail.replyBtn')}</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                            : (
                                <>
                                </>
                            )
                    }

                </Modal.Body>

                <Modal.Footer className="border-0 modal-comment-footer">
                    <form
                        onSubmit={handleSubmitAddComment}
                        className="w-100"
                    >
                        <div className="comment-field">
                            <input
                                type="text"
                                required
                                className="comment-field-input"
                                placeholder={t('detail.placeholderComment')}
                                value={newComment}
                                ref={commentRef}
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="comment-field-btn"
                            >
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                    </form>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default Comment;