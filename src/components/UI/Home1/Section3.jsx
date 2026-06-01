import React from 'react'
import Cards2 from './Cards2'

const Section3 = () => {
    return (
        <div>
            <div className='h-screen bg-white'>
                <div className='bg-lightmist flex flex-col items-center h-100 pt-20'>
                    <h5 className='font-heading text-xl text-secondary'>Our Services</h5>
                    <h2 className='font-extrabold text-4xl text-left mt-2'>What We Offer</h2>
                    <div className='flex flex-wrap justify-center gap-8 mt-10'>
                        <Cards2 img="/src/assets/Home1Assets/card2Images/img1.png" icon="/src/assets/Home1Assets/card2Images/icon1.png" title="Agriculture Products" />
                        <Cards2 img="/src/assets/Home1Assets/card2Images/img2.png" icon="/src/assets/Home1Assets/card2Images/icon2.png" title="Organic Products" />
                        <Cards2 img="/src/assets/Home1Assets/card2Images/img3.png" icon="/src/assets/Home1Assets/card2Images/icon3.png" title="Fresh Vegetables" />
                        <Cards2 img="/src/assets/Home1Assets/card2Images/img4.png" icon="/src/assets/Home1Assets/card2Images/icon4.png" title="Dairy Products" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3