import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { categoryData } from '../data/CategoryData';
import { categories } from '../data/CategoryData';

const ServiceCategory = () => {

    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const { id } = useParams();
    const currentCategory = categoryData[id];
    return (
        <div className="">
            <div className="flex gap-5 my-10 max-w-220 mx-auto">

                {/* Category */}
                <aside className="flex flex-col gap-5 w-60 text-left ">
                    <div className="p-5 bg-lightmist rounded-md">
                        <h4 className="font-bold">Categories</h4>
                        <p className="mt-3">{categories.map((cat, index) => (
                            <p className="text-mist2 text-xs mt-2 hover:text-primary" key={index}>
                                <Link to={`/services/category/${cat.slug}`}>
                                    {cat.name}
                                </Link>
                            </p>
                        ))}</p>
                    </div>
                    <div className="relative flex flex-col gap-4 p-5 text-center text-white bg-primary rounded-md">
                        <h3 className="font-bold z-10">Need Help?</h3>
                        <p className="text-gray-200 text-xs px-2 z-10">Speak with a human to filling out a form? call corporate office and we will connect with a team member help.</p>
                        <p className="text-gray-200 text-lg px-2 font-heading z-10">+92 (000) -9630</p>
                        <Link to="/shopping" className="text-sm bg-secondary py-2 px-4 rounded-md w-max mx-auto z-10">Start Shopping Now</Link>
                        <img src="/src/assets/Service/category-aside.png" className='absolute top-0 right-0 bg-cover bg-right bg-no-repeat' alt="Background" />
                    </div>
                </aside>

                {/* Category Details */}
                <main className="w-full text-left flex flex-col gap-5">
                    <img className="w-full h-60 object-cover rounded-lg" src={currentCategory?.image1} alt={currentCategory?.title} />
                    <h2 className="text-2xl font-bold">{currentCategory?.title}</h2>
                    <p className="text-mist2 text-sm">{currentCategory?.description}</p>
                    <p className="text-mist2 text-sm">{currentCategory?.moreDescription}</p>

                    <div className="flex gap-5">
                        <img className="w-full h-40 object-cover rounded-lg" src={currentCategory?.image2} alt={currentCategory?.title} />
                        <img className="w-full h-40 object-cover rounded-lg" src={currentCategory?.image3} alt={currentCategory?.title} />
                    </div>

                    <div className='flex gap-5'>
                        <div className="w-full">
                            <h3 className="text-xl font-bold">Our Benefits</h3>
                            <p className="text-mist2 text-sm mb-3">{currentCategory?.genefitDescription}</p>
                        </div>
                        <div className="w-full">
                            <ul className="list-disc list-inside text-mist2 text-sm">
                                {currentCategory?.benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Accordion */}
                    <div className="flex flex-col gap-1 rounded-3xl overflow-hidden">

                        <div className={`collapse collapse-arrow bg-base-100 ${openAccordion === 1 ? "collapse-open" : "collapse-close"}`}>
                            <div className={`collapse-title font-semibold bg-lightmist cursor-pointer ${openAccordion === 1 ? "hover:bg-primary" : "none"}`} onClick={() => handleAccordion(1)}>
                                World&apos;s hottest destinations for vegans
                            </div>
                            <div className={`collapse-content text-xs text-mist2 ${openAccordion === 1 ? "p-5" : "p-0"}`}>
                                Click the "Sign Up" button in the top right corner and follow the registration process.
                            </div>
                        </div>

                        <div className={`collapse collapse-arrow bg-base-100 ${openAccordion === 2 ? "collapse-open" : "collapse-close"}`}>
                            <div className={`collapse-title font-semibold bg-lightmist cursor-pointer ${openAccordion === 2 ? "hover:bg-primary" : "none"}`} onClick={() => handleAccordion(2)}>
                                Let&apos;s grow naturaly and live naturaly
                            </div>
                            <div className={`collapse-content text-xs text-mist2 ${openAccordion === 2 ? "p-5" : "p-0"}`}>
                                Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula,
                                molestie ullamcorper vulputate vitae sodales commodo nisl. Nulla facilisi.
                                Pellentesque est metus many of some form.
                            </div>
                        </div>

                        <div className={`collapse collapse-arrow bg-base-100 ${openAccordion === 3 ? "collapse-open" : "collapse-close"}`}>
                            <div className={`collapse-title font-semibold bg-lightmist cursor-pointer ${openAccordion === 3 ? "hover:bg-primary" : "none"}`} onClick={() => handleAccordion(3)}>
                                Best vegetables for your healthy hair
                            </div>
                            <div className={`collapse-content text-xs text-mist2 ${openAccordion === 3 ? "p-5" : "p-0"}`}>
                                Go to "My Account" settings and select "Edit Profile" to make changes.
                            </div>
                        </div>

                    </div>
                </main>
            </div >
        </div >
    )
}

export default ServiceCategory