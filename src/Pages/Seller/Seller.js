import React from 'react';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';

const Seller = ({ seller, refetch, index }) => {
    const { name, email, _id, stutas } = seller

    const handleSellerDelete = id => {
        fetch(`https://dream-shop-server.vercel.app/sellers/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Seller Deleted successfull')
                refetch()
            })
            .catch(err => console.error(err))
    }
    const handleUserVerify = id => {
        fetch(`https://dream-shop-server.vercel.app/seller/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Seller verifed successfull')
                refetch()
            })
            .catch(err => console.error(err))
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <th>{name}</th>
            <td>{email}</td>
            <th>{
                stutas ? <>
                    <></>
                </> : <button onClick={() => handleUserVerify(_id)} className='btn btn-gost btn-sm'>Verify Seller</button>
            }
            </th>
            <th>
                <button onClick={() => handleSellerDelete(_id)} className="mt-2"><FaTrashAlt className='ml-2 text-2xl'></FaTrashAlt> </button>
            </th>
        </tr>
    );
};

export default Seller;