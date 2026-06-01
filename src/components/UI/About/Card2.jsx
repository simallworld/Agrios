import React from 'react'
import { FaShareAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Card2 = ({ name, role, image }) => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className="relative w-60 h-75 bg-cover bg-center" >
            <div className="flex items-center absolute bottom-0 right-0 bg-white border-2 border-primary border-x-0 px-8 py-3 rounded-l-md">
                <Link to="/share" className="absolute -left-4 text-white bg-primary rounded-md p-1" ><FaShareAlt size={22} /></Link>
                <div className="text-right pl-5">
                    <h4 className="font-bold text-sm">{name}</h4>
                    <p className=" text-xs text-mist">{role}</p>
                </div>
            </div>
        </div>
    )
}

export default Card2