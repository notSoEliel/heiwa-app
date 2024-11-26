import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Features from '../components/Features';
import Activities from '../components/Activities';
import Reviews from '../components/Reviews';
import Locations from '../components/Locations';
import Footer from '../components/Footer';
import AboutUsBanner from '../components/AboutUsBanner';
import BotonesEnlaces from '../components/BotonesEnlaces';

const Home = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    // Manejo del scroll para mostrar/ocultar el botón
    useEffect(() => {
        const handleScroll = () => {
            const threshold = 300; // Altura a partir de la cual aparece el botón
            if (window.scrollY > threshold) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpieza del listener al desmontar
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Función para volver al inicio
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Hace que el scroll sea suave
        });
    };

    return (
        <>
            <Navbar />
            <Hero />
            <BotonesEnlaces />
            <Gallery />
            <Features />
            <AboutUsBanner />
            <Activities />
            <Reviews />
            <Locations />
            <Footer />

            {/* Botón flotante para volver hacia arriba */}
            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        backgroundColor: '#BB002D',
                        color: '#F7F8FA',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        cursor: 'pointer',
                        zIndex: 1000,
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                    }}
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default Home;
