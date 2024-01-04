import UserSideBar from "../userSideBar"

const UserHome = () => {
    return (
        <>
        
  <div class="container mt-5">
      <div class="row">
      <UserSideBar/>
          <div class="col-lg-6 offset-lg-3">
            <h2 class="text-center mb-4">Phí Chung Cư Tháng 12/2023</h2>
            <form>
              <div class="form-group">
                <label for="feeType"></label>
                <ul class="list-group">
                    <li class="list-group-item active">Tổng Phí: 5.000.000 VNĐ</li>
                </ul>
              </div>
              <div class="form-group row align-items-center">
                  <label class="col-sm-6 col-form-label">Tình trạng: ĐÃ ĐÓNG</label>
                  
                  <div class="col-sm-6">
                    <a href="./Fee Payed.html" class="btn btn-primary btn-block">Xem chi tiết</a>
                  </div>

                </div>            
                
            </form>
          </div>
        </div>
      <a href="#">Lên đầu trang</a>
    </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
          </>
      )
}
export default UserHome