import React from 'react';
import toast from 'react-hot-toast';
import { FaCheck, FaTrashAlt } from 'react-icons/fa';

const Booking = ({ booking, refetch }) => {
    const { _id } = booking
    const { name, orginalPrice, resellPrice, img, stutas, address } = booking.booking
    const handleBookingDelete = id => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Delete Items successfully!')
                refetch()
            })
            .catch(err => console.error(err))
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt={name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-70">Orginal price : {orginalPrice}</div>
                        <div className="text-sm opacity-70">Resell price : {resellPrice}</div>
                    </div>
                </div>
            </td>
            <td>{address}</td>
            <td>
                {
                    stutas && <FaCheck className='text-green-600 inline-block'></FaCheck>
                }
            </td>
            <th>
                <button onClick={() => handleBookingDelete(_id)} className="mt-2"><FaTrashAlt className='ml-2 text-2xl'></FaTrashAlt> </button>
            </th>
        </tr>
    );
};

export default Booking;