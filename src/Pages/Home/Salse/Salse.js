import React from 'react';

const Salse = ({ sales }) => {
    const { title, semiTitle, body, img } = sales
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <img className='mt-4 md:-mt-24 w-56 mx-auto' src={img} alt={title} />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{semiTitle}</p>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Salse;