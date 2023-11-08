import React from 'react';

const MyOneOrder = ({ morder,handleDelete }) => {

    const {_id}=morder
    return (
       
        <tr>
             {console.log(morder)}
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
            <td className='text  text-neutral-content'>{morder.rate}</td>
            <th>
                <button className="btn btn-primary btn-xs text-neutral">Update</button>
            </th>
            <th>
                <button onClick={()=>handleDelete(_id)}  className="btn btn-primary btn-xs text-neutral">Delete</button>
            </th>
        </tr>

    );
};

export default MyOneOrder;