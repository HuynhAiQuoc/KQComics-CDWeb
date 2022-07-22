
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

import { useState } from 'react';

import { useTranslation } from 'react-i18next';


function Register(props) {

    const { t } = useTranslation();

    const [username, setUsername] = useState({
        value: '',
        isValid: false,
        errorMessage: ''
    });
    const [password, setPassword] = useState({
        value: '',
        isValid: false,
        errorMessage: ''
    });
    const [confirmPassword, setConfirmPassword] = useState({
        value: '',
        isValid: false,
        errorMessage: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleOnchangeUsername = (username) => {
        setUsername({
            value: username,
            isValid: username.length > 0,
            errorMessage: username.length > 0 ? '' : t('register.message.username')
        });
    }

    const handleOnchangePassword = (password) => {
        setPassword({
            value: password,
            isValid: password.length >= 6,
            errorMessage: password.length < 6 ? t('register.message.password') : ''
        });
    }

    const handleOnchangeConfirmPassword = (confirmPassword) => {
        setConfirmPassword({
            value: confirmPassword,
            isValid: confirmPassword === password.value,
            errorMessage: confirmPassword !== password.value ? t('register.message.confirmPassword') : ''
        });
    }

    const handleOnClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleOnClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (username.isValid && password.isValid && confirmPassword.isValid) {
            // submit success
        } else {
            // submit fail

        }
    }
    return (
        <>
            <h5 className="text-white mb-3">{t('register.title')}</h5>
            <div className="ps-3 pe-3 w-100">
                <form onSubmit={(e) => handleOnSubmit(e)}>
                    <div className="form-control form-control-signup d-flex rounded-4">
                        <FontAwesomeIcon icon={faUser} className="text-gray me-2" />
                        <input
                            type="text"
                            className="signup-input-control border-0 bg-transparent text-white"
                            placeholder={t('register.placeholder.username')}
                            spellCheck="false"
                            required
                            value={username.value}
                            onChange={(e) => handleOnchangeUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <p className="message-error text-danger mb-0">
                            {username.errorMessage}
                        </p>
                    </div>
                    <div className="form-control form-control-signup d-flex rounded-4">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray me-2" />
                        <input
                            type="email"
                            value={props.email}
                            className="signup-input-control border-0 bg-transparent text-white"
                            readOnly
                            disabled
                        />
                    </div>
                    <div className="mb-3"></div>
                    <div className="form-control form-control-signup d-flex rounded-4">
                        <FontAwesomeIcon icon={faLock} className="text-gray me-2" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="signup-input-control border-0 bg-transparent text-white"
                            placeholder={t('register.placeholder.password')}
                            required
                            value={password.value}
                            onChange={(e) => handleOnchangePassword(e.target.value)}
                        />
                        <button
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
                    </div>

                    <div className="mb-3">
                        <p className="message-error text-danger mb-0">
                            {password.errorMessage}
                        </p>
                    </div>

                    <div className="form-control form-control-signup d-flex rounded-4">
                        <FontAwesomeIcon icon={faLock} className="text-gray me-2" />
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            className="signup-input-control border-0 bg-transparent text-white"
                            placeholder={t('register.placeholder.confirmPassword')}
                            required
                            value={confirmPassword.value}
                            onChange={(e) => handleOnchangeConfirmPassword(e.target.value)}
                        />
                        <button
                            onClick={handleOnClickShowConfirmPassword}
                            className="bg-transparent border-0"
                        >
                            {
                                showConfirmPassword ? (
                                    <FontAwesomeIcon icon={faEyeSlash} className="text-gray" />
                                ) : (
                                    <FontAwesomeIcon icon={faEye} className="text-gray" />
                                )
                            }
                        </button>
                    </div>
                    <div className="mb-3">
                        <p className="message-error text-danger mb-0">
                            {confirmPassword.errorMessage}
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="signup-btn rounded-4 border-0"
                    >
                        {t('register.registerBtn')}
                    </button>
                </form>
            </div>
        </>
    );
}

export default Register;