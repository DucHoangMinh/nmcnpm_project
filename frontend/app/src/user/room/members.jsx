import UserSideBar from "../userSideBar"
import storage from "../../service/storage";
import api from "../../service/api";
import { showNotice } from "../../common/showNotice";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const UserMember = () => {
    const roomId = JSON.parse(storage.getValue('user'))?.room
    const [memberList, setMemberList] = useState([])
    const [memberInfor, setMemberInfor] = useState({
        fullname: '',
        dob: '',
        identity: '',
        sex: '',
        email: '',
        phone: ''
    })
    const getAllPeopleInRoom = async () => {
        try {
            const { data } = await api.get(`v1/room/${roomId}/users`)
            setMemberList(data.data[0])
        } catch (error) {
            showNotice(0, error.toString())
        }
    }

    const initData = async () => {
        await getAllPeopleInRoom()
    }
    useEffect(() => {
        initData()
    }, []);

    return (
        <>
            <UserSideBar />
            <div class="container" style={{ marginTop: "-50px" }}>
                <h2>Quản lý thông tin nhân khẩu</h2>
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Họ và tên</th>
                            <th>Giới tính</th>
                            <th>Số căn cước</th>
                            <th>Quan hệ với chủ hộ</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody id="memberTable">
                        {memberList.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.fullname}</td>
                                <td>{item.sex ? 'Nam' : 'Nữ'}</td>
                                <td>{item.identity}</td>
                                <td>{item.relationship}</td>
                                <td>
                                    <Button data-toggle="modal"
                                        data-target="#EditPersonalModal">Chỉnh sửa thông tin cá nhân</Button>
                                    <div class="modal fade" id="EditPersonalModal" tabindex="-1" role="dialog"
                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-scrollable" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title text-primary" id="exampleModalLabel">Chỉnh sửa thông tin cá nhân</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <form class="form-horizontal">
                                                        <div class="form-group">
                                                            <label class="control-label col-sm-10" for="pwd">Họ và tên cư dân</label>
                                                            <div class="col-sm-12">
                                                                <input class="form-control" placeholder="" onChange={e => setMemberInfor(prevState => {return {...prevState, fullname: e.target.value}})}/>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-sm-10" for="pwd">Số căn cước</label>
                                                            <div class="col-sm-12">
                                                                <input class="form-control" placeholder="" onChange={e => setMemberInfor(prevState => {return {...prevState, identity: e.target.value}})}/>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-sm-10" for="pwd">Giới tính</label>
                                                            <div class="col-sm-12">
                                                                <select class="form-select form-control" multiple
                                                                    aria-label="multiple select example">
                                                                    <option value="1">Nam</option>
                                                                    <option value="2">Nữ</option>
                                                                    <option value="3">Khác</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-sm-12" for="pwd">Ngày sinh</label>
                                                            <div class="col-sm-12">
                                                                <input class="form-control" type="date" onChange={e => setMemberInfor(prevState => {return {...prevState, dob: e.target.value}})}/>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-sm-10" for="pwd">Email</label>
                                                            <div class="col-sm-12">
                                                                <input class="form-control" placeholder="" onChange={e => setMemberInfor(prevState => {return {...prevState, email: e.target.value}})}/>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label class="control-label col-sm-10" for="pwd">Số điện thoại</label>
                                                            <div class="col-sm-12">
                                                                <input class="form-control" placeholder="" onChange={e => setMemberInfor(prevState => {return {...prevState, phone: e.target.value}})}/>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-primary">Cập nhật</button>
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>


            </div>
            <div class="modal fade" id="memberModal" tabindex="-1" role="dialog" aria-labelledby="memberModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="memberModalLabel">Thông tin thành viên</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form id="memberForm">
                                <div class="form-group">
                                    <label for="memberName">Họ và tên</label>
                                    <input type="text" class="form-control" id="memberName" />
                                </div>
                                <div class="form-group">
                                    <label for="memberGender">Giới tính</label>
                                    <select class="form-control" id="memberGender">
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                        <option value="Khác">Khác</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="memberIDNumber">Số căn cước</label>
                                    <input type="text" class="form-control" id="memberIDNumber" />
                                </div>
                                <div class="form-group">
                                    <label for="memberRelation">Quan hệ với chủ hộ</label>
                                    <select class="form-control" id="memberRelation">
                                        <option value="Bố">Bố</option>
                                        <option value="Mẹ">Mẹ</option>
                                        <option value="Anh">Anh</option>
                                        <option value="Chị">Chị</option>
                                        <option value="Em trai">Em trai</option>
                                        <option value="Em gái">Em gái</option>
                                        <option value="Vợ">Vợ</option>
                                        <option value="Chồng">Chồng</option>
                                        <option value="Ông">Ông</option>
                                        <option value="Bà">Bà</option>
                                        <option value="Khác">Khác</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            <button type="button" class="btn btn-primary" onclick="saveMember()">Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </>
    )
}
export default UserMember