import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='container mx-auto place-items-center my-10'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 place-items-center'>
                    <div>
                        <h1 className='text-6xl'>column - 1</h1>
                    </div>
                    <div>
                        <h1 className='text-6xl'>column - 2</h1>
                    </div>
                    <div>
                        <h1 className='text-6xl'>column - 3</h1>
                    </div>
                    <div>
                        <h1 className='text-6xl'>column - 4</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;