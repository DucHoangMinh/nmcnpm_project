
const FeeCaculate = () => {
    return (
        <>
            <div className="container mt-5">
            <div className="row">

                <div className="col">
                    <h2 className="text-left mb-4">Tính các khoản phí với từng hộ gia đình</h2>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        <i className="bi bi-person-lines-fill"></i> Tạo biểu mẫu tính phí tới các hộ gia đình đã chọn
                    </button>
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-primary" id="exampleModalLabel">Hóa đơn thu phí</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form className="form-horizontal">

                                        <div className="form-group">
                                            <label for="inputPassword3" className="col-sm-10 col-form-label">Mô tả</label>
                                            <div className="col-sm-12">
                                                <input className="form-control" placeholder="Các khoản phí của tháng 11"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="inputPassword3" className="col-sm-10 col-form-label">Các quỹ tự
                                                nguyện</label>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="check1" name="option1"
                                                    value="something" checked/>
                                                <label className="form-check-label" for="check1">TN01</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="check2" name="option2"
                                                    value="something"/>
                                                <label className="form-check-label" for="check2">TN02</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="check3" name="option3"/>
                                                <label className="form-check-label">TN03</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="check1" name="option1"
                                                    value="something" checked/>
                                                <label className="form-check-label" for="check1">TN04</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="check2" name="option2"
                                                    value="something"/>
                                                <label className="form-check-label" for="check2">TN05</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-12" for="pwd">Ngày tạo hóa đơn:</label>
                                            <div className="col-sm-12">
                                                <input className="form-control" type="date"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="control-label col-sm-12" for="pwd">Ngày hết hạn:</label>
                                            <div className="col-sm-12">
                                                <input className="form-control" type="date"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="inputPassword3"
                                                className="col-sm-12 col-form-label bi-layout-text-window-reverse"/><b> Lưu ý:
                                                </b> 
                                                <br/>
                                                Nếu hết hạn, khoản phí còn thiếu sẽ được cộng vào tiền phí của tháng sau. 
                                                <br/>
                                                Phí nộp còn dư (nếu có) sẽ được trừ đi ở tiền phí tháng sau.

                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer text-center">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                    <button type="button" className="btn btn-primary">Gửi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-group mt-3 mb-3">
                        <input type="text" className="form-control" placeholder="Tìm kiếm"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                    <div className="text-center table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th rowspan="2">Chọn</th>
                                    <th rowspan="2">#</th>
                                    <th rowspan="2">Mã hộ gia đình</th>
                                    <th rowspan="2">Tháng</th>
                                    <th rowspan="2">BB01</th>
                                    <th rowspan="2">BB02</th>
                                    <th colspan="2">BB03</th>
                                    <th colspan="2">BB04</th>
                                    <th colspan="3">BB05</th>
                                    <th colspan="2">BB06</th>
                                    <th rowspan="2">Dư tháng trước</th>
                                    <th rowspan="2">Nợ tháng trước</th>
                                    <th rowspan="2">Tổng phí (đơn vị: VNĐ)</th>
                                </tr>
                                <tr>
                                    <th scope="col">Số xe máy</th>
                                    <th scope="col">Thành tiền</th>
                                    <th scope="col">Số xe ô tô</th>
                                    <th scope="col">Thành tiền</th>
                                    <th scope="col">Số đầu</th>
                                    <th scope="col">Số cuối</th>
                                    <th scope="col">Thành tiền</th>
                                    <th scope="col">Số khối</th>
                                    <th scope="col">Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <th>1</th>
                                    <td>3301</td>
                                    <td className="form-group"><input className="form-control"
                                        placeholder=""/>
                                    </td>
                                    <td>300000</td>
                                    <td>299000</td>
                                    <td>2</td>
                                    <td>140000</td>
                                    <td>1</td>
                                    <td>1200000</td>
                                    <td className="form-group"><input className="form-control"
                                        placeholder=""/>
                                    </td>
                                    <td className="form-group"><input className="form-control"
                                        placeholder=""/>
                                    </td>
                                    <td>204000</td>
                                    <td className="form-group"><input className="form-control"
                                        placeholder=""/>
                                    </td>
                                    <td>180000</td>
                                    <td>15000</td>
                                    <td>0</td>
                                    <td>9999999</td>
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

export default FeeCaculate;