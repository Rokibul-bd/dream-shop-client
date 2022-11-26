import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Cart from '../cart/Cart';
import { AuthContext } from '../context/AuthProvider';

const Carts = () => {
    const { user } = useContext(AuthContext)
    const { data: carts = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
            const data = res.json()
            return data
        }
    })

    return (
        <div className='grid lg:grid-cols-3 my-36 gap-4'>
            {
                carts.map(cart => <Cart key={cart._id} cart={cart}></Cart>)
            }
        </div>
    );
};

export default Carts;