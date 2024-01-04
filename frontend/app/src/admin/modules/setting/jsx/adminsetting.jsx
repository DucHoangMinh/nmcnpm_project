import SideBar from "../../../patials/sidebar"

const AdminSetting = () => {
  return (
    <>
    <SideBar/>
    <div className="container"  style={{'margin-top': "-70px"}}>
      <div className="row">
        <div className="col">
          <h2 className="text-left mb-4">Danh sách các thành viên ban quản lý</h2>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addManager">
            <i className="bi bi-plus-square-fill"></i> Thêm thành viên
          </button>
          <div className="modal fade" id="addManager" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-primary" id="exampleModalLabel">Thông tin thành viên mới</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-sm-10" for="email">Số căn cước</label>
                      <div className="col-sm-12">
                        <input className="form-control" placeholder="" />
                      </div>
                    </div>
                    {/* ... (các trường form khác) ... */}
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                  <button type="button" className="btn btn-primary">Tạo</button>
                </div>
              </div>
            </div>
          </div>
          <div className="input-group mt-3 mb-3">
            <input type="text" className="form-control" placeholder="Tìm kiếm" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button"><i className="bi bi-search"></i></button>
            </div>
          </div>
          <div className="text-center table-responsive">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Mã hộ gia đình</th>
                  <th scope="col">Họ và tên thành viên</th>
                  <th scope="col">Số điện thoại liên hệ</th>
                  <th scope="col">Ngày trực</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>501</td>
                  <td className="name">trần văn c</td>
                  <td>0129362093</td>
                  <td>Thứ Hai, Thứ Ba</td>
                  <td>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#editManager"><i
                      className="bi bi-pencil-fill"></i></button>
                    <button className="btn btn-secondary"><i className="bi bi-x-square-fill"></i></button>
                    <div className="modal fade text-left" id="editManager" tabindex="-1" role="dialog" aria-labelledby=""
                      aria-hidden="true">
                      <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title text-primary" id="exampleModalLabel">Thay đổi thông tin</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form className="form-horizontal">
                              <div className="form-group">
                                <label className="control-label col-sm-10" for="email">Số căn cước</label>
                                <div className="col-sm-12">
                                  <input className="form-control" placeholder="" disabled />
                                </div>
                              </div>
                              {/* ... (các trường form khác) ... */}
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            <button type="button" className="btn btn-primary">Cập nhật</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default AdminSetting;
