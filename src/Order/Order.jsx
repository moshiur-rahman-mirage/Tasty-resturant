import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        const name = food.name;
        const qty = form.qty.value;
        const date=new Date().toLocaleString()
        const order = {
            email,
            image,
            qty,
            currentPrice,
            name,
            date

        }
        fetch('https://b8a11-server-side-moshiur-rahman-mirage.vercel.app', {
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
                    toast.success('Ordered Successfully!');
                }
            })


    }


    return (




        <div className='min-h-screen '>
             <ToastContainer/>
            <form onSubmit={handleSubmit} className="grid rounded-lg max-w-6xl mx-auto gap-5 my-5 md:grid-cols-3 grid-cols-1 bg-base-100 shadow-xl">
                <figure><img className='rounded-lg' src='/top6/1.jpg' alt="Album" /></figure>
                <div className="flex grid-rows-2 flex-col items-start justify-start">
                    <p className='text-neutral-content'>Buyer name  : {user?.displayName}</p>
                    <p className='text-neutral-content'>Buyer email : {user?.email}</p>
                    <p className='text-neutral-content'>Buy   Date  : {new Date().toLocaleString()}</p>
                    <p className=' mt-5 text-2xl text-neutral-content font-semibold'>Item Name : {food.name}</p>
                    <p className=' text-2xl text-neutral-content font-semibold'>Price :$ {food.price}</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-neutral-content">Enter Quantity</span>
                        </label>
                        <label className="input-group text-neutral-content my-5">
                            <div className='btn btn-primary' onClick={() => setCount(count - 1)} >-</div>
                            <input type="number" name='qty' value={count} className="text-neutral-content input input-bordered" />
                            <div className='btn btn-primary' onClick={() => setCount(count + 1)}  >+</div>
                        </label>

                        <p className=' my-5 text=2xl text-neutral-content font-semibold'>Total Price :$ {currentPrice.toFixed(2)}</p>
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