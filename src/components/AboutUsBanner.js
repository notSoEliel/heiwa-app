import React from 'react';
import logo from '../assets/icons/logo-white.png';

const AboutUsBanner = () => {
    return (
        <section
            className="d-flex justify-content-center align-items-center text-center"
            style={{ backgroundColor: '#BB002D', color: '#F7F8FA', height: '640px' }}
        >
            <div className="container">
                <img
                    src={logo}
                    alt="Heiwa Logo"
                    style={{
                        maxWidth: '150px',
                        marginBottom: '20px',
                    }}
                />
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Heiwa</h1>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{ marginBottom: '15px' }}>
                        Combina la tradición de la auténtica cocina japonesa con un ambiente minimalista y acogedor.
                    </p>
                    <p>
                        Cada platillo, cuidadosamente preparado, busca transmitir paz y armonía, ofreciendo una
                        experiencia gastronómica que deleita los sentidos y calma el alma. Desde sushis frescos hasta
                        ramen reconfortante, cada bocado es un viaje a Japón en el corazón de Panamá.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUsBanner;
