// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Sunstone Pickleball Club</h3>
                        <p className="text-gray-400">
                            Join our vibrant pickleball community, where we promote fun, fitness, and friendship through this growing sport.
                        </p>
                        <p className='text-gray-400'>For steps to join: 
                        <a href="/" className='hover:text-blue-600'> Click Here</a>
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link 
                                    to="/" 
                                    onClick={() => {
                                        window.scroll({
                                            top: 0,
                                            left: 0,
                                            behavior: "smooth",
                                        });
                                    }}
                                    className="footer-style">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/about" 
                                    onClick={() => {
                                        window.scroll({
                                            top: 0,
                                            left: 0,
                                            behavior: "smooth",
                                        });
                                    }}
                                    className="footer-style">
                                    Community
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/calendar" 
                                    onClick={() => {
                                        window.scroll({
                                            top: 0,
                                            left: 0,
                                            behavior: "smooth",
                                        });
                                    }}
                                    className="footer-style">
                                    Calendar
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/contact" 
                                    onClick={() => {
                                        window.scroll({
                                            top: 0,
                                            left: 0,
                                            behavior: "smooth",
                                        });
                                    }}
                                    className="footer-style">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Social Media */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com/share/p/4KGQW4L2SJDKbN5R/?" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.407.592 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.465.099 2.797.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.309h3.587l-.467 3.622h-3.12V24h6.117C23.407 24 24 23.407 24 22.675V1.325C24 .592 23.407 0 22.675 0z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="text-center text-gray-400 mt-8">
                    &copy; {new Date().getFullYear()} Sunstone Pickleball Club. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
