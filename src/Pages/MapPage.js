import NavBar from '../Components/NavBar'
import Map from '../Components/Map'
import SideBar from '../Components/SideBar'



const MapPage = () => {
    

    return (
        <div>
            <NavBar className='zIndex2'/>
            <SideBar className='zIndex1' />
            
            <Map/>
        </div>
    )
}

export default MapPage