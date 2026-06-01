import React from 'react'
import { FaFacebook, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SocialMediaLightLinks = ({ twitterUrl, facebookUrl, pinterestUrl, instagramUrl }) => {
    return (
        <div className='flex gap-2'>
            <Link target="_blank" className='p-2 rounded-full bg-lightmist hover:text-primary transition-colors' to={twitterUrl}><FaTwitter /></Link>
            <Link target="_blank" className='p-2 rounded-full bg-lightmist hover:text-primary transition-colors' to={facebookUrl}><FaFacebook /></Link>
            <Link target="_blank" className='p-2 rounded-full bg-lightmist hover:text-primary transition-colors' to={pinterestUrl}><FaPinterestP /></Link>
            <Link target="_blank" className='p-2 rounded-full bg-lightmist hover:text-primary transition-colors' to={instagramUrl}><FaInstagram /></Link>
        </div>
    )
}

export default SocialMediaLightLinks