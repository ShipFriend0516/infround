import { useEffect } from 'react'
import SideBar from './SideBar';
const { kakao } = window;
const Map = () => {

  useEffect(()=> {
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(37.502, 127.026581),
      level: 4
    }
    const map = new kakao.maps.Map(container, options);

  }, [])
  

  return (
    <div>
      <div id='map' className='bg-dark z-1' style={{width: '100vw', height: '100vh'}}>
      </div>
    </div>
  )
}

export default Map