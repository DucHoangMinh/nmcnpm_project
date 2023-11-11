import React, {useEffect, useState} from "react"
import Swal from 'sweetalert2'
import $ from 'jquery'
import './css/login.css'
import React, {useState} from "react";
import api from "../service/api";
export const Login = () => {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    let loading = false
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const handleLogin = async (e) => {
        e.preventDefault();
    }
    const login = async () => {
        const data = await api.post('login', {
            email,
            password
        })
        console.log(data)
    }

    return  (
    <div className="container-fluid">
        <div className="row">
            <div className="col bg-secondary-subtle vh-100 d-flex align-items-center justify-content-center p-md-5 p-sm-3">
                <form onSubmit={e => {e.preventDefault(); login()}}>
                    <div className="header">
                        <h2 className="fw-bold text-center">ĐĂNG NHẬP HỆ THỐNG QUẢN TRỊ</h2>
                    </div>
                    <div className="form-login">
                        <div className="mt-5">
                            <label className="form-label fs-3" for="email">Tài khoản</label>
                            <input className="form-control" value={email} onChange={(e) => setemail(e.target.value)} type="text" name="email" id="email"/>
                        </div>
                        <div className="mt-3">
                            <label className="form-label fs-3" for="email">Mật khẩu</label>
                            <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password"/>
                        </div>
                        <div className="mt-2 d-flex justify-content-between">
                            <div className="ml-2">
                                <input type="checkbox" name="remember" id="remember"/>
                                <span className="fs-6">Ghi nhớ đăng nhập</span>
                            </div>
                            <i className="fs-6"><a className="nav-link" href="#">Bạn quên mật khẩu ?</a></i>
                        </div>
                        <button type={"submit"} onClick={login} className="mt-3 btn btn-primary px-4 shadow" name="login">Đăng nhập</button>
                    </div>
                </form> 
            </div>
            <div className="col bg-primary admin-background"></div>
        </div>
    </div>
    );
}