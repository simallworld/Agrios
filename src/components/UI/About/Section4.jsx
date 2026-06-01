import React from 'react'
import Card2 from './Card2'

const Section4 = () => {
    const img1 = "/src/assets/About/sec4Images/img1.png"
    const img2 = "/src/assets/About/sec4Images/img2.png"
    const img3 = "/src/assets/About/sec4Images/img3.png"
    return (
        <div className="">
            <div className="py-20">
                <h5 className='font-heading text-xl text-secondary'>Team Members</h5>
                <h2 className='font-extrabold text-4xl text-center'>Meet Our Farmers</h2>
                <div className="flex flex-wrap justify-center gap-5 mt-10">
                    <Card2 name="Kevin Smith" role="Farmer" image={img1} />
                    <Card2 name="Jessica Brown" role="Farmer" image={img2} />
                    <Card2 name="David Martin" role="Farmer" image={img3} />
                </div>
            </div>
        </div >
    )
}

export default Section4