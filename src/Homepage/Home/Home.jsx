import React from 'react';
import Hero from '../Hero/Hero';
import Topfood from '../Topfood/Topfood';
import Foodcategory from '../Foodcategory/Foodcategory';

const Home = () => {
    return (
       <div className='bg-base-300 mx-auto'>
        <Hero/>
        <Topfood/>
        <Foodcategory/>
       </div>
    );
};

export default Home;