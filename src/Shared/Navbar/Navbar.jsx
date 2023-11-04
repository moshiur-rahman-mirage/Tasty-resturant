import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Switcher from '../../Theme/Switcher';

const Navbar = () => {

    const user={}


    const navitem = <>
        <li><a>Home</a></li>
        <li><a>All Menu</a></li>
        <li><a>Profile</a></li>

    </>


    return (
        <div className="bg-primary">
            <div className="max-w-7xl mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navitem}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-neutral  normal-case text-xl">Brand Name</a>

                    </div>
                    <div className="navbar-center text-neutral hidden lg:flex">
                        <ul className="menu  menu-horizontal px-1">
                            {navitem}
                        </ul>
                    </div>
                    <div className="navbar-end">
                       
                        <Switcher />




                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn border-white btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {user && <img src={user.photoURL} />}
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    user ? <button className="btn normal-case text-black-content text-xl" >Sign Out</button> :
                                        <NavLink to="/login" className="btn normal-case text-black-content text-xl">Log In</NavLink>
                                }
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;