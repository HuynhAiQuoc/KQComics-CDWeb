

import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import './Navbar.css';


function Navbar() {

    const { t } = useTranslation();

    return (
        <>
            <ul className="navbar-nav-custom m-0 d-flex ps-lg-2 pe-lg-2">
                <li className="nav-item">
                    <NavLink
                        to="/"
                        className="nav-link"
                    >
                        {t('header.navbar.home')}
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/browse"
                        className="nav-link"
                    >
                        {t('header.navbar.browse')}
                    </NavLink>
                    {/* <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Browse
                    </a>
                    <ul className="dropdown-menu dropdown-menu-custom"
                        aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/">Manga</a></li>
                        <li><a className="dropdown-item" href="/">Manhua</a></li>
                        <li><a className="dropdown-item" href="/">Webtoon</a></li>
                        <li><a className="dropdown-item" href="/">Comics</a></li>
                    </ul> */}
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/history"
                        className="nav-link"
                    >
                        {t('header.navbar.history')}
                    </NavLink>
                </li>
            </ul>
        </>
    );
}

export default Navbar;