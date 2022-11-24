import React from 'react';

const Product = ({ phone }) => {
    const { name, address, resellPrice, orginalPrice, img, ram, rom } = phone
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
                    <div className="flex gap-1">
                        <button className="btn btn-primary">Add Cart</button>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;