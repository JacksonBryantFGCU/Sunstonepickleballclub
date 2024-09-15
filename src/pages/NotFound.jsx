import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
        navigate('/');
        }, 5000); // Redirect after 5 seconds
        return () => clearTimeout(timer); // Cleanup timer if component is unmounted
    }, [navigate]);

    return (
        <main className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
            <h1 className="text-5xl font-bold text-red-600">Page Not Found</h1>
            <p className="mt-4 text-lg text-gray-600">
                Oops! The page you are looking for does not exist. You will be redirected to
                the homepage in a few seconds.
            </p>
            <Link to="/" className="mt-6 text-blue-500 underline">
                Go back to the homepage now
            </Link>
        </main>
    );
};

export default NotFound;
