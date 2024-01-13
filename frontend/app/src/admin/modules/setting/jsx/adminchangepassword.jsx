import React, {useState} from 'react';
import SideBar from '../../../patials/sidebar';

const AdminChangePassword = () => {

  const [oldPass, setOldPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [renewPass, setRenewPass] = useState('')

  return (
    <>
    <SideBar/>
      <br /><br /><br />

      <div className="container" style={{ alignItems: 'center', justifyContent: 'center', 'margin-top': "-70px" }}>
        <div className="row">
          <div className="col">
            <h2 className="text-left mb-4">Thay đổi mật khẩu</h2>
            <form action="#">
              <table className="table table-borderless table-responsive">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Mật khẩu cũ</td>
                    <td><input value={oldPass} onChange={e => setOldPass(e.target.value)} name="password" type="password" className="form-control" id="currentPassword" /></td>
                  </tr>
                  <tr>
                    <td>Mật khẩu mới</td>
                    <td><input value={newPass} onChange={e => setNewPass(e.target.value)} name="password" type="password" className="form-control" id="newPassword" /></td>
                  </tr>
                  <tr>
                    <td>Nhập lại mật khẩu mới</td>
                    <td><input value={renewPass} name="password" type="password" className="form-control" id="confirmPassword" onChange={e => setRenewPass(e.target.value)} /></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2" className="text-center">
                      <button className="btn btn-primary">Thay đổi</button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </form>
          </div>
        </div>
      </div>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </>
  );
};

export default AdminChangePassword;
