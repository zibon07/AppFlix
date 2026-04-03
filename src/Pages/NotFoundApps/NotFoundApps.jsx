import React from 'react';
import { Link } from 'react-router';


const NotFoundApps = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-2 p-7'>
            <img src="/App-Error.png" alt="" />
            <h2 className='text-4xl font-bold'>OPPS!! APP NOT FOUND</h2>
            <p className=''>The App you are requesting is not found on our system.  please try another apps</p>
            <Link to={'/'}><button className='btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Go Back</button></Link>
        </div>
    );
};

export default NotFoundApps;