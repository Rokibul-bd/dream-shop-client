import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Cart from '../cart/Cart';
import { AuthContext } from '../context/AuthProvider';

const Carts = () => {
    const { user } = useContext(AuthContext)
    const { data: carts = [], refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await fetch(`https://dream-shop-server.vercel.app/cart?email=${user?.email}`)
            const data = res.json()
            return data
        }
    })

    return (
        <div>
            <div className="overflow-x-auto w-full my-36">
                <h4 className='mb-16 text-xl'>You have total item {carts.length}</h4>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>User Status</th>
                            <th>Buy Now</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map(cart => <Cart key={cart._id} refetch={refetch} cart={cart}></Cart>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Carts;