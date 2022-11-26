import React from 'react';
import { FaCheck } from 'react-icons/fa';
const Cart = ({ cart }) => {
    const { phone } = cart
    const { name, orginalPrice, resellPrice, img, stutas } = phone
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Orginal Price : {orginalPrice}</p>
                <p>Orginal Price : {resellPrice}</p>
                {
                    stutas && <p>Seller stutas : <FaCheck className='text-green-600 inline-block'></FaCheck> </p>
                }
                <div className="card-actions">
                    <button className="btn btn-primary mt-2">Buy Now</button>
                </div>
            </div>
        </div>


    );
};

export default Cart;