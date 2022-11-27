import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import BookingModal from '../../BookingModal/BookingModal';
import Product from '../Product/Product';

const Prodcuts = () => {
    const products = useLoaderData()
    const phones = products[0].service
    const [booking, setBooking] = useState(null)
    useTitle('catagories')
    return (
        <div className='grid lg:grid-cols-2 gap-4 my-36'>
            {
                phones.map((phone, index) => <Product setBooking={setBooking} key={index} phone={phone} ></Product>)
            }
            {
                booking && <BookingModal setBooking={setBooking} booking={booking}></BookingModal>
            }
        </div>
    );
};

export default Prodcuts;