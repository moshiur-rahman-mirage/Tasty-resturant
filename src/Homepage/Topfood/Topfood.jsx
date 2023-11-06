import React from 'react';
import { useState } from 'react';
import Singlefood from '../../Component/Singlefood';

const Topfood = () => {

    const [tfood, setTfood] = useState([]);
    useState(() => {
        fetch('topfood.json')
            .then(res => res.json())
            .then(data => setTfood(data))
    }, [])

    return (



        <div className='max-w-7xl mx-auto  '>
            <h1 className='text-4xl my-5 text-neutral-content text-center font-semibold'>Top Selling Foods</h1>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {tfood.map(food => {
                    return (
                        <Singlefood key={food._id} food={food} />
                    )
                })}
                <div></div>
                <button className='rounded-full w-[250px] my-5 btn hover:bg-secondary btn-primary text-neutral mx-auto'>Show All</button>
                <div></div>
            </div>

        </div>
    );
};

export default Topfood;