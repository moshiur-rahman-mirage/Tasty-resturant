import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const AddFood = () => {
    const [food, setFood] = useState([])
    const [image, setImage] = useState(null)
    const { user } = useContext(AuthContext)



    const convertToBase64 = e => {
        console.log(e);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => setImage(reader.result)
        reader.onerror = (error) => (console.log(error));

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        const name = form.foodname.value;
        const category = form.foodcategory.value
        const rate = form.foodrate.value
        const available_qty = form.foodqty.value
        const country_of_origin = form.foodorigin.value
        const recipe = form.fooddesc.value
        const creator = user?.displayname
        const email = user?.email
        const image_links = form.image.value;
        const newitem = { name, category, rate, creator, country_of_origin, recipe, image_links,email,available_qty }
        fetch('http://localhost:5000/menu', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newitem)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                    Swal.fire({
                        title: 'Success',
                        text: 'Data Inserted Successfully!',
                        icon: 'success'
                    })



                }
            })
    }

    return (
        <div className=' min-h-screen  bg-base-300 mx-auto'>
            <div className='py-5  text-center w-full font-bold text-4xl text-neutral-content'>Food Add</div>
            <form onSubmit={handleSubmit} className="w-full mx-auto max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-neutral-content text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Food Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-neutral-content border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="foodname" type="text" placeholder="Food Name" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-neutral-content text-xs font-bold mb-2" htmlFor="grid-state">
                            Category
                        </label>
                        <div className="relative">
                            <input className="appearance-none block w-full bg-gray-200 text-neutral-content border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="foodcategory" type="text" placeholder="Food Category" />

                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">

                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-neutral-content text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Price
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-neutral-content border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="foodrate" type="text" placeholder="0.00" />
                    </div>

                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-neutral-content text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Qty
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-neutral-content border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="foodqty" type="number" placeholder="0.00" />
                    </div>
                </div>




                <div className="flex flex-wrap -mx-3 mb-6">

                <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-neutral-content text-xs font-bold mb-2" htmlFor="grid-city">
                            Description
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-neutral-content border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="fooddesc" type="textarea" />
                    </div>

                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-neutral-content text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Origin
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-neutral-content border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="foodorigin" type="text" placeholder="Bangladesh" />
                    </div>
                </div>


                <div className='flex flex-col w-full '>

                    <label className="block uppercase tracking-wide text-neutral-content text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Image
                    </label>
                    <input className="block w-full py-3 px-3 pb-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="image" type="text" />  
                    {/* onChange={convertToBase64}  */}

                </div>
                <div>
                    <button type="submit" className="mt-3 w-full btn btn-outline text-neutral-content  hover:bg-primary hover:text-neutral focus:ring-4">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddFood;