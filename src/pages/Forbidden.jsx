import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Forbidden = () => {
    const navigate = useNavigate()
    return (
        <div className='max-w-220 mx-auto h-screen/2 gap-4 py-30'>
            {/* <div className="border-12 border-primary rounded-md h-full blur-[4px] hover:blur-[0] transition duration-200"> */}
            <div className='flex flex-col items-center justify-center text-center shadow-xl bg-lightmist p-20 rounded-md border-2 border-primary'>
                <h1 className="blur-[5px] text-8xl hover:blur-[0] transition duration-200">404</h1>
                <p className="text-3xl blur-[2px]  hover:blur-[0] transition duration-200">Page not found</p>
                <Link to="/" className='w-1/2 mt-10 px-4 py-2 bg-primary text-white rounded-md' onClick={() => navigate("/")}>Go to Home</Link>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Forbidden