import SideBar from "../../../patials/sidebar";
import {useEffect, useState} from "react";
import api from "../../../../service/api";
import {Button} from "react-bootstrap";
import {showNotice} from "../../../../common/showNotice";

const PaidList = () => {

    let a = 1;

    const [paymentStatus, setPaymentStatus] = useState([])
    const getPaymentStatus = async () => {
        try{
            const { data } = await api.get('v1/payment?pageSize=50')
            setPaymentStatus(data.data.content)
            console.log(data.data.content)
        }catch (error){
            console.log(error)
        }

    }

    const handleAcceptPyament = async (feeId, roomId) => {
        try{
            const { data } = await api.patch(`v1/payment/complete?room=${roomId}&fee=${feeId}`)
            showNotice(1,`Xác nhận đã đóng phí ${feeId} cho phòng ${roomId} thành công`)
            await init()
        }catch (error){
            window.alert(error.toString())
        }
    }

    const init = async () => {
        await getPaymentStatus()
    }

    useEffect(() => {
        init()
    }, []);

    return (
        <>
        <SideBar/>
            <div className="container" style={{'margin-top': "-70px"}}>
                <div className="row">

                    <div className="col">
                        <h2 className="text-left mb-4">Tình trạng đóng phí</h2>

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Tìm kiếm"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                        <div className="text-center table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Mã hộ gia đình</th>
                                    <th scope="col">Mã phí</th>
                                    <th scope="col">Tên khoản phí</th>
                                    <th scope="col">Phí phải đóng</th>
                                    <th scope="col">Tình trạng đóng</th>
                                    <th scope="col">Thời gian đóng</th>
                                    <th scope="col">Ảnh đóng phí</th>
                                    <th scope="col">Hành động</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {paymentStatus.map(item => (
                                        <tr key={item.id}>
                                            <td>{a ++}</td>
                                            <td>{item.room.id}</td>
                                            <td>{item.fee.id}</td>
                                            <td>{item.fee.name}</td>
                                            <td>{item.totalMoney}</td>
                                            <td>{item.status}</td>
                                            <td>{item.submitted_date || 'N/A'}</td>
                                            <td>N/A</td>
                                            <td>
                                                <Button onClick={() => handleAcceptPyament(item.fee.id, item.room.id)}
                                                        disabled={item.status != "PENDING"}>
                                                    {item.status == "PENDING" ? 'Xác nhận đã đóng' : (item.submitted_date ? 'Hoàn thành' :'Đang chờ đóng')}
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p><a href="#">Lên đầu trang</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaidList;