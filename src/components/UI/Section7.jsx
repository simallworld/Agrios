import React from 'react'
import { GoCheckCircleFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Section7 = () => {
    return (
        <div>
            <div className="max-w-240 mx-auto flex items-start justify-between gap-5 text-center py-16">
                <div className="w-[60%]">
                    <img src="/src/assets/sec7Images/img1.png" alt="Section 7 Image" className="w-full h-auto" />
                </div>
                <div className="w-[40%] flex flex-col text-left shrink-0">
                    <h5 className="font-heading text-xl text-secondary">Our Farm Benefits</h5>
                    <h2 className="font-extrabold text-3xl text-left">Why Choose Agrios Market</h2>
                    <p className="text-sm text-mist2 mt-6 w-[88%]">There are many variations of passages of available but the majortity have sufferred alteration in some form by injected humor or random word which don't look even.</p>
                    <div className="mt-7 flex gap-3">
                        <GoCheckCircleFill className="text-primary" size={54} />
                        <div className="flex flex-col">
                            <h4 className="font-bold text-lg">Quality Organic Food</h4>
                            <p className="text-sm text-mist2">There are variation You need to be sure there is anything hidden in the middle of text.</p>
                        </div>
                    </div>
                    <div className="mt-7 flex gap-3">
                        <GoCheckCircleFill className="text-mehandi" size={54} />
                        <div className="flex flex-col">
                            <h4 className="font-bold text-lg">Professional Farmers</h4>
                            <p className="text-sm text-mist2">There are variation You need to be sure there is anything hidden in the middle of text.</p>
                        </div>
                    </div>
                    <div className="mt-7 flex gap-3">
                        <GoCheckCircleFill className="text-secondary" size={54} />
                        <div className="flex flex-col">
                            <h4 className="font-bold text-lg">Quality Products</h4>
                            <p className="text-sm text-mist2">There are variation You need to be sure there is anything hidden in the middle of text.</p>
                        </div>
                    </div>
                    <Link to="/" className="mt-12 text-sm bg-primary text-white py-3 px-6 w-36 rounded-lg hover:bg-mehandi transition duration-300">Discover More</Link>
                </div>
            </div>
        </div>
    )
}

export default Section7