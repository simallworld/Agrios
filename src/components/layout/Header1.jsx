import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialMediaLightLinks from '../UI/SocialMediaLightLinks';
import { PiPhoneCallLight, PiShoppingCartThin } from 'react-icons/pi';
import { IoMailOpenOutline } from 'react-icons/io5';
import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { BiChevronDown } from 'react-icons/bi';

const Header = () => {

  const [cartItem, setCartItem] = useState(0);

  return <div>
    <header className="flex items-center justify-between max-w-260 mx-auto">
      <div className="py-4">
        <Link to="/"><img className='w-32.5' src="/src/assets/darkLogo.png" alt="Agrios-Logo" /></Link>
      </div>
      <div className='flex items-center gap-6'>
        <SocialMediaLightLinks />

        <div className='flex items-center gap-2'>
          <PiPhoneCallLight size={32} className='text-primary' />
          <div className='flex flex-col items-start gap-1'>
            <p className='text-mist text-xs'>Call anytime</p>
            <p className='text-black text-xs font-bold'>+ 98 (000) - 9630</p>
          </div>
        </div>
        <div className='w-0.5 h-14 bg-lightmist' />

        <div className='flex items-center gap-2'>
          <IoMailOpenOutline size={32} className='text-primary' />
          <div className='flex flex-col items-start gap-1'>
            <p className='text-mist text-xs'>Send email</p>
            <p className='text-black text-xs font-bold'>ambed@agrios.com</p>
          </div>
        </div>
        <div className='w-0.5 h-14 bg-lightmist' />

        <div className='flex items-center gap-2'>
          <CiLocationOn size={32} className='text-primary' />
          <div className='flex flex-col items-start gap-1'>
            <p className='text-mist text-xs'>380 St Kilda Road</p>
            <p className='text-black text-xs font-bold'>Melbourne, Australia</p>
          </div>
        </div>
      </div>
    </header>
    <nav className="text-mist py-3 z-10 bg-[url('/src/assets/navBackground.png')] bg-cover bg-center bg-no-repeat">
      <div className='max-w-260 mx-auto text-xs font-semibold flex items-center justify-between gap-8 '>
        <div className='flex items-center justify-center gap-12'>
          <NavLink to="/" className={({ isActive }) => `hover:text-black flex gap-1 items-center ${isActive ? "text-primary font-bold" : "text-mist font-semibold"}`}>Home <BiChevronDown /></NavLink>
          <NavLink to="/about" className={({ isActive }) => `hover:text-black flex gap-1 items-center ${isActive ? "text-primary font-bold" : "text-mist font-semibold"}`}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => `hover:text-black flex gap-1 items-center ${isActive ? "text-primary font-bold" : "text-mist font-semibold"}`}>Services <BiChevronDown /></NavLink>
          <NavLink to="/projects" className={({ isActive }) => `hover:text-black flex gap-1 items-center ${isActive ? "text-primary font-bold" : "text-mist font-semibold"}`}>Projects <BiChevronDown /></NavLink>
          <NavLink to="/news" className={({ isActive }) => `hover:text-black flex gap-1 items-center ${isActive ? "text-primary font-bold" : "text-mist font-semibold"}`}>News <BiChevronDown /></NavLink>
          <NavLink to="/shop" className={({ isActive }) => `hover:text-black flex gap-1 items-center ${isActive ? "text-primary font-bold" : "text-mist font-semibold"}`}>Shop <BiChevronDown /></NavLink>
          <NavLink to="/contact" className={({ isActive }) => `hover:text-black flex gap-1 items-center ${isActive ? "text-primary font-bold" : "text-mist font-semibold"}`}>Contact</NavLink>
        </div>
        <div className='flex gap-4'>
          <div className='w-[1.5px] h-7 bg-mist' />
          <Link to="/search"><CiSearch size={26} className='text-black' /></Link>
          <Link to="/cart" className='relative'><PiShoppingCartThin size={26} className='text-black' />
            <div className='absolute top-0 right-0 bg-primary text-white rounded-full w-3 h-3 flex items-center justify-center text-[8px]'>{cartItem}</div>
          </Link>
        </div>
      </div>
    </nav >
  </div >;
};

export default Header;
