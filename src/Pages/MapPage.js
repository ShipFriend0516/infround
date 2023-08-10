import NavBar from '../Components/NavBar'
import Map from '../Components/Map'
import SideBar from '../Components/SideBar'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { BsFillCaretLeftFill } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { useState } from 'react'


const MapPage = () => {
    const [isToggled, setIsToggled] = useState(false)

    const sideBarToggle = () => {
        if(isToggled) {
            // 사이드바 OFF
            setIsToggled(false)
            
        } else {
            // 사이드바 ON
            setIsToggled(true)
        }
    }

    return (
        <div>
            <NavBar/>
            {!isToggled ? 
                <IconContext.Provider value={{size:2+'em'}}>
                    <BsFillCaretRightFill 
                        onClick={sideBarToggle}
                        className='position-fixed start-0 top-50 cursor-pointer'/>
                </IconContext.Provider> 
            : 
                <IconContext.Provider value={{size:2+'em'}}>
                    <BsFillCaretLeftFill 
                        onClick={sideBarToggle}
                        className='position-fixed start-0 top-50 cursor-pointer'/>
                </IconContext.Provider> 
            }
            <Map/>
        </div>
    )
}

export default MapPage