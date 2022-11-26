import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';


const Product = ({ phone }) => {
    const { user } = useContext(AuthContext)
    const { name, address, resellPrice, orginalPrice, img, ram, rom, id, stutas } = phone
    const cart = {
        email: user?.email,
        userName: user?.displayName,
        phone,
    }

    const handleAddCart = () => {
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Product Successfully added Cart!')
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="card md:card-side bg-base-100 shadow-xl">
            <img className='w-96' src={img} alt="Movie" />
            <div className="card-body">
                <div className="mt-12">
                    <h2 className="card-title mb-4">{name}</h2>
                    <p className='mb-2'>Orginal Price : {orginalPrice}</p>
                    <p className='mb-2'>Now price : {resellPrice}</p>
                    <p className='mb-2'>Address : {address}</p>
                    <p className='mb-2'>Ram : {ram}</p>
                    <p className='mb-2'>Rom: {rom}</p>
                    <p className='mb-2'>Seller Status: {
                        stutas && <FaCheck className='text-green-600 inline-block'></FaCheck>
                    }</p>
                    <div className="flex gap-1">
                        <button onClick={() => handleAddCart(id)} className="btn btn-primary">Add Cart</button>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;