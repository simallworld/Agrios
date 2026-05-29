import React from 'react'
import { Link } from 'react-router-dom'

const Cards2 = ({ img, icon, title }) => {
    return (


        <div className='bg-cover bg-center bg-no-repeat px-4 py-8 pt-50 rounded-lg' style={{ backgroundImage: `url(${img})` }}>
            <div className=''>
                {/* <img className='bg-[url({img})] w-30' src={img} alt={title} /> */}
                <div className='relative w-50 bg-white rounded-lg flex flex-col items-center pt-12 pb-6 px-10 gap-3'>
                    <img src={icon} alt={title} className='size-14 absolute -top-7' />
                    <h3 className='font-bold text-lg'>{title}</h3>
                    <Link to="/services" className='text-sm text-white bg-primary py-1 px-2 rounded-md'>Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default Cards2