import React from 'react';
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
import ScrollToTopButton from '../components/ScrollToTopButton';

const Home = () => {
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
            <ScrollToTopButton /> {/* Aquí usas el componente */}
        </>
    );
};

export default Home;
