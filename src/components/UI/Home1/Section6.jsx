import { ChevronUpIcon } from "@animateicons/react/lucide";
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import testimonials from "../../../data/TestimonialData";
import { useState } from "react";

const Section6 = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    // CURRENT TESTIMONIAL
    const { name, review, rating, image } = testimonials[currentIndex];

    // RIGHT ARROW
    const handleClickRightArrow = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    // LEFT ARROW
    const handleClickLeftArrow = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <div className="bg-lightmist w-full py-15">
            <div className="flex flex-wrap items-start justify-center max-w-240 mx-auto relative">

                {/* LEFT SECTION */}
                <div className="flex flex-col px-3 w-[35%] text-left">
                    <h5 className="font-heading text-xl text-secondary">Our Testimonials</h5>
                    <h2 className="font-extrabold text-3xl text-left">What They're<br />Talking About<br />Agrios</h2>
                    <p className="text-sm text-mist2 mt-6">There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or random word which don't look even.</p>
                    <Link to="/testimonials" className="mt-6 text-sm bg-primary text-white py-3 px-6 w-46 rounded-lg hover:bg-mehandi transition duration-300">View All Testimonials</Link>
                </div>

                {/* RIGHT SECTION */}
                <div className="flex flex-col w-[65%]">

                    {/* TESTIMONIAL CARD */}
                    <div className="bg-white p-5 rounded-lg flex items-center justify-between gap-5">

                        {/* TEXT */}
                        <div className="px-6">
                            <p className="text-sm text-left text-mist2">{review}</p>
                            <div className="flex items-center justify-between gap-3 mt-4">
                                <h3 className="font-semibold">{name}</h3>

                                {/* STARS */}
                                <p className="flex gap-px text-xs text-amber-300">{Array.from({ length: 5 }).map((_, idx) => (
                                    <FaStar key={idx} className={idx < rating ? "fill-current" : "text-gray-300"} />))}
                                </p>
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className="shrink-0 relative rounded-full border-2 border-dotted border-secondary flex items-center justify-center w-20 h-20">
                            <img src={image} alt={name} className="rounded-full w-18 h-18 object-cover" />
                            <div className="absolute top-2 -right-2 rounded-full text-primary z-10">
                                <MdVerified size={23} />
                            </div>
                            <div className="absolute top-3 -right-1 rounded-full w-4 h-4 bg-white"></div>
                        </div>
                    </div>

                    {/* ARROW BUTTONS */}
                    <div className="flex absolute gap-4 bottom-0 right-0">

                        {/* LEFT */}
                        <ChevronUpIcon
                            className="cursor-pointer -rotate-90 transition duration-300 hover:text-secondary"
                            size={40}
                            duration={1}
                            color="#4baf47"
                            onClick={handleClickLeftArrow}
                        />

                        {/* RIGHT */}
                        <ChevronUpIcon
                            className="cursor-pointer rotate-90 transition duration-300 hover:text-secondary"
                            size={40}
                            duration={1}
                            color="#4baf47"
                            onClick={handleClickRightArrow}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section6;