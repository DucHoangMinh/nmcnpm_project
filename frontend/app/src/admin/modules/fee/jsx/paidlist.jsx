import SideBar from "../../../patials/sidebar"

const PaidList = () => {
    return (
        <>
            <SideBar/>
            <div className="container mt-5">
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
                                        <th scope="col">Phí đã đóng</th>
                                        <th scope="col">TN01</th>
                                        <th scope="col">TN02</th>
                                        <th scope="col">TN03</th>
                                        <th scope="col">TN04</th>
                                        <th scope="col">TN05</th>
                                        <th scope="col">Thời gian đóng</th>
                                        <th scope="col">Phí còn thiếu</th>
                                        <th scope="col">Trạng thái</th>
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
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="text-left"><input className="form-control" type="datetime-local" id="Test_DatetimeLocal"/></td>
                                        <td>400000</td>
                                        <td>Còn thiếu</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>502</td>
                                        <td>1200000</td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="text-left"><input className="form-control" type="datetime-local" id="Test_DatetimeLocal"/></td>
                                        <td>0</td>
                                        <td>Hoàn thành</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>2908</td>
                                        <td>2500000</td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="text-left"><input className="form-control" type="datetime-local" id="Test_DatetimeLocal"/></td>
                                        <td>2500000</td>
                                        <td>Hết hạn</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>2908</td>
                                        <td>2500000</td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="form-group"><input className="form-control"
                                            placeholder=""/>
                                        </td>
                                        <td className="text-left"><input className="form-control" type="datetime-local" id="Test_DatetimeLocal"/></td>
                                        <td>-30000</td>
                                        <td>Còn dư</td>
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

export default PaidList;