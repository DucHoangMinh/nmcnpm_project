// UserLogin.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserLogin.css'; // Import your custom CSS for additional styling
import { Link } from 'react-router-dom';
import api from '../../service/api';
const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    // Implement your login logic here
    const sendData = {
      "email": username,
      password
    }
    try{
      const { data } = api.post('login', sendData)
      window.location.href = "http://localhost:3000/user/home"
    } catch(error){
      console.log(error)
    }
    
  };

  return (
    <Container className="mt-5">
    <Row className="justify-content-center">
      <Col md={6}>
        <Card>
          <Card.Body>
            <h3 className="text-center mb-4">Đăng Nhập Hệ Thống Thu Phí Chung Cư</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Tên đăng nhập</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên đăng nhập"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
  
              <Row className="mb-3">
                <Col>
                  <Button variant="primary" type="button" onClick={handleLogin} className="mb-3" block>
                    Đăng Nhập
                  </Button>
                </Col>
                <Col>
                  <Link to="/user/register">
                    <Button variant="success" type="button" Link="/user/register" block>
                      Đăng Ký
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <div className="text-center mt-3">
          <a href="#!" className="link">
            Quên mật khẩu?
          </a>
        </div>
      </Col>
    </Row>
  </Container>
  
  );
}

export default UserLogin;
