
import { useState, useRef, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';


import { useTranslation } from 'react-i18next';

import AuthService from '~/service/auth.service';

function EnterEmail(props) {

    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);


    const emailInput = useRef();

    useEffect(() => {
        emailInput.current.focus();
    }, []);

    const handleChangeEmail = (e) => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const email = e.target.value;
        setEmail(email);
        setValidEmail(regex.test(email));
    }

    const handleSubmitEnterPassword = (event) => {
        event.preventDefault();
        AuthService.checkUser(email).then(res => {
            if (res.message === 'empty') {
                props.handleMode('register');
                props.handleChangeEmail(email);
            } else {
                if (res.message === 'exist') {
                    props.handleChangeUserName(res.username);
                    props.handleMode('login');
                    props.handleChangeEmail(email);
                }
            }
        })
    }


    return (
        <>
            <img src="https://inkr.com/svg/account-prompt-info.svg" width="150" alt="" />
            <p className="mt-2 text-white">{t('enterEmail.title')}</p>

            <form onSubmit={handleSubmitEnterPassword} className="w-100">
                <div className="form-control form-control-login mt-3 p-0 rounded-4 w-100">
                    <input
                        type="email"
                        className="signin-input-control border-0 bg-transparent text-white"
                        placeholder={t('enterEmail.placeholderEmail')}
                        spellCheck="false"
                        value={email}
                        onChange={(e) => handleChangeEmail(e)}
                        ref={emailInput}
                        required
                    />

                    <button
                        disabled={!validEmail}
                        type="submit"
                        className={`btn-continue` + (validEmail ? ` btn-continue--active` : ``)}
                    >
                        {t('enterEmail.continueBtn')}
                    </button>
                </div>
            </form>

            <div className="separate-line mt-4 mb-4">
            </div>

            <button className="apple-btn border-0 rounded-4 d-flex align-items-center">
                <FontAwesomeIcon icon={faApple} className="me-4 text-white" />
                <p className="m-0 text-white">{t('enterEmail.appleLogin')}  </p>
            </button>
            <button className="google-btn border-0 mt-2 rounded-4 d-flex align-items-center">
                <img className="me-3" src="https://inkr.com/svg/google-icon.svg" alt="" />
                <p className="m-0">{t('enterEmail.googleLogin')}</p>
            </button>
        </>
    );
}

export default EnterEmail;