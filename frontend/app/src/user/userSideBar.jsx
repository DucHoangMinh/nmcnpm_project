const UserSideBar = () => {
    return (
        <>
    <nav class="navbar navbar-expand-lg navbar-light bg-white" style={{marginTop: "100px"}}>
    <a href="./HomeUser.html" class="navbar-brand d-flex align-items-center">
      <h2 class="m-0 text-primary"><i class="bi bi-buildings-fill"></i> BLUEMOON <i class="bi bi-moon-stars-fill"></i>
      </h2>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="active nav-link" href="./HomeUser.html"><i class="bi bi-house-fill"></i> Trang chủ <span
              class="sr-only">(current)</span></a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown" href="/user/payfee">
            <i class="bi bi-clipboard2-fill"></i> Phí chung cư <i class="bi bi-chevron-down"></i></a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/user/payfee"><i class="bi bi-caret-right-fill"></i> Đóng phí </a>
            <a class="dropdown-item" href="/user/statistic"><i class="bi bi-caret-right-fill"></i> Thống kê phí </a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown" href="/user/room/members">
            <i class="bi bi-people-fill"></i> Quản lý nhân khẩu <i class="bi bi-chevron-down"></i>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/user/room/members"><i class="bi bi-caret-right-fill"></i> Thông tin nhân khẩu </a>
            
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown" href="/user/room/absence">
            <i class="bi bi-person-fill-exclamation"></i> Đăng kí tạm vắng <i class="bi bi-chevron-down"></i>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/user/room/absence"><i class="bi bi-caret-right-fill"></i> Đăng kí tạm vắng </a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown" href="./Account.html">
            <i class="bi bi-gear"></i> <span>Cài đặt</span> <i class="bi bi-chevron-down"></i>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="./Account.html"><i class="bi bi-caret-right-fill"></i> Thông tin
              cá nhân</a>
            <a class="dropdown-item" data-toggle="modal" data-target="#changePasswordModal"><i class="bi bi-caret-right-fill"></i> Thay đổi mật
              khẩu</a>
            <a class="dropdown-item" href=""><i class="bi bi-box-arrow-right"></i> Đăng xuất</a>
          </div>
          <div class="modal fade" id="changePasswordModal" tabindex="-1" role="dialog" aria-labelledby="changePasswordLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="changePasswordLabel">Thay đổi mật khẩu</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="currentPassword">Mật khẩu hiện tại</label>
                                <input type="password" class="form-control" id="currentPassword"/>
                            </div>
                            <div class="form-group">
                                <label for="newPassword">Mật khẩu mới</label>
                                <input type="password" class="form-control" id="newPassword"/>
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword">Xác nhận mật khẩu mới</label>
                                <input type="password" class="form-control" id="confirmPassword"/>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-primary">Lưu thay đổi</button>
                    </div>
                </div>
            </div>
        </div>
        

        </li>
      </ul>
    </div>
  </nav>
        </>
    )
}
export default UserSideBar