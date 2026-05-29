import React from 'react';
import { FaLeaf, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Underline from '../UI/Underline';
import { IoCall } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';
import SocialMediaDarkLinks from '../UI/SocialMediaDarkLinks';

const Footer = () => {
  return <div>
    <footer className="bg-[#24231D] text-white flex flex-col">

      <div className="max-w-340 mx-auto py-20 text-white flex gap-18 text-sm">

        {/* First Column */}
        <div className='flex flex-col items-start gap-5'>
          <Link to="/"><img className='w-32.5' src="/src/assets/lightLogo.png" alt="Agrios-Logo" /></Link>
          <p className='text-mist text-start leading-7'>There are many variations of passages<br /> of lorem ipsum available, but the<br /> majority suffered.</p>
          <SocialMediaDarkLinks />
        </div>

        {/* Second Column */}
        <div className='flex flex-col items-start'>
          <h3 className='font-bold text-[18px] mb-2'>Explore</h3>
          <Underline />
          <div className='flex flex-col gap-4 items-start my-8 text-mist text-[14px]'>
            <Link to="/about" className='flex gap-2 items-center hover:text-primary'><FaLeaf /> About</Link>
            <Link to="/services" className='flex gap-2 items-center hover:text-primary'><FaLeaf /> Services</Link>
            <Link to="/projects" className='flex gap-2 items-center hover:text-primary'><FaLeaf /> Our Projects</Link>
            <Link to="/farmers" className='flex gap-2 items-center hover:text-primary'><FaLeaf /> Meet the Farmers</Link>
            <Link to="/news" className='flex gap-2 items-center hover:text-primary'><FaLeaf /> Latest News</Link>
            <Link to="/contact" className='flex gap-2 items-center hover:text-primary'><FaLeaf /> Contact</Link>
          </div>
        </div>

        {/* Third Column */}
        <div className='flex flex-col items-start'>
          <h3 className='font-bold text-[18px] mb-2'>News</h3>
          <Underline />
          <div>
            <p className='mt-8 text-[15] text-start font-bold leading-6'>Bringing Food Production<br /> Back To Cities</p>
            <p className='text-start font-regular text-secondary mt-1'>July 5, 2022</p>
          </div>
          <div>
            <p className='mt-8 text-[15] text-start font-bold leading-6'>The Future of Farming,<br /> Smart Irrigation Solutions</p>
            <p className='text-start font-regular text-secondary mt-1'>July 5, 2022</p>
          </div>
        </div>

        {/* Fourth Column */}
        <div className='flex flex-col items-start'>
          <h3 className='font-bold text-[18px] mb-2'>Contact</h3>
          <Underline />
          <div className='flex flex-col gap-4 mt-8'>
            <div className='flex gap-2 items-center'><IoCall className='text-secondary' /><p className='text-mist'>666 888 0000</p></div>
            <div className='flex gap-2 items-center'><IoIosMail className='text-secondary' /><p className='text-mist'>needhelp@company.com</p></div>
            <div className='flex gap-2 items-start'>
              <MdLocationOn className='text-secondary' />
              <p className='text-mist text-left'>80 broklyn golden street line<br /> New York, USA</p></div>
            <div className='flex mt-8'>
              <input className='w-full px-5 py-2 font-semibold rounded-l-md text-gray-800 bg-white placeholder:text-xs ' type="email" placeholder='Your Email Address' />
              <button className='cursor-pointer px-3 py-2 bg-primary text-white rounded-r-md text-sm'><FaPaperPlane /></button>
            </div>
          </div>
        </div>

      </div>

      <div className="bg-[#1F1E17] text-[#A5A49A] p-5 flex items-center justify-around text-xs">
        <p>&copy; 2026 All rights reserved.</p>
        <div>
          <Link to="/terms">Terms of Use</Link> &nbsp;| &nbsp;
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  </div>;
};

export default Footer;
