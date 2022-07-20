
import './Footer.css'
import logo from '~/assets/img/logo.png';
import appleStore from '~/assets/img/apple-store.png';
import googlePlay from '~/assets/img/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <>
            <div id="footer" className="footer">
                <div className="footer-panel">
                    <div className="footer-panel-sub">
                        <div className="footer-panel-sub-division">
                            <div className="ant-footer-anticon">
                                <div className="ant-footer-anticon-img">
                                    <img src={logo} alt="" width="130px" height="130px" />
                                </div>
                                <div className="ant-footer-anticon-social-media">
                                    <FontAwesomeIcon className="footer-social-icon" icon={faFacebookSquare} />
                                    <FontAwesomeIcon className="footer-social-icon" icon={faTwitterSquare} />
                                    <FontAwesomeIcon className="footer-social-icon" icon={faInstagramSquare} />
                                    <FontAwesomeIcon className="footer-social-icon" icon={faLinkedin} />
                                </div>
                                {/* <span className="ant-typography ant-typography-secondary">KQ © 2022</span> */}
                            </div>
                            <ul className="ant-footer-anticon-more-information">
                                <li className="ant-footer-label sp-label">
                                    <span className="label-component">Work with us</span>
                                </li>
                                <li className="ant-footer-label">
                                    <a href="" className="label-component">Publishers</a>
                                </li>
                                <li className="ant-footer-label">
                                    <a href="" className="label-component">Translators</a>
                                </li>
                            </ul>
                            <ul className="ant-footer-anticon-more-information">
                                <li className="ant-footer-label sp-label">
                                    <span className="label-component">Company</span>
                                </li>
                                <li className="ant-footer-label">
                                    <a className="label-component">About us</a>
                                </li>
                                <li className="ant-footer-label">
                                    <a className="label-component">Inquiries</a>
                                </li>
                                <li className="ant-footer-label">
                                    <a className="label-component">Careers</a>
                                </li>
                                <li className="ant-footer-label">
                                    <a className="label-component">Blog</a>
                                </li>
                            </ul>
                            <ul className="ant-footer-anticon-more-information">
                                <li className="ant-footer-label sp-label">
                                    <span className="label-component">Resources</span>
                                </li>
                                <li className="ant-footer-label">
                                    <a className="label-component">Support</a>
                                </li>
                                <li className="ant-footer-label">
                                    <a className="label-component">Privacy</a>
                                </li>
                                <li className="ant-footer-label">
                                    <a className="label-component">Terms</a>
                                </li>
                            </ul>
                            <ul className="ant-footer-anticon-more-information">
                                <li className="ant-footer-label sp-label">
                                    <span className="label-component text-yellow">KQ Comics App</span>
                                </li>
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