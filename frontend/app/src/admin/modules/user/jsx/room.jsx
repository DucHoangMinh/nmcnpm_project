import { Fragment } from "react";
import SideBar from "../../../patials/sidebar";
import '../css/room.css'
const Room = () => {
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
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>0122761231</td>
                        <td>Nguyễn Văn A</td>
                        <td>01/01/1990</td>
                        <td>Chủ hộ</td>
                    
                    </tr>
                    <tr>
                        <td><input type="checkbox"/></td>
                        <td>0362764134</td>
                        <td>Nguyễn Văn B</td>
                        <td>01/01/2015</td>
                        <td>Con trai</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}

export default Room