import React from 'react'
import { FaComments } from 'react-icons/fa'
import { IoMdContact } from 'react-icons/io'

const Section8 = () => {
    const blogPosts = [
        {
            id: 1,
            image: "/src/assets/Home1Assets/sec8Images/img1.png",
            date: "05 July 2022",
            author: "Kevin Martin",
            comments: "1 Comment",
            title: "Bringing Food Production Back To Cities"
        },
        {
            id: 2,
            image: "/src/assets/Home1Assets/sec8Images/img2.png",
            date: "05 July 2022",
            author: "Kevin Martin",
            comments: "0 Comment",
            title: "The Future of Farming, Smart Irrigation Solutions"
        },
        {
            id: 3,
            image: "/src/assets/Home1Assets/sec8Images/img3.png",
            date: "05 July 2022",
            author: "Kevin Martin",
            comments: "0 Comment",
            title: "Agronomy and relation to Other Sciences"
        }
    ]

    return (
        <div className='border-gray-100 bg-lightmist'>
            <div className='max-w-7xl mx-auto text-center py-12 md:py-16 px-4 sm:px-6 lg:px-8'>
                <h5 className="font-heading text-base sm:text-lg md:text-xl text-secondary">From the Blog</h5>
                <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl mt-2">News & Articles</h2>

                <div className='mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                    {blogPosts.map((post) => (
                        <div key={post.id} className='shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300'>
                            <div className='relative overflow-hidden bg-gray-200 h-48 sm:h-56 md:h-64'>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className='w-full h-full object-cover'
                                />
                                <p className='text-xs sm:text-sm text-white bg-primary px-3 sm:px-4 py-1 rounded-l-md absolute right-0 top-56'>
                                    {post.date}
                                </p>
                            </div>

                            <div className='p-4 sm:p-5 md:p-6'>
                                <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4">
                                    <div className="flex items-center gap-2">
                                        <IoMdContact className="text-sm text-secondary shrink-0" />
                                        <p className="text-xs sm:text-sm text-mist2">{post.author}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaComments className="text-sm text-secondary shrink-0" />
                                        <p className="text-xs sm:text-sm text-mist2">{post.comments}</p>
                                    </div>
                                </div>
                                <h3 className="font-extrabold w-[65%] mx-auto text-lg sm:text-xl md:text-xl leading-tight text-center">
                                    {post.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Section8