// src/components/Gallery.jsx
import { useState } from 'react';

const images = [
    'https://sunstonepickleball.com/assets/suntonepictures/43C1B0D8-B37F-4711-8F10-388789CB1237.jpg', // Replace with actual image URLs
    'src/assets/suntonepictures/EA340239-7890-4DEB-B4A2-8C1F1D0589C5.jpg',
    'src/assets/suntonepictures/A18D29B9-03A7-48D0-85E8-31D2E1B871CE.jpg',
    'src/assets/suntonepictures/93E8E956-E199-46E3-B411-6AA1B8FE19C7.jpg',
    'src/assets/suntonepictures/B6E15737-9643-49B3-ADD8-F23337E9AF00.jpg',
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8" id='gallery'>Gallery</h2>
                <div className="relative">
                    <div className="overflow-hidden relative w-full">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {images.map((image, index) => (
                                <div key={index} className="min-w-full h-[600px]">
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Carousel Dots */}
                <div className="flex justify-center mt-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-3 w-3 mx-2 rounded-full ${
                                currentIndex === index
                                    ? 'bg-blue-600'
                                    : 'bg-gray-400'
                            }`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
