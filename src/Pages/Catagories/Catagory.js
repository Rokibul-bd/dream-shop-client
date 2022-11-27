import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = ({ service }) => {
    const { catagoray, _id, logo } = service
    return (
        <div className="card bg-base-100 shadow-xl px-4 w-full">
            <div className='block lg:flex'>
                <div className=''>
                    <img className='object-cover w-96' src={logo} alt="" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{catagoray}</h2>
                    <div className="card-actions">
                        <Link to={`services/${_id}`} className="btn btn-primary">See ALL Product</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catagory;