import React from 'react'

const Section5 = () => {
    return (
        <div className='flex flex-col items-center py-15'>
            <h5 className='font-heading text-xl text-secondary'>Recently Completed</h5>
            <h2 className='font-extrabold text-4xl text-left mt-2'>Explore Projects</h2>
            <div className='flex flex-wrap gap-2 mt-10'>
                <div className='bg-[url("/src/assets/Home1Assets/sec5Images/img1.png")] saturate-50 hover:saturate-150 hover:scale-102 transition duration-300 relative h-120 w-70 bg-cover bg-center flex flex-col rounded-lg'>
                    <h3 className='absolute text-white font-bold text-left left-5 bottom-8 leading-5'>Easy<br /> Harvesting</h3>
                </div>
                <div className='bg-[url("/src/assets/Home1Assets/sec5Images/img2.png")] saturate-50 hover:saturate-150 hover:scale-102 transition duration-300 relative h-120 w-70 bg-cover bg-center flex flex-col rounded-lg'>
                    <h3 className='absolute text-white font-bold text-left left-5 bottom-8 leading-5'>Agriculture<br /> Farming</h3>
                </div>
                <div className='bg-[url("/src/assets/Home1Assets/sec5Images/img3.png")] saturate-50 hover:saturate-150 hover:scale-102 transition duration-300 relative h-120 w-70 bg-cover bg-center flex flex-col rounded-lg'>
                    <h3 className='absolute text-white font-bold text-left left-5 bottom-8 leading-5'>Ecological<br /> Farming</h3>
                </div>
                <div className='bg-[url("/src/assets/Home1Assets/sec5Images/img4.png")] saturate-50 hover:saturate-150 hover:scale-102 transition duration-300 relative h-120 w-70 bg-cover bg-center flex flex-col rounded-lg'>
                    <h3 className='absolute text-white font-bold text-left left-5 bottom-8 leading-5'>Organic<br /> Solutions</h3>
                </div>
            </div>
        </div>
    )
}

export default Section5