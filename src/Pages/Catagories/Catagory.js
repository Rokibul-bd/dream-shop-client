import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = ({ service }) => {
    const { catagoray, _id, logo } = service
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className='w-1/2 md:w-full mx-auto'>
                    <img className='object-cover max-w-full' src={logo} alt="" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{catagoray}</h2>
                    <div className="card-actions">
                        <Link to={`services/${_id}`} className="btn btn-primary">See ALL Product</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Catagory;