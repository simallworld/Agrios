import React from 'react'
import { FaStar } from 'react-icons/fa'

const Card1 = ({ name, role, image, description }) => {
    return (
        <div>
            <div className='relative flex items-center gap-10 bg-white p-6 pl-18 rounded-lg shadow-md max-w-90'>
                <div className="flex items-center">
                    <img src={image} className='w-28 absolute -left-13 ' alt="Customer Image" />
                    <img src="/src/assets/About/sec3Images/element1.png" className='w-10 absolute left-10' alt="Element Image" />
                </div>
                <div className="">
                    <p className="text-left text-xs text-mist2 leading-6">{description}</p>
                    <div className="flex justify-between items-center gap-4 mt-4">
                        <div className="flex">
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                            <FaStar className="text-secondary" />
                        </div>
                        <div className="text-right">
                            <h4 className="font-bold text-sm">{name}</h4>
                            <p className="text-mist text-xs">{role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card1