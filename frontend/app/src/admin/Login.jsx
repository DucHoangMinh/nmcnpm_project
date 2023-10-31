import './css/login.css'
import React, {useState} from "react";
export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return  (
    <div className="container-fluid">
        <div className="row">
            <div className="col bg-secondary-subtle vh-100 d-flex align-items-center justify-content-center p-md-5 p-sm-3">
                <form>
                    <div className="header">
                        <h2 className="fw-bold text-center">ĐĂNG NHẬP HỆ THỐNG QUẢN TRỊ</h2>
                    </div>
                    <div className="form-login">
                        <div className="mt-5">
                            <label className="form-label fs-3" for="username">Tài khoản</label>
                            <input className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="username"/>
                        </div>
                        <div className="mt-3">
                            <label className="form-label fs-3" for="username">Mật khẩu</label>
                            <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password"/>
                        </div>
                        <div className="mt-2 d-flex justify-content-between">
                            <div className="ml-2">
                                <input type="checkbox" name="remember" id="remember"/>
                                <span className="fs-6">Ghi nhớ đăng nhập</span>
                            </div>
                            <i className="fs-6"><a className="nav-link" href="#">Bạn quên mật khẩu ?</a></i>
                        </div>
                        <button className="mt-3 btn btn-primary px-4 shadow" name="login">Đăng nhập</button>
                    </div>
                </form> 
            </div>
            <div className="col bg-primary admin-background"></div>
        </div>
    </div>
    );
}