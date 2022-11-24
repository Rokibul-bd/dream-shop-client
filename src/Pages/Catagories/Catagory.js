import React from 'react';

const Catagory = (props) => {
    const { title, desc } = props
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">See Product</button>
                </div>
            </div>
        </div>
    );
};

export default Catagory;