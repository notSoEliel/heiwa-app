import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa el CartProvider desde donde lo definiste
import { CartProvider } from './context/CartContext'; // Asegúrate de que esta ruta sea correcta

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> {/* Envuelve toda la aplicación con el CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
