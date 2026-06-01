import React from 'react'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Section2 = () => {
    return (
        <div>
            <div className='flex bg-white max-w-260 mx-auto pt-60 pb-20 items-start'>
                <div className='w-full flex flex-col items-center justify-center py-6'>
                    <img className='w-6/7 rounded-full relative' src="/src/assets/Home1Assets/sec2Images/sec2Img1.png" alt="Agriculture" />
                    <img className='w-1/6 absolute top-355 left-50 border-8 border-white rounded-full' src="/src/assets/Home1Assets/sec2Images/sec2Img2.png" alt="Sustainability" />
                </div>
                <div className='w-full flex flex-col items-start gap-3 p-6'>
                    <h5 className='font-heading text-xl text-secondary'>Our Introductions</h5>
                    <h2 className='font-extrabold text-4xl text-left'>Agriculture & Organic Product Farm</h2>
                    <h2 className='font-extrabold text-xl text-primary mt-4'>Agrios is the largest global organic farm.</h2>
                    <h2 className='text-start text-sm leading-relaxed text-mist2 mt-4'>There are many variations of passages of lorem available but the majority have suffered alteration in some form by injected humor or random word which don&apos;t look even.</h2>
                    <div className='flex gap-10 mt-6'>
                        <div className='flex gap-4 items-center'>
                            <img className='w-12' src="/src/assets/Home1Assets/sec2Images/svg1.png" alt="Icon 1" />
                            <h4 className='text-start text-md font-extrabold'>Growing fruits<br /> vegetables</h4>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <img className='w-12' src="/src/assets/Home1Assets/sec2Images/svg2.png" alt="Icon 1" />
                            <h4 className='text-start text-md font-extrabold'>Tips for ripening<br /> your fruits</h4>
                        </div>
                    </div>
                    <p className='flex items-center gap-3 font-bold text-mist3 text-sm mt-6'><IoCheckmarkDoneCircle className='text-mehandi' /> Lorem Ipsum is not simply random text.</p>
                    <p className='flex items-center gap-3 font-bold text-mist3 text-sm'><IoCheckmarkDoneCircle className='text-mehandi' /> Making this the first true generator on the internet.</p>
                    <Link to="/discover" className='mt-6 text-sm bg-primary text-white py-3 px-10 rounded-lg hover:bg-mehandi transition duration-300'>Discover More</Link>
                </div>
            </div>
        </div>
    )
}

export default Section2