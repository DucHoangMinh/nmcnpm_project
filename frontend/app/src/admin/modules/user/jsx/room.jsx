import { Fragment, useEffect, useState } from "react";
import SideBar from "../../../patials/sidebar";
import '../css/room.css'
import api from "../../../../service/api";
import { useParams } from 'react-router-dom';
const Room = () => {
    const { id } = useParams()
    const [peopleList, setPeopleList] = useState([])

    const getPeople = async () => {
        const { data } = await api.get(`v1/room/${id}/users`)
        setPeopleList(data.data)
    }
    const init = async () => {
        await getPeople()
    }
    
    useEffect(() => {
        init()
    },[])

    return (
        <Fragment>
            <SideBar subpath = 'manage-user'/>
            <div className="container mt-5">
                <h2 className="text-primary">Phòng 101</h2>
                <div className="row">
                    <div className="col-md-6">
                    <h4>Thông tin chi tiết</h4>
                    <ul>
                        <li><strong>Số căn cước:</strong> 0122761231</li>
                        <li><strong>Chủ hộ:</strong> Nguyễn Văn A</li>
                        <li><strong>Ngày sinh chủ hộ:</strong> 01/01/1990</li>
                    </ul>
                    </div>
                </div>

                <h4>Danh sách người trong nhà</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Số Căn Cước</th>
                        <th>Họ và Tên</th>
                        <th>Ngày Sinh</th>
                        <th>Quan hệ với chủ hộ</th>

                    </tr>
                    </thead>
                    <tbody>
                    {peopleList.map(item => (
                        <tr key={item.id}>
                            <td><input type="checkbox" /></td>
                            <td>{item.identity}</td>
                            <td>{item.fullname}</td>
                            <td>{item.dob}</td>
                            <td>{item.relationship}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}

export default Room