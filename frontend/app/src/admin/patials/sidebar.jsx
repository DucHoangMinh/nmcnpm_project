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
        <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{marginTop: "100px"}}>
          <a href="home" className="navbar-brand d-flex align-items-center">
            <h2 className="m-0 text-primary">
              <i className="bi bi-buildings-fill"></i> BLUEMOON <i className="bi bi-moon-stars-fill"></i>
            </h2>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
            aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item active mt-3">
                <a className="nav-link" href="/admin/home">
                  <i className="bi bi-house-fill"></i> Trang chủ <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item dropdown mt-3">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bi bi-clipboard2-fill"></i> Quản lý khoản thu
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <a className="dropdown-item" href="/admin/fee/list"><i className="bi bi-caret-right-fill"></i> Danh sách khoản thu</a>
                  <a className="dropdown-item" href="/admin/fee/paid"><i className="bi bi-caret-right-fill"></i> Tình trạng đóng phí</a>
                  <a className="dropdown-item" href="/admin/fee/fund"><i className="bi bi-caret-right-fill"></i> Thống kê quỹ</a>
                </div>
              </li>

              <li className="nav-item dropdown mt-3">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bi bi-people-fill"></i> Quản lý hộ khẩu
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                  <a className="dropdown-item" href="/admin/family/list"><i className="bi bi-caret-right-fill"></i> Danh sách các hộ gia đình</a>
                  <a className="dropdown-item" href="/admin/family/room-request"><i className="bi bi-caret-right-fill"></i> Xử lý yêu cầu thuê phòng</a>
                  <a className="dropdown-item" href="/admin/family/room-list"><i className="bi bi-caret-right-fill"></i> Danh sách căn hộ</a>
                </div>
              </li>

              <li className="nav-item dropdown mt-3">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bi bi-person-fill-exclamation"></i> Quản lý nhân khẩu
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                  <a className="dropdown-item" href="/admin/family/population/list"><i className="bi bi-caret-right-fill"></i> Danh sách cư dân</a>
                  <a className="dropdown-item" href="/admin/population/request"><i className="bi bi-caret-right-fill"></i> Xử lý yêu cầu thay đổi cư trú</a>
                </div>
              </li>

              <li className="nav-item dropdown mt-3">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bi bi-gear"></i> <span>Cài đặt</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown4">
                  <a className="dropdown-item" href="/admin/setting/manager-infor"><i className="bi bi-caret-right-fill"></i> Thông tin ban quản lý</a>
                  <a className="dropdown-item" href="/admin/setting/change-password"><i className="bi bi-caret-right-fill"></i> Thay đổi mật khẩu</a>
                  <a className="dropdown-item" href="/admin/logout"><i className="bi bi-box-arrow-right"></i> Đăng xuất</a>
                </div>
              </li>
            </ul>

            <form className="d-flex my-2 my-lg-0">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <input className="form-control me-2" type="search" placeholder="Tìm kiếm" aria-label="Search" />
            </li>
            <li className="nav-item">
              <button className="btn btn-primary" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </li>
          </ul>
        </form>
          </div>
        </nav>
      </Fragment>
    )
}
export default SideBar