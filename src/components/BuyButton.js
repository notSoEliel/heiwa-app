import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext'; // Ajusta la ruta según tu estructura

const BuyButton = ({ product, style }) => {
    const { addToCart } = useCart();

    const handleClick = () => {
        if (product) {
            addToCart(product); // Envía el producto correcto al carrito
        } else {
            console.error('No se pasó un producto al botón de compra');
        }
    };
    
    return (
        <button
            onClick={handleClick}
            className="btn btn-danger d-flex align-items-center justify-content-center"
            style={{
                borderRadius: '20px',
                fontWeight: 'bold',
                padding: '5px 15px',
                fontSize: '1.3rem',
                color: '#F7F8FA',
            }}
        >
            <FaShoppingCart className="me-2" /> Comprar
        </button>
    );
};

export default BuyButton;
