import React from 'react'

const BreadcrumbHeader = ({ heading }) => {
    return (
        <div>
            <div className='bg-[url("/src/assets/header.png")] bg-cover bg-center bg-no-repeat text-white p-20'>
                <p className='text-[10px] text-lightmist brightness-95 py-1 tracking-widest'>HOME / {heading}</p>
                <h1 className='text-3xl font-bold'>{heading}</h1>
            </div>
        </div>
    )
}

export default BreadcrumbHeader