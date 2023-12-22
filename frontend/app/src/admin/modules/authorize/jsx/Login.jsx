import React, {useState} from "react"
import '../css/login.css';
import { useNavigate } from "react-router-dom";
import api from "../../../../service/api";
import { showNotice } from "../../../../common/showNotice";
export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await api.post('login', {
              email: email.trim(),
              password: password.trim()
            });
            if (response.status === 200) {
              let data = response.data.data;
              const tokenData = {
                token: data.accessToken,
                tokenType: data.tokenType
              };
              const userData = data.userDTO;
              localStorage.setItem('tokenData', JSON.stringify(tokenData));
              localStorage.setItem('userData', JSON.stringify(userData))
              showNotice(1, 'Login success');
              navigate('../home');
            }
          } catch (error) {
            showNotice(0, error.response.data.message)
          }
    }

    return  (
    <div className="container-fluid">
        <div className="row">
            <div className="col bg-secondary-subtle vh-100 d-flex align-items-center justify-content-center p-md-5 p-sm-3">
                <form onSubmit={e => {e.preventDefault(); handleLogin()}}>
                    <div className="header">
                        <h2 className="fw-bold text-center">ĐĂNG NHẬP HỆ THỐNG QUẢN TRỊ</h2>
                    </div>
                    <div className="form-login">
                        <div className="mt-5">
                            <label className="form-label fs-3" htmlFor="email">Tài khoản</label>
                            <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" id="email"/>
                        </div>
                        <div className="mt-3">
                            <label className="form-label fs-3" htmlFor="password">Mật khẩu</label>
                            <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password"/>
                        </div>
                        <div className="mt-2 d-flex justify-content-between">
                            <div className="ml-2">
                                <input type="checkbox" name="remember" id="remember"/>
                                <span className="fs-6">Ghi nhớ đăng nhập</span>
                            </div>
                            <i className="fs-6"><a className="nav-link" href="#">Bạn quên mật khẩu ?</a></i>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <button type="submit" className="mt-3 btn btn-primary px-4 shadow" name="login">Đăng nhập</button>
                            <a href="register" type="submit" className="mt-3 px-4" name="login">Đăng ký tài khoản</a>
                        </div>
                    </div>
                </form> 
            </div>
            <div className="col bg-primary admin-background"></div>
        </div>
    </div>
    );
}


export default Login