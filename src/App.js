import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu-page" element={<MenuPage/>} />
                {/* Puedes agregar más rutas aquí */}
            </Routes>
        </Router>
    );
}

export default App;
