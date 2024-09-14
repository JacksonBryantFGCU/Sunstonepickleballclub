// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4 sticky z-10 top-0">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="text-white text-3xl font-bold">
                    Sunstone Pickleball
                </div>

                {/* Hamburger Menu Icon */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:items-center md:space-x-4 text-2xl">
                    <Link 
                        to="/" 
                        onClick={() => {
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}
                        className="navbar-style">
                        Home
                    </Link>
                    <Link 
                        to="/about" 
                        onClick={() => {
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}
                        className="navbar-style">
                        Community
                    </Link>
                    <Link 
                        to="/calendar" 
                        onClick={() => {
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}
                        className="navbar-style">
                        Calendar
                    </Link>
                    <Link 
                        to="/contact" 
                        onClick={() => {
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}
                        className="navbar-style pr-10">
                        Contact
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-800 transform ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } duration-300 md:hidden`}
            >
                {/* Close Button Inside Mobile Menu */}
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="p-4">
                <Link 
                        to="/" 
                        onClick={() => {
                            setIsOpen(false)
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}
                        className="navbar-mobile">
                        Home
                    </Link>
                    <Link 
                        to="/about" 
                        onClick={() => {
                            setIsOpen(false)
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}
                        className="navbar-mobile">
                        Community
                    </Link>
                    <Link 
                        to="/calendar" 
                        onClick={() => {
                            setIsOpen(false)
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}
                        className="navbar-mobile">
                        Calendar
                    </Link>
                    <Link 
                        to="/contact" 
                        onClick={() => {
                            setIsOpen(false)
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}
                        className="navbar-mobile">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
