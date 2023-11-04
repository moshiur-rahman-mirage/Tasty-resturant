import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
        <div className='min-h-screen'>
            <Navbar className=''/>
            <div className=''>
                <Outlet />
            </div>
        </div>
       
    </div>
    );
};

export default Main;