import React from 'react';
import '../App.css';
import { Carousel } from 'react-bootstrap';

const MyCarousel = ({ images }) => {
    return (

        <Carousel>
            {images.map(item =>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={item.Url}
                        alt={item.Alt}
                    />
                    <Carousel.Caption>
                        <h3>{item.Title}</h3>
                        <p>{item.Description}</p>
                    </Carousel.Caption>
                </Carousel.Item>)}
        </Carousel>

    )
}

export default MyCarousel;