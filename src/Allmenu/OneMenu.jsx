import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const OneMenu = () => {
    const food = useLoaderData();
    // console.log(food)
    return (
        <div>
            <NavLink to ={`/order/${food._id}`} className="grid rounded-lg max-w-6xl mx-auto gap-5 my-5 md:grid-cols-2 grid-cols-1 bg-base-100 shadow-xl">
            <figure><img className='rounded-lg' src={food.image_links} style={{height:400}} alt="Album" /></figure>
                <div className="flex flex-col items-start justify-start">
                    <h2 className="text-4xl mt-10 mb-5 font-semibold text-neutral-content">{food.name}</h2>
                    <p className='text-3xl text-neutral-content'>{food.category}</p>
                    <p className='mb-2  text=2xl text-neutral-content font-semibold'>Price :$ {food.rate}</p>
                    <p className='mb-2 text=2xl text-neutral-content font-semibold'>Made By : {food?.creator}</p>
                    <p className='mb-2 text=2xl text-neutral-content font-semibold'>Origin: {food?.country_of_origin}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default OneMenu;