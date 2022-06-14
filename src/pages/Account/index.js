
import { Component } from 'react';

import { Modal } from 'react-bootstrap';

import './Account.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            mode: "login"
        };
    }

    setMode = (mode) => {
        this.setState({ mode: mode });
    }

    handleCloseLogin = () => {
        this.props.onClose();
        this.setMode("login");
    }


    renderRegister = () => {
        return (
            <>
                <h5 className="text-white mb-3">Tạo tài khoản</h5>
                <div className="ps-3 pe-3 w-100">
                    <div className="form-control form-control-signup d-flex rounded-4">
                        <FontAwesomeIcon icon={faUser} className="text-gray me-2" />
                        <input type="text" className="signup-input-control border-0 bg-transparent text-white" placeholder="Tên đăng nhập" />
                    </div>

                    <div className="form-control form-control-signup d-flex rounded-4">
                        <FontAwesomeIcon icon={faEnvelope} className="text-gray me-2" />
                        <input type="email" value="dukhanh2k@gmail.com" className="signup-input-control border-0 bg-transparent text-white" readOnly />
                    </div>

                    <div className="form-control form-control-signup d-flex rounded-4">
                        <FontAwesomeIcon icon={faLock} className="text-gray me-2" />
                        <input type="password" className="signup-input-control border-0 bg-transparent text-white" placeholder="Mật khẩu" />
                    </div>

                    <div className="form-control form-control-signup d-flex rounded-4">
                        <FontAwesomeIcon icon={faLock} className="text-gray me-2" />
                        <input type="password" className="signup-input-control border-0 bg-transparent text-white" placeholder="Nhập lại mật khẩu" />
                    </div>

                    <button className="signup-btn rounded-4 border-0">
                        Đăng ký
                    </button>
                </div>
            </>
        )
    }


    renderLogin = () => {
        return (
            <>
                <img src="https://inkr.com/svg/account-prompt-info.svg" width="150" alt="" />
                <p className="mt-2 text-white">Đăng nhập hoặc tạo tài khoản</p>

                <div className="form-control form-control-login mt-3 p-0 rounded-4">
                    <input type="email" className="signin-input-control border-0 bg-transparent text-white" placeholder="Email" />
                    <button className="btn-continue bg-transparent">Continue</button>
                </div>

                <div className="separate-line mt-4 mb-4">
                </div>

                <button className="apple-btn border-0 rounded-4 d-flex align-items-center">
                    <FontAwesomeIcon icon={faApple} className="me-4 text-white" />
                    <p className="m-0 text-white">Đăng nhập bằng Apple  </p>
                </button>
                <button className="google-btn border-0 mt-2 rounded-4 d-flex align-items-center">
                    <img className="me-3" src="https://inkr.com/svg/google-icon.svg" alt="" />
                    <p className="m-0">Đăng nhập bằng Google</p>
                </button>
            </>

        )
    }

    renderEnterPassword = () => {
        return (
            <>
                <div className="w-100 ps-sm-4 pe-sm-4 d-flex flex-column align-items-center">
                    <p className="text-gray fw-bolder mt-4">Chào mừng trở lại</p>
                    <div className="user-icon border border-color-white rounded-circle">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="user-name text-white mt-3">
                        Khanh Du
                    </div>

                    <div className="form-control form-control-password mt-3 rounded-4">
                        <FontAwesomeIcon icon={faLock} className="mr-2" />
                        <input type="password" className="border-0 bg-transparent text-white" placeholder="Mật khẩu" />
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-3 w-100">
                        <div className="d-flex align-items-center">
                            <input type="checkbox" id="checkbox-control-remember" className="checkbox-control-remember me-2" />
                            <label className="text-white" htmlFor="checkbox-control-remember">Ghi nhớ</label>
                        </div>
                        <button className="bg-transparent btn-login rounded-4">
                            Đăng nhập
                        </button>
                    </div>
                </div>
            </>
        )
    }

    render() {
        return (
            <div>
                <Modal
                    show={this.props.showModal}
                    onHide={this.props.onClose}
                >
                    <Modal.Header className="border-0">
                        {
                            (this.state.mode === "forget-password" || this.state.mode === "register") ?
                                (<button
                                    onClick={() => this.setMode("login")}
                                    className="border-0 bg-transparent"
                                >
                                    <FontAwesomeIcon icon={faArrowLeft} className="me-4 text-gray" />
                                </button>) : null
                        }
                        <button onClick={this.handleCloseLogin} type="button" className="btn-close btn-close-white" aria-label="Close"></button>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex align-items-center flex-column">
                            {
                                this.state.mode === "login" ? this.renderLogin()
                                    : (this.state.mode === "register" ? this.renderRegister() : this.renderEnterPassword())
                            }
                        </div>
                    </Modal.Body>
                    {
                        this.state.mode === "forget-password" ?
                            (<Modal.Footer className="mb-0 border-0 p-0 modal-footer-custom">
                                <div className="border-bottom-line w-100 d-flex justify-content-center m-0">
                                    <button className="forget-password-btn">Quên mật khẩu?</button>
                                </div>
                            </Modal.Footer>) : null
                    }
                </Modal>
            </div>
        );
    }
}


export default LoginForm;
