import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Order = () => {
    const food = useLoaderData();
    const [count, setCount] = useState(0);
    const currentPrice = parseInt(count) * parseFloat(food.price)
    const { user } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = user?.email;
        const mealId = food._id;
        const image = food.image;
        const qty = form.qty.value
        const order = {
            email,
            image,
            qty,
            currentPrice

        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Menu Ordered successfully')
                }
            })


    }


    return (




        <div className='min-h-screen my-auto'>
            <form onSubmit={handleSubmit} className="grid rounded-lg max-w-6xl mx-auto gap-5 my-5 md:grid-cols-2 grid-cols-1 bg-base-100 shadow-xl">
                <figure><img className='rounded-lg' src='/top6/1.jpg' alt="Album" /></figure>
                <div className="flex flex-col items-start justify-start">
                    <h2 className="text-4xl mt-10 mb-5 font-semibold text-neutral-content">{food.name}</h2>
                    <p className='text-3xl text-neutral-content'>{food.category}</p>
                    <p className=' my-5 text=2xl text-neutral-content font-semibold'>Price :$ {food.price}</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-neutral-content">Enter Quantity</span>
                        </label>
                        <label className="input-group text-neutral-content my-5">
                            <div className='btn btn-primary' onClick={() => setCount(count - 1)} >-</div>
                            <input type="number" name='qty' value={count} className="text-neutral-content input input-bordered" />
                            <div className='btn btn-primary' onClick={() => setCount(count + 1)}  >+</div>
                        </label>

                        <p className=' my-5 text=2xl text-neutral-content font-semibold'>Total Price :$ {currentPrice}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button type='submit' className="btn btn-primary">Confirm</button>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default Order;