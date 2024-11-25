import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const BuyButton = ({ onClick }) => (
    <button
        className="btn btn-danger d-flex align-items-center justify-content-center"
        style={{
            borderRadius: '20px',
            fontWeight: 'bold',
            padding: '5px 15px',
            fontSize: '1.3rem',
            color: '#F7F8FA',
        }}
        onClick={onClick}
    >
        <FaShoppingCart className="me-2" /> Comprar
    </button>
);

export default BuyButton;