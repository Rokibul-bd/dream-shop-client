import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Seller from '../Seller/Seller';

const Sellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers')
            const data = res.json()
            return data
        }
    })

    return (
        <div className='my-12'>
            <h3 className='text-3xl text-center font-semibold'>All Seller Data</h3>
            <div className="overflow-x-auto">
                <table className="table w-full mt-24">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify Seller</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, index) => <Seller index={index} refetch={refetch} key={seller._id} seller={seller}></Seller>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sellers;