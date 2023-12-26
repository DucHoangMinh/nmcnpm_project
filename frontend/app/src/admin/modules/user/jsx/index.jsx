import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import SideBar from "../../../patials/sidebar";
import '../css/index.css'
import api from "../../../../service/api"
const ManageIndex = () =>{
    const [roomList, setRoomList] = useState([])


    const getAllRoom = async () => {
      const { data }= await api.get('v1/room')
      setRoomList(data.data)
    }
    const init = async () => {
      await getAllRoom()
    }
    useEffect(() => {
      init()
    }, [])
    return (
        <Fragment>
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
              {roomList.map((room, index) => (
                <li key={index}>
                  <Link to={`room/${room.id}`}>{room.address}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </Fragment>
    )
}
export default ManageIndex;