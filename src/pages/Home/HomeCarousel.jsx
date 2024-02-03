import React from 'react';
import { Carousel } from 'flowbite-react';
import carousel1 from "../../assets/carousel-images/1.jpg"
import carousel2 from "../../assets/carousel-images/2.jpg"
import carousel3 from "../../assets/carousel-images/3.png"
import carousel4 from "../../assets/carousel-images/4.jpg"
import carousel5 from "../../assets/carousel-images/5.jpg"

const HomeCarousel = () => {
    return (
        <div className="my-20 container mx-auto h-56 sm:h-56 xl:h-80 2xl:h-96">
            <Carousel pauseOnHover slideInterval={ 2000 }>
                <img src={ carousel1 } alt="..." />
                <img src={ carousel2 } alt="..." />
                <img src={ carousel3 } alt="..." />
                <img src={ carousel4 } alt="..." />
                <img src={ carousel5 } alt="..." />
            </Carousel>
        </div>
    );
};

export default HomeCarousel;