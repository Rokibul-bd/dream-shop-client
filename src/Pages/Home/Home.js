import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from './Banner/Banners';
import Catagories from '../Catagories/Catagories';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;