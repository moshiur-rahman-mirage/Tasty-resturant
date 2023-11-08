import React from 'react';
import { useState } from 'react';
import Singlefood from '../Component/Singlefood';
import { useEffect } from 'react';

const Allmenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    return (
        <div className='bg-accent'>
            <div className='max-w-7xl mx-auto  '>
                <h1 className='text-4xl mb-5 text-neutral-content text-center font-semibold'>All Menu</h1>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {menu.map(food => {
                        return (
                            <Singlefood key={food._id} food={food} />
                        )
                    })}
                   
                </div>

            </div>
        </div>
    );
};

export default Allmenu;