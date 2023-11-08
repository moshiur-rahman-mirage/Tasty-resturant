import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Switcher from '../../Theme/Switcher';
import { AuthContext } from '../../Provider/AuthProvider';


const Navbar = () => {

    const { user, logout, brand, loading } = useContext(AuthContext)

    const handleSignOut = () => {
        logout()
            .then()
            .catch()
    }

    const navitem = <>
        <li><Link to="/" className='text-neutral hover:bg-secondary bg-primary mr-4'>Home</Link></li>
        <li><Link to="/allmenu" className='text-neutral hover:bg-secondary bg-primary  mr-4'>All Menu</Link></li>
        <li><Link to="/blog" className='text-neutral hover:bg-secondary bg-primary  mr-4'>Blog</Link></li>

        <li tabIndex={0}>
            <details>
                <summary className='text-neutral hover:bg-secondary bg-primary  mr-4'> My Profile</summary>
                <ul className="w-52 bg-primary">
                    <li><NavLink to="/addfood" className=" text-neutral hover:bg-secondary bg-primary ">Add a food</NavLink> </li>
                    <li><NavLink to="/myorder" className=" text-neutral hover:bg-secondary bg-primary ">My Order</NavLink> </li>
                    <li><NavLink to="/mymenu" className=" text-neutral hover:bg-secondary bg-primary ">My added food</NavLink> </li>
                </ul>
            </details>
        </li>

    </>




    return (
        <div className="bg-secondary">
            <div className="max-w-7xl mx-auto ">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn  text-neutral btn-ghost lg:hidden">
                                <svg className="bg-primary hover:bg-secondary" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm bg-primary dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                                {navitem}
                            </ul>
                        </div>
                        <NavLink to="/" className="btn btn-ghost text-neutral  hover:bg-secondary  bg-primary normal-case text-xl">{brand}</NavLink>

                    </div>
                    <div className="navbar-center text-neutral hidden lg:flex">
                        <ul className="menu  menu-horizontal px-1">
                            {navitem}
                        </ul>
                    </div>
                    <div className="navbar-end flex flex-row gap-3 mr-5">

                        <Switcher className="" />



                        {user ?

                            <div className="dropdown flex flex-row items-center gap-5 dropdown-end ">

                                <label tabIndex={0} className="btn hover:bg-secondary bg-primary btn-text-neutral border-neutral btn-ghost btn-circle avatar">
                                    <div className="w-8 border-neutral rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <div className='dropdown dropdown-bottom'>
                                    <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">

                                        <button className="btn bg-secondary  normal-case text-neutral text-md" onClick={handleSignOut} >Sign Out</button>

                                    </ul>
                                </div>

                            </div> :
                            <ul className='menu'>
                                <li><NavLink to="/login" className="text-neutral">Log In</NavLink> </li>
                            </ul>

                        }



                    </div>
                </div>
            </div>
        </div>



    );
};

export default Navbar;