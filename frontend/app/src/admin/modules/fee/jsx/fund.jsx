
const FundStatistic = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">

                <div className="col">
                    <h2 className="text-left mb-4">Thống kê đóng góp các quỹ tự nguyện</h2>
                    <div className="input-group mt-3 mb-3">
                    <input type="text" className="form-control" placeholder="Tìm kiếm"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button"><i className="bi bi-search"></i></button>
                    </div>
                    </div>
                    
                    <div className="text-center table-responsive mt-3">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã hộ gia đình</th>
                            <th>TN01</th>
                            <th>TN02</th>
                            <th>TN03</th>
                            <th>TN04</th>
                            <th>TN05</th>
                            <th>Tổng đóng góp của hộ (đơn vị: VNĐ)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>1</th>
                            <td>810</td>
                            <td>20000</td>
                            <td>30000</td>
                            <td>20000</td>
                            <td>15000</td>
                            <td>50000</td>
                            <td>135000</td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <th>#</th>
                            <th>Tổng quỹ (đơn vị: VNĐ)</th>
                            <th>20000</th>
                            <th>30000</th>
                            <th>20000</th>
                            <th>15000</th>
                            <th>50000</th>
                            <th>135000</th>
                        </tr>
                        </tfoot>
                    </table>
                    </div>

                    <p><a href="#">Lên đầu trang</a></p>
                </div>
                </div>

            </div>
        </>
    )
}

export default FundStatistic