import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'; // 부트스트랩의 모달 및 폼 관련 컴포넌트를 사용
import propTypes from 'prop-types'

const LoginModal = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // 로그인 로직을 여기에 추가하십시오.
    console.log('로그인 시도:', email, password);
  };

  return (
    <Modal className='modal' show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>로그인</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId="formBasicEmail">
            <Form.Label>Email 주소</Form.Label>
            <Form.Control type="email" placeholder="Email 입력" value={email} onChange={handleEmailChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="비밀번호 입력" value={password} onChange={handlePasswordChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" data-bs-dismiss="modal" onClick={handleClose}>
          취소
        </Button>
        <Button variant="primary" onClick={handleLogin}>
          로그인
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

LoginModal.propTypes = {
  handleClose: propTypes.func
}

export default LoginModal;
