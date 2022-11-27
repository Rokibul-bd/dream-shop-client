import React from 'react';

const Banner = ({ slider }) => {
    const { img, para1, para2, id, prev, next, phone, btnText } = slider
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full md:flex justify-center items-center gap-12">
            <div className='w-full md:w-1/2'>
                <img src={img} alt="" />
            </div>
            <div className='hidden md:block md:1/2'>
                <h1 className="text-5xl font-bold text-center mb-12 text-purple-600">{phone}</h1>
                <p className="mb-5">{para1}</p>
                <p className="mb-5">{para2}</p>
                <button className="btn btn-primary capitalize">{btnText}</button>
            </div>
            <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default Banner;