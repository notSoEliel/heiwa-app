import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import ConfirmationPage from './pages/ConfirmationPage';
import ReservationPage from './pages/ReservationPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/reservation" element={<ReservationPage />} />
                {/* Puedes agregar más rutas aquí */}
            </Routes>
        </Router>
    );
}

export default App;
