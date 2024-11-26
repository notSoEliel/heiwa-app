import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import ConfirmationPage from './pages/ConfirmationPage';
import ReservationPage from './pages/ReservationPage';
import AboutUs from './pages/AboutUs';
import GiftCardPage from './pages/GiftCardPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/reservation" element={<ReservationPage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/gift-cards" element={<GiftCardPage />} />
                {/* Puedes agregar más rutas aquí */}
            </Routes>
        </Router>
    );
}

export default App;
