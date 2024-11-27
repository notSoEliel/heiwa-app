import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import useCart from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import PedidosCard from '../components/PedidosCard';
import clienteAxios from '../config/axios';


const CartPage = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("")
    const [alerta, setAlerta] = useState("")


    const [loading, setLoading] = useState(false)
    const { cartItems, updateQuantity, setCartItems } = useCart(); // Usa el estado global y las funciones del contexto

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

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)

            if (!nombre) {
                setAlerta("Nombre del cliente vacio")
                return
            }

            // Usar for...of en lugar de forEach
            for (let e of cartItems) {
                await clienteAxios.post("/Pedido", {
                    cliente: nombre,
                    Producto: e.name,
                    Value: e.price,
                    quantity: e.quantity
                })
            }

            setCartItems([])
            setNombre("")
            navigate("/confirmation")

        } catch (err) {
            console.error(err)  // Agregar un console.log para saber el error
            throw new Error(err)
        } finally {
            setLoading(false)  // Esto se ejecutará después de que todas las promesas se resuelvan
        }
    }

    return (
        <div style={{ backgroundColor: '#F7F8FA', minHeight: '100vh' }}>
            <Navbar />
            <div className="container mt-5">
                <h2 style={{ color: '#BB002D', fontWeight: '900', marginBottom: '20px' }}>Pedido</h2>
                {alerta && <div style={{ color: '#BB002D' }}>{alerta}</div>} {/* Mensaje de éxito o error */}
                <div className='form-group'>
                    <input
                        className='form-control'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        placeholder='Nombre del cliente'
                        required
                    />
                </div>
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
                        onClick={() => navigate('/menu')}
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
                        // onClick={() => navigate('/confirmation')}
                        onClick={handleSubmit}
                    >
                        Realizar pedido
                    </button>
                </div>
            </div>

            {loading && (
                <div className="loader-overlay">
                    <div className="loader"></div>
                </div>
            )}

            <section className='container'>
                <h2 className=' mt-3' style={{
                    color: '#BB002D',
                    fontWeight: '900',
                    borderRadius: '10px',
                }}>Pedidos Realizados</h2>
                <PedidosCard />
            </section>
        </div>
    );
};

export default CartPage;
