import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = ({ service }) => {
    const { catagoray, _id, logo } = service
    return (
        <div className="card bg-base-100 shadow-xl px-4">
            <div className='grid lg:grid-cols-3 gap-4 items-center'>
                <div>
                    <img src={logo} alt="" />
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