import React from 'react';
import Hero from '../Hero/Hero';
import Topfood from '../Topfood/Topfood';
import Foodcategory from '../Foodcategory/Foodcategory';
import Secondhero from '../Hero/Secondhero';
import HelmetTitle from '../../HelmetTitle';

const Home = () => {
    return (
       <div className='bg-base-300 mx-auto'>
          <HelmetTitle title="Home"/>
        <Hero/>
        <Topfood/>
        {/* <Foodcategory/> */}
        <Secondhero/>
       </div>
    );
};

export default Home;