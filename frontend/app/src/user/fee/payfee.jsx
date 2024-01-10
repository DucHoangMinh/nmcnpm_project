import UserSideBar from "../userSideBar"
import api from "../../service/api";
import storage from "../../service/storage";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";

const UserPayFee = () => {
    const roomId = JSON.parse(storage.getValue("user")).room
    const [roomInfor, setRoomInfor] = useState({})
    const [feeList, setFeeList] = useState([])
    const [totalFee, setTotalFee] = useState(0)

    const getRoomInfor = async () => {
        try {
            const { data } = await api.get(`v1/room/find?id=${roomId}`)
            setRoomInfor(data.data)
        }catch (e) {
            console.log(e)
        }
    }

    const getFeeList = async () => {
        try{
            const { data } = await api.get(`v1/room/${roomId}/incomplete`)
            await setFeeList(data.data)
        }catch (e) {
            console.log(e.toString())
        }
    }

    const findTotalFee = async () => {
        let curr = 0
        feeList.forEach((item, index) => {
            curr += item.price * roomInfor.area
        })
        await setTotalFee(curr)
    }

    const initData = async () => {
        await getFeeList()
        await findTotalFee()
        await getRoomInfor()
    }

    const handleConfirmPayFee = async (feeId) => {
        try{
            const { data } = await api.post(`v1/payment/pending?room=${roomId}&fee=${feeId}`)
            window.alert("Gửi yêu cầu xác nhận đóng phí thành công")
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        initData()
    }, []);
    useEffect(() => {
        findTotalFee();
    }, [feeList, roomInfor]);

    return (
        <>
        <UserSideBar/>
            <div class="container" style={{marginTop:"-50px"}}>
        <div class="row">
          <div class="col-8 offset-2"> 
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
                            <th scope="col">Mã khoản thu</th>
                            <th scope="col">Tên khoản thu</th>
                            <th scope="col">Loại phí</th>
                            <th scope="col">Đơn giá</th>
                            <th scope="col">Đơn vị</th>
                            <th scope="col">Thành tiền</th>
                            <th scope="col">Ảnh thanh toán</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {feeList.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.mandatory ? 'Bắt buộc' : 'Không bắt buộc'}</td>
                                <td>{item.price}</td>
                                <td>VND/m2</td>
                                <td>{item.price * roomInfor.area}</td>
                                <td>
                                    <div className="mb-3">
                                        <input className="form-control" type="file" id="formFile"/>
                                    </div>
                                </td>
                                <td>
                                    <Button onClick={() => handleConfirmPayFee(item.id)}>Xác nhận đóng phí</Button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        <tfoot>
                        <tr>
                            <th colspan="5" class="text-right">Tổng:</th>
                            <th id="totalAmount">{totalFee}</th>
                        </tr>
                        </tfoot>
                    </table>
                </div>
              </div>
                <div class="form-group">
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#PayFee">
                    Nộp Phí
                  </button>
                  
                  <div class="modal fade" id="PayFee" tabindex="-1" role="dialog" aria-labelledby="PayFeeTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="PayFeeTitle">Xác nhận nộp phí</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          Kiểm tra lại mọi thông tin và xác nhận nộp
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                          <button type="button" class="btn btn-primary">Xác nhận</button>
                        </div>
                      </div>
                    </div>
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
export default UserPayFee