import React from 'react';
import { NavLink } from 'react-router-dom';

const Singlefood = ({ food }) => {


    return (
        <NavLink to ={`/menu/${food._id}`}  className='flex flex-row justify-center mb-5'>
            <div className="max-w-[300px] rounded-lg overflow-hidden ">
                <img className="w-full rounded-lg"  src={food.image} alt={food.name}/>
                    <div className="pt-4">
                        <div className="font-bold text-xl mb-2 text-center md:text-left text-neutral-content">{food.name}</div>
                    </div>
                    <div className=" flex flex-col items-center md:items-start justify-between">
                        <div className='text-neutral-content'>Category: {food.category}</div>
                        <div className='text-neutral-content'>Price: ${food.price}</div>
                        <div className='text-neutral-content'>Available Quantity: {food?.qty?food?.qty:0}</div>
                        <button className='  mt-2 btn btn-primary'>Show Details</button>
                    </div>
            </div>
        </NavLink>
    );
};

export default Singlefood;