import React from 'react';
import Panama from '../assets/svg/panama-mapa.svg';
import Mascot from '../assets/img/mascot.png';

const branches = [
    { name: 'Market Plaza', location: 'Costaverde, La Chorrera', link: 'https://maps.app.goo.gl/3gYrLfixuFBhGUPE8' },
    { name: 'Boulevard Penonomé', location: 'Penonomé', link: 'https://maps.app.goo.gl/6uKaRvKTZ8cVbxyM9' },
    { name: 'Town Center', location: 'Costa del Este', link: 'https://maps.app.goo.gl/Nb6E8Rktw7C9xwRx7' },
    { name: 'Multiplaza', location: 'Vía Israel', link: 'https://maps.app.goo.gl/DpNWmpcwihdtFB5V7' },
    { name: 'Casco Antiguo', location: 'Ave. Central', link: 'https://maps.app.goo.gl/zqrMStPwWn2Hv6kv8' },
];

const Locations = () => {
    return (
        <section id="sucursales" className="py-5" style={{ backgroundColor: '#F7F8FA' }}>
            <div className="container">
                {/* Título */}
                <h2 className="text-center" style={{ color: '#0F1423', fontWeight: '900' }}>
                    Nuestras Sucursales
                </h2>

                {/* Primera fila */}
                <div className="row align-items-center my-5">
                    <div className="col-md-4 text-center">
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
                <div className="row justify-content-center">
                    {branches.map((branch, index) => (
                        <div
                            key={index}
                            className="col-md-2 d-flex flex-column align-items-center text-center"
                            style={{
                                minHeight: '120px', 
                                padding: '10px',
                            }}
                        >
                            <h5 style={{ color: '#0F1423', fontSize: '1.3rem', fontWeight: 'bold' }}>
                                {branch.name}
                            </h5>
                            <p style={{ fontSize: '1.3rem', color: '#11639B', marginBottom: '10px' }}>
                                {branch.location}
                            </p>
                            <div>
                                <button
                                    className="btn btn-primary btn-sm mb-2"
                                    style={{
                                        backgroundColor: '#11639B',
                                        minWidth: '8em',
                                        marginRight: '5px',
                                        borderRadius: '50px',
                                        fontWeight: '700',
                                    }}
                                >
                                    Reservar
                                </button>
                            </div>
                            <div>
                                <a
                                    href={branch.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-secondary btn-sm"
                                    style={{
                                        minWidth: '8em',
                                        borderColor: '#11639B',
                                        color: '#11639B',
                                        borderRadius: '50px',
                                    }}
                                >
                                    Ver en Mapa
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Locations;
