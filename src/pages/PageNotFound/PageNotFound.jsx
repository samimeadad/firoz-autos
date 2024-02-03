import React, { useEffect } from 'react';
import errorPage from '../../assets/404.jpg';
import Header from '../../components/Header/Header';
import FooterComponent from '../../components/Footer/FooterComponent';

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
            <FooterComponent />
        </div>
    );
};

export default PageNotFound;