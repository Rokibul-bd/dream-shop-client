import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';

const BookingModal = ({ booking, setBooking }) => {
    const { user } = useContext(AuthContext)
    const { name, address, resellPrice } = booking;
    const { register, handleSubmit } = useForm()

    const handleBookingProduct = data => {
        const bookingData = {
            email: user.email,
            name: user.name,
            booking,
            mettingAddress: data.mettingAddress
        }
        fetch('https://dream-shop-server.vercel.app/booking', {
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
            <form onSubmit={handleSubmit(handleBookingProduct)} className="modal p-12 flex justify-center items-center">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='px-12'>
                        <div>
                            <h3 className="text-lg font-bold mb-8">{name}</h3>
                            <input type="text" defaultValue={user?.displayName} disabled placeholder="" className="input input-bordered input-primary w-full mb-6" />
                            <input type="email" defaultValue={user?.email} disabled placeholder="" className="input input-bordered input-primary w-full mb-6" />
                            <label className='text-base'>Resell Price</label>
                            <input defaultValue={resellPrice} disabled type="text" placeholder="" className="input input-bordered input-primary w-full mb-6" />
                            <label>Seller Address</label>
                            <input disabled defaultValue={address} type="text" placeholder="" className="input input-bordered input-primary w-full mb-6" />
                            <label className='text-base'>Metting Address</label>
                            <input {...register('mettingAddress')} type="text" placeholder="Metting address" className="input input-bordered input-primary w-full mb-6" />
                            <button type='submit' className='btn btn-primary w-full'>Booking</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default BookingModal;