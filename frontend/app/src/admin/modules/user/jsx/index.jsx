import { Fragment } from "react";
import { Link, useParams } from 'react-router-dom';
import SideBar from "../../../patials/sidebar";
import '../css/index.css'
const ManageIndex = () =>{
    return (
        <Fragment>
        <SideBar subpath = 'manage-user'/>
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center mb-4">Danh sách Phòng Chung Cư</h2>

            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Tìm kiếm phòng..."/>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Tìm kiếm</button>
              </div>
            </div>
            <ul className="list-group">
              <li className="list-group-item">
                <Link to='room/1'>Phòng 101</Link>
              </li>
              <li className="list-group-item">
                <Link to='room/2'>Phòng 102</Link>
              </li>
              <li className="list-group-item">
                <Link to='room/3'>Phòng 103</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </Fragment>
    )
}
export default ManageIndex;