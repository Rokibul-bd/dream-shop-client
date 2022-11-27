import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
const User = ({ user, index, refetch }) => {
    const { name, email, _id } = user
    const handleUserDalete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
            .catch(err => console.log(err))

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td><FaTrashAlt onClick={() => handleUserDalete(_id)} className='ml-2 text-2xl'></FaTrashAlt> </td>
        </tr>
    );
};

export default User;