import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

import logo from '~/assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faClockRotateLeft, faEarthAsia, faGear, faMagnifyingGlass, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar/index.js';
import SearchField from './SearchField/index.js';
import Account from '~/pages/Account/index.js'

import { Link, useNavigate } from 'react-router-dom'

import Switch from "react-switch";

import { useTranslation } from 'react-i18next';

import AuthService from '~/service/auth.service';

import { useState, useEffect, useRef } from 'react';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Header() {

    const [darkMode, setDarkMode] = useState(() => {
        const i = localStorage.getItem("themeMode");
        if (i && i === "dark") {
            return true;
        } else {
            return false;
        }
    });

    useEffect(() => {
        const theme = darkMode ? "dark" : "light";
        document.documentElement.className = theme;
        localStorage.setItem("themeMode", theme);
    }, [darkMode]);


    const circleClickHandler = () => {
        setDarkMode(!darkMode);
    };

    const { t, i18n } = useTranslation();

    const [showSearchField, setShowSearchField] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [languageBtn, setLanguageBtn] = useState('En');
    const [showSetting, setShowSetting] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(() => {
        const items = AuthService.getCurrentUser();
        if (items) {
            return true;
        } else {
            return false;
        }
    })

    const settingRef = useRef();
    const accountRef = useRef();

    const handleShowSearchField = () => {
        setShowSearchField(pre => {
            if (pre) {
                return false;
            } else {
                return true;
            }
        });
    }

    useEffect(() => {
        const items = AuthService.getCurrentUser();
        if (items) {
            setUser(items);
        }
    }, [isLogin]);

    const handleLoginStatus = (status) => {
        setIsLogin(status);
    }

    const handleChangeLanguage = () => {
        if (languageBtn === 'En') {
            setLanguageBtn('Vi');
            i18n.changeLanguage('vi')
        } else {
            setLanguageBtn('En');
            i18n.changeLanguage('en')

        }
    }

    const handleShowSetting = () => {
        setShowSetting(!showSetting);
    }

    const handleShowAccount = () => {
        setShowAccount(!showAccount);
    }


    useEffect(() => {
        if (showSetting) {
            const handler = (event) => {
                if (!settingRef.current.contains(event.target)) {
                    setShowSetting(false);
                }
            }
            document.addEventListener("mousedown", handler);
            return () => {
                document.removeEventListener("mousedown", handler);
            }
        }
    }, [showSetting]);


    useEffect(() => {
        if (showAccount) {
            const handler = (event) => {
                if (!accountRef.current.contains(event.target)) {
                    setShowAccount(false);
                }
            }
            document.addEventListener("mousedown", handler);
            return () => {
                document.removeEventListener("mousedown", handler);
            }
        }
    }, [showAccount]);

    const handleLogout = () => {
        AuthService.logout();
        setShowAccount(false);
        setIsLogin(false);
        navigate("/")
    }

    return (
        <div className="border-bottom border-color-white position-header-fixed p-0">
            <div className="background-header">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="d-flex align-items-center justify-content-between header-height ps-4 pe-4">
                            <div className="d-flex align-items-center justify-content-between w-80">
                                <div className="logo">
                                    <a href="/">
                                        <img src={logo} width="50" alt="logo" className="img-fluid" />
                                    </a>
                                </div>

                                <div className="navbar p-0 h-100 d-lg-block d-none">
                                    <Navbar />
                                </div>

                                <div className="search-bar w-53 d-lg-block d-none">
                                    <SearchField />
                                </div>
                            </div>

                            <div className="user-profile d-flex align-items-center">

                                <button
                                    className="short-search-btn border-0 bg-transparent text-white d-lg-none d-block"
                                    onClick={handleShowSearchField}
                                >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>

                                <div className="separate-vertical-line d-lg-none d-block">

                                </div>

                                <div className="position-relative">
                                    <button className="setting-btn me-3 text-white bg-transparent border-0" onClick={handleShowSetting}>
                                        <FontAwesomeIcon icon={faGear} />
                                    </button>

                                    <div ref={settingRef} className={`box-setting position-absolute ` + (showSetting ? `d-block` : `d-none`)}>

                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="text-white fw-500">Dark mode</span>
                                            <Switch onChange={circleClickHandler} checked={darkMode} />
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="text-white fw-500">{t('header.setting.languageLabel')}</span>
                                            <button className="change-language-btn bg-transparent"
                                                onClick={handleChangeLanguage}
                                            >
                                                <FontAwesomeIcon icon={faEarthAsia} /> {languageBtn}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {
                                    (isLogin) ?
                                        (<>
                                            <div className="position-relative ps-lg-2 pe-lg-4 pe-2">
                                                <button className="user-btn bg-transparent" onClick={handleShowAccount}>
                                                    <FontAwesomeIcon icon={faUser} />
                                                </button>

                                                <div ref={accountRef} className={`position-absolute box-user ` + (showAccount ? `d-block` : `d-none`)}>
                                                    <div className="user-info user__info-item">
                                                        <div className="user__info-item-icon">
                                                            <FontAwesomeIcon icon={faUser} />
                                                        </div>
                                                        {user.username}
                                                    </div>
                                                    <div className="user__info-item-line"></div>
                                                    <Link  to="/history" className="user__info-item user__info-item--hover">
                                                        <div className="user__info-item-icon">
                                                            <FontAwesomeIcon icon={faClockRotateLeft} />
                                                        </div>
                                                        {t('header.user.historyTitle')}
                                                    </Link>
                                                    <button
                                                        onClick={handleLogout}
                                                        className="border-0 bg-transparent user__info-item user__info-item--hover"
                                                    >
                                                        <div className="user__info-item-icon">
                                                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                                        </div>
                                                        {t('header.user.logoutBtn')}
                                                    </button>
                                                </div>

                                            </div>
                                        </>) : (
                                            <button
                                                onClick={() => setShowModal(true)}
                                                className="signin-btn rounded-3 bg-transparent text-yellow border border-color-yellow ps-2 pe-2">
                                                <FontAwesomeIcon icon={faUserPlus} className="d-lg-block d-none" />
                                                <i className="fa fa-user me-2 "></i>
                                                {t('header.login.loginBtn')}
                                            </button>
                                        )
                                }


                                <Account showModal={showModal} handleLoginStatus={handleLoginStatus} onClose={() => setShowModal(false)} />

                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="d-lg-none d-block">
                            {
                                showSearchField
                                &&
                                <div className="header-height">
                                    <div className="h-100 d-flex">
                                        <div className="w-100 d-flex align-items-center ps-3 pe-3">
                                            <SearchField />
                                        </div>
                                        <button
                                            className="cancel bg-transparent border-0 pe-4 ps-2 d-lg-none d-block"
                                            onClick={handleShowSearchField}
                                        >
                                            <span className="text-white ">
                                                Đóng
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            }

                            <div className="header-height">
                                <Navbar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;