import React from 'react';
import Singlefood from '../Component/Singlefood';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useState } from 'react';
import HelmetTitle from '../HelmetTitle';

const MyMenu = () => {

    const { user, logout, brand, loading } = useContext(AuthContext)


    const [food, setFood] = useState([]);
    useState(() => {
        fetch(`https://b8a11-server-side-moshiur-rahman-mirage.vercel.app/menu?email=${user.email}`)
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
    return (
        <div>
              <HelmetTitle title="My Menu"/>
            <div className='max-w-7xl mx-auto  '>
                <h1 className='text-4xl my-5 text-neutral-content text-center font-semibold'>My Menu</h1>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {food.map(food => {
                        return (
                            <Singlefood key={food._id} food={food} />
                        )
                    })}

                </div>

            </div>
        </div>
    );
};

export default MyMenu;