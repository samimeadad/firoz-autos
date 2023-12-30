import React, { useEffect } from 'react';
import errorPage from '../../assets/404.jpg';

const PageNotFound = () => {
    useEffect( () => {
        window.scrollTo( 0, 0 )
    }, [] )
    return (
        <div className="justify-center flex">
            <img className="" src={ errorPage } alt="errorPageImage" />
        </div>
    );
};

export default PageNotFound;