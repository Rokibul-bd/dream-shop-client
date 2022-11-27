import React, { useEffect, useState } from 'react';
import Banner from './Banner';

const Banners = () => {
    const [sliders, setSliders] = useState([])
    useEffect(() => {
        fetch('slider.json')
            .then(res => res.json())
            .then(data => {
                setSliders(data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className="carousel w-full py-12">
                {
                    sliders.map((slider, index) => <Banner key={index} slider={slider}></Banner>)
                }
            </div>
        </div>

    );
};

export default Banners;