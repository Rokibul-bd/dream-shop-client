import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Booking from '../Booking/Booking';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const { email } = user
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['booking', email],
        queryFn: async () => {
            const res = await fetch(`https://dream-shop-server.vercel.app/booking?email=${email}`)
            const data = res.json()
            return data
        }
    })
    console.log(bookings)
    return (
        <div className='my-16 px-4'>
            <p className='text-2xl font-semibold mb-8'>You have total booking {bookings.length}</p>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Seller Address</th>
                        <th>Metting Address</th>
                        <th>User Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <Booking refetch={refetch} key={booking._id} booking={booking}></Booking>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;