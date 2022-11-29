import React, { useEffect, useState } from 'react';
import axios from 'axios'
const SellesSteps = () => {
    const [saleses, setSaleses] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/sellessteps')
            .then(res => {
                setSaleses(res.data)
            })
    }, [])

    return (
        <div>
            <h4 className='text-4xl'>You have total data {saleses.length}</h4>
            <h3 className='text-center text-2xl font-semibold'>Buy in 3 Simple Steps</h3>
            <p>Do want to buy phone .follow under simple three steps</p>
        </div>
    );
};

export default SellesSteps;