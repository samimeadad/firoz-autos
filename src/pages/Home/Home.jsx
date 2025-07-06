import React from 'react';
import Header from '../../components/Header/Header';
import FooterComponent from '../../components/Footer/FooterComponent';
import HomeCarousel from './HomeCarousel';

const Home = () => {
    return (
        <div className="container mx-auto">
            <Header />
            <div className='mx-auto'>
                <HomeCarousel />
            </div>
            <h1 className='text-6xl font-bold text-center my-10 text-green-600'>Welcome to Firoz Autos</h1>
            <p className='text-center text-lg mb-10'>
                Firoz Autos is a Honda Bangladesh authorized leading Motor Bike dealer and service provider, dedicated to delivering top-notch vehicle maintenance and repair solutions. Our team of skilled technicians ensures your vehicle runs smoothly and efficiently.
            </p>
            <h1 className='py-20 text-6xl font-bold text-center my-10 text-red-600'>Some other content will be here. Thanks for your patience....</h1>
            <FooterComponent />
        </div>
    );
};

export default Home;