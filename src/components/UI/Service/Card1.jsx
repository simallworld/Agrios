import React from 'react'
import { FaShareAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Card1 = ({ img, icon, title }) => {
    return (
        <div className='' >
            <div className='relative flex flex-col flex-wrap items-center'>
                <img className='bg-[url({img})] w-50 rounded-lg' src={img} alt={title} />
                <div className='w-1/2 flex flex-col items-center gap-3 bg-white absolute top-35 pb-15 py-6 px-20 rounded-md shadow-xl'>
                    <img src={icon} alt={title} className='size-12 absolute -top-5' />
                    <h3 className='font-bold text-sm pt-3'>{title}</h3>
                    <Link to="/services" className='absolute bottom-5 text-sm text-white bg-primary py-1 px-2 rounded-md'>Read More</Link>
                </div>
            </div>

        </div >
    )
}

export default Card1