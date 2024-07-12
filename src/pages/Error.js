import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {
    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         const container = document.getElementById('container');
    //         if (container) {
    //             const x = -e.clientX / 5;
    //             const y = -e.clientY / 5;
    //             container.style.backgroundPositionX = `${x}px`;
    //             container.style.backgroundPositionY = `${y}px`;
    //         }
    //     };

    //     window.addEventListener('mousemove', handleMouseMove);

    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []);

    return (
        <div className=''>
            <div className="min-h-screen flex flex-col items-center justify-center bg-richblack-800 p-4">
                <h1 className=" text-9xl font-bold text-richblack-5 mb-4">404</h1>
                <h2 className="text-2xl text-richblack-50 mb-4">Page Not Found</h2>
                <p className="text-lg text-richblack-100 mb-8 text-center">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link
                    to="/"
                    className="px-6 py-2 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-all duration-300"
                >
                    <span className='text-richblack-900 font-semibold'>
                        Go to Home
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Error;