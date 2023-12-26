import { Fragment, useEffect, useState } from "react";
import '../css/index.css';
import { Modal, Button, Form, Table, InputGroup, FormControl } from 'react-bootstrap';
import api from '../../../../service/api'
const FeeIndex = () => {
    const [show, setShow] = useState(false);
    const [feeList, setFeeList] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showModal, setShowModal] = useState(false);

    // Function to open modal
    const handleShowModal = () => setShowModal(true);
    const getFeeList = async() => {
        try{
            const { data } = await api.get('v1/fee')
            setFeeList(data.data)
        } catch(err){
            console.error(err)
        }
    }
    useEffect(() => {
        getFeeList()
        console.log(feeList)
    }, [])
    
    // Function to close modal
    const handleCloseModal = () => setShowModal(false);

    const handleUpdate = () => {
        handleCloseModal();
      };
    return (
        <Fragment>
            <div class="container mt-5">
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
                                    <Form.Group controlId="formCode">
                                    <Form.Label>Mã khoản thu:</Form.Label>
                                    <Form.Control type="text" placeholder="TN99" />
                                    {/* Replace placeholder with the current user's name */}
                                    </Form.Group>

                                    <Form.Group controlId="formName">
                                    <Form.Label>Tên khoản thu:</Form.Label>
                                    <Form.Control type="text" placeholder="Quỹ vì người hèn" />
                                    </Form.Group>

                                    <Form.Group controlId="formType">
                                    <Form.Label>Loại khoản thu</Form.Label>
                                    <Form.Check type="radio" label="Phí bắt buộc" name="formType" defaultChecked />
                                    <Form.Check type="radio" label="Quỹ tự nguyện" name="formType" />
                                    </Form.Group>

                                    <Form.Group controlId="formPrice">
                                    <Form.Label>Đơn giá</Form.Label>
                                    <Form.Control type="text" placeholder="Đối với loại phí bắt buộc" />
                                    </Form.Group>

                                    <Form.Group controlId="formUnit">
                                    <Form.Label>Đơn vị</Form.Label>
                                    <Form.Control type="text" placeholder="Ví dụ VNĐ/m2/tháng" />
                                    </Form.Group>

                                    <Form.Group controlId="formDescription">
                                    <Form.Label>Mô tả</Form.Label>
                                    <Form.Control type="text" placeholder="Ủng hộ người hèn vượt lên khó khăn trong cuộc sống" />
                                    </Form.Group>

                                    <Form.Group controlId="formUpdateDate">
                                    <Form.Label>Ngày cập nhật:</Form.Label>
                                    <Form.Control type="date" />
                                    </Form.Group>
                                </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Đóng
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Tạo
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            <InputGroup className="mt-3 mb-3">
                                <FormControl placeholder="Tìm kiếm" />
                                <InputGroup>
                                    <Button variant="outline-secondary">
                                    <i className="bi bi-search"></i>
                                    </Button>
                                </InputGroup>
                            </InputGroup>

                            <div className="text-center table-responsive">
                                <Table bordered hover>
                                    <thead>
                                    <tr>
                                        <th>Chọn</th>
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
                                        <td />
                                        <td>{item.id}</td>
                                        <td>{item.code}</td>
                                        <td className="text-left">{item.description}</td>
                                        <td>{item.mandatory ? 'Bắc buộc' : 'Không bắt buộc'}</td>
                                        <td>{item.price}</td>
                                        <td>{item.unit ? item.unit : 'VND'}</td>
                                        <td>
                                            <Button variant="primary" onClick={handleShowModal}><i className="bi bi-pencil-fill"></i></Button>
                                            <Button variant="secondary"><i className="bi bi-x-square-fill"></i></Button>
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
                                        {/* Your form fields go here */}
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

export {FeeIndex};