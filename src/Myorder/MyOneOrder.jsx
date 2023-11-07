import React from 'react';

const MyOneOrder = ({ morder }) => {
    return (

        <tr>
            <td className='text  text-neutral-content'>{morder.name}</td>

            <td>
            <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={morder.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    
                </div>
            </td>
          
            <td className='text  text-neutral-content'>{morder.qty}</td>
            <td className='text  text-neutral-content'>{morder.currentPrice}</td>
            <th>
                <button className="btn btn-ghost btn-xs text-neutral-content">Update</button>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs text-neutral-content">Delete</button>
            </th>
        </tr>

    );
};

export default MyOneOrder;