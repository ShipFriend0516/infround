import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'; // 부트스트랩의 모달 및 폼 관련 컴포넌트를 사용
import propTypes from 'prop-types'
import axios from 'axios'

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
  
    // JSON 서버에서 사용자 정보 가져오기
    axios.get(`http://localhost:3001/accounts?_id=${email}`).then((res) => {
      const matchingAccounts = res.data;
  
      if (matchingAccounts.length > 0) {
        console.log("일치하는 계정이 존재합니다.");
        const firstMatchingAccount = matchingAccounts[0];
        console.log("일치하는 첫 번째 계정 정보:", firstMatchingAccount);
        // 여기서 비밀번호와의 일치 여부 등을 확인할 수 있습니다.
      } else {
        console.log("일치하는 계정이 없습니다.");
      }
    });
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
