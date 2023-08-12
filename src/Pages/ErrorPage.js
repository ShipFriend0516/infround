import { useNavigate } from 'react-router-dom'


const ErrorPage = () => {

    const navigate = useNavigate()

    return (
        <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div className='fs-1 jamsil-bold'>
                404 Error
            </div>
            <div className='fs-1 jamsil-bold'>
                오류가 발생했습니다.
            </div>
            <button 
                className='btn btn-outline-info btn-lg mt-3'
                onClick={()=>navigate('/')}>홈 화면으로</button>
        </div>
    )
}

export default ErrorPage