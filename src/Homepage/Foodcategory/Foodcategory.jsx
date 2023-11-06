import React from 'react';

const Foodcategory = () => {
    return (
        <div>
            <h1 className='my-5 text-neutral-content font-bold text-4xl text-center'>Our Service</h1>
            <div className='border  h-20 grid grid-cols-3'>
                <div>
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Name</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Description</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">Price</span>

                        </div>

                        <ul role="list" className="mb-8 space-y-4 text-left">

                            <li>A</li>


                        </ul>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Name</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Description</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">Price</span>

                        </div>

                        <ul role="list" className="mb-8 space-y-4 text-left">

                            <li>A</li>


                        </ul>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                        <h3 className="mb-4 text-2xl font-semibold">Name</h3>
                        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Description</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">Price</span>

                        </div>

                        <ul role="list" className="mb-8 space-y-4 text-left">

                            <li>A</li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foodcategory;