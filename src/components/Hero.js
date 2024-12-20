import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    const slides = [
        {
            src: require('../assets/img/carrousel1.jpeg'),
            alt: 'Slide 1',
            caption: '¡Prueba nuestros platillos!',
            action: () => navigate('/menu'),
        },
        {
            src: require('../assets/img/carrousel2.jpeg'),
            alt: 'Slide 2',
            caption: 'Prueba nuestra deliciosa Miso Soup.',
            action: () => navigate('/menu'),
        },
        {
            src: require('../assets/img/carrousel3.jpeg'),
            alt: 'Slide 3',
            caption: 'Explora nuestra línea de matcha.',
            action: () => navigate('/menu#matcha'),
        },
    ];

    return (
        <Carousel fade>
            {slides.map((slide, index) => (
                <Carousel.Item interval={4000} key={index}>
                    <img
                        className="d-block w-100"
                        src={slide.src}
                        alt={slide.alt}
                        style={{ Height: '750px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption
                        style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            textAlign: 'center',
                        }}
                    >
                        <h3>
                            {slide.caption}
                        </h3>
                        <div>
                            <button
                                className="btn btn-danger"
                                onClick={slide.action}
                            >
                                Ir al menú
                            </button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Hero;
