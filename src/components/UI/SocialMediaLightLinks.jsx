import React from 'react'
import { FaFacebook, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SocialMediaLightLinks = () => {
    return (
        <div className='flex gap-4'>
            <Link className='p-2 rounded-full bg-lightmist hover:text-secondary transition-colors' to="/"><FaTwitter /></Link>
            <Link className='p-2 rounded-full bg-lightmist hover:text-secondary transition-colors' to="/"><FaFacebook /></Link>
            <Link className='p-2 rounded-full bg-lightmist hover:text-secondary transition-colors' to="/"><FaPinterestP /></Link>
            <Link className='p-2 rounded-full bg-lightmist hover:text-secondary transition-colors' to="/"><FaInstagram /></Link>
        </div>
    )
}

export default SocialMediaLightLinks