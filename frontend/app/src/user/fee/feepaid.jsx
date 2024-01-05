import UserSideBar from "../userSideBar"

const UserFeePaid = () => {
    return (
        <>
        <UserSideBar/>
            <div class="container mt" style={{marginTop:"-50px"}}>
      <div class="row">
        <div class="col-lg-8 offset-lg-2"> 
          <h2 class="text-center mb-4">Đóng Phí Nhà</h2>
          <form>
              <div class="form-group">
                  <label for="yearSelect">Chọn Năm:</label>
                  <select class="form-control" id="yearSelect">
                      <option value="2023">Năm 2023</option>
                  </select>
              </div>
            <div class="form-group">
              <label for="monthSelect">Chọn Tháng:</label>
              <select class="form-control" id="monthSelect">
                <option value="1">Tháng 1</option>
                <option value="2">Tháng 2</option>
                <option value="3">Tháng 3</option>
                <option value="4">Tháng 4</option>
                <option value="5">Tháng 5</option>
                <option value="6">Tháng 6</option>
                <option value="7">Tháng 7</option>
                <option value="8">Tháng 8</option>
                <option value="9">Tháng 9</option>
                <option value="10">Tháng 10</option>
                <option value="11">Tháng 11</option>
                <option value="12">Tháng 12</option>
              </select>
            </div>
            <div class="form-group">
              <label for="feeType">Các Loại Phí:</label>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Tìm kiếm"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button"><i class="bi bi-search"></i></button>
                </div>
              </div>
              <div class="text-center table-responsive">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Mã khoản thu</th>
                            <th scope="col">Tên khoản thu</th>
                            <th scope="col">Loại phí</th>
                            <th scope="col">Đơn giá</th>
                            <th scope="col">Đơn vị</th>
                            <th scope="col">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>BB01</td>
                            <td class="text-left">Phí quản lý</td>
                            <td>Bắt buộc</td>
                            <td>7.000</td>
                            <td>VNĐ/m2/tháng</td>
                            <td>7.000.000</td>
                            
                        </tr>
                        <tr>

                            <th scope="row">2</th>
                            <td>BB02</td>
                            <td class="text-left">Phí dịch vụ</td>
                            <td>Bắt buộc</td>
                            <td>16.500</td>
                            <td>VNĐ/m2/tháng</td>
                            <td>1.650.000</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>BB03</td>
                            <td class="text-left">Phí gửi xe máy</td>
                            <td>Bắt buộc</td>
                            <td>70.000</td>
                            <td>VNĐ/xe</td>
                            <td>0</td>

                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>BB04</td>
                            <td class="text-left">Phí gửi ô tô</td>
                            <td>Bắt buộc</td>
                            <td>1.200.000</td>
                            <td>VNĐ/xe</td>
                            <td>1.200.000</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>BB05</td>
                            <td class="text-left">Phí điện</td>
                            <td>Bắt buộc</td>
                            <td>Theo hóa đơn</td>
                            <td>Theo hóa đơn</td>
                            <td>1.200.000</td>
                            
                        </tr>
                        <tr>

                            <th scope="row">6</th>
                            <td>BB06</td>
                            <td class="text-left">Phí nước</td>
                            <td>Bắt buộc</td>
                            <td>Theo hóa đơn</td>
                            <td>Theo hóa đơn</td>
                            <td>500.000</td>

                        </tr>
                        <tr>

                            <th scope="row">7</th>
                            <td>TN01</td>
                            <td class="text-left">Quỹ khuyến học</td>
                            <td>Tự nguyện</td>
                            <td>100.000</td>
                            <td>VNĐ/hộ</td>
                            <td>100.000</td>

                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>TN02</td>
                            <td class="text-left">Quỹ tình nghĩa</td>
                            <td>Tự nguyện</td>
                            <td>50.000</td>
                            <td>VNĐ/hộ</td>
                            <td>50.000</td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>TN03</td>
                            <td class="text-left">Quỹ người cao tuổi</td>
                            <td>Tự nguyện</td>
                            <td>200.000</td>
                            <td>VNĐ/hộ</td>
                            <td>200.000</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>TN04</td>
                            <td class="text-left">Quỹ vì trẻ thơ</td>
                            <td>Tự nguyện</td>
                            <td>200.000</td>
                            <td>VNĐ/hộ</td>
                            <td>200.000</td>
                        </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                          <th colspan="6" class="text-right">Tổng:</th>
                          <th id="totalAmount"> 12.100.000 </th>
                      </tr>
                  </tfoot>
                </table>               
            </div>
            </div>
              <div class="form-group">
                <p>Tình trạng : Đã đóng <i class="bi bi-check"></i></p>
                <img src="./Home Fee/chuyen khoan.jpg" alt="Đã đóng phí"/>
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
export default UserFeePaid