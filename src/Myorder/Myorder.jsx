import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useState } from 'react';
import MyOneOrder from './MyOneOrder';
import Swal from 'sweetalert2';

const Myorder = () => {
    const { user, logout, brand, loading } = useContext(AuthContext)


    const [order, setOrder] = useState([]);
    useState(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`,{credentials:'include'})
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])



    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/orders/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = order.filter(order => order._id !== _id);
                            setOrder(remaining);
                            
                        }
                    })
            }
        })
    }



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
                            <MyOneOrder key={morder._id} morder={morder} handleDelete={handleDelete} />
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