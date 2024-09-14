// src/pages/LandingPage.js
import Navbar from "../Home/Navbar";
import Hero from "../Home/Hero";
import Gallery from "./Gallery";
import InfoText from "./InfoText";
import Footer from "./Footer";

const LandingPage = () => {
    return (
        <div>
        <Navbar />
        <Hero />
        <InfoText />
        <Gallery />
        <Footer />
        </div>
    );
};

export default LandingPage;
