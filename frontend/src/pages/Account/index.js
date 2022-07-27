

import './Account.css';

import { Modal } from 'react-bootstrap';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

import Login from './Login/index.js';
import Register from './Register/index.js';
import EnterEmail from './EnterEmail/index.js';

import { useTranslation } from 'react-i18next';

function Account(props) {

    const { t } = useTranslation();

    const [mode, setMode] = useState('enter-email');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const handleCloseLogin = () => {
        setMode('enter-email');
        props.onClose();
    }

    const handleCloseRegister = () => {
        setMode('enter-email');
        props.onClose();
    }

    const handleLoginStatus = (status) =>{
        props.handleLoginStatus(status);
    }

    const handleMode = (mode) => {
        setMode(mode);
    }

    const handleChangeEmail = (email) => {
        setEmail(email);
    }

    const handleChangeUserName = (username) => {
        setUsername(username);
    }


    return (
        <div >
            <Modal
                show={props.showModal}
                onHide={props.onClose}
                className="account-container"
            >
                <Modal.Header className="border-0">
                    {
                        ((mode === "login") || (mode === "register")) ?
                            (<button
                                onClick={() => setMode("enter-email")}
                                className="border-0 bg-transparent"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} className="me-4 text-gray" />
                            </button>) : null
                    }
                    <button onClick={handleCloseLogin} type="button" className="btn-close btn-close-white text-white" aria-label="Close">
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex align-items-center flex-column">
                        {(mode === "enter-email") && <EnterEmail handleMode={handleMode} handleChangeEmail={handleChangeEmail} handleChangeUserName={handleChangeUserName}/>}
                        {(mode === "login") && <Login handleCloseLogin={handleCloseLogin} handleLoginStatus={handleLoginStatus} username={username} email={email} />}
                        {(mode === "register") && <Register handleCloseRegister={handleCloseRegister} handleLoginStatus={handleLoginStatus} email={email} />}
                    </div>
                </Modal.Body>
                {
                    mode === "login" ?
                        (<Modal.Footer className="mb-0 border-0 p-0 modal-footer-custom">
                            <div className="border-bottom-line w-100 d-flex justify-content-center m-0">
                                <button className="forget-password-btn">{t('login.forgotPassword')}</button>
                            </div>
                        </Modal.Footer>) : null
                }
            </Modal>
        </div>
    );

}


export default Account;
