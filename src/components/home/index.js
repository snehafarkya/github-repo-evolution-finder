import React from 'react'
import { useAuth } from '../../contexts/authContexts';
import Display from '../Display';

const Home = () => {
    const { currentUser } = useAuth()
    return (<div className='flex flex-col justify-center items-center mt-40'>
        {/* <div className='text-2xl font-bold pt-14'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, you are now logged in.</div> */}
        <Display/>
        </div>
    )
}

export default Home