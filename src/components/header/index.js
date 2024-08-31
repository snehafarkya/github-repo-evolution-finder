import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContexts';
import { doSignOut } from '../../firebase/auth';

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='flex backdrop-blur-xl flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center'>
            {
                userLoggedIn
                    ?
                    <>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-md text-blue-950 font-semibold underline'>Logout</button>
                    </>
                    :
                    <>
                        <Link className='text-md text-blue-950 font-semibold underline' to={'/login'}>Login</Link>
                        <Link className='text-md text-blue-950 font-semibold underline' to={'/register'}>Register New Account</Link>
                    </>
            }

        </nav>
    )
}

export default Header