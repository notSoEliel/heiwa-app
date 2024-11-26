import React from 'react';
import Navbar from '../components/Navbar';
import heiwaPet from '../assets/img/boyChef-wink.png'; // Asegúrate de usar la imagen correcta

const ConfirmationPage = () => {
    return (
        <div style={{ backgroundColor: '#F7F8FA', minHeight: '100vh' }}>
            <Navbar />

            {/* Contenido de la confirmación */}
            <div className="container text-center mt-5">
                {/* Imagen de la mascota */}
                <div className="mb-4">
                    <img
                        src={heiwaPet}
                        alt="Mascota Heiwa"
                        className="img-fluid"
                        style={{ maxWidth: '250px', opacity: 0.8 }}
                    />
                </div>

                {/* Mensaje de "Pedido realizado" */}
                <h1 style={{ color: '#BB002D', fontWeight: '900', fontSize: '3rem' }}>
                    Pedido realizado
                </h1>

                {/* Mensaje adicional */}
                <p style={{ color: '#0E1422', fontWeight: '700', fontSize: '1.5rem' }}>
                    Pronto degustarás de algo delicioso que te hará querer más.
                </p>

                {/* Botón de regreso al menú */}
                <div className="mt-4">
                    <a href="/menu">
                        <button
                            className="btn"
                            style={{
                                backgroundColor: '#BB002D',
                                color: '#F7F8FA',
                                fontWeight: '900',
                                borderRadius: '10px',
                                padding: '10px 30px',
                                fontSize: '1.2rem',
                            }}
                        >
                            Regresar al Menú
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;
