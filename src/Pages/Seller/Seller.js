import React from 'react';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';

const Seller = ({ seller, refetch, index }) => {
    const { name, email, _id } = seller

    const handleSellerDelete = id => {
        fetch(`http://localhost:5000/sellers/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Seller Deleted successfull')
                refetch()
            })
            .catch(err => console.error(err))
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <td>{email}</td>
            <th><button className='btn btn-gost btn-sm'>Verify Seller</button></th>
            <th>
                <button onClick={() => handleSellerDelete(_id)} className="mt-2"><FaTrashAlt className='ml-2 text-2xl'></FaTrashAlt> </button>
            </th>
        </tr>
    );
};

export default Seller;