import SideBar from "../../../patials/sidebar"

const RoomList = () => {
    return (
        <>
            <SideBar/>
            <div className="container mt-5">
                <div className="row">
                <div className="col">
                    <h2 className="text-left mb-4">Danh sách các căn hộ</h2>

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
                            <th scope="col">Mã căn hộ</th>
                            <th scope="col">Số tầng</th>
                            <th scope="col">Diện tích (m2)</th>
                            <th scope="col">Loại phòng</th>
                            <th scope="col">Đơn giá (triệu đồng/m2/tháng)</th>
                            <th scope="col">Trạng thái</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>501</td>
                            <td>5</td>
                            <td>40</td>
                            <td>VJP</td>
                            <td>10</td>
                            <td className="form-group">
                            Còn trống
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>501</td>
                            <td>5</td>
                            <td>40</td>
                            <td>Thường</td>
                            <td>10</td>
                            <td className="form-group">
                            Còn trống
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>501</td>
                            <td>5</td>
                            <td>40</td>
                            <td>Thường</td>
                            <td>10</td>
                            <td className="form-group">
                            Còn trống
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>3001</td>
                            <td>5</td>
                            <td>40</td>
                            <td>Penhouse</td>
                            <td>10</td>
                            <td className="form-group">
                            Còn trống
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>501</td>
                            <td>5</td>
                            <td>40</td>
                            <td>VIP</td>
                            <td>10</td>
                            <td className="form-group">
                            Còn trống
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>501</td>
                            <td>5</td>
                            <td>40</td>
                            <td>VJP</td>
                            <td>10</td>
                            <td className="form-group">
                            Còn trống
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>501</td>
                            <td>5</td>
                            <td>40</td>
                            <td>VJP</td>
                            <td>10</td>
                            <td className="form-group">
                            Còn trống
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>501</td>
                            <td>5</td>
                            <td>40</td>
                            <td>Thường</td>
                            <td>10</td>
                            <td className="form-group">
                            <select className="form-control">
                                <option>Còn trống</option>
                                <option>Đã có người thuê</option>
                            </select> 
                            Đã có người thuê
                            </td>
                        </tr>
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

export default RoomList