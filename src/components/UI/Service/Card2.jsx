import React from 'react'

const Card2 = ({ heading, image }) => {
    return (
        <div>
            <div className='flex flex-col rounded-lg'>
                <h4 className='py-3 font-semibold bg-white w-full rounded-t-lg'>{heading}</h4>
                <img className="rounded-b-lg" src={image} alt={heading} />
            </div>
        </div>
    )
}

export default Card2