import React from 'react'
import { BsCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Section1 = () => {
    return (
        <div className="max-w-220 mx-auto py-20">
            <div className="flex justify-center gap-10 ">
                <div className="w-1/2">
                    <img src="/src/assets/About/sec1Images/img1.png" alt="Section1 image" />
                </div>
                <div className="flex flex-col text-left w-1/2 items-start">
                    <h5 className='font-heading text-xl text-secondary'>Get to Know Us</h5>
                    <h2 className='font-extrabold text-4xl text-left'>The Best Agriculture Market</h2>
                    <p className='text-primary font-semibold mt-7'>There are many variations of passa of lorem available, but the majority have suffered alteration.</p>
                    <p className='text-mist2 text-xs mt-6'>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don&apos;t look even.</p>
                    <div className="flex flex-col items-start gap-4 mt-7">
                        <div className="flex gap-1 items-center">
                            <BsCheck size={22} className="text-mehandi" />
                            <p className='text-mist3 text-xs font-bold'>Suspe ndisse suscipit sagittis leo</p>
                        </div>
                        <div className="flex gap-1 items-center -mt-2">
                            <BsCheck size={22} className="text-mehandi" />
                            <p className='text-mist3 text-xs font-bold'>Entum estibulum disgnissim posuere</p>
                        </div>
                        <div className="flex gap-1 items-center -mt-2">
                            <BsCheck size={22} className="text-mehandi" />
                            <p className='text-mist3 text-xs font-bold'>Lorem Ipsum on the tend to repeat</p>
                        </div>
                    </div>
                    <Link to="/discover" className='mt-8 text-sm bg-primary text-white py-3 px-10 rounded-lg hover:bg-mehandi transition duration-300'>Discover More</Link>
                </div>
            </div>
        </div>
    )
}

export default Section1