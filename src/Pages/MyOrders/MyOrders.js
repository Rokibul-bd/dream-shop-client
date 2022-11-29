import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const { email } = user
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['booking', email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking?email=${email}`)
            const data = res.json()
            return data
        }
    })
    return (
        <div className='my-16 px-4'>
            <p className='text-2xl font-semibold mb-8'>You have total Order {bookings.length}</p>
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
                        bookings.map(booking => <MyOrder key={booking._id} refetch={refetch} myOrder={booking}></MyOrder>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;