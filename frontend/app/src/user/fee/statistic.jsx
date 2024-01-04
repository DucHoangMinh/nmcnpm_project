import UserSideBar from "../userSideBar"

const UserFeeStatistic = () => {
    return (
        <>
        <UserSideBar/>
            <div class="container mt">
    
    <div class="form-group">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Tìm kiếm"/>
          <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button"><i class="bi bi-search"></i></button>
          </div>
        </div>
        
        <div class="text-center table-responsive">
          <table class="table table-bordered table-hover">
              <thead class="datatable-header">
                  <tr>
                    <th>
                      <label for="filterMonth">Tháng:</label>
                      <select class="" id="monthSelect">
                        <option value="all">Tất cả</option>
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
                    </th>
                    <th><label for="filterYear">Năm:</label>
                      <select class="" id="yearSelect">
                        <option value="all">Tất cả</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                      </select></th>
                    <th><label for="filterType">Loại phí</label>
                      <select class="" id="typeSelect">
                        <option value="total">Tổng</option>
                        <option value="manager">Phí quản lý</option>
                        <option value="service">Phí dịch vụ</option>
                        <option value="vehicle">Phí gửi xe</option>
                        <option value="motor">Phí gửi xe máy</option>
                        <option value="car">Phí gửi ô tô</option>
                        <option value="electric">Phí điện</option>
                        <option value="water">Phí nước</option>
                        <option value="voluntary">Phí tự nguyện</option>
                        <option value="study">Quỹ khuyến học</option>
                        <option value="gratitude">Quỹ tình nghĩa</option>
                        <option value="old">Quỹ người cao tuổi</option>
                        <option value="child">Quỹ vì trẻ thơ</option>
                        
                      </select></th>
                    <th>Phí (VNĐ)</th>
                    <th>Tình trạng</th>
                    <th>Hành động</th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                    <td>12</td>
                    <td>2023</td>
                    <td>Tổng</td>
                    <td>12.100</td>
                    <td>Chưa đóng</td>
                    <td><a href="./Pay Fee.html" class="btn btn-primary btn-sm" role="button">Đóng ngay</a>
                    </td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>2023</td>
                    <td>Tổng</td>
                    <td>11.800</td>
                    <td>Đã đóng</td>
                    <td><a href="./Fee Payed.html" class="btn btn-primary btn-sm" role="button">Xem chi tiết</a>
                    </td>
                </tr>
              </tbody>
          </table>
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
export default UserFeeStatistic