import React from 'react'
import Card1 from './Card1'

const Section1 = () => {
    return (
        <div className='flex flex-col pt-20'>
            <div className="flex flex-wrap gap-10 justify-center">
                <Card1 img="/src/assets/Service/sec1Images/img1.png" icon="/src/assets/Home1Assets/card2Images/icon1.png" title="Agriculture Products" />
                <Card1 img="/src/assets/Service/sec1Images/img2.png" icon="/src/assets/Home1Assets/card2Images/icon2.png" title="Organic Products" />
                <Card1 img="/src/assets/Service/sec1Images/img3.png" icon="/src/assets/Home1Assets/card2Images/icon3.png" title="Fresh Vegetables" />
                <Card1 img="/src/assets/Service/sec1Images/img4.png" icon="/src/assets/Home1Assets/card2Images/icon4.png" title="Dairy Products" />
            </div>

            <div className='bg-lightmist relative mt-25'>
                <img className="w-60 absolute bottom-20 left-0" src="/src/assets/Service/sec1Images/element1.png" alt="ele1" />
                <img className="w-60 absolute bottom-0 right-0" src="/src/assets/Service/sec1Images/element2.png" alt="ele2" />
                <div className='flex items-center justify-between px-60 py-10 gap-10'>
                    <img className="w-30" src="/src/assets/Service/sec1Images/sliderImg1.png" alt="Slider Image 1" />
                    <img className="w-30" src="/src/assets/Service/sec1Images/sliderImg2.png" alt="Slider Image 2" />
                    <img className="w-30" src="/src/assets/Service/sec1Images/sliderImg3.png" alt="Slider Image 3" />
                    <img className="w-30" src="/src/assets/Service/sec1Images/sliderImg4.png" alt="Slider Image 4" />
                    <img className="w-30" src="/src/assets/Service/sec1Images/sliderImg5.png" alt="Slider Image 5" />
                </div>
            </div>
        </div>
    )
}

export default Section1