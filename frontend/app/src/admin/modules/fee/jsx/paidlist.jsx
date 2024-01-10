import SideBar from "../../../patials/sidebar";
import {useEffect, useState} from "react";
import api from "../../../../service/api";

const PaidList = () => {

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
                                        <th scope="col">Phí phải đóng</th>
                                        <th scope="col">Tình trạng đóng</th>
                                        <th scope="col">Thời gian đóng</th>
                                        <th scope="col">Phí còn thiếu</th>
                                        <th scope="col">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>501</td>
                                        <td>1200000</td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="text-left"><input className="form-control" type="datetime-local" id="Test_DatetimeLocal"/></td>
                                        <td>400000</td>
                                        <td>Còn thiếu</td>
                                    </tr>
                                    {paymentStatus.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.age}</td>
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