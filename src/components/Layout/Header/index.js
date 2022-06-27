import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

import logo from '~/assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar/index.js';
import SearchField from './SearchField/index.js';
import Account from '~/pages/Account/index.js'


import { useState } from 'react';

function Header() {

    const [showSearchField, setShowSearchField] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleShowSearchField = () => {
        setShowSearchField(pre => {
            if (pre) {
                return false;
            } else {
                return true;
            }
        });
    }

    return (
        <div className="border-bottom border-color-white fixed-top p-0">
            <div className="background-header">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="d-flex align-items-center justify-content-between header-height ps-3 pe-4">
                            <div className="d-flex align-items-center justify-content-between w-85">
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

                                <button
                                    onClick={() => setShowModal(true)}
                                    className="signin-btn rounded-3 bg-transparent text-yellow border border-color-yellow ps-3 pe-3">
                                    <FontAwesomeIcon icon={faUserPlus} className="d-lg-block d-none" />
                                    <i className="fa fa-user me-2 "></i>
                                    Sign in
                                </button>

                                <Account showModal={showModal} onClose={()=>setShowModal(false)} />

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
                                                Cancel
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