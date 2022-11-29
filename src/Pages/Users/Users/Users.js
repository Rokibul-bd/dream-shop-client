import { useQuery } from '@tanstack/react-query';
import React from 'react';
import User from '../user/User';


const Users = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://dream-shop-server.vercel.app/users')
            const data = res.json()
            return data
        }
    })

    return (
        <div className='my-12'>
            <h3 className='text-center text-2xl text-teal-600 mb-8'>All Buyer</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <User refetch={refetch} index={index} key={user._id} user={user}></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;