import React from 'react';
import { Carousel } from 'react-bootstrap';

const Hero = () => {
    const slides = [
        { src: require("../assets/img/carrousel1.jpeg"), alt: 'Slide 1', caption: '¡Prueba nuestros platillos!' },
        { src: require("../assets/img/carrousel2.jpeg"), alt: 'Slide 2', caption: 'Reservaciones disponibles ahora.' },
        { src: require("../assets/img/carrousel3.jpeg"), alt: 'Slide 3', caption: 'Disfruta la experiencia Heiwa.' },
    ];

    return (
        <Carousel>
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={slide.src}
                        alt={slide.alt}
                        style={{ maxHeight: '750px', minHeight:'300px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>{slide.caption}</h3>
                        <button className="btn btn-danger">Compra Ahora</button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Hero;
