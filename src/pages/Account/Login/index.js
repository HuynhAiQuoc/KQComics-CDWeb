

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';

const users = [
    {
        id: 1,
        username: 'Khanh Du',
        email: 'dukhanh2k@gmail.com',
        password: '123456'
    }, {
        id: 2,
        username: 'Du Du',
        email: '18130108@st.hcmuaf.edu.vn',
        password: '123456'
    }
]

function Login(props) {

    const [user, setUser] = useState({});
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [messageErrorLogin, setMessageErrorLogin] = useState('');

    const passwordInput = useRef();

    console.log(remember);

    useEffect(() => {
        const user = users.find(user => user.email === props.email);
        setUser(user);
    }, [props.email]);


    useEffect(() => {
        passwordInput.current.focus();
    }, []);

    const handleSubmitEnterPassword = (event) => {
        event.preventDefault();
        if (user.password === password) {
            // login success
            props.handleCloseLogin();
        }else{
            setMessageErrorLogin('Mật khẩu không đúng');
        }
    }

    return (
        <>
            <div className="w-100 ps-sm-4 pe-sm-4 d-flex flex-column align-items-center">
                <p className="text-gray fw-bolder mt-4">Chào mừng trở lại</p>
                <div className="user-icon border border-color-white rounded-circle">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="user-name text-white mt-3">
                    {user.username}
                </div>

                <form
                    onSubmit={handleSubmitEnterPassword}
                    className="w-100">

                    <div className="w-100 form-control form-control-password mt-3 rounded-4">
                        <FontAwesomeIcon icon={faLock} className="mr-2" />
                        <input
                            type="password"
                            className="border-0 bg-transparent text-white"
                            placeholder="Mật khẩu"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            ref={passwordInput}
                        />
                    </div>

                    <div>
                        <p className="text-danger mb-3 mt-2 text-center">
                            {messageErrorLogin}
                        </p>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-3 w-100">
                        <div className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                id="checkbox-control-remember"
                                checked={remember}
                                className="checkbox-control-remember me-2"
                                onChange={() => setRemember(!remember)}
                            />
                            <label className="text-white" htmlFor="checkbox-control-remember">Ghi nhớ</label>
                        </div>
                        <button
                            type="submit"
                            className="bg-transparent btn-login rounded-4"
                            disabled={password === ""}
                        >
                            Đăng nhập
                        </button>
                    </div>
                </form>

            </div>
        </>
    );
}

export default Login;