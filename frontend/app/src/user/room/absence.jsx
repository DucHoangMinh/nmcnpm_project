import UserSideBar from "../userSideBar"

const UserAbsence = () => {
    return (
        <>
        <UserSideBar/>
            <div class="container" style={{marginTop:"-50px"}}>
    <h2>Thông tin tạm vắng</h2>

    <div class="row">
        <div class="col-sm-4">
            <form>
                <div class="form-group">
                    <label for="idNumber">Mã Căn cước</label>
                    <input type="text" class="form-control" id="idNumber"/>
                </div>
                <div class="form-group">
                    <label for="fromDate">Từ ngày</label>
                    <input type="date" class="form-control" id="fromDate"/>
                </div>
                <div class="form-group">
                    <label for="toDate">Đến ngày</label>
                    <input type="date" class="form-control" id="toDate"/>
                </div>
            </form>
            <button type="submit" class="btn btn-primary">Lưu thông tin</button>
        </div>
        <div class="col-sm-4">
            <form>
                <div class="form-group">
                    <label for="temporaryResidence">Nơi tạm trú</label>
                    <input type="text" class="form-control" id="temporaryResidence"/>
                </div>
                <div class="form-group">
                    <label for="temporaryResidenceCode">Mã giấy tạm trú</label>
                    <input type="text" class="form-control" id="temporaryResidenceCode"/>
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
export default UserAbsence