import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import './sidebar.css'
const SideBar = (props) => {
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
        <nav className={`navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 ${loading ? 'd-none' : ''}`}>
          <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary">Apartment Manager</h2>
          </Link>
  
          <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <Link to="/admin/home" className={`nav-item nav-link ${subpath === 'home' ? 'active' : ''}`}>Home</Link>
              <Link to="/admin/fee" className={`nav-item nav-link ${subpath === 'fee' ? 'active' : ''}`}>Tạo phí</Link>
              <Link to="/admin/manage-user" className={`nav-item nav-link ${subpath === 'manage-user' ? 'active' : ''}`}>Quản lý dân cư</Link>
              <Link to="/" className="nav-item nav-link">Quản lý tạm trú</Link>
            </div>
            <Link to="/" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block user-link">Tên người dùng</Link>
          </div>
        </nav>
      </Fragment>
    )
}
export default SideBar