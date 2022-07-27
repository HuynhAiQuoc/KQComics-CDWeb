
import './Footer.css'
import logo from '~/assets/img/logo.png';
import appleStore from '~/assets/img/apple-store.png';
import googlePlay from '~/assets/img/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import { useTranslation } from 'react-i18next';

function Footer() {

    const { t } = useTranslation();

    return (
        <>
            <div id="footer" className="footer border-color-white border-top">
                <div className="footer-panel">
                    <div className="footer-panel-sub">
                        <div className="footer-panel-sub-division">
                            <div className="ant-footer-anticon">
                                <div className="ant-footer-anticon-img">
                                    <img src={logo} className="footer-logo" alt="" />
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-between pb-2">
                                <div className="ant-footer-anticon-social-media">
                                    <FontAwesomeIcon className="footer-social-icon" icon={faFacebookSquare} />
                                    <FontAwesomeIcon className="footer-social-icon" icon={faTwitterSquare} />
                                    <FontAwesomeIcon className="footer-social-icon" icon={faInstagramSquare} />
                                    <FontAwesomeIcon className="footer-social-icon" icon={faLinkedin} />
                                </div>
                                <span className="ant-typography ant-typography-secondary text-white">KQ © 2022</span>
                            </div>
                    
                            <ul className="ant-footer-anticon-more-information">
                                <li className="ant-footer-label app-store">
                                    <a href="https://www.apple.com" className="label-component">
                                        <img src={appleStore} alt="KQ Get IOS app" width="125" height="42" />
                                    </a>
                                </li>
                                <li className="ant-footer-label app-store">
                                    <a href="https://play.google.com/store/apps" className="label-component">
                                        <img src={googlePlay} alt="KQ Get Android app" width="125" height="42" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;