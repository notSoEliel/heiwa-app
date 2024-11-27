import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import ConfirmationPage from './pages/ConfirmationPage';
import ReservationPage from './pages/ReservationPage';
import AboutUs from './pages/AboutUs';

//Context
import { CartProvider } from './context/CartProvider'
import { OrdersProvider } from './context/OrdersProvider';

function App() {
    return (
        <Router>
            <CartProvider>
                <OrdersProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<MenuPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/confirmation" element={<ConfirmationPage />} />
                        <Route path="/reservation" element={<ReservationPage />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        {/* Puedes agregar más rutas aquí */}
                    </Routes>
                </OrdersProvider>
            </CartProvider>
        </Router>
    );
}

export default App;
