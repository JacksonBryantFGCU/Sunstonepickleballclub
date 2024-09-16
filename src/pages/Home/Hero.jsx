const Hero = () => {
    return (
        <div className="relative bg-cover bg-center h-screen z-0"  style={{ backgroundImage: "url('https://www.shelburne.ca/en/resourcesGeneral/galleries/stock-photo-pickleball-mixed-doubles-action-of-colorful-court-618134954.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                <h1 
                className="text-4xl md:text-6xl font-bold">Welcome to Sunstone Pickleball Club</h1>
                <p 
                className="text-lg md:text-xl mt-4">Join the community. Play with passion.</p>
                <button 
                className="mt-8 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold rounded-md">
                    <a href="/#InfoText">Join Now</a>
                </button>
            </div>
        </div>
    );
};

export default Hero;
