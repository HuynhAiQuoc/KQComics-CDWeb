

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';

import { useTranslation } from 'react-i18next';

import AuthService from '~/service/auth.service';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

function Login(props) {

    useEffect(() => {
    }, [])

    const { t } = useTranslation();

    const [password, setPassword] = useState('');
    const [loginFail, setLoginFail] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const passwordInput = useRef();

    useEffect(() => {
        passwordInput.current.focus();
    }, []);

    const handleOnClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleClearPassword = () => {
        setPassword('');
        setLoginFail(false);
    }

    const handleSubmitEnterPassword = (event) => {
        event.preventDefault();
        AuthService.logIn(props.email, password).then(res => {
            if (res === "successfully") {
                props.handleLoginStatus(true);
                props.handleCloseLogin();
            } else {
                setLoginFail(true);
            }
        })
    }

    return (
        <>
            <div className="w-100 ps-sm-4 pe-sm-4 d-flex flex-column align-items-center">
                <p className="text-gray fw-bolder mt-4">{t('login.greeting')}</p>
                <div className="user-icon border border-color-white rounded-circle">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="user-name text-white mt-3">
                    {props.username}
                </div>

                <form
                    onSubmit={handleSubmitEnterPassword}
                    className="w-100">

                    <div className="w-100 form-control form-control-password mt-3 rounded-4">
                        <FontAwesomeIcon icon={faLock} className="mr-2" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="border-0 bg-transparent text-white"
                            placeholder={t('login.placeholderPassword')}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            ref={passwordInput}
                        />
                        <div>
                            {
                                loginFail ?
                                    (
                                        <button
                                            type="button"
                                            onClick={handleClearPassword}
                                            className="bg-transparent border-0"
                                        >
                                            <FontAwesomeIcon icon={faTimes} className="text-gray" />
                                        </button>
                                    ) :
                                    (
                                        <button
                                            type="button"
                                            onClick={handleOnClickShowPassword}
                                            className="bg-transparent border-0">
                                            {
                                                showPassword ? (
                                                    <FontAwesomeIcon icon={faEyeSlash} className="text-gray" />
                                                ) : (
                                                    <FontAwesomeIcon icon={faEye} className="text-gray" />
                                                )
                                            }
                                        </button>
                                    )
                            }
                        </div>

                    </div>

                    <div className={loginFail ? 'd-block' : 'd-none'}>
                        <p className="text-danger mb-3 mt-2 text-center">
                            {t('login.errorMessage')}
                        </p>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-3 w-100">
                        <div className="d-flex align-items-center">

                        </div>
                        <button
                            type="submit"
                            className="bg-transparent btn-login rounded-4"
                            disabled={password === ""}
                        >
                            {t('login.loginBtn')}
                        </button>
                    </div>
                </form>

            </div>
        </>
    );
}

export default Login;