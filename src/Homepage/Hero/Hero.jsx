import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero min-h-[100vh] mt-[-75px]" style={{ backgroundImage: 'url(pizza.jpg)' }}>

            <div className=" hero-content text-center text-neutral-content">
                <div className="max-w-xl ">
                    <h1 className="mb-5 text-5xl font-bold text-neutral">Creating Moments with Every Meal</h1>
                    <p className="mb-5 text-neutral">Our restaurant is more than just food; it's a place where every bite, every dish, and every dining experience is crafted to help you create cherished memories.</p>
                    <NavLink to="/allmenu" className="btn hover:bg-secondary btn-primary text-neutral">Show All Menu</NavLink>
                </div>

            </div>
        </div>
    );
};

export default Hero;