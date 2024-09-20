import React from 'react';
import Header from '../../components/Header/Header';
import FooterComponent from '../../components/Footer/FooterComponent';
import aboutImage from "../../assets/about-us/honda-1.jpg";

const About = () => {
    return (
        <div className='container mx-auto'>
            <Header />
            <section className='my-20 container mx-auto text-justify'>
                <section className='my-20 container mx-auto'>
                    <div>
                        <img src={ aboutImage } alt="about us banner image" className="h-full w-full object-cover object-center" />
                    </div>
                </section>
                <section className='my-20 container mx-auto text-justify'>
                    <h1 className='text-5xl font-bold text-center my-10'>About Firoz Autos</h1>
                    <p className='text-xl text-justify my-10'>
                        Firoz Autos operates in a single industry segment in Bangladesh under a joint venture between Honda Motor Company Limited, Japan and Bangladesh Steel and Engineering Corporation (State Own Corporation) under The Ministry of Industry, The Peoples Republic of Bangladesh.
                    </p>
                    <p className='text-xl text-justify my-10'>
                        The Company was incorporated in Bangladesh on December 04, 1974 as a private limited company and joint venture agreement was signed on September 27, 2012. The commercial production of the company started again from November 01, 2013 with the symbol of Honda two wheelers, the “Wings”.
                    </p>
                    <p className='text-xl text-justify my-10'>
                        The address of the registered office of the company is Abdul Monem Economic Zone, Char Baushia, Gazaria, Munshiganj, Bangladesh and the corporate office at Monem Business District, East Tower (10th floor), 111, Bir Uttam C. R. Dutta Road, Karwanbazar, Dhaka – 1205, Bangladesh.
                    </p>
                    <p className='text-xl text-justify my-10'>
                        The principal activities of the Company are manufacturing and assembling of motorcycles, scooters and other forms of motor vehicles and related accessories, distribution, marketing, sales, promotion and providing after-sales maintenance service of the "Honda" brand and other affiliated brands of Honda Motor Company Limited, Japan.
                    </p>
                </section>
            </section>
            <FooterComponent />
        </div>
    );
};

export default About