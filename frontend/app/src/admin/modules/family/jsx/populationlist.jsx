const PopulationList = () => {
    return (
        <>
  <meta charSet="UTF-8" />
  <title>Quản lý tạm trú</title>
  <link href="./images/favicon.png" rel="icon" />
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
      __html:
        "\n        .navbar-nav {\n            margin-left: auto;\n        }\n    "
    }}
  />
  <br />
  <br />
  <br />
  <div className="container mt-5">
    <h2>Thông tin cư trú các thành viên</h2>
    <button
      type="button"
      className="btn btn-primary mt-3"
      data-toggle="modal"
      data-target="#newResident"
    >
      <i className="bi bi-plus-square-fill" /> Thêm thành viên
    </button>
    <button
      type="button"
      className="btn btn-primary mt-3"
      data-toggle="modal"
      data-target="#tamtrungoai"
    >
      <i className="bi bi-plus-square-fill" /> Đăng ký tạm trú
    </button>
    <button
      type="button"
      className="btn btn-primary mt-3"
      data-toggle="modal"
      data-target="#tamvangngoai"
    >
      <i className="bi bi-plus-square-fill" /> Đăng ký tạm vắng
    </button>
    <button
      type="button"
      className="btn btn-primary mt-3"
      data-toggle="modal"
      data-target="#thuongtru"
    >
      <i className="bi bi-plus-square-fill" /> Đăng ký thường trú
    </button>
    {/* Modal */}
    <div
      className="modal fade"
      id="newResident"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="newResident"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-primary" id="exampleModalLabel">
              Thông tin cư dân mới
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
            <div className="form-group">
              <label className="control-label col-sm-10" htmlFor="pwd">
                Ảnh chụp căn cước (2 mặt)
              </label>
              <div className="col-sm-12">
                <img src="" alt="Mặt trước" />
                <div className="form-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Chọn tệp
                    </label>
                  </div>
                </div>
                <img src="" alt="Mặt sau" />
                <div className="form-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                    />
                    <label className="custom-file-label" htmlFor="customFile">
                      Chọn tệp
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <table className="text-left table table-borderless table-responsive">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Họ và tên</td>
                  <td>
                    <input type="text" name="" id="" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>Giới tính</td>
                  <td>
                    <select name="" id="" className="form-control">
                      <option value={1}>Nam</option>
                      <option value={2}>Nữ</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Số căn cước</td>
                  <td className="form-group">
                    <input className="form-control" placeholder="" />
                  </td>
                </tr>
                <tr>
                  <td>Ngày cấp</td>
                  <td>
                    <input type="date" name="" id="" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>Địa chỉ thường trú</td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>Số điện thoại liên hệ</td>
                  <td className="form-group">
                    <input className="form-control" placeholder="" />
                  </td>
                </tr>
                <tr>
                  <td>Nghề nghiệp</td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>Nơi làm việc</td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td>Đến chung cư từ ngày</td>
                  <td>
                    <input type="date" className="form-control" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Đóng
            </button>
            <button type="button" className="btn btn-primary">
              Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      className="modal fade"
      id="tamtrungoai"
      tabIndex={-1}
      role="dialog"
      aria-labelledby=""
      aria-hidden="true"
    >
      <div className="text-left modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-primary">Đăng ký tạm trú</h5>
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
                <label className="control-label col-sm-10" htmlFor="email">
                  Họ và tên người đăng ký
                </label>
                <div className="col-sm-12">
                  <input className="form-control" defaultValue="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10" htmlFor="pwd">
                  Số căn cước
                </label>
                <div className="col-sm-12">
                  <input className="form-control" defaultValue="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10">Mã đăng ký</label>
                <div className="col-sm-12">
                  <input className="form-control" defaultValue="" disabled="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10">
                  Địa chỉ đăng ký
                </label>
                <div className="col-sm-12">
                  <select className="form-control form-select">
                    <option selected="">Chọn phòng</option>
                    <option value={1}>401</option>
                    <option value={2}>402</option>
                    <option value={3}>...</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10">
                  Họ và tên của chủ hộ
                </label>
                <div className="col-sm-12">
                  <input className="form-control" defaultValue="" disabled="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10">Số căn cước</label>
                <div className="col-sm-12">
                  <input className="form-control" defaultValue="" disabled="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10">
                  Quan hệ với chủ hộ
                </label>
                <div className="col-sm-12">
                  <input className="form-control" defaultValue="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10" htmlFor="pwd">
                  Nội dung đề nghị
                </label>
                <div className="col-sm-12">
                  <input className="form-control" placeholder="Tạm trú" />
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
                  <input className="form-control" type="date" />
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
                  <input className="form-control" type="date" />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Đóng
            </button>
            <button type="button" className="btn btn-primary">
              Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      className="modal fade"
      id="tamvangngoai"
      tabIndex={-1}
      role="dialog"
      aria-labelledby=""
      aria-hidden="true"
    >
      <div className="text-left modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-primary">Đăng ký tạm vắng</h5>
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
                <label className="control-label col-sm-10" htmlFor="email">
                  Họ và tên người đăng ký
                </label>
                <div className="col-sm-12">
                  <input className="form-control" defaultValue="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10" htmlFor="pwd">
                  Số căn cước
                </label>
                <div className="col-sm-12">
                  <input className="form-control" defaultValue="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10">Mã đăng ký</label>
                <div className="col-sm-12">
                  <input className="form-control" defaultValue="" disabled="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10">
                  Địa chỉ đăng ký
                </label>
                <div className="col-sm-12">
                  <select className="form-control form-select">
                    <option selected="">Chọn phòng</option>
                    <option value={1}>401</option>
                    <option value={2}>402</option>
                    <option value={3}>...</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10" htmlFor="pwd">
                  Nội dung đề nghị
                </label>
                <div className="col-sm-12">
                  <input className="form-control" placeholder="Tạm trú" />
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
                  <input className="form-control" type="date" />
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
                  <input className="form-control" type="date" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10" htmlFor="pwd">
                  Lý do
                </label>
                <div className="col-sm-12">
                  <input className="form-control" placeholder="Tạm trú" />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Đóng
            </button>
            <button type="button" className="btn btn-primary">
              Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      className="modal fade"
      id="thuongtru"
      tabIndex={-1}
      role="dialog"
      aria-labelledby=""
      aria-hidden="true"
    >
      <div className="text-left modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-primary">Đăng ký thường trú</h5>
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
                <label className="control-label col-sm-10" htmlFor="email">
                  Họ và tên người đăng ký
                </label>
                <div className="col-sm-12">
                  <input className="form-control" defaultValue="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10" htmlFor="pwd">
                  Số căn cước
                </label>
                <div className="col-sm-12">
                  <input className="form-control" defaultValue="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10">Mã đăng ký</label>
                <div className="col-sm-12">
                  <input className="form-control" defaultValue="" disabled="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10">
                  Địa chỉ đăng ký
                </label>
                <div className="col-sm-12">
                  <select className="form-control form-select">
                    <option selected="">Chọn phòng</option>
                    <option value={1}>401</option>
                    <option value={2}>402</option>
                    <option value={3}>...</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10">
                  Họ và tên của chủ hộ
                </label>
                <div className="col-sm-12">
                  <input className="form-control" defaultValue="" disabled="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10">Số căn cước</label>
                <div className="col-sm-12">
                  <input className="form-control" defaultValue="" disabled="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10">
                  Quan hệ với chủ hộ
                </label>
                <div className="col-sm-12">
                  <input className="form-control" defaultValue="" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-10" htmlFor="pwd">
                  Nội dung đề nghị
                </label>
                <div className="col-sm-12">
                  <input className="form-control" placeholder="Thường trú" />
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
                  <input className="form-control" type="date" />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Đóng
            </button>
            <button type="button" className="btn btn-primary">
              Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className=" mt-3 mb-3">
      Bắt đầu thuê trong giai đoạn
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
            <td>Số tháng đã thuê</td>
            <td>
              <input className="form-control" />
            </td>
          </tr>
          <tr>
            <td>Giới tính</td>
            <td>
              <select className="form-control">
                <option>Chọn tất cả</option>
                <option>Nam</option>
                <option>Nữ</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Trạng thái</td>
            <td className="form-group">
              <select className="form-control" id="sel1" name="sellist1">
                <option>Chưa đăng ký</option>
                <option>Tạm vắng</option>
                <option>Thường trú</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="input-group mt-3 mb-3">
      <input type="text" className="form-control" placeholder="Tìm kiếm" />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
          <i className="bi bi-search" />
        </button>
      </div>
    </div>
    <table className="text-center table table-bordered table-hover mt-3">
      <thead>
        <tr>
          <th>#</th>
          <th>Họ và tên cư dân</th>
          <th>Giới tính</th>
          <th>Số căn cước</th>
          <th>Số điện thoại liên hệ</th>
          <th>Ngày bắt đầu ở</th>
          <th>Trạng thái</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td className="text-left name">a văn B</td>
          <td>Nam</td>
          <td>023233000020</td>
          <td>19001008</td>
          <td>12/12/1212</td>
          <td>Tạm trú</td>
          <td>
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#detailresident"
            >
              <i className="bi bi-three-dots" />
            </button>
            <button className="btn btn-primary">
              <i className="bi bi-x-square-fill" />
            </button>
            <div
              className="modal fade"
              id="detailresident"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="detailresident"
              aria-hidden="true"
            >
              <div
                className="text-left modal-dialog modal-fullscreen"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h2 className="text-primary modal-title">
                      Thông tin chi tiết
                    </h2>
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
                    <div className="form-group">
                      <label className="control-label col-sm-10" htmlFor="pwd">
                        Ảnh chụp căn cước (2 mặt)
                      </label>
                      <div className="col-sm-12">
                        <img src="" alt="Mặt trước" />
                        <img src="" alt="Mặt sau" />
                      </div>
                    </div>
                    <table className="text-left table table-borderless table-responsive">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td>Họ và tên</td>
                          <td>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="form-control"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Giới tính</td>
                          <td>
                            <select name="" id="" className="form-control">
                              <option value={1}>Nam</option>
                              <option value={2}>Nữ</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>Số căn cước</td>
                          <td className="form-group">
                            <input className="form-control" placeholder="" />
                          </td>
                        </tr>
                        <tr>
                          <td>Ngày cấp</td>
                          <td>
                            <input
                              type="date"
                              name=""
                              id=""
                              className="form-control"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Địa chỉ thường trú</td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                        </tr>
                        <tr>
                          <td>Số điện thoại liên hệ</td>
                          <td className="form-group">
                            <input className="form-control" placeholder="" />
                          </td>
                        </tr>
                        <tr>
                          <td>Nghề nghiệp</td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                        </tr>
                        <tr>
                          <td>Nơi làm việc</td>
                          <td>
                            <input type="text" className="form-control" />
                          </td>
                        </tr>
                        <tr>
                          <td>Đến chung cư từ ngày</td>
                          <td>
                            <input
                              type="date"
                              className="form-control"
                              disabled=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Mã hộ gia đình</td>
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              disabled=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Trạng thái</td>
                          <td className="form-group">
                            <select name="" id="" className="form-control">
                              <option value={1}>Chưa đăng ký</option>
                              <option value={2}>Tạm trú</option>
                              <option value={3}>Thường trú</option>
                              <option value={4}>Tạm vắng</option>
                            </select>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="text-center">
                      <h4 className="mb-3 mt-3">Thông tin tạm trú</h4>
                      <button
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#tamtru"
                      >
                        Thêm
                      </button>
                      <div
                        className="modal fade"
                        id="tamtru"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby=""
                        aria-hidden="true"
                      >
                        <div
                          className="text-left modal-dialog modal-fullscreen"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Đăng ký tạm trú</h5>
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
                                    <select className="form-control form-select">
                                      <option selected="">Chọn phòng</option>
                                      <option value={1}>401</option>
                                      <option value={2}>402</option>
                                      <option value={3}>...</option>
                                    </select>
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
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Đóng
                              </button>
                              <button type="button" className="btn btn-primary">
                                Thêm
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <table className="table table-border mt-3">
                        <thead>
                          <tr>
                            <th>Mã đăng ký</th>
                            <th>Trạng thái đăng ký</th>
                            <th>Địa chỉ đăng ký</th>
                            <th>Nội dung đề nghị</th>
                            <th>Từ ngày</th>
                            <th>Đến ngày</th>
                            <th>Họ và tên chủ hộ</th>
                            <th>Số căn cước của chủ hộ</th>
                            <th>Quan hệ với chủ hộ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>TT1</td>
                            <td>Tạm trú</td>
                            <td>801</td>
                            <td>Tạm trú tại hộ 801</td>
                            <td>12/05/2019</td>
                            <td>12/05/2021</td>
                            <td className="name">lò văn c</td>
                            <td>10223</td>
                            <td>Chủ hộ</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-center">
                      <h4 className="mb-3 mt-3">Thông tin tạm vắng</h4>
                      <button
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#tamvang"
                      >
                        Thêm
                      </button>
                      <div
                        className="modal fade"
                        id="tamvang"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby=""
                        aria-hidden="true"
                      >
                        <div
                          className="text-left modal-dialog modal-fullscreen"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Đăng ký tạm vắng</h5>
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
                                    <select className="form-control form-select">
                                      <option selected="">Chọn phòng</option>
                                      <option value={1}>401</option>
                                      <option value={2}>402</option>
                                      <option value={3}>...</option>
                                    </select>
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
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Đóng
                              </button>
                              <button type="button" className="btn btn-primary">
                                Thêm
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <table className="table table-border mt-3">
                        <thead>
                          <tr>
                            <th>Mã đăng ký</th>
                            <th>Trạng thái đăng ký</th>
                            <th>Địa chỉ đăng ký</th>
                            <th>Nội dung đề nghị</th>
                            <th>Từ ngày</th>
                            <th>Đến ngày</th>
                            <th>Lý do</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>TV1</td>
                            <td>Tạm vắng</td>
                            <td>Số 10, Tạ Quang Bửu</td>
                            <td>Chuyển sang nhà em gái ở tạm</td>
                            <td>12/05/2021</td>
                            <td>12/08/2021</td>
                            <td>Du lịch</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-center">
                      <h4 className="mb-3 mt-3">Thông tin thường trú</h4>
                      <table className="table table-border mt-3">
                        <thead>
                          <tr>
                            <th>Mã đăng ký</th>
                            <th>Trạng thái đăng ký</th>
                            <th>Địa chỉ đăng ký</th>
                            <th>Nội dung đề nghị</th>
                            <th>Từ ngày</th>
                            <th>Họ và tên chủ hộ</th>
                            <th>Số căn cước của chủ hộ</th>
                            <th>Quan hệ với chủ hộ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>TV1</td>
                            <td>Tạm vắng</td>
                            <td>Số 10, Tạ Quang Bửu</td>
                            <td>Đăng ký thường trú</td>
                            <td>12/08/2021</td>
                            <td className="name">lò văn c</td>
                            <td>10223</td>
                            <td>Chủ hộ</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Đóng
                    </button>
                    <button type="button" className="btn btn-primary">
                      Cập nhật
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      <a href="#">Lên đầu trang</a>
    </p>
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

export default PopulationList;