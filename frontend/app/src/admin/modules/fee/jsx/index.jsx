import { Fragment } from "react";
import SideBar from "../../../patials/sidebar";
import '../css/index.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FeeIndex = async () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Fragment>
            <SideBar/>
            <div className="container mt-5">
                <h2 className="mb-4">Trang quản lý thu phí chung cư</h2>
                <>
                    <Button variant="primary" onClick={handleShow}>
                    Nhập thông tin khoản phí
                    </Button>
            
                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h5 className="modal-title" id="exampleModalLabel">Nhập phí</h5>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputService">Đơn giá phí dịch vụ</label>
                                <input type="text" className="form-control" id="inputService" placeholder="Nhập số tiền"/>
                            </div>
                            <div className="form-group col-md-6">
                                    <label htmlFor="inputManager">Đơn giá phí quản lý</label>
                                <input type="text" className="form-control" id="inputManager" placeholder="Nhập số tiền"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMonth">Tháng</label>
                                <input type="month" className="form-control" id="inputMonth"/>
                            </div>
                        </div>                            
                    </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Đóng
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                        Lưu
                        </Button>
                    </Modal.Footer>
                    </Modal>
                </>

                <div className="mt-4">
                <h3>Danh sách thu phí</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Căn hộ</th>
                        <th scope="col">Số tiền</th>
                        <th scope="col">Tháng</th>
                        <th scope="col">Đã thu</th>
                    </tr>
                    
                    </thead>
                    <tbody>
                    <tr>
                        <td>BM101</td>
                        <td>820.000 đồng</td>
                        <td>11</td>
                        <td><p>&#10004; </p></td>
                    </tr>
                    </tbody>
                </table>
                </div>

            </div>
        </Fragment>
    )
}

export {FeeIndex};