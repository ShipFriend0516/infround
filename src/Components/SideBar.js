import React, {useEffect, useRef, useState } from "react";
import {} from 'react-icons'
import styles from '../Styles/sidebar.module.css'

const SideBar = ({ width=280, children }) => {

    const [isOpen,setIsOpen] = useState(false);
    const [xPosition, setXPosition] = useState(width)
    const side = useRef()

    const toggleMenu = () => {
        if(xPosition > 0) {
            setXPosition(0)
            setIsOpen(true)
        } else {
            setXPosition(width)
            setIsOpen(false)
        }
    }

    const handleClose = e => {
        let sideArea = side.current
        let sideChildren = side.current.contains(e.target)
        if(isOpen && (!sideArea || !sideChildren)) {
            setXPosition(width)
            setIsOpen(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('click', handleClose)
        return () => {
            window.removeEventListener('click', handleClose)
        }
    })

    return (
        <div className={styles.container}>
            <div ref={side}  className={styles.sidebar} style={{ width: `${width}px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
                <button onClick={() => toggleMenu()}
                className={styles.button} >
                    {isOpen ? 
                    <span>X</span> : <img src="src/img/infround-logo.jpg" alr="contact open button" className={styles.openBtn}/>
                    }
                </button>
                
                <div className={styles.content}>dd</div>
            </div>
        </div>
    );
}


export default SideBar;