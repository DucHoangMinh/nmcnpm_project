const AdminSetting = () => {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <h2 class="text-left mb-4">Danh sách các thành viên ban quản lý</h2>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addManager">
            <i class="bi bi-plus-square-fill"></i> Thêm thành viên
          </button>
          <div class="modal fade" id="addManager" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-primary" id="exampleModalLabel">Thông tin thành viên mới</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form class="form-horizontal">
                    <div class="form-group">
                      <label class="control-label col-sm-10" for="email">Số căn cước</label>
                      <div class="col-sm-12">
                        <input class="form-control" placeholder="" />
                      </div>
                    </div>
                    {/* ... (các trường form khác) ... */}
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                  <button type="button" class="btn btn-primary">Tạo</button>
                </div>
              </div>
            </div>
          </div>
          <div class="input-group mt-3 mb-3">
            <input type="text" class="form-control" placeholder="Tìm kiếm" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button"><i class="bi bi-search"></i></button>
            </div>
          </div>
          <div class="text-center table-responsive">
            <table class="table table-bordered table-hover">
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
                  <td class="name">trần văn c</td>
                  <td>0129362093</td>
                  <td>Thứ Hai, Thứ Ba</td>
                  <td>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editManager"><i
                      class="bi bi-pencil-fill"></i></button>
                    <button class="btn btn-secondary"><i class="bi bi-x-square-fill"></i></button>
                    <div class="modal fade text-left" id="editManager" tabindex="-1" role="dialog" aria-labelledby=""
                      aria-hidden="true">
                      <div class="modal-dialog modal-dialog-scrollable" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title text-primary" id="exampleModalLabel">Thay đổi thông tin</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <form class="form-horizontal">
                              <div class="form-group">
                                <label class="control-label col-sm-10" for="email">Số căn cước</label>
                                <div class="col-sm-12">
                                  <input class="form-control" placeholder="" disabled />
                                </div>
                              </div>
                              {/* ... (các trường form khác) ... */}
                            </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            <button type="button" class="btn btn-primary">Cập nhật</button>
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
  );
};

export default AdminSetting;
