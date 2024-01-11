import UserSideBar from "../userSideBar"
import {useEffect, useState} from "react";
import storage from "../../service/storage";
import api from "../../service/api";

const UserHome = () => {
    const [feeList, setFeeList] = useState([])
    const roomId = JSON.parse(storage.getValue("user")).room
    const [roomInfor, setRoomInfor] = useState({})
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
            console.log(data.data)
            await setFeeList(data.data)
        }catch (e) {
            console.log(e.toString())
        }
    }

    const init = async () => {
        await getRoomInfor()
        await getFeeList()
    }
    useEffect(() => {
        init()
    }, []);

    return (
        <>  
        <UserSideBar/>
        <div class="container" style={{marginTop:"-50px"}}>
          <div class="row">
              <div class="col-lg-6 offset-lg-3">
                <h2 class="text-center mb-4">Xin chào, cư dân Trần Văn A</h2>
                <form>
                    {
                        feeList.length == 0 && <h4>Bạn không có thông báo mới nào !</h4>
                    }
                    {
                        feeList.length > 0 && <h4>Bạn có {feeList.length} khoản phí chưa đóng, vui lòng vào mục đóng phí để xem chi tiết</h4>
                    }
                </form>
              </div>
            </div>
        </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
          </>
      )
}
export default UserHome