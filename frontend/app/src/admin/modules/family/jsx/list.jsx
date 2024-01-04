import SideBar from "../../../patials/sidebar"

const FamilyList = () => {
    return (
        <>
        <SideBar/>
            <div className="container" style={{'margin-top': "-70px"}}>
                <div className="row">
                    <div className="col">
                        <h2 className="text-left mb-4">Danh sách các hộ gia đình</h2>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#AddnewHousehold">
                            <i className="bi bi-plus-square-fill"></i> Tạo hộ khẩu mới
                        </button>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#message">
                            <i className="bi bi-envelope-fill"></i> Gửi thông báo
                        </button>
                        <div className="modal fade" id="AddnewHousehold" tabindex="-1" role="dialog"
                            aria-labelledby="AddnewHouseholdLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title text-primary" id="exampleModalLabel">
                                            Thông tin hộ khẩu mới
                                        </h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">

                                        <table className="text-left table table-borderless table-responsive">
                                            <thead>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>Mã căn hộ</th>
                                                    <td className="form-group">
                                                        <input className="form-control" placeholder=""/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Số căn cước của chủ hộ</th>
                                                    <td><input className="form-control" type="text" name="" id=""/></td>
                                                </tr>
                                                <tr>
                                                    <th>Họ và tên chủ hộ</th>
                                                    <td>
                                                        <input type="text" name="" id="" className="form-control" disabled/>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th>Các thành viên khác trong hộ</th>
                                                    <td className="form-group">
                                                        <select className="form-select form-control" multiple
                                                            aria-label="multiple select example">
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                            <option value="4">One</option>
                                                            <option value="5">Two</option>
                                                            <option value="6">Three</option>
                                                            <option value="7">One</option>
                                                            <option value="8">Two</option>
                                                            <option value="9">Three</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Số xe máy gửi</th>
                                                    <td className="form-group">
                                                        <input className="form-control" placeholder=""/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Số xe ô tô gửi</th>
                                                    <td className="form-group">
                                                        <input className="form-control" placeholder=""/>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    <div className="text-primary">Tài khoản mặc định</div>
                                        <table className="text-left table table-borderless table-responsive">
                                            <thead></thead>
                                            <tbody>
                                                <tr>
                                                    <th>Tên đăng nhập</th>
                                                    <td>"Mã hộ gia đình"</td>
                                                </tr>
                                                <tr>
                                                    <th>Mật khẩu</th>
                                                    <td>"Mã hộ gia đình"</td>
                                                </tr>
                                            </tbody>
                                        </table> 
                                        
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                        <button type="button" className="btn btn-primary">Tạo</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="message" tabindex="-1" role="dialog" aria-labelledby="message"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title text-primary" id="message">
                                            Lời nhắn
                                        </h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label for="sel1">Chọn hộ gia đình</label>
                                                <select className="form-control" id="sel1" name="sellist1">
                                                    <option>Chọn tất cả</option>
                                                    <option>601</option>
                                                    <option>602</option>
                                                    <option>603</option>
                                                    <option>604</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputPassword" className="col-sm-15 col-form-label">Nội dung</label>
                                                <div className="col-sm-15">
                                                    <textarea className="form-control" style={{height: '100px'}}></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputNumber" className="col-sm-15 col-form-label">Tải tệp lên</label>
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="customFile"/>
                                                    <label className="custom-file-label" for="customFile">Chọn tệp</label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                        <button type="submit" className="btn btn-primary">Gửi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" mt-3 mb-3">
                            Bắt đầu thuê trong giai đoạn
                            <table>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td>từ ngày</td>
                                        <td><input type="date" className="form-control"/></td>
                                    </tr>
                                    <tr>
                                        <td>đến ngày</td>
                                        <td><input type="date" className="form-control"/></td>
                                    </tr>
                                    <tr>
                                        <td>Số tháng đã thuê</td>
                                        <td><input className="form-control"/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="input-group mt-3 mb-3">
                            <input type="text" className="form-control" placeholder="Tìm kiếm"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center" scope="col">#</th>
                                        <th className="text-center" scope="col">Mã hộ gia đình</th>
                                        <th className="text-center" scope="col">Họ và tên chủ hộ</th>
                                        <th className="text-center" scope="col">Số điện thoại của chủ hộ</th>
                                        <th className="text-center" scope="col">Số thành viên hiện tại</th>
                                        <th className="text-center" scope="col">Bắt đầu thuê từ ngày</th>
                                        <th className="text-center" scope="col">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="text-center">1</th>
                                        <td className="text-center">502</td>
                                        <td className="name">a văn B</td>
                                        <td className="text-center">0123456789</td>
                                        <td className="text-center">10</td>
                                        <td className="text-center">20/10/2010</td>
                                        <td>
                                            <div className="col text-center">
                                                <button type="button" className="btn btn-primary" data-toggle="modal"
                                                    data-target="#RoomDetailModal">
                                                    <i className="bi bi-three-dots"></i>
                                                </button>
                                                <button className="btn btn-secondary"><i className="bi bi-x-square-fill"></i></button>

                                                <div className="modal fade" id="RoomDetailModal" tabindex="-1" role="dialog"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-fullscreen" role="document">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h2 className="modal-title text-primary" id="exampleModalLabel">
                                                                    Thông
                                                                    tin chi tiết</h2>
                                                                <button type="button" className="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <table
                                                                    className="text-left table table-borderless table-responsive">
                                                                    <thead>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th>Mã hộ gia đình</th>
                                                                            <td>2506</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Họ và tên chủ hộ</th>
                                                                            <td className="name">lê văn a</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Số điện thoại liên hệ</th>
                                                                            <td><input type="text" className="form-control"/></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Ngày bắt đầu thuê</th>
                                                                            <td className="name">20/9/2017</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Tổng số thành viên</th>
                                                                            <td>5</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Số thành viên đăng ký thường trú</th>
                                                                            <td>0</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Số thành viên đăng ký tạm trú</th>
                                                                            <td>1</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Số thành viên đăng ký tạm vắng</th>
                                                                            <td>1</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Số thành viên hiện tại</th>
                                                                            <td>4</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Tổng số tiền đã quyên góp</th>
                                                                            <td>5000</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Số xe máy gửi</th>
                                                                            <td><input type="text" className="form-control"/></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Số xe ô tô gửi</th>
                                                                            <td><input type="text" className="form-control"/></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Phí nộp dư</th>
                                                                            <td>0</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>Phí nộp thiếu</th>
                                                                            <td>100000</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                <h4 className="text-center">Danh sách thành viên trong hộ gia đình
                                                                </h4>
                                                                <br/>
                                                                <table className="table table-bordered table-hover">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>#</th>
                                                                            <th>Mã hộ gia đình</th>
                                                                            <th>Họ và tên thành viên</th>
                                                                            <th>Số căn cước</th>
                                                                            <th>Ngày Sinh</th>
                                                                            <th>Quan hệ với chủ hộ</th>
                                                                            <th>Số điện thoại</th>
                                                                            <th>Ngày bắt đầu ở</th>
                                                                            <th>Trạng thái</th>
                                                                            <th>Hành động</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td><input type="checkbox"/></td>
                                                                            <th>1</th>
                                                                            <td>2506</td>
                                                                            <td className="text-left name">lê Văn A</td>
                                                                            <td>01227612310</td>
                                                                            <td>01/8/1998</td>
                                                                            <td>Chủ hộ</td>
                                                                            <td>1800100 có</td>
                                                                            <td>12/12/1222</td>
                                                                            <td>Tạm trú</td>
                                                                            <td><button className="btn btn-secondary"><i className="bi bi-x-square-fill"></i></button></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>2</th>
                                                                            <td>2506</td>
                                                                            <td className="text-left name">phùng thị b</td>
                                                                            <td>01227612310</td>
                                                                            <td>09/11/1999</td>
                                                                            <td>Vợ</td>
                                                                            <td>1800100 có</td>
                                                                            <td>12/12/1222</td>
                                                                            <td>Tạm trú</td>
                                                                            <td><button className="btn btn-secondary"><i className="bi bi-x-square-fill"></i></button></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>3</th>
                                                                            <td>2506</td>
                                                                            <td className="text-left name">lê thị c</td>
                                                                            <td>01227612310</td>
                                                                            <td>09/11/1999</td>
                                                                            <td>Con gái</td>
                                                                            <td>1800100 có</td>
                                                                            <td>12/12/1222</td>
                                                                            <td>Tạm trú</td>
                                                                            <td><button className="btn btn-secondary"><i className="bi bi-x-square-fill"></i></button></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>4</th>
                                                                            <td>2506</td>
                                                                            <td className="text-left name">lê văn d</td>
                                                                            <td>01227612310</td>
                                                                            <td>09/11/1999</td>
                                                                            <td>Con trai</td>
                                                                            <td>1800100 có</td>
                                                                            <td>12/12/1222</td>
                                                                            <td>Tạm vắng</td>
                                                                            <td><button className="btn btn-secondary"><i className="bi bi-x-square-fill"></i></button></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th>5</th>
                                                                            <td>2506</td>
                                                                            <td className="text-left name">triệu thị e</td>
                                                                            <td>01227612310</td>
                                                                            <td>09/11/1999</td>
                                                                            <td>Người yêu</td>
                                                                            <td>1800100 có</td>
                                                                            <td>12/12/1222</td>
                                                                            <td>Tạm trú</td>
                                                                            <td><button className="btn btn-secondary"><i className="bi bi-x-square-fill"></i></button></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-primary"
                                                                    data-dismiss="modal">Cập nhật</button>
                                                                <button type="button" className="btn btn-secondary"
                                                                    data-dismiss="modal">Đóng</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p><a href="#">Lên đầu trang</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FamilyList