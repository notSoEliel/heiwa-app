import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FavRamen from '../components/menupage/FavRamen';
import MenuSection from '../components/menupage/MenuSection';
import Matcha from '../components/menupage/Matcha';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

const MenuPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);

    return (
        <div style={{ backgroundColor: '#BB002D', minHeight: '100vh' }}>
            <Navbar />
            <FavRamen />
            <MenuSection />
            <Matcha />
            <Footer />
            <ScrollToTopButton /> {/* Aquí usas el componente */}
        </div>
    );
};

export default MenuPage;
