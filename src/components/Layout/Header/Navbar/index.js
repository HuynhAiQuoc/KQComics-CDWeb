

function Navbar() {
    return (
        <>
            <ul className="navbar-nav-custom m-0 d-flex ps-lg-5 pe-lg-5">
                <li className="nav-item">
                    <a className="nav-link nav-link--active" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Browse
                    </a>
                    <ul className="dropdown-menu dropdown-menu-custom"
                        aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="/">Manga</a></li>
                        <li><a className="dropdown-item" href="/">Manhua</a></li>
                        <li><a className="dropdown-item" href="/">Webtoon</a></li>
                        <li><a className="dropdown-item" href="/">Comics</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                </li>
            </ul>
        </>
    );
}

export default Navbar;