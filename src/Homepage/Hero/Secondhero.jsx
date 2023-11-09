import React from 'react';

const Secondhero = () => {
    return (
        <div className='flex gap-7 flex-col items-center justify-center my-5'>
                <div className='text-center text-neutral-content max-w-2xl'>
                    <p className='mb-3'>TASTY AND CRUNCHY </p>
                    <h2 className='text-4xl font-semibold mb-3'>OUR STORY</h2>
                    <p>We offer quality food from all over the world.</p>
                </div>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 max-w-5xl'>
                    <div>  <img src="darkbanner.jpg" className="w-full" alt="Tailwind CSS Carousel component" /></div>
                    <div>  <img src="pizza.jpg" className="w-full" alt="Tailwind CSS Carousel component" /></div>
                </div>
        </div>

    );
};

export default Secondhero;