import React, { useState, useEffect } from 'react';
import './Carousel.css';

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    const items = [
        { src: "/images/first.jpg"  },
        { src: "/images/second.jpg" },
        { src: "/images/third.jpg" },
        { src: "/images/fourth.jpg" },
        { src: "/images/fifth.jpg" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="carousel-inner " id="carousel">
                <div className="carousel-caption" >
                    <form className="d-flex">
                        <input className=" form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="form-button" type="submit">Search</button>
                    </form>
                </div>
            </div>
            
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {items.map((item, index) => (
                    <div key={index} className={`absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${index === activeIndex ? "ease-in-out" : "hidden duration-700 ease-in-out"}`}>
                        <img src={item.src} className="block w-full" alt={`Slide ${index + 1}`} />
                    
                    </div>
                    
                ))}
                
            </div>
            {/* Search bar */}
            {/* <div className="absolute bottom-0 left-0 w-full p-4 bg-white">
                <input type="text" placeholder="Search..." className="w-full p-2 border border-gray-300 rounded" />
            </div> */}
            {/* Slider controls */}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePrev}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNext}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}

