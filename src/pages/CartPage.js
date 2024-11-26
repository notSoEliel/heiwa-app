import React from 'react';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext'; // Importa el contexto global
import { useNavigate } from 'react-router-dom';


const CartPage = () => {
    const navigate = useNavigate();

    const { cartItems, updateQuantity } = useCart(); // Usa el estado global y las funciones del contexto

    const handleIncrease = (id) => {
        updateQuantity(id, 1); // Incrementa la cantidad en 1
    };

    const handleDecrease = (id) => {
        updateQuantity(id, -1); // Decrementa la cantidad en 1
    };

    const total = cartItems.reduce((acc, item) => {
        const itemPrice = parseFloat(item.price) || 0; // Convierte el precio a número o usa 0 si es inválido
        return acc + itemPrice * item.quantity;
    }, 0);
    
    return (
        <div style={{ backgroundColor: '#F7F8FA', minHeight: '100vh' }}>
            <Navbar />
            <div className="container mt-5">
                <h2 style={{ color: '#BB002D', fontWeight: '900', marginBottom: '20px' }}>Pedido</h2>
                <div>
                    {cartItems.map(item => (
                        <div
                            key={item.id}
                            className="d-flex justify-content-between align-items-center mb-3 p-3"
                            style={{
                                borderBottom: '0.5px solid #294966',
                            }}
                        >
                            <div>
                                <h5 style={{ color: '#0E1422', fontWeight: '900' }}>{item.name}</h5>
                                <p style={{ color: '#13649D', fontWeight: '700' }}>
                                    ${item.price.toFixed(2)} x {item.quantity}
                                </p>
                            </div>
                            <div>
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() => handleDecrease(item.id)}
                                    style={{ marginRight: '10px', fontWeight: '900' }}
                                >
                                    -
                                </button>
                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={() => handleIncrease(item.id)}
                                    style={{ fontWeight: '900' }}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="d-flex justify-content-between align-items-center p-3 mt-4"
                    style={{
                        backgroundColor: '#FFF',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <h4 style={{ color: '#0E1422', fontWeight: '900' }}>Total:</h4>
                    <h4 style={{ color: '#13649D', fontWeight: '900' }}>${total.toFixed(2)}</h4>
                </div>
                <div className="mt-4 d-flex justify-content-end gap-3">
                    <button
                        className="btn btn-secondary"
                        style={{
                            backgroundColor: '#11639B',
                            color: '#F7F8FA',
                            fontWeight: '900',
                            borderRadius: '10px',
                        }}
                        onClick={() => navigate('/menu')} // Reemplaza '/menu' con la ruta correcta de tu página de menú
                    >
                        Seguir pidiendo
                    </button>
                    <button
                        className="btn btn-primary"
                        style={{
                            backgroundColor: '#BB002D',
                            color: '#F7F8FA',
                            fontWeight: '900',
                            borderRadius: '10px',
                        }}
                        onClick={() => navigate('/confirmation')} // Reemplaza '/confirmation' con la ruta de la página de confirmación
                    >
                        Realizar pedido
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
