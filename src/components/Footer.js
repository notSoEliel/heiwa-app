import React from 'react';
import logo from '../assets/icons/logo-frase.png';
import { FaEnvelope, FaPhone, FaMobileAlt, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#BB002D', color: '#F7F8FA', padding: '60px 20px 10px' }}>
            <div className="container">
                <div className="row">
                    {/* Columna Izquierda: Logo */}
                    <div className="col-md-3 text-center">
                        <img
                            src={logo}
                            alt="Heiwa Logo"
                            style={{
                                maxWidth: '70%',
                                height: 'auto',
                                margin: '0 auto',
                                display: 'block',
                                padding: '0 15px',
                            }}
                        />
                    </div>

                    {/* Columna Derecha: Información */}
                    <div className="col-md-9">
                        <div className="row">
                            {/* Primera fila (Contacto, Redes, Legal) */}
                            <div className="col-md-4">
                                <h5>Contacto</h5>
                                <p>
                                    <FaEnvelope style={{ marginRight: '8px' }} />
                                    <a href="mailto:contacto@heiwa.com" style={{ color: '#F7F8FA', textDecoration: 'none' }}>
                                        contacto@heiwa.com
                                    </a>
                                </p>
                                <p>
                                    <FaPhone style={{ marginRight: '8px' }} />
                                    (507) 123-4567
                                </p>
                                <p>
                                    <FaMobileAlt style={{ marginRight: '8px' }} />
                                    (507) 678-12345
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h5>Redes</h5>
                                <div>
                                    <a
                                        href="https://instagram.com/heiwa.pty"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#F7F8FA', marginRight: '10px', fontSize: '1.5rem' }}
                                    >
                                        <FaInstagram />
                                    </a>
                                    <a
                                        href="https://tiktok.com/@heiwa.pty"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#F7F8FA', marginRight: '10px', fontSize: '1.5rem' }}
                                    >
                                        <FaTiktok />
                                    </a>
                                    <a
                                        href="https://facebook.com/heiwa.pty"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#F7F8FA', fontSize: '1.5rem' }}
                                    >
                                        <FaFacebook />
                                    </a>
                                </div>
                                <p style={{ marginTop: '10px' }}>@heiwa.pty</p>
                            </div>
                            <div className="col-md-4">
                                <h5>Legal</h5>
                                <p>
                                    <a
                                        href="/terms"
                                        style={{ color: '#F7F8FA', textDecoration: 'none' }}
                                    >
                                        Términos y Condiciones
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="/privacy"
                                        style={{ color: '#F7F8FA', textDecoration: 'none' }}
                                    >
                                        Políticas de Privacidad
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Segunda fila: Horarios */}
                        <div className="row mt-4">
                            <div className="col text-center">
                                <h5>Horarios</h5>
                                <p>Lunes - Jueves: 11:30 AM - 10:00 PM</p>
                                <p>Viernes - Domingo: 11:30 AM - 11:30 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Derechos reservados */}
                <div className="row mt-4">
                    <div className="col text-center">
                        <p style={{ fontSize: '0.9rem' }}>
                            &copy; {new Date().getFullYear()} Heiwa. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
