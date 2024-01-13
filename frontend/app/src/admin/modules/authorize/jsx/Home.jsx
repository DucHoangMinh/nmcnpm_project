import SideBar from '../../../patials/sidebar';

const Home = () => {
  return (
    <>
    <SideBar/>
      <div class="container" style={{'margin-top': "-70px"}}>
    <div class="row">
      <div class="col">
        <h2 class="text-left mb-4">Thống kê hộ khẩu</h2>
        <div class="table-responsive">
          <table class="table table-borderless table-responsive">
            <thead>
              <tr>
                <th scope="col"></th>
              </tr>
              <tr></tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Tổng số hộ khẩu</th>
                <td>250</td>
              </tr>
              <tr>
                <th scope="row">Mới đến trong tháng</th>
                <td>2</td>
              </tr>
              <tr>
                <th>Mới chuyển đi trong tháng</th>
                <td>1</td>
              </tr>
              <tr>
                <th>Số căn hộ còn trống</th>
                <td>50</td>
              </tr>
              <tr>
                <th>Số căn hộ đang được thuê ngắn hạn</th>
                <td>0</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      <div class="col">
        <h2 class="text-left mb-4">Thống kê nhân khẩu</h2>
        <div class="table-responsive">
          <table class="table table-borderless table-responsive">
            <thead>
              <tr>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Tổng số cư dân</th>
                <td>1000</td>
              </tr>
              <tr>
                <th scope="row">Tạm trú</th>
                <td>590</td>
              </tr>
              <tr>
                <th>Tạm vắng</th>
                <td>11</td>
              </tr>
              <tr>
                <th>Thường trú</th>
                <td>300</td>
              </tr>
              <tr>
                <th>Chưa đăng ký</th>
                <td>99</td>
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

export default Home;