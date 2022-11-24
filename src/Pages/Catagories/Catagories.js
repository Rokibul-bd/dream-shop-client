import React from 'react';
import Catagory from './Catagory';

const Catagories = () => {
    return (
        <div>
            <h4 className='text-2xl text-center mt-24'>Catagories</h4>
            <div className='w-16 h-[2px] bg-primary mx-auto mb-24 mt-2'></div>
            <div className='my-24 grid md:grid-cols-3 gap-4'>
                <Catagory title="Sansung" desc="Do you choise samsung go to see products"></Catagory>
                <Catagory title="iphone" desc="Do you choise iphone go to see products"></Catagory>
                <Catagory title="One Plus" desc="Do you choise One plus go to see products"></Catagory>
            </div>
        </div>
    );
};

export default Catagories;