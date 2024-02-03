import React from 'react';
import Header from '../../components/Header/Header';
import FooterComponent from '../../components/Footer/FooterComponent';
import HomeCarousel from './HomeCarousel';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='mx-auto'>
                <HomeCarousel />
            </div>
            <FooterComponent />
        </div>
    );
};

export default Home;