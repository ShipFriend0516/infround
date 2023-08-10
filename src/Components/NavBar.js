import { MdAccountCircle, MdSettings } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import logoImage from '../img/infround-logo.jpg'

const NavBar = () => {
  const navigate = useNavigate()

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
              placeholder="점수를 측정할 장소를 검색"
              aria-label="Search"/>
            <button 
              className="btn btn-outline-success" 
              type="submit">Search</button>
          </div>
        </form>
        <div className='d-flex flex-grow-1 justify-content-end'>
            <button className='btn'>
              <IconContext.Provider value={{size:2+'em'}}>
                <MdAccountCircle/>
              </IconContext.Provider>
            </button>
            <button className='btn'>
              <IconContext.Provider value={{size:2+'em'}}>
                <MdSettings/>
              </IconContext.Provider>
            </button>
          </div>
      </div>
    </nav>
  )
}

export default NavBar;
