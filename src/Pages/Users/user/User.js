import React from 'react';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
const User = ({ user, index, refetch }) => {
    const { name, email, _id } = user
    console.log(user)
    const handleUserDalete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Delete Items successfully!')
                refetch()
            })
            .catch(err => console.log(err))

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <th>
                <button onClick={() => handleUserDalete(_id)} className="mt-2"><FaTrashAlt className='ml-2 text-2xl'></FaTrashAlt> </button>
            </th>
        </tr>
    );
};

export default User;