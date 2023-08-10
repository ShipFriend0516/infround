import { MdAccountCircle, MdSettings } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import logoImage from '../img/infround-logo.jpg'
import { useState } from 'react';
import LoginModal from './LoginModal';

const NavBar = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    console.log('모달 시작')
  };

  const handleCloseModal = () => {
    setShowModal(false);
    console.log('모달 종료')
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <form className="d-flex" role="search">
          <div className="d-flex">
            <button 
              className='btn me-2 p-0'
              onClick={()=> {
                navigate('/')
              }}>
              <img src={logoImage} alt="로고 이미지" className="img-fit rounded" />
            </button>
            <input 
              className="form-control me-2 col-lg-4" 
              type="search" 
              placeholder="장소를 검색해보세요"
              aria-label="Search"/>
            <button 
              className="btn btn-outline-success" 
              type="submit">Search</button>
          </div>
        </form>
        <div className='d-flex flex-grow-1 justify-content-end'>
            <button 
              onClick={handleOpenModal}
              className='btn'>
              <IconContext.Provider value={{size:2+'em'}}>
                <MdAccountCircle/>
              </IconContext.Provider>
              
            </button>
            <button 
              className='btn'>
              <IconContext.Provider value={{size:2+'em'}}>
                <MdSettings/>
              </IconContext.Provider>
            </button>
          </div>
          <LoginModal show={showModal} handleClose={handleCloseModal} />
      </div>
    </nav>
  )
}

export default NavBar;
