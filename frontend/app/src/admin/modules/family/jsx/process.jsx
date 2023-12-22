import SideBar from "../../../patials/sidebar"

const RoomProssess = () => {
    return (
        <>
            <SideBar/>
            <div className="container mt-5">
                <div className="row">

                <div className="col">
                    <h2 className="text-left mb-4">Danh sách các yêu cầu thuê</h2>
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
                        </tbody>
                    </table>
                </div>
                    <div className="input-group mt-3 mb-3">
                    <input type="text" className="form-control" placeholder="Tìm kiếm"/>
                    <div className="input">
                        <button className="btn btn-outline-secondary" type="button"><i className="bi bi-search"></i></button>
                    </div>
                    </div>
                    <div className="text-center table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Mã yêu cầu</th>
                            <th scope="col">Mã căn hộ yêu cầu thuê</th>
                            <th scope="col">Mục đích thuê căn hộ</th>
                            <th scope="col">Thời gian gửi</th>
                            <th>Xem chi tiết</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>14122023235915</td>
                            <td>708</td>
                            <td>Ở lâu dài</td>
                            <td>23:59:14 14/12/2023</td>
                            <td>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#EditFeeModal"><i
                                className="bi bi-three-dots"></i></button>
                            <div className="modal fade" id="EditFeeModal" tabindex="-1" role="dialog" aria-labelledby="EditModalLabel"
                                aria-hidden="true">
                                <div className="text-left modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                    <h5 className="modal-title text-primary">"Mã yêu cầu" - In câu trả lời của phía user
                                    </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div className="modal-body">
                                    <form className="form-horizontal">
                                        <div className="form-group">
                                        <label className="control-label col-sm-10" for="email">Họ và tên người gửi</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" placeholder="" disabled/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label className="control-label col-sm-10" for="pwd">Số điện thoại liên hệ</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" placeholder="" disabled/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label className="control-label col-sm-10" for="pwd">Số căn cước</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" placeholder="" disabled/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label className="control-label col-sm-10" for="pwd">Mã căn hộ yêu cầu thuê</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" placeholder="" disabled/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label className="control-label col-sm-10" for="pwd">Mục đích thuê</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" placeholder="" disabled/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label className="control-label col-sm-10" for="pwd">Ảnh chụp căn cước (2 mặt)</label>
                                        <div className="col-sm-12">
                                            <img src="" alt="Mặt trước"/>
                                            <img src="" alt="Mặt sau"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                        <label for="inputPassword3" className="col-sm-10 col-form-label">Đơn giá</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" placeholder="" disabled/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label for="inputPassword3" className="col-sm-10 col-form-label">Số tiền cọc</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" placeholder="Tự động tính" disabled/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label for="inputPassword3" className="col-sm-10 col-form-label">Ảnh minh chứng chuyển
                                            khoản</label>
                                        <div className="col-sm-12">
                                            <img src="" alt="Ảnh minh chứng"/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label className="control-label col-sm-12" for="pwd">Thời gian gửi</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" type="datetime-local" disabled/>
                                        </div>
                                        </div>
                                    </form>
                                    </div>
                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-toggle="modal"
                                        data-target="#declinemodal">Không đồng ý</button>
                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                        data-target="#acceptmodal">Đồng ý</button>
                                    <div className="modal fade" id="declinemodal" tabindex="-1" role="dialog"
                                        aria-labelledby="declinemodal" aria-hidden="true">
                                        <div className="text-left modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                            <h5 className="modal-title">Gửi phản hồi
                                            </h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            </div>
                                            <div className="modal-body">
                                            <form className="form-horizontal">
                                                <div className="form-group">
                                                <label className="control-label col-sm-10" for="email">Lời nhắn</label>
                                                <div className="col-sm-12">
                                                    <input className="form-control" placeholder="Bạn không đẹp trai"/>
                                                </div>
                                                </div>
                                            </form>

                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                                <button type="button" className="btn btn-primary">Gửi phản hồi</button>

                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="modal fade" id="acceptmodal" tabindex="-1" role="dialog"
                                        aria-labelledby="acceptmodal" aria-hidden="true">
                                        <div className="text-left modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                            <h5 className="modal-title">Gửi phản hồi
                                            </h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            </div>
                                            <div className="modal-body">
                                            <form className="form-horizontal">
                                                <div className="form-group">
                                                <label className="control-label col-sm-10" for="email">Lời nhắn</label>
                                                <div className="col-sm-12">
                                                    <input className="form-control"
                                                    placeholder="Hồ sơ hợp lệ. Vui lòng chuẩn bị thông tin cá nhân (thẻ căn cước, số điện thoại) các thành viên trong gia đình để làm hợp đồng."/>
                                    
                                                </div>
                                                </div>
                                                <div className="form-group">
                                                <label className="control-label col-sm-10" for="email">Thời gian</label>
                                                <div className="col-sm-12">
                                                    <input type="datetime-local" className="form-control"/>                                     
                                                </div>
                                                </div>
                                                <div className="form-group">
                                                <div className="col-sm-12">Địa điểm: 301 (Phòng thường trực)</div>
                                                </div>
                                            </form>

                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                                <button type="button" className="btn btn-primary">Gửi phản hồi</button>

                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>14012022235915</td>
                            <td>602</td>
                            <td>Thuê ngắn hạn trong 2 ngày</td>
                            <td>23:59:14 14/12/2023</td>
                            <td>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#EditFeeModal"><i
                                className="bi bi-three-dots"></i></button>
                            <div className="modal fade" id="EditFeeModal" tabindex="-1" role="dialog" aria-labelledby="EditModalLabel"
                                aria-hidden="true">
                                <div className="text-left modal-dialog modal-fullscreen" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                    <h5 className="modal-title text-primary">"Mã yêu cầu" - In câu trả lời của phía user
                                    </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div className="modal-body">
                                    <form className="form-horizontal">
                                        <div className="form-group">
                                        <label className="control-label col-sm-10" for="email">Họ và tên người gửi</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" placeholder="TN99"/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label className="control-label col-sm-10" for="pwd">Số điện thoại liên hệ</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" placeholder=""/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label className="control-label col-sm-10" for="pwd">Số căn cước</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" placeholder=""/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label className="control-label col-sm-10" for="pwd">Mã căn hộ yêu cầu thuê</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" placeholder=""/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label className="control-label col-sm-10" for="pwd">Mục đích thuê</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" placeholder=""/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label className="control-label col-sm-10" for="pwd">Ảnh chụp căn cước (2 mặt)</label>
                                        <div className="col-sm-12">
                                            <img src="" alt="Mặt trước"/>
                                            <img src="" alt="Mặt sau"/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label for="inputPassword3" className="col-sm-10 col-form-label">Đơn giá</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" placeholder="Tự điền sau khi điền mã căn hộ"/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label for="inputPassword3" className="col-sm-10 col-form-label">Số tiền cọc</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" placeholder="Tự động tính"/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label for="inputPassword3" className="col-sm-10 col-form-label">Ảnh minh chứng chuyển
                                            khoản</label>
                                        <div className="col-sm-12">
                                            <img src="" alt="Ảnh minh chứng"/>
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <label className="control-label col-sm-12" for="pwd">Thời gian gửi</label>
                                        <div className="col-sm-12">
                                            <input className="form-control" type="datetime-local"/>
                                        </div>
                                        </div>
                                    </form>
                                    </div>
                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-toggle="modal"
                                        data-target="#declinemodal">Không đồng ý</button>
                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                        data-target="#acceptmodal">Đồng ý</button>
                                    <div className="modal fade" id="declinemodal" tabindex="-1" role="dialog"
                                        aria-labelledby="declinemodal" aria-hidden="true">
                                        <div className="text-left modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                            <h5 className="modal-title">Gửi phản hồi
                                            </h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            </div>
                                            <div className="modal-body">
                                            <form className="form-horizontal">
                                                <div className="form-group">
                                                <label className="control-label col-sm-10" for="email">Lời nhắn</label>
                                                <div className="col-sm-12">
                                                    <input className="form-control" placeholder="Bạn không đẹp trai"/>
                                                </div>
                                                </div>
                                            </form>

                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                                <button type="button" className="btn btn-primary">Gửi phản hồi</button>

                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="modal fade" id="acceptmodal" tabindex="-1" role="dialog"
                                        aria-labelledby="acceptmodal" aria-hidden="true">
                                        <div className="text-left modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                            <h5 className="modal-title">Gửi phản hồi
                                            </h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                            </div>
                                            <div className="modal-body">
                                            <form className="form-horizontal">
                                                <div className="form-group">
                                                <label className="control-label col-sm-10" for="email">Lời nhắn</label>
                                                <div className="col-sm-12">
                                                    <input className="form-control"
                                                    placeholder="Hồ sơ hợp lệ. Vui lòng chuẩn bị thông tin cá nhân (thẻ căn cước, số điện thoại) các thành viên trong gia đình để làm hợp đồng."/>
                                    
                                                </div>
                                                </div>
                                                <div className="form-group">
                                                <label className="control-label col-sm-10" for="email">Thời gian</label>
                                                <div className="col-sm-12">
                                                    <input type="datetime-local" className="form-control"/>                                     
                                                </div>
                                                </div>
                                                <div className="form-group">
                                                <div className="col-sm-12">Địa điểm: 301 (Phòng thường trực)</div>
                                                </div>
                                            </form>

                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                                <button type="button" className="btn btn-primary">Gửi phản hồi</button>

                                            </div>
                                            </div>
                                        </div>
                                        </div>
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

export default RoomProssess