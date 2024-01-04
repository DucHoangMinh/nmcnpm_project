import SideBar from "../../../patials/sidebar"

const ResidentProcessing = () => {
    return (
        <>
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Danh sách Phòng Chung Cư</title>
  <link href="./images/favicon.png" rel="icon" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="" name="keywords" />
  <meta content="" name="description" />
  <link
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link href="./Apartment Manager_files/style.css" rel="stylesheet" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html: "\n      .navbar-nav {\n        margin-left: auto;\n      }\n    "
    }}
  />
  <div
    id="spinner"
    className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      className="spinner-grow text-primary"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
  <br />
  <br />
  <br />
  <SideBar/>
  <div className="container">
    <div className="row">
      <div className="col">
        <h2 className="text-left mb-4">
          Danh sách các yêu cầu thay đổi thông tin cư trú
        </h2>
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Yêu cầu tạm trú
                </button>
              </h5>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="mb-3">
                  Yêu cầu được gửi trong giai đoạn
                  <table>
                    <thead />
                    <tbody>
                      <tr>
                        <td>từ ngày</td>
                        <td>
                          <input type="date" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>đến ngày</td>
                        <td>
                          <input type="date" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>Sắp xếp theo</td>
                        <td>
                          <select className="form-control">
                            <option>Mới nhất</option>
                            <option>Cũ nhất</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="input-group mt-3 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm kiếm"
                  />
                  <div className="input">
                    <button className="btn btn-outline-secondary" type="button">
                      <i className="bi bi-search" />
                    </button>
                  </div>
                </div>
                <div className="text-center table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã đăng ký</th>
                        <th scope="col">Họ và tên người đăng ký</th>
                        <th scope="col">Thời gian gửi</th>
                        <th>Xem chi tiết</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>TT01</td>
                        <td className="name">lê văn f</td>
                        <td>12:15:00 14/6/2023</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#xulytamtru"
                          >
                            <i className="bi bi-three-dots" />
                          </button>
                          <div
                            className="modal fade"
                            id="xulytamtru"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby=""
                            aria-hidden="true"
                          >
                            <div
                              className="text-left modal-dialog"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title">
                                    Đăng ký tạm trú
                                  </h5>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <form className="form-horizontal">
                                    <div className="form-group">
                                      <label
                                        className="control-label col-sm-10"
                                        htmlFor="email"
                                      >
                                        Họ và tên người đăng ký
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          defaultValue=""
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        className="control-label col-sm-10"
                                        htmlFor="pwd"
                                      >
                                        Số căn cước
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          defaultValue=""
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="control-label col-sm-10">
                                        Mã đăng ký
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          defaultValue=""
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="control-label col-sm-10">
                                        Địa chỉ đăng ký
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          disabled=""
                                          placeholder={1108}
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="control-label col-sm-10">
                                        Họ và tên của chủ hộ
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          defaultValue=""
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="control-label col-sm-10">
                                        Số căn cước
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          defaultValue=""
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="control-label col-sm-10">
                                        Quan hệ với chủ hộ
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          defaultValue=""
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        className="control-label col-sm-10"
                                        htmlFor="pwd"
                                      >
                                        Nội dung đề nghị
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          placeholder="Tạm trú"
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        htmlFor="inputPassword3"
                                        className="col-sm-10 col-form-label"
                                      >
                                        Từ ngày
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          type="date"
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        htmlFor="inputPassword3"
                                        className="col-sm-10 col-form-label"
                                      >
                                        Đến ngày
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          type="date"
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-toggle="modal"
                                    data-target="#declinemodal1"
                                  >
                                    Từ chối
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#acceptmodal1"
                                  >
                                    Chấp nhận
                                  </button>
                                  <div
                                    className="modal fade"
                                    id="declinemodal1"
                                    tabIndex={-1}
                                    role="dialog"
                                    aria-labelledby=""
                                    aria-hidden="true"
                                  >
                                    <div
                                      className="text-left modal-dialog"
                                      role="document"
                                    >
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <h5 className="modal-title">
                                            Gửi phản hồi
                                          </h5>
                                          <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                          >
                                            <span aria-hidden="true">×</span>
                                          </button>
                                        </div>
                                        <div className="modal-body">
                                          <form className="form-horizontal">
                                            <div className="form-group">
                                              <label
                                                className="control-label col-sm-10"
                                                htmlFor="email"
                                              >
                                                Lời nhắn
                                              </label>
                                              <div className="col-sm-12">
                                                <input
                                                  className="form-control"
                                                  placeholder="Bạn không đẹp trai"
                                                />
                                                {/* chỗ placeholder thay bằng tên người dùng hiện tại */}
                                              </div>
                                            </div>
                                          </form>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-dismiss="modal"
                                            >
                                              Đóng
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-primary"
                                            >
                                              Gửi phản hồi
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="modal fade"
                                    id="acceptmodal1"
                                    tabIndex={-1}
                                    role="dialog"
                                    aria-labelledby=""
                                    aria-hidden="true"
                                  >
                                    <div
                                      className="text-left modal-dialog"
                                      role="document"
                                    >
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <h5 className="modal-title">
                                            Gửi phản hồi
                                          </h5>
                                          <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                          >
                                            <span aria-hidden="true">×</span>
                                          </button>
                                        </div>
                                        <div className="modal-body">
                                          <form className="form-horizontal">
                                            <div className="form-group">
                                              <label
                                                className="control-label col-sm-10"
                                                htmlFor="email"
                                              >
                                                Lời nhắn
                                              </label>
                                              <div className="col-sm-12">
                                                <input
                                                  className="form-control"
                                                  placeholder="Hồ sơ hợp lệ. Vui lòng chuẩn bị thông tin cá nhân (thẻ căn cước, số điện thoại) các thành viên trong gia đình để làm hợp đồng."
                                                />
                                              </div>
                                            </div>
                                          </form>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-dismiss="modal"
                                            >
                                              Đóng
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-primary"
                                            >
                                              Gửi phản hồi
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Yêu cầu tạm vắng
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="mb-3">
                  Yêu cầu được gửi trong giai đoạn
                  <table>
                    <thead />
                    <tbody>
                      <tr>
                        <td>từ ngày</td>
                        <td>
                          <input type="date" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>đến ngày</td>
                        <td>
                          <input type="date" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>Sắp xếp theo</td>
                        <td>
                          <select className="form-control">
                            <option>Mới nhất</option>
                            <option>Cũ nhất</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-center table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã đăng ký</th>
                        <th scope="col">Họ và tên người đăng ký</th>
                        <th scope="col">Thời gian gửi</th>
                        <th>Xem chi tiết</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>TT01</td>
                        <td className="name">lê văn f</td>
                        <td>12:15:00 14/6/2023</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#xulytamvang"
                          >
                            <i className="bi bi-three-dots" />
                          </button>
                          <div
                            className="modal fade"
                            id="xulytamvang"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby=""
                            aria-hidden="true"
                          >
                            <div
                              className="text-left modal-dialog"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title">
                                    Đăng ký tạm vắng
                                  </h5>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <form className="form-horizontal">
                                    <div className="form-group">
                                      <label
                                        className="control-label col-sm-10"
                                        htmlFor="email"
                                      >
                                        Họ và tên người đăng ký
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          defaultValue=""
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        className="control-label col-sm-10"
                                        htmlFor="pwd"
                                      >
                                        Số căn cước
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          defaultValue=""
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="control-label col-sm-10">
                                        Mã đăng ký
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          defaultValue=""
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="control-label col-sm-10">
                                        Địa chỉ đăng ký
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          type="text"
                                          className="form-control"
                                          disabled=""
                                          placeholder={301}
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        className="control-label col-sm-10"
                                        htmlFor="pwd"
                                      >
                                        Nội dung đề nghị
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          placeholder="Tạm trú"
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        htmlFor="inputPassword3"
                                        className="col-sm-10 col-form-label"
                                      >
                                        Từ ngày
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          type="date"
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        htmlFor="inputPassword3"
                                        className="col-sm-10 col-form-label"
                                      >
                                        Đến ngày
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          type="date"
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        className="control-label col-sm-10"
                                        htmlFor="pwd"
                                      >
                                        Lý do
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          placeholder="Tạm trú"
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                                <div className="modal-footer">
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-toggle="modal"
                                      data-target="#declinemodal2"
                                    >
                                      Từ chối
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-toggle="modal"
                                      data-target="#acceptmodal2"
                                    >
                                      Chấp nhận
                                    </button>
                                    <div
                                      className="modal fade"
                                      id="declinemodal2"
                                      tabIndex={-1}
                                      role="dialog"
                                      aria-labelledby=""
                                      aria-hidden="true"
                                    >
                                      <div
                                        className="text-left modal-dialog"
                                        role="document"
                                      >
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5 className="modal-title">
                                              Gửi phản hồi
                                            </h5>
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                              aria-label="Close"
                                            >
                                              <span aria-hidden="true">×</span>
                                            </button>
                                          </div>
                                          <div className="modal-body">
                                            <form className="form-horizontal">
                                              <div className="form-group">
                                                <label
                                                  className="control-label col-sm-10"
                                                  htmlFor="email"
                                                >
                                                  Lời nhắn
                                                </label>
                                                <div className="col-sm-12">
                                                  <input
                                                    className="form-control"
                                                    placeholder="Bạn không đẹp trai"
                                                  />
                                                  {/* chỗ placeholder thay bằng tên người dùng hiện tại */}
                                                </div>
                                              </div>
                                            </form>
                                            <div className="modal-footer">
                                              <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-dismiss="modal"
                                              >
                                                Đóng
                                              </button>
                                              <button
                                                type="button"
                                                className="btn btn-primary"
                                              >
                                                Gửi phản hồi
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="modal fade"
                                      id="acceptmodal2"
                                      tabIndex={-1}
                                      role="dialog"
                                      aria-labelledby="acceptmodal"
                                      aria-hidden="true"
                                    >
                                      <div
                                        className="text-left modal-dialog"
                                        role="document"
                                      >
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5 className="modal-title">
                                              Gửi phản hồi
                                            </h5>
                                            <button
                                              type="button"
                                              className="close"
                                              data-dismiss="modal"
                                              aria-label="Close"
                                            >
                                              <span aria-hidden="true">×</span>
                                            </button>
                                          </div>
                                          <div className="modal-body">
                                            <form className="form-horizontal">
                                              <div className="form-group">
                                                <label
                                                  className="control-label col-sm-10"
                                                  htmlFor="email"
                                                >
                                                  Lời nhắn
                                                </label>
                                                <div className="col-sm-12">
                                                  <input
                                                    className="form-control"
                                                    placeholder="Hồ sơ hợp lệ. Vui lòng chuẩn bị thông tin cá nhân (thẻ căn cước, số điện thoại) các thành viên trong gia đình để làm hợp đồng."
                                                  />
                                                </div>
                                              </div>
                                            </form>
                                            <div className="modal-footer">
                                              <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-dismiss="modal"
                                              >
                                                Đóng
                                              </button>
                                              <button
                                                type="button"
                                                className="btn btn-primary"
                                              >
                                                Gửi phản hồi
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Yêu cầu thường trú
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="mb-3">
                  Yêu cầu được gửi trong giai đoạn
                  <table>
                    <thead />
                    <tbody>
                      <tr>
                        <td>từ ngày</td>
                        <td>
                          <input type="date" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>đến ngày</td>
                        <td>
                          <input type="date" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>Sắp xếp theo</td>
                        <td>
                          <select className="form-control">
                            <option>Mới nhất</option>
                            <option>Cũ nhất</option>
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-center table-responsive">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã đăng ký</th>
                        <th scope="col">Họ và tên người đăng ký</th>
                        <th scope="col">Thời gian gửi</th>
                        <th>Xem chi tiết</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>TT01</td>
                        <td className="name">lê văn f</td>
                        <td>12:15:00 14/6/2023</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#xulythuongtru"
                          >
                            <i className="bi bi-three-dots" />
                          </button>
                          <div
                            className="modal fade"
                            id="xulythuongtru"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby=""
                            aria-hidden="true"
                          >
                            <div
                              className="text-left modal-dialog"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title">
                                    Đăng ký thường trú
                                  </h5>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <form className="form-horizontal">
                                    <div className="form-group">
                                      <label
                                        className="control-label col-sm-10"
                                        htmlFor="email"
                                      >
                                        Họ và tên người đăng ký
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          defaultValue=""
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        className="control-label col-sm-10"
                                        htmlFor="pwd"
                                      >
                                        Số căn cước
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          defaultValue=""
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="control-label col-sm-10">
                                        Mã đăng ký
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          defaultValue=""
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="control-label col-sm-10">
                                        Địa chỉ đăng ký
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          disabled=""
                                          placeholder={1108}
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="control-label col-sm-10">
                                        Họ và tên của chủ hộ
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          defaultValue=""
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="control-label col-sm-10">
                                        Số căn cước
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          defaultValue=""
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label className="control-label col-sm-10">
                                        Quan hệ với chủ hộ
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          defaultValue=""
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        className="control-label col-sm-10"
                                        htmlFor="pwd"
                                      >
                                        Nội dung đề nghị
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          placeholder="Tạm trú"
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        htmlFor="inputPassword3"
                                        className="col-sm-10 col-form-label"
                                      >
                                        Từ ngày
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          type="date"
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        htmlFor="inputPassword3"
                                        className="col-sm-10 col-form-label"
                                      >
                                        Đến ngày
                                      </label>
                                      <div className="col-sm-12">
                                        <input
                                          className="form-control"
                                          type="date"
                                          disabled=""
                                        />
                                      </div>
                                    </div>
                                  </form>
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-toggle="modal"
                                    data-target="#declinemodal3"
                                  >
                                    Từ chối
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#acceptmodal3"
                                  >
                                    Chấp nhận
                                  </button>
                                  <div
                                    className="modal fade"
                                    id="declinemodal3"
                                    tabIndex={-1}
                                    role="dialog"
                                    aria-labelledby=""
                                    aria-hidden="true"
                                  >
                                    <div
                                      className="text-left modal-dialog"
                                      role="document"
                                    >
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <h5 className="modal-title">
                                            Gửi phản hồi
                                          </h5>
                                          <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                          >
                                            <span aria-hidden="true">×</span>
                                          </button>
                                        </div>
                                        <div className="modal-body">
                                          <form className="form-horizontal">
                                            <div className="form-group">
                                              <label
                                                className="control-label col-sm-10"
                                                htmlFor="email"
                                              >
                                                Lời nhắn
                                              </label>
                                              <div className="col-sm-12">
                                                <input
                                                  className="form-control"
                                                  placeholder="Bạn không đẹp trai"
                                                />
                                                {/* chỗ placeholder thay bằng tên người dùng hiện tại */}
                                              </div>
                                            </div>
                                          </form>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-dismiss="modal"
                                            >
                                              Đóng
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-primary"
                                            >
                                              Gửi phản hồi
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="modal fade"
                                    id="acceptmodal3"
                                    tabIndex={-1}
                                    role="dialog"
                                    aria-labelledby=""
                                    aria-hidden="true"
                                  >
                                    <div
                                      className="text-left modal-dialog"
                                      role="document"
                                    >
                                      <div className="modal-content">
                                        <div className="modal-header">
                                          <h5 className="modal-title">
                                            Gửi phản hồi
                                          </h5>
                                          <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                          >
                                            <span aria-hidden="true">×</span>
                                          </button>
                                        </div>
                                        <div className="modal-body">
                                          <form className="form-horizontal">
                                            <div className="form-group">
                                              <label
                                                className="control-label col-sm-10"
                                                htmlFor="email"
                                              >
                                                Lời nhắn
                                              </label>
                                              <div className="col-sm-12">
                                                <input
                                                  className="form-control"
                                                  placeholder="Hồ sơ hợp lệ. Vui lòng chuẩn bị thông tin cá nhân (thẻ căn cước, số điện thoại) các thành viên trong gia đình để làm hợp đồng."
                                                />
                                              </div>
                                            </div>
                                          </form>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-dismiss="modal"
                                            >
                                              Đóng
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-primary"
                                            >
                                              Gửi phản hồi
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          <a href="#">Lên đầu trang</a>
        </p>
      </div>
    </div>
  </div>
  <footer id="footer" className="footer">
    <div className="copyright">
      © Copyright{" "}
      <strong>
        <span>BlueMoon</span>
      </strong>
      . All Rights Reserved
    </div>
    <div className="credits">
      Designed by{" "}
      <a href="https://google.com/">
        Group 10 - Introduction to Software Engineering - 2023.1
      </a>
    </div>
  </footer>
        </>
    )
}

export default ResidentProcessing