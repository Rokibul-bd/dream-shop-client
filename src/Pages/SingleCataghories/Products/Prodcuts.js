import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Prodcuts = () => {
    const products = useLoaderData()
    const phones = products[0].service
    console.log(phones)
    return (
        <div className='grid lg:grid-cols-2 gap-4 my-24'>
            {
                phones.map((phone, index) => <Product key={index} phone={phone} ></Product>)
            }
        </div>
    );
};

export default Prodcuts;