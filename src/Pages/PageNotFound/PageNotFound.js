import React from 'react';
import imageNotFound from '../../vendors/images/routesNotFound.jpg'
const PageNotFound = () => {
    return (
        <div>
            <h3 className='text-red-500 text-center text-3xl mt-24 mb-8'>!Opps Sorry data not found</h3>
            <p className='text-center mb-24'>please cheack aunother routes</p>
            <img className='mx-auto' src={imageNotFound} alt="" />
        </div>
    );
};

export default PageNotFound;