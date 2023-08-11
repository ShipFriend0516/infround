import React, {useEffect, useRef, useState } from "react";
import styles from '../Styles/sidebar.module.css'
import propTypes from 'prop-types';
import { BsFillCaretRightFill } from 'react-icons/bs'
import { BsFillCaretLeftFill } from 'react-icons/bs'
import { IconContext } from 'react-icons'


const SideBar = ({ width=480 ,children }) => {

    const [isOpen,setIsOpen] = useState(false);
    const [xPosition, setXPosition] = useState(width)
    const side = useRef()

    
    const toggleMenu = (e) => {
        e.stopPropagation();
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
        <div className={styles.container + 'zIndex1'}>
            <div ref={side}  className={styles.sidebar} style={{ width: `${width}px`, height: '100%',  transform: `translatex(${-xPosition}px)`}}>
                    {!isOpen ? 
                        <IconContext.Provider value={{size:'2em'}}>
                            <BsFillCaretRightFill onClick={(e) => toggleMenu(e)}
                                className={styles.button}/>
                        </IconContext.Provider> 
                    : 
                        <IconContext.Provider value={{size:'2em'}}>
                            <BsFillCaretLeftFill onClick={(e) => toggleMenu(e)}
                                className={styles.button}/>
                        </IconContext.Provider> 
                    }
                <div className={styles.content + 'container py-5 mt-4 px-3 jamsil-light'}>
                    <div>
                        <div className='fs-4 jamsil-bold'>충청남도 천안시 동남구 신부동</div>
                        <div className='fs-5 jamsil-light'>충남 천안시 동남구 만남로 43 1층</div>
                        <hr className='mt-1'/>
                        <div className='mx-1 mb-3'>
                            <div className='jamsil-bold mb-1'>이 지역의 근방 2km 인프라 점수는 80점입니다.</div>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-success" style={{width: '25%'}}>25%</div>
                            </div>
                        </div>
                        <div>
                            주요 인프라 시설
                            <div className='border border-black'>
                                <div>생활 필수 시설</div>
                                <hr/>
                                <div>유흥 시설</div>
                                <hr/>
                            </div>
                        </div>
                        <div className='d-flex container-fluid my-3 justify-content-between align-items-center'>
                            <p className='fs-4'>연락처 010-0000-0000</p>
                            <button className='btn btn-primary'>연락하기</button>
                        </div>
                    </div>       
                </div>
            </div>
        </div>
    );
}

SideBar.prototype = {
    width: propTypes.number
}


export default SideBar;