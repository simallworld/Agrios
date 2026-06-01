import React from 'react'
import Card1 from './Card1'

const Section3 = () => {
    const img1 = "/src/assets/About/sec3Images/img1.png"
    const img2 = "/src/assets/About/sec3Images/img2.png"
    return (
        <div className="mx-auto">
            <div className='py-20 bg-[url("/src/assets/About/sec3Images/bgImg.png")] bg-cover bg-center w-full text-center '>
                <h5 className='font-heading text-xl text-secondary'>Our Testimonials</h5>
                <h2 className='font-extrabold text-4xl text-center'>What They Say</h2>
                <div className="flex flex-wrap justify-center gap-20 mt-12">
                    <Card1 name="Bonnie Toblet" role="Customer" image={img1} description="There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed." />
                    <Card1 name="Sarah Albert" role="Customer" image={img2} description="There are many variations of passage of but the majority have suffered alteration in some form by injected humor or randomed." />
                </div>
            </div>
        </div>
    )
}

export default Section3