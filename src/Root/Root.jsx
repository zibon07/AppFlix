import React from 'react';
import Navbar from '../MainLayOut/Navbar';
import Footer from '../MainLayOut/Footer';
import { Outlet } from 'react-router';
import Header from '../MainLayOut/Header';
import { ToastContainer } from 'react-toastify';



const Root = () => {
    return (
        <div className='flex flex-col'>

            <Header></Header>
            <div className='flex-1 min-h-[80vh]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;