import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Order = () => {

    const { user } = useContext(AuthContext)

    const food = useLoaderData();
    console.log(food)
    const avl = food.available_qty;
    console.log(avl)
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0)
    const [availqty, setAvailQty] = useState(avl)
    const [currentPrice, setCurrentPrice] = useState(0)
    const handleChange = (evt) => {

        const p = parseInt(evt.target.value) * parseFloat(food.rate);
        let avqty = food.available_qty - parseInt(evt.target.value)
        if (isNaN(avqty)) {
            let avqty = 0
        }
        setCurrentPrice(p)
        setAvailQty(avqty)
    }


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = user?.email;
        const mealId = food._id;
        const image = food.image_links;
        const name = food.name;
        const qty = form.qty.value;
        const avail = food.available_qty;
        const rate = food.rate.value;
        const date = new Date().toLocaleString()
        const order = {
            email,
            image,
            qty,
            rate,
            name,
            date,
            mealId

        }

        if (avail < qty) {
            toast.error('Stock Insufficient!');
        } else if (user.displayName == food.creator) {
            toast.error('Can not purchase your own item');
        }
     else if (qty<1) {
        toast.error('Wrong Qty');
    }
    else {
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
                    toast.success('Ordered Successfully!');
                    handleIncrement(food._id)
                }
            })



    }
}


const handleIncrement = (_id) => {

    console.log(_id)

    const requestData = {
        count
    };



    axios.post(`http://localhost:5000/mealupdate/${_id}`, requestData)
        .then(response => {
            console.log(`Field incremented successfully:${count}`, response.data.message);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

return (




    <div className='min-h-screen '>
        <ToastContainer />
        <form onSubmit={handleSubmit} className="grid rounded-lg max-w-6xl mx-auto gap-5 my-5 md:grid-cols-3 grid-cols-1 bg-base-100 shadow-xl">
            <figure><img className='rounded-lg h-[80%]' src={food.image_links} alt="Album" /></figure>
            <div className="flex grid-rows-2 flex-col items-start justify-start">
                <p className='text-neutral-content'>Buyer name  : {user?.displayName}</p>
                <p className='text-neutral-content'>Buyer email : {user?.email}</p>
                <p className='text-neutral-content'>Buy   Date  : {new Date().toLocaleString()}</p>
                <p className=' mt-5 text-2xl text-neutral-content font-semibold'>Item Name : {food.name}</p>
                <p className=' text-2xl text-neutral-content font-semibold'>Price :$ {food.rate}</p>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-neutral-content">Enter Quantity</span>
                    </label>
                    <label className="input-group text-neutral-content">
                        {/* <div className='btn btn-primary' onClick={() => setCount(count - 1)} >-</div> */}
                        <input type="number" name='qty' className="text-neutral-content border-neutral-content input input-bordered" onChange={(evt) => handleChange(evt)} />
                        {/* <div className='btn btn-primary' onClick={() => setCount(count + 1)}  >+</div> */}
                    </label>

                    <p className=' my-5 text=2xl text-neutral-content font-semibold'>Total Price :$ {currentPrice.toFixed(2)}</p>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-neutral-content">Available: {availqty}</span>
                    </label>
                </div>
                <div className="card-actions justify-end">
                    <button type='submit' className="btn btn-primary">Confirm</button>
                    {/* onClick={() => handleIncrement(food._id)} */}
                </div>
            </div>
        </form>
    </div>

);
};

export default Order;