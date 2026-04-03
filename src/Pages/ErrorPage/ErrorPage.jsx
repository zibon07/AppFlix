import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex bg-gray-200 flex-col justify-center items-center space-y-2 p-7'>
            <img src="/error-404.png" alt="" />
            <h2 className='text-4xl font-bold'>Oops, page not found!</h2>
            <p className=''>The page you are looking for is not available.</p>
            <Link to={'/'}><button className='btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;