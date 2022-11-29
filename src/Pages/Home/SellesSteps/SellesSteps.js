import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Salse from '../Salse/Salse';
const SellesSteps = () => {
    const [saleses, setSaleses] = useState([])

    useEffect(() => {
        axios.get('https://dream-shop-server.vercel.app/sellessteps')
            .then(res => {
                setSaleses(res.data)
            })
    }, [])

    return (
        <div>
            <h3 className='text-center text-2xl font-semibold'>When you buy a phones follow this three steps</h3>
            <p className='text-center text-xl mt-5'>Do want to buy phone . you will be try your best the follow three steps.</p>
            <div className='grid md:grid-cols-3 my-56 gap-4 justify-center'>
                {
                    saleses.map(sales => <Salse key={sales._id} sales={sales}></Salse>)
                }
            </div>
        </div>
    );
};

export default SellesSteps;