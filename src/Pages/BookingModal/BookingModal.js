import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';

const BookingModal = ({ booking, setBooking }) => {
    const { user } = useContext(AuthContext)
    const { name, address, resellPrice } = booking;
    const bookingData = {
        email: user.email,
        name: user.name,
        booking
    }
    const handleBookingProduct = () => {
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Booking Successfull!')
                setBooking(null)
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal p-12 flex justify-center items-center">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='px-12'>
                        <div>
                            <h3 className="text-lg font-bold mb-8">{name}</h3>
                            <input type="text" defaultValue={user?.displayName} disabled placeholder="" className="input input-bordered input-primary w-full mb-6" />
                            <input type="email" defaultValue={user?.email} disabled placeholder="" className="input input-bordered input-primary w-full mb-6" />
                            <input defaultValue={resellPrice} disabled type="text" placeholder="" className="input input-bordered input-primary w-full mb-6" />
                            <input disabled defaultValue={address} type="text" placeholder="" className="input input-bordered input-primary w-full mb-6" />
                            <button onClick={handleBookingProduct} type='submit' className='btn btn-primary w-full'>Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;