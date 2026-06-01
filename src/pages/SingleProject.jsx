import React from 'react'
import { Link, useParams } from 'react-router-dom';
import BreadcrumbHeader from '../components/UI/BreadcrumbHeader';
import { ProjectData } from '../data/ProjectData';
import SocialMediaLinksProject from '../components/UI/Projects/SocialMediaLinksProject';

const SingleProject = () => {

    const { id } = useParams();

    const currentProject = ProjectData[id];

    return (
        <div>
            <BreadcrumbHeader heading={currentProject.title} url={currentProject.slug} />
            <div className="flex flex-col gap-5 my-10 max-w-220 mx-auto">
                <img className="w-full h-80 object-cover rounded-xl" src={currentProject.image1} alt={currentProject.title} />

                <div className="flex gap-5 items-start">

                    {/* Project Content */}
                    <main className='flex flex-col gap-4 w-full text-left'>
                        <h3 className="text-lg font-extrabold">{currentProject.title}</h3>
                        <p className="text-xs leading-5 text-mist2">{currentProject.description}</p>
                        <p className="text-sm font-bold leading-5">{currentProject.markHeading}</p>
                        <p className="text-xs leading-5 text-mist2">{currentProject.description2}</p>
                        <p className="text-xs leading-5 text-mist2">{currentProject.description3}</p>
                        <h3 className="text-lg font-extrabold">Challenges</h3>
                        <ul className="list-disc list-inside text-mist2 text-xs -mt-2">
                            {currentProject?.challenges.map((challenge, index) => (
                                <li key={index}>{challenge}</li>
                            ))}
                        </ul>

                        <p className="text-xs leading-5 text-mist2">{currentProject.genefitDescription}</p>
                    </main>

                    {/* Project Details */}
                    <aside className='flex flex-col gap-4 w-80 text-left bg-white p-5 border-t-3 border-t-secondary rounded-xl shadow-2xl'>
                        <div>
                            <p className="text-mist2 text-xs">Services:</p>
                            <p className="text-black text-xs font-bold">{currentProject.title}</p>
                        </div>
                        <div>
                            <p className="text-mist2 text-xs">Farmer:</p>
                            <p className="text-black text-xs font-bold">{currentProject.farmerName}</p>
                        </div>
                        <div>
                            <p className="text-mist2 text-xs">Duration:</p>
                            <p className="text-black text-xs font-bold">{currentProject.duration}</p>
                        </div>
                        <div>
                            <p className="text-mist2 text-xs">Location:</p>
                            <p className="text-black text-xs font-bold">{currentProject.location}</p>
                        </div>
                        <SocialMediaLinksProject twitterUrl={currentProject.twitterUrl} facebookUrl={currentProject.facebookUrl} pinterestUrl={currentProject.pinterestUrl} instagramUrl={currentProject.instagramUrl} />
                    </aside>
                </div>

                {/* Similar Projects */}
                <div className="flex flex-col gap-5 mt-10">
                    <div className="items-center flex flex-col">
                        <h5 className='font-heading text-lg text-secondary'>Recently Completed</h5>
                        <h2 className='font-extrabold text-3xl text-left mt-1'>Similar Projects</h2>
                    </div>
                    <div className="flex  gap-2 mt-2">
                        <Link to="/projects/easy-harvesting" className="relative bg-[url('/src/assets/Project/img1.png')] bg-cover bg-center w-60 h-90 m-2 rounded-lg">
                            <h4 className="absolute bottom-5 left-5 text-left font-bold text-white leading-5 w-10">Easy Harvesting</h4>
                        </Link>
                        <Link to="/projects/agriculture-farming" className="relative bg-[url('/src/assets/Project/img2.png')] bg-cover bg-center w-60 h-90 m-2 rounded-lg">
                            <h4 className="absolute bottom-5 left-5 text-left font-bold text-white leading-5 w-10">Agriculture Farming</h4>
                        </Link>
                        <Link to="/projects/ecological-farming" className="relative bg-[url('/src/assets/Project/img3.png')] bg-cover bg-center w-60 h-90 m-2 rounded-lg">
                            <h4 className="absolute bottom-5 left-5 text-left font-bold text-white leading-5 w-10">Ecological Farming</h4>
                        </Link>
                        <Link to="/projects/organic-solutions" className="relative bg-[url('/src/assets/Project/img4.png')] bg-cover bg-center w-60 h-90 m-2 rounded-lg">
                            <h4 className="absolute bottom-5 left-5 text-left font-bold text-white leading-5 w-10">Organic Solutions</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject