import React from 'react';
import { Link, NavLink } from 'react-router';


const Navbar = () => {
    return (
        <div>
            <div className="navbar px-10 bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2  shadow text-md font-lg">
                        <NavLink to={"/"} className={({ isActive }) => (isActive ? 'border-b border-blue-600 bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold' : '')}>Home</NavLink>
                        <NavLink to={"/apps"} className={({ isActive }) => (isActive ? 'border-b border-blue-600 bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold' : '')}>Apps</NavLink>
                        <NavLink to={"/installation"} className={({ isActive }) => (isActive ? 'border-b border-blue-600 bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold' : '')}>Installation</NavLink>

                    </ul>
                </div>

                <Link to={'/'}><a className="flex  gap-1 items-center text-xl"><img className='w-10 h-10' src="../../public/logo.png" alt="" /> <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold'>AppFlix</span></a></Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <NavLink to={"/"} className={({ isActive }) => (isActive ? 'border-b border-blue-600 bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold' : '')}>Home</NavLink>
                    <NavLink to={"/apps"} className={({ isActive }) => (isActive ? 'border-b border-blue-600 bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold' : '')}>Apps</NavLink>
                    <NavLink to={"/installation"} className={({ isActive }) => (isActive ? 'border-b border-blue-600 bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold' : '')}>Installation</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/zibon07' target='_blank' className="btn font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"><img src="../../public/fi_2111432.png" alt="" />Contribute</a>
            </div>
        </div>
        </div>
    );
};

export default Navbar;