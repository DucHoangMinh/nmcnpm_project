import UserSideBar from "../userSideBar"

const UserAbsence = () => {
    return (
        <>
        <UserSideBar/>
            <div class="container" style={{marginTop:"-50px"}}>
    <h2>Thông tin tạm vắng</h2>

    <div class="row">
        <div class="col-sm-12">
            <form>
                <div className="form-group">
                    <label htmlFor="idNumber">Họ và tên</label>
                    <input type="text" className="form-control" id="idNumber"/>
                </div>
                <div className="form-group">
                    <label htmlFor="idNumber">Mã Căn cước</label>
                    <input type="text" className="form-control" id="idNumber"/>
                </div>
                <div className="form-group">
                    <label htmlFor="fromDate">Từ ngày</label>
                    <input type="date" className="form-control" id="fromDate"/>
                </div>
                <div className="form-group">
                    <label htmlFor="toDate">Đến ngày</label>
                    <input type="date" className="form-control" id="toDate"/>
                </div>
                <div className="form-group">
                    <label htmlFor="toDate">Lý do</label>
                    <input type="text" className="form-control" id="toDate"/>
                </div>
            </form>
            <button type="submit" class="btn btn-primary" onClick={() => {window.location.href="http://localhost:3000/user/room/absence"}}>Lưu thông tin</button>
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
export default UserAbsence