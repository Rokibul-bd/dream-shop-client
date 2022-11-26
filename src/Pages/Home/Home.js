import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from './Banner/Banner';
import Catagories from '../Catagories/Catagories';
import { AuthContext } from '../context/AuthProvider';


const Home = () => {
    const { user } = useContext(AuthContext)
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Catagories></Catagories>
            <h4 className='text-5xl text-center text-red-800'>{user}</h4>
        </div>
    );
};

export default Home;