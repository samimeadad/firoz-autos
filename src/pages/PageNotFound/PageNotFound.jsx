import React, { useEffect } from 'react';
import errorPage from '../../assets/404.jpg';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const PageNotFound = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div>
            <Header />
            <div className="justify-center flex">
                <img className="" src={ errorPage } alt="errorPageImage" />
            </div>
            <Footer />
        </div>
    );
};

export default PageNotFound;