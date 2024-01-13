import { Fragment, useEffect, useState } from "react";
import '../css/index.css';
import { Modal, Button, Form, Table, InputGroup, FormControl } from 'react-bootstrap';
import api from '../../../../service/api'
import SideBar from "../../../patials/sidebar";
import { showNotice } from "../../../../common/showNotice";
const FeeIndex = () => {
    const [show, setShow] = useState(false);
    const [feeList, setFeeList] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showModal, setShowModal] = useState(false);
    const [feeName, setFeeName] = useState('')
    const [feePrice, setFeePrice] = useState(0)
    const [feeDesciption, setFeeDescription] = useState('')
    const [feeMadatory, setFeeMandatory] = useState(true)
    const [feeDuedate, setFeeDuedate] = useState('')

    // Function to open modal
    const handleShowModal = () => setShowModal(true);
    const getFeeList = async () => {
        try {
            const { data } = await api.get('v1/fee')
            setFeeList(data.data)
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        getFeeList()
        console.log(feeList)
    }, [])

    const handleDeleteFee = async (feeID) => {
        try {
            const { data } = await api.delete(`v1/fee/${feeID}`)
            await getFeeList()
            showNotice(1, 'Xóa phí thành công')
        } catch (e) {
            console.log(e)
        }
    }

    const handleNotiFee = async (feeId) => {
        try {
            const { data } = api.post(`v1/payment?fee=${feeId}`)
            console.log(data)
            showNotice(1, 'Thông báo thông tin phí tới cư dân thành công')
        } catch (e) {
            console.log(e)
        }
    }

    // Function to close modal
    const handleCloseModal = () => setShowModal(false);

    const handleAddFee = async () => {
        let sendData = {
            "name": feeName,
            "price": feePrice,
            "description": feeDesciption,
            "mandatory": feeMadatory,
            "due_time": feeDuedate
        }
        try {
            const { data } = await api.post('v1/fee', sendData)
            console.log(data)
            handleClose()
            await getFeeList()
        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = () => {
        handleCloseModal();
    };
    return (
        <Fragment>
            <SideBar />
            <div class="container" style={{ 'margin-top': "-70px" }}>
                <div class="row">
                    <div class="col">
                        <h2 class="text-left mb-4">Danh sách các khoản thu</h2>
                        <Button variant="primary" onClick={handleShow}>
                            Tạo khoản thu mới
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className="text-primary">Thông tin khoản thu mới</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>

                                    <Form.Group controlId="formName">
                                        <Form.Label>Tên khoản thu:</Form.Label>
                                        <Form.Control type="text" placeholder="Quỹ vì người hèn"
                                            value={feeName}
                                            onChange={e => setFeeName(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formType">
                                        <Form.Label>Loại khoản thu</Form.Label>
                                        <Form.Check type="radio" value={true} onClick={(e) => setFeeMandatory(e.target.value)} label="Phí bắt buộc" name="formType" defaultChecked />
                                        <Form.Check type="radio" value={false} onClick={(e) => setFeeMandatory(e.target.value)} label="Quỹ tự nguyện" name="formType" />
                                    </Form.Group>

                                    <Form.Group controlId="formPrice">
                                        <Form.Label>Đơn giá</Form.Label>
                                        <Form.Control value={feePrice} type="text" onChange={e => setFeePrice(e.target.value)} placeholder="Đối với loại phí bắt buộc" />
                                    </Form.Group>

                                    <Form.Group controlId="formUnit">
                                        <Form.Label>Đơn vị</Form.Label>
                                        <Form.Control type="text" placeholder="Ví dụ VNĐ/m2/tháng" />
                                    </Form.Group>

                                    <Form.Group controlId="formDescription">
                                        <Form.Label>Mô tả</Form.Label>
                                        <Form.Control value={feeDesciption} onChange={e => setFeeDescription(e.target.value)} type="text" placeholder="Ủng hộ người hèn vượt lên khó khăn trong cuộc sống" />
                                    </Form.Group>

                                    <Form.Group controlId="formUpdateDate">
                                        <Form.Label>Ngày hết hạn:</Form.Label>
                                        <Form.Control value={feeDuedate} type="date" onChange={e => setFeeDuedate(e.target.value)} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Đóng
                                </Button>
                                <Button variant="primary" onClick={handleAddFee}>
                                    Tạo
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <InputGroup className="mt-3 mb-3">
                            <FormControl placeholder="Tìm kiếm" />
                        </InputGroup>

                        <div className="text-center table-responsive">
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Mã khoản thu</th>
                                        <th>Tên khoản thu</th>
                                        <th>Loại phí</th>
                                        <th>Đơn giá (đối với khoản phí)</th>
                                        <th>Đơn vị</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {feeList.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.code}</td>
                                            <td className="text-left">{item.description}</td>
                                            <td>{item.mandatory ? 'Bắc buộc' : 'Không bắt buộc'}</td>
                                            <td>{item.price}</td>
                                            <td>{item.unit ? item.unit : 'VND'}</td>
                                            <td>
                                                <Button variant="primary" onClick={handleShowModal}><i className="bi bi-pencil-fill"></i></Button>
                                                <Button variant="secondary"><i className="bi bi-x-square-fill" onClick={() => handleDeleteFee(item.id)}></i></Button>
                                                <Button variant="outline-primary" onClick={() => handleNotiFee(item.id)}>Thông báo tới người dân</Button>
                                            </td>
                                        </tr>
                                    ))}
                                    {/* Add more rows as needed */}
                                </tbody>
                            </Table>

                            {/* Modal for editing */}
                            <Modal show={showModal} onHide={handleCloseModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Chỉnh sửa thông tin khoản thu</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <div class="modal-body">
                                            <form class="form-horizontal">
                                                <div class="form-group">
                                                    <label class="control-label col-sm-10" for="email">Mã khoản
                                                        thu:</label>
                                                    <div class="col-sm-12">
                                                        <input class="form-control" placeholder="TN99" disabled />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label col-sm-10" for="pwd">Tên khoản
                                                        thu:</label>
                                                    <div class="col-sm-12">
                                                        <input class="form-control"
                                                            placeholder="Quỹ vì người hèn" disabled />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <legend class="col-form-label col-sm-12 pt-0">Loại khoản thu
                                                    </legend>
                                                    <div class="col-sm-10">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio"
                                                                name="gridRadios" id="gridRadios1"
                                                                value="option1" checked disabled />
                                                            <label class="form-check-label" for="gridRadios1">
                                                                Phí bắt buộc
                                                            </label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio"
                                                                name="gridRadios" id="gridRadios2"
                                                                value="option2" disabled />
                                                            <label class="form-check-label" for="gridRadios2">
                                                                Quỹ tự nguyện
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputPassword3" class="col-sm-10 col-form-label">Đơn giá</label>
                                                    <div class="col-sm-12">
                                                        <input class="form-control" placeholder="Đối với loại phí bắt buộc" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputPassword3" class="col-sm-10 col-form-label">Đơn vị</label>
                                                    <div class="col-sm-12">
                                                        <input class="form-control" placeholder="Ví dụ VNĐ/m2/tháng" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputPassword3"
                                                        class="col-sm-10 col-form-label">Mô tả</label>
                                                    <div class="col-sm-12">
                                                        <input class="form-control"
                                                            placeholder="Ủng hộ người hèn vượt lên khó khăn trong cuộc sống" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label col-sm-12" for="pwd">Ngày cập
                                                        nhật:</label>
                                                    <div class="col-sm-12">
                                                        <input class="form-control" type="date" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseModal}>Đóng</Button>
                                    <Button variant="primary" onClick={handleUpdate}>Cập nhật</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export { FeeIndex };