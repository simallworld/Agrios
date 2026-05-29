import React from 'react'
import Cards from './Cards'

const HeroSection = () => {
    return (
        <div className='bg-[url("/src/assets/hero.png")] bg-cover bg-center bg-no-repeat h-screen text-white'>
            <p className='uppercase absolute top-76 left-66 text-sm'>Welcome to agrios farming</p>
            <p className='absolute top-86 left-66 font-heading text-[100px] text-left leading-23'>Agriculture <span className='text-secondary'>&</span><br /> Eco Farming</p>
            <img src="/src/assets/flower1.png" alt="Flower 1" className='absolute top-108 left-166 w-15' />
            <p className='absolute top-138 left-66 text-sm text-left text-lightmist'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button className='absolute top-160 left-66 py-3 px-8 bg-primary rounded-md'>Discover More</button>
            <img src="/src/assets/flower2.png" alt="Flower 2" className='absolute top-160 left-113 w-25' />
            <div className='absolute top-205 left-66 flex items-center justify-between w-240 h-60'>
                <Cards title="Feature 01" desc="We're using a new technology" img="/src/assets/cardImages/cardImage1.png" />
                <Cards title="Feature 02" desc="Good in smart organic services" img="/src/assets/cardImages/cardImage2.png" />
                <Cards title="Feature 03" desc="Reforming in the systems" img="/src/assets/cardImages/cardImage3.png" />
            </div>
        </div>
    )
}

export default HeroSection