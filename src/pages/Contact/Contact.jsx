import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";

const Contact = () => {
    return (
        <div>
            <Navbar />
                <div className="relative bg-cover bg-center h-screen pt-10">
                    <div className="absolute inset-0 bg-gray-200"></div>
                    <div className="relative z-4 flex flex-col items-center justify-center h-3/4 text-black text-center">
                        <h1 className="text-4xl md:text-6xl font-bold max-sm:text-3xl ">Contact</h1>
                        <img className="h-[500px] w-[350px] pt-20" src="../../assets/IMG_20240907_133205.jpg" alt="Flyer" />
                        <div className="bg-gray-500 text-white mt-5 rounded-md px-5 pb-5">
                            <h1 className="mt-5"> For any questions Message us at: </h1>
                            <a href="mailto:sunstonepickleballclub@gmail.com" target="_blank" className="hover:text-blue-500 underline">sunstonepickleballclub@gmail.com</a>
                            <h1 className="mt-5">Or call Daniel Lueders at: </h1>
                            <p>941-599-4382</p>
                        </div>
                    </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
