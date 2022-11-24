import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-fit mb-36 mt-10" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content py-24">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold"> <span className='text-red-500'>D</span>ream <span className='text-red-500'>S</span>hop</h1>
                    <p className="mb-5">Sell and buy used phone. Our client any whare of bangldesh</p>
                    <p className="mb-5">You want sell your phone please create seller account</p>
                    <button className="btn btn-primary">Get Started Bisseness</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;