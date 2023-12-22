import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import './sidebar.css'
const SideBar = (props) => {
    const user = JSON.parse(localStorage.getItem('userData'))||{}

    const [loading, setLoading] = useState(true);
    let { '*':subpath } = useParams();
    if(props.subpath!==undefined) {
      subpath = props.subpath
    }
    useState(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1000);
  
      return () => clearTimeout(timeout);
    }, []);
    return (
        <Fragment>
        {loading && (
          <div id="spinner">
            <div className="spinner-grow text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
  
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <a href="home" className="navbar-brand d-flex align-items-center">
      <h2 className="m-0 text-primary"><i className="bi bi-buildings-fill"></i> BLUEMOON <i className="bi bi-moon-stars-fill"></i>
      </h2>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="active nav-link" href="home"><i className="bi bi-house-fill"></i> Trang chủ <span
              className="sr-only">(current)</span></a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="bi bi-clipboard2-fill"></i> Quản lý khoản thu
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/admin/fee/list"><i className="bi bi-caret-right-fill"></i> Danh sách khoản thu</a>
              <a className="dropdown-item" href="/admin/fee/calculate"><i className="bi bi-caret-right-fill"></i> Tính toán phí</a>
              <a className="dropdown-item" href="/admin/fee/paid"><i className="bi bi-caret-right-fill"></i> Tình trạng đóng phí</a>
              <a className="dropdown-item" href="/admin/fee/fund"><i class="bi bi-caret-right-fill"></i> Thống kê quỹ</a>
          </div>
      </li>
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="bi bi-people-fill"></i> Quản lý hộ khẩu
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/admin/family/list"><i className="bi bi-caret-right-fill"></i> Danh sách các hộ gia đình</a>
              <a className="dropdown-item" href="/admin/family/room-request"><i className="bi bi-caret-right-fill"></i> Xử lý yêu cầu thuê phòng</a>
              <a className="dropdown-item" href="/admin/family/room-list" ><i className="bi bi-caret-right-fill"></i> Danh sách căn hộ</a>
          </div>
      </li>

      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="bi bi-person-fill-exclamation"></i> Quản lý nhân khẩu
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="population/list"><i className="bi bi-caret-right-fill"></i> Danh sách cư dân</a>
              <a className="dropdown-item" href="population/request"><i className="bi bi-caret-right-fill"></i> Xử lý yêu cầu thay đổi cư trú</a>
          </div>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="bi bi-gear"></i> <span>Cài đặt</span>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="setting/manager-infor"><i className="bi bi-caret-right-fill"></i> Thông tin ban quản lý</a>
          <a className="dropdown-item" href="setting/change-password"><i className="bi bi-caret-right-fill"></i> Thay đổi mật khẩu</a>
          <a className="dropdown-item" href="logout"><i className="bi bi-box-arrow-right"></i> Đăng xuất</a>
        </div>
      </li>

      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Tìm kiếm" aria-label="Search"/>
        <button className="btn btn-primary my-2 my-sm-0" type="submit"><i className="bi bi-search"></i></button>
      </form>
    </div>
  </nav>
      </Fragment>
    )
}
export default SideBar