import React from 'react';
import Panama from '../assets/img/panama.png';
import Mascot from '../assets/img/mascot.png'; // Imagen de la mascota

const branches = [
    { name: 'Sucursal Panamá Centro', location: 'Avenida Central, Panamá', link: '/location1' },
    { name: 'Sucursal Costa del Este', location: 'Plaza Ocean Mall', link: '/location2' },
    { name: 'Sucursal Albrook', location: 'Albrook Mall', link: '/location3' },
    { name: 'Sucursal Clayton', location: 'Ciudad del Saber', link: '/location4' },
    { name: 'Sucursal Via España', location: 'Plaza Edison', link: '/location5' },
];

const Locations = () => {
    return (
        <section className="py-5" style={{ backgroundColor: '#F7F8FA' }}>
            <div className="container">
                {/* Título */}
                <h2 className="text-center" style={{ color: '#0F1423', fontWeight: '900' }}>
                    Nuestras Sucursales
                </h2>

                {/* Primera fila */}
                <div className="row align-items-center my-5">
                    <div className="col-md-4 text-center" style={{ padding: '0 110px' }}>
                        <h1 style={{ fontSize: '10rem', color: '#0F1423', fontWeight: '900', marginBottom: '2px' }}>
                            5
                        </h1>
                        <p style={{ fontSize: '2.4rem', color: '#13649D', fontWeight: '900', marginBottom: '2px' }}>
                            <strong style={{ color: '#0F1423' }}>Sucursales en </strong>
                            Panamá
                        </p>
                        <p style={{ color: '#13649D', fontSize: '1.2rem', fontStyle: 'italic', fontWeight: '700' }}>
                            ¡Y seguimos creciendo!
                        </p>
                        <img
                            src={Mascot}
                            alt="Mascota"
                            style={{ width: '120px', height: '120px', objectFit: 'contain' }}
                            className="mt-3"
                        />
                    </div>
                    <div className="col-md-8">
                        <img
                            src={Panama}
                            alt="Mapa de Panamá"
                            className="img-fluid rounded"
                            style={{ width: '100%' }}
                        />
                    </div>
                </div>

                {/* Segunda fila */}
                <div
                    className="row justify-content-center"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'stretch',
                        gap: '15px',
                    }}
                >
                    {branches.map((branch, index) => (
                        <div
                            key={index}
                            className="col-md-2 d-flex flex-column align-items-center text-center"
                            style={{
                                minHeight: '120px', // Altura uniforme
                                padding: '10px',
                            }}
                        >
                            <h5 style={{ color: '#0E1422', fontSize: '1rem', fontWeight: 'bold' }}>
                                {branch.name}
                            </h5>
                            <p style={{ fontSize: '0.9rem', color: '#11639B', marginBottom: '10px' }}>
                                {branch.location}
                            </p>
                            <div>
                                <button
                                    className="btn btn-primary btn-sm mb-2"
                                    style={{
                                        backgroundColor: '#11639B',
                                        border: 'none',
                                        marginRight: '5px',
                                        borderRadius: '50px'
                                    }}
                                >
                                    Reservar
                                </button>
                            </div>
                            <div>
                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    style={{ 
                                        borderColor: '#11639B', 
                                        color: '#11639B', 
                                        borderRadius: '50px', 
                                    }}
                                >
                                    Ver en Mapa
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Locations;
