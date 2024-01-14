import UserSideBar from "../userSideBar"
import {useEffect, useState} from "react";
import api from "../../service/api";
import storage from "../../service/storage";
import {Button} from "react-bootstrap";

const UserFeeStatistic = () => {
    const [feeList, setFeeList] = useState([])
    const roomId = JSON.parse(storage.getValue("user")).room
    const [completeList, setCompleteList] = useState([])
    const [totalList, setTotalList] = useState([])
    const getFeeList = async () => {
        try{
            const { data } = await api.get(`v1/room/${roomId}/incomplete`)
            console.log(data.data)
            await setFeeList(data.data)
        }catch (e) {
            console.log(e.toString())
        }
    }

    const getCompleteList = async () => {
        try{
            const { data } = await api.get(`v1/room/${roomId}/complete`)
            setCompleteList(data.data)
        }catch(error){
            console.log(error)
        }
    }

    const initData = async () => {
        await getFeeList()
        await getCompleteList()
        setTotalList([...feeList,...completeList])
        console.log([...feeList,...completeList])
    }

    useEffect(() => {
        initData()
    }, []);

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
                        <option value="total">Tất cả</option>
                        <option value="child">Không Bắt buộc </option>
                        <option>Bắt buộc </option>
                        
                      </select></th>
                    <th>Tên phí</th>
                      <th>Số tiền</th>
                    <th>Trang thai</th>
                  </tr>
              </thead>
              <tbody>
              {totalList.map(item => (
                  <tr key={item.id}>
                      <td>1</td>
                      <td>2024</td>
                      <td>{item[0].mandatory ? 'Bắt buộc' : 'Không bắt buộc'}</td>
                      <td>{item[0].name}</td>
                      <td>{item[0].price}</td>
                      <td>{item[1]}</td>
                  </tr>
              ))}
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