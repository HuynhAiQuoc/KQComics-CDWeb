import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

import logo from '~/assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faGear, faMagnifyingGlass, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar/index.js';
import SearchField from './SearchField/index.js';
import Account from '~/pages/Account/index.js'

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import Switch from "react-switch";

import { ThemeContext } from '~/App';

import { useTranslation } from 'react-i18next';


import { useState, useContext, useEffect, useRef } from 'react';

function Header() {

    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const theme = darkMode ? "light" : "dark";
        document.documentElement.className = theme;
    }, [darkMode]);

    useEffect(() => {
        if (darkMode) {
            setIsDarkMode(false);
        } else {
            setIsDarkMode(true);
        }
    }, [darkMode])

    const circleClickHandler = () => {
        setDarkMode(!darkMode);
    };

    const { t, i18n } = useTranslation();

    const [showSearchField, setShowSearchField] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [languageBtn, setLanguageBtn] = useState('En');
    const [showSetting, setShowSetting] = useState(false);

    const settingRef = useRef();

    const handleShowSearchField = () => {
        setShowSearchField(pre => {
            if (pre) {
                return false;
            } else {
                return true;
            }
        });
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


    useEffect(() => {
        const handler = (event) => {
            if (!settingRef.current.contains(event.target)) {
                setShowSetting(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, []);

    return (
        <div className="border-bottom border-color-white position-header-fixed p-0">
            <div className="background-header">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="d-flex align-items-center justify-content-between header-height ps-3 pe-4">
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
                                            <Switch onChange={circleClickHandler} checked={isDarkMode} />
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






                                <button
                                    onClick={() => setShowModal(true)}
                                    className="signin-btn rounded-3 bg-transparent text-yellow border border-color-yellow ps-2 pe-2">
                                    <FontAwesomeIcon icon={faUserPlus} className="d-lg-block d-none" />
                                    <i className="fa fa-user me-2 "></i>
                                    {t('header.login.loginBtn')}
                                </button>

                                <Account showModal={showModal} onClose={() => setShowModal(false)} />

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