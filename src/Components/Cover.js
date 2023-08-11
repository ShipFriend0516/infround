import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../img/infround-logo.jpg'

const Cover = () => {
  const navigate = useNavigate()

  const handleStartButtonClick = () => {
    navigate('/map')
  };

  return (
    <div className='d-flex container-fluid flex-column cover my-primary align-items-center'>
      <div className='d-flex flex-row align-items-center justify-content-evenly'>
        <div className='d-flex flex-column'>
          <h1 className='text-size-title jamsil-bold text-center text-white'>
            내 주변 <span className='bg-light'><span className='text-dark blinkAnimation'>인프라</span></span>를 점수로!</h1>
          <h1 className='text-size-title jamsil-light text-left text-white'>인프라운드</h1>
        </div>
        <img src={logoImage}
            alt="인프라운드 로고"
            style={{width: 20+'vw'}}/>
      </div>

      <button 
        id='startButton' 
        className='btn btn-primary btn-lg my-sub2 border-0 py-2 px-3 shadow-sm'
        onClick={handleStartButtonClick}
        >바로 시작하기</button>
      <div className='footer'>@2023 All rights reserved.</div>
    </div>
  )
}

export default Cover;