import UserSideBar from "../userSideBar"

const UserMember = () => {
    return (
        <>
        <UserSideBar/>
            <div class="container" style={{marginTop:"-50px"}}>
    <h2>Quản lý thông tin nhân khẩu</h2>
    <table class="table table-bordered table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Họ và tên</th>
                <th>Giới tính</th>
                <th>Số căn cước</th>
                <th>Phòng</th>
                <th>Quan hệ với chủ hộ</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody id="memberTable">
          <tr>
            <td>10101</td>
            <td>Hoàng Minh Đức</td>
            <td>Nam</td>
            <td></td>
            <td>101</td>
            <td>Chủ hộ</td>
            <td>
              <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#confirmDeleteModal">
                <i class="bi bi-trash3-fill"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>10102</td>
            <td>Hoàng Minh Nhật</td>
            <td>Nam</td>
            <td></td>
            <td>101</td>
            <td>Em trai</td>
            <td>
              <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#confirmDeleteModal">
                <i class="bi bi-trash3-fill"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>10103</td>
            <td>Hoàng Thị Như Ý</td>
            <td>Nữ</td>
            <td></td>
            <td>101</td>
            <td>Em gái</td>
            <td>
              <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#confirmDeleteModal">
                <i class="bi bi-trash3-fill"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>10104</td>
            <td>Hoàng Minh Phát</td>
            <td>Nam</td>
            <td></td>
            <td>101</td>
            <td>Bố</td>
            <td>
              <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#confirmDeleteModal">
                <i class="bi bi-trash3-fill"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>10105</td>
            <td>Lê Thị Hoa</td>
            <td>Nữ</td>
            <td></td>
            <td>101</td>
            <td>Mẹ</td>
            <td>
              <button type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="#confirmDeleteModal">
                <i class="bi bi-trash3-fill"></i>
              </button>
            </td>
          </tr>
            
        </tbody>
    </table>

    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#memberModal">
      <span class="d-inline-block mr-2">Thêm thành viên</span><i class="fas fa-plus-circle"></i>
    </button>

    <a href="#" class="d-block">Lên đầu trang</a>
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
                        <input type="text" class="form-control" id="memberName"/>
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
                        <input type="text" class="form-control" id="memberIDNumber"/>
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