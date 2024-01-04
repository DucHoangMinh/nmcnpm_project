import React, {useState} from "react"
import '../css/login.css';
import { useNavigate } from "react-router-dom";
import { showNotice } from "../../../../common/showNotice";
export const Logout = () => {
    localStorage.clear();
    let navigate = useNavigate();

    showNotice(1, "Đăng xuất thành công")
    navigate('/admin/home')
}

export default Logout;