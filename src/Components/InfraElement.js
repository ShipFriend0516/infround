import propTypes from 'prop-types'
import { IconContext } from 'react-icons'

// 아이콘 리스트
import { MdLocalConvenienceStore } from 'react-icons/md'
import { MdLocalGasStation } from 'react-icons/md'
import { MdMic } from 'react-icons/md'

const InfraElement = ({infraName, infraScore, infraIcon}) => {
    return (
        <div className='d-flex justify-content-between cursor-pointer mb-2'>
            <div className='d-flex ms-2'>
                <IconContext.Provider  value={{size:'2em'}}>
                    {infraIcon}
                </IconContext.Provider>
                <div className='ms-2'>{infraName}</div>
            </div>
            <span className='me-2'>+{infraScore}</span>
        </div>
    )
}

InfraElement.propTypes = {
    infraName: propTypes.string.isRequired,
    infraScore: propTypes.number.isRequired
}



export default InfraElement