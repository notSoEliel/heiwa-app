import React from 'react';
import Navbar from '../components/Navbar';
import FavRamen from '../components/menupage/FavRamen';
import MenuSection from '../components/menupage/MenuSection';
import Matcha from '../components/menupage/Matcha';
import Footer from '../components/Footer';

const MenuPage = () => {
    return (
        <div style={{ backgroundColor: '#BB002D', minHeight: '100vh' }}>
            <Navbar />
            <FavRamen />
            <MenuSection />
            <Matcha />
            <Footer />
        </div>
    );
};

export default MenuPage;
