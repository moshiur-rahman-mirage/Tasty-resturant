import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useState } from 'react';
import MyOneOrder from './MyOneOrder';

const Myorder = () => {
    const { user, logout, brand, loading } = useContext(AuthContext)


    const [order, setOrder] = useState([]);
    useState(() => {
        fetch(`https://b8a11-server-side-moshiur-rahman-mirage.vercel.app/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])



    return (
        <div className='max-w-7xl min-h-screen'>
            <h1 className='text-4xl font-semibold text-center my-5 text-neutral-content'>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th  className='text-neutral-content'>Name</th>
                            <th  className='text-neutral-content'>Image</th>
                            <th  className='text-neutral-content'>Qty</th>
                            <th  className='text-neutral-content'>Rate</th>
                            <th  className='text-neutral-content'></th>
                            <th  className='text-neutral-content'></th>
                        </tr>
                    </thead>
                    <tbody>
                      
                    {order.map(morder=>{
                        return(
                            <MyOneOrder key={morder._id} morder={morder}/>
                        )
                    })}

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                    
                            <th className='text-neutral-content'>Name</th>
                            <th  className='text-neutral-content'>Image</th>
                            <th  className='text-neutral-content'>Qty</th>
                            <th  className='text-neutral-content'>Rate</th>
                            <th  className='text-neutral-content'></th>
                            <th  className='text-neutral-content'></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default Myorder;