import React from 'react'

const Cards = ({ title, desc, img }) => {
    return (
        <div>
            <div className='flex flex-col items-center justify-between py-4 px-6 bg-white rounded-xl shadow-2xl '>
                <h4 className='text-[24px] mt-4 font-heading text-secondary'>{title}</h4>
                <h3 className='text-[20px] mt-4 mb-1 text-center font-extrabold leading-6 w-55 text-black'>{desc}</h3>
                <img className='w-22' src={img} alt={title} />
            </div>
        </div>
    )
}

export default Cards