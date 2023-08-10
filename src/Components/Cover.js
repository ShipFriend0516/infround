import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {CSSTransition} from 'react-transition-group'
import logoImage from '../img/infround-logo.jpg'

const Cover = () => {

  const [showCover, setShowCover] = useState(true);
  const navigate = useNavigate()

  const handleStartButtonClick = () => {
    setShowCover(false);
    navigate('/map')
  };

  return (
    <div className='d-flex container-fluid flex-column cover my-primary align-items-center'>
      <div className='d-flex flex-row align-items-center justify-content-evenly'>
        <div className='d-flex flex-column'>
          <h1 className='jamsil-bold text-center text-white fs-1'>내 주변 인프라를 점수로?</h1>
          <h1 className='jamsil-light text-left text-white'>인프라운드</h1>
        </div>
        <img src={logoImage}
            alt="인프라운드 로고"
            style={{width: 300+'px'}}/>
      </div>

      <button 
        id='startButton' 
        className='btn btn-primary my-sub1 border-0'
        onClick={handleStartButtonClick}
        >바로 시작하기</button>
    </div>
  )
}

export default Cover;