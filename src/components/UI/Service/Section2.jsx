import React from 'react'
import { IoPlayCircleSharp } from 'react-icons/io5'
import Card2 from './Card2'
import { Link } from 'react-router-dom'

const Section2 = () => {

    return (
        <div className="relative">
            <div className="bg-[url('/src/assets/Service/sec2Images/bgImage.png')] bg-cover bg-center bg-no-repeat">
                <div className='flex gap-10 max-w-240 mx-auto py-20 items-center'>
                    <h1 className='w-1/2 text-6xl flex-wrap font-semibold text-white text-left leading-18'>Agriculture Matters to the Future of Development</h1>
                    <div className='w-1/2 flex flex-col gap-8 items-center justify-center'>
                        <IoPlayCircleSharp size={80} color='white' className="cursor-pointer" />
                        <h5 className='font-heading text-xl text-secondary'>Watch our video</h5>
                    </div>
                </div>
            </div>
            <div className='flex gap-6 max-w-240 mx-auto absolute top-135.5 left-0 right-0 -translate-y-1/2'>
                <Link to={`/services/category/quality-standards`}><Card2 heading="Quality Standards" image="/src/assets/Service/sec2Images/card2Images/img1.png" /></Link>
                <Link to={`/services/category/organic-farming`}><Card2 heading="Organic Farming" image="/src/assets/Service/sec2Images/card2Images/img2.png" /></Link>
                <Link to={`/services/category/agriculture-products`}><Card2 heading="Agriculture Products" image="/src/assets/Service/sec2Images/card2Images/img3.png" /></Link>
            </div>

            <div className="flex gap-15 max-w-240 mx-auto py-20 mt-65">
                <div className="flex relative">
                    <img className="z-10 rounded-lg w-100" src="/src/assets/Service/sec2Images/img1.png" alt="img1" />
                    <img className="absolute left-8 top-10 -translate-x-1/2" src="/src/assets/Service/sec2Images/img2.png" alt="img2" />
                </div>
                <div className="flex flex-col max-w-1/2 items-start justify-between text-left">
                    <h5 className='font-heading text-xl text-secondary'>What We Do</h5>
                    <h2 className='font-extrabold text-4xl text-left -mt-4'>Healthy Food For Good Growth</h2>
                    <p className="text-mist2 text-xs mt-6 w-105">Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndisse suscipit sagittis leo sit met entum estibu dignissim posuere cubilia durae. Leo sit met entum cubilia crae onec.</p>
                    <p className="text-mist2 text-xs mt-4 w-105">Lorem ipsum dolor sit amet adipiscing elit. Nulla placerat posuere dui. Pellentesque venenatis sem non lacus ac auctor.</p>
                    <div className="flex gap-6 mt-10">
                        <div className="bg-primary flex flex-col items-center justify-center gap-5 py-6 px-4 rounded-lg">
                            <img className="text-white w-15 h-15" src="/src/assets/Service/sec2Images/icon1.png" alt="Icon 1" />
                            <p className="text-white font-semibold px-4">Harvesting</p>
                        </div>
                        <div className="bg-mehandi flex flex-col items-center justify-center gap-5 py-6 px-4 rounded-lg">
                            <img className="text-white w-15 h-15" src="/src/assets/Service/sec2Images/icon2.png" alt="Icon 2" />
                            <p className="text-white font-semibold px-1">Maintenance</p>
                        </div>
                        <div className="bg-secondary flex flex-col items-center justify-center gap-5 py-6 px-4 rounded-lg">
                            <img className="text-white w-15 h-15" src="/src/assets/Service/sec2Images/icon3.png" alt="Icon 3" />
                            <p className="text-white font-semibold px-6">Fencing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2