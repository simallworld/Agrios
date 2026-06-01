import React from 'react'
import { Link } from 'react-router-dom'

const Section3 = () => {
    return (
        <div className='relative bg-primary overflow-hidden'>
            <img src="/src/assets/Service/sec3Images/bgImage.png" className='absolute right-0 bg-cover bg-right bg-no-repeat' alt="Background" />
            <div className='w-full flex gap-18 items-center max-w-240 mx-auto py-20'>
                <div className='text-left flex flex-col z-50'>
                    <h5 className='font-heading text-xl text-secondary'>Agriculture Market Leaders</h5>
                    <h2 className=' font-extrabold text-white text-3xl text-left mt-2'>We&apos;re popular in agriculture market globally</h2>
                </div>
                <Link to="/discover" className='text-sm z-10 bg-secondary border-2 border-secondary text-white py-3 px-6 rounded-lg hover:bg-transparent hover:border-2 hover:border-secondary transition duration-300'>
                    Discover More
                </Link>
            </div >
        </div >
    )
}

export default Section3