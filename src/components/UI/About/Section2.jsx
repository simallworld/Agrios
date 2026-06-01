import React from 'react'

const Section2 = () => {
    return (
        <div className='w-full -mt-10 bg-cover bg-center items-center justify-center'>
            <img src="/src/assets/About/sec2Images/img1.png" alt="Section2 image" />
            <div className='bg-[url("/src/assets/About/sec2Images/img2.png")] bg-position-[0px_0px] bg-size-[20%_auto] bg-no-repeat flex gap-20 text-mist2 text-xs py-8 bg-black/95 w-full justify-center items-center'>
                <p className='p-5'>Agriculture Products</p>
                <p className='p-5'>Projects Completed</p>
                <p className='p-5'>Satisfied Clients</p>
                <p className='p-5'>Experts Framers</p>
            </div>
        </div>
    )
}

export default Section2