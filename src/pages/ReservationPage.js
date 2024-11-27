import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; // Navbar existente
import Footer from '../components/Footer'; // Footer existente
import Mascot from '../assets/img/boy_Red.png'; // Mascota
import { crearReserva } from '../services/api';

const ReservationPage = () => {
    // Información inicial de la sucursal
    const [branch, setBranch] = useState({
        name: 'Casco Antiguo',
        location: 'Avenida Central, Casco Antiguo',
        maxGuests: 6,
        schedule: {
            mondayToThursday: { open: '11:30', close: '22:00' },
            fridayToSunday: { open: '11:30', close: '23:30' },
        },
    })

    const [loading, setLoading] = useState(false)
    const [mensaje, setMensaje] = useState('')

    const [remainingTime, setRemainingTime] = useState(600) // 5 minutos en segundos
    const [formData, setFormData] = useState({
        Nombre: '',
        Telefono: '',
        SpecialRequest: '',
        FechaHoraReserva: '',
    })

    // Actualizar el tiempo restante cada segundo
    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
        }, 1000)

        return () => clearInterval(timer) // Limpieza del intervalo
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)

        try {
            // Verificar que todos los campos estén llenos
            if (!formData.Nombre || !formData.Telefono || !formData.FechaHoraReserva) {
                setMensaje('Por favor, completa todos los campos.');
                return;
            }

            // Verificar que la hora esté entre las 11 AM y 10 PM
            const fechaHora = new Date(formData.FechaHoraReserva);
            const hora = fechaHora.getHours();
            if (hora < 11 || hora > 22) {
                setMensaje('La hora debe estar entre las 11 AM y 10 PM.');
                return;
            }

            const { msg, response } = await crearReserva(formData)
            setMensaje(`${msg}`)
            
            setFormData({
                Nombre: '',
                Telefono: '',
                SpecialRequest: '',
                FechaHoraReserva: '',
            })

        } catch (error) {
            console.error(error)
            setMensaje("Error al momento de hacer tu reserva")
        }
        finally {
            setLoading(false)
        }
    }

    // Convertir segundos en formato MM:SS
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
    }

    return (
        <div>
            <Navbar />

            {/* Sección inicial */}
            {/* <section className="reservation-header py-5" style={{ backgroundColor: '#F7F8FA' }}>
                <div className="container text-center">
                    <h1 style={{ color: '#BB002D', fontWeight: '900' }}>
                        ¿En qué sucursal te guardamos un espacio?
                    </h1>
                    <select
                        className="form-select mx-auto mt-4"
                        style={{
                            maxWidth: '400px',
                            border: '2px solid #BB002D',
                            borderRadius: '50px',
                            color: '#BB002D',
                            fontWeight: '700',
                        }}
                        value={branch.name}
                        disabled
                    >
                        <option value="casco-antiguo">{branch.name}</option>
                    </select>
                </div>
            </section> */}

            {/* Sección de la reserva */}
            <section className="reservation-form py-5" style={{ backgroundColor: '#BB002D' }}>
                <div className="container text-white">
                    <div className="text-center mb-5">
                        <img
                            src={Mascot}
                            alt="Mascota"
                            style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                        />
                        <h2 className="mt-3">{branch.name}</h2>
                        <p className="mt-2">Tiempo restante: {formatTime(remainingTime)}</p>
                    </div>
                    <div className="row">
                        {/* Columna izquierda: Formulario */}
                        <div className="col-md-6 px-3">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    name="Nombre"
                                    value={formData.Nombre}
                                    onChange={handleChange}
                                    className="form-control mb-4"
                                    style={{
                                        backgroundColor: '#BB002D',
                                        border: '1px solid white',
                                        borderRadius: '50px',
                                        color: 'white',
                                    }}
                                />
                                {/* <input
                                    type="text"
                                    placeholder="Apellido"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="form-control mb-4"
                                    style={{
                                        backgroundColor: '#BB002D',
                                        border: '1px solid white',
                                        borderRadius: '50px',
                                        color: 'white',
                                    }}
                                /> */}
                                <div className="d-flex mb-4">
                                    <span
                                        className="px-3 py-2"
                                        style={{
                                            backgroundColor: 'white',
                                            color: '#BB002D',
                                            borderRadius: '50px 0 0 50px',
                                        }}
                                    >
                                        +507
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Número de Teléfono"
                                        name="Telefono"
                                        value={formData.Telefono}
                                        onChange={handleChange}
                                        className="form-control"
                                        style={{
                                            backgroundColor: '#BB002D',
                                            border: '1px solid white',
                                            borderRadius: '0 50px 50px 0',
                                            color: 'white',
                                        }}
                                    />
                                </div>
                                {/* <input
                                    type="email"
                                    placeholder="Correo Electrónico"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control mb-4"
                                    style={{
                                        backgroundColor: '#BB002D',
                                        border: '1px solid white',
                                        borderRadius: '50px',
                                        color: 'white',
                                    }}
                                /> */}
                                {/* <textarea
                                    placeholder="Solicitud Especial"
                                    name="specialRequest"
                                    value={formData.specialRequest}
                                    onChange={handleChange}
                                    className="form-control mb-4"
                                    rows="3"
                                    style={{
                                        backgroundColor: '#BB002D',
                                        border: '1px solid white',
                                        borderRadius: '20px',
                                        color: 'white',
                                    }}
                                /> */}
                                <div className="d-flex mb-4">
                                    <input
                                        type="datetime-local"
                                        name="FechaHoraReserva"
                                        value={formData.FechaHoraReserva}
                                        onChange={handleChange}
                                        className="form-control me-2"
                                        style={{
                                            backgroundColor: '#BB002D',
                                            border: '1px solid white',
                                            borderRadius: '50px',
                                            color: 'white',
                                        }}
                                    />
                                    {/* <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        className="form-control"
                                        style={{
                                            backgroundColor: '#BB002D',
                                            border: '1px solid white',
                                            borderRadius: '50px',
                                            color: 'white',
                                        }}
                                    /> */}
                                </div>
                                <div className="text-center mt-5">
                                    <input
                                        value="Confirmar Reservación"
                                        type="submit"
                                        className="btn btn-light btn-lg"
                                        style={{
                                            borderRadius: '50px',
                                            padding: '10px 30px',
                                            fontWeight: '700',
                                            color: '#BB002D',
                                            border: '2px solid #BB002D',
                                        }}

                                    />

                                </div>
                            </form>
                        </div>

                        {/* Columna derecha: Detalles */}
                        <div className="col-md-6 text-center px-3">
                            <h3 className="mb-4">{branch.name}</h3>
                            <p>Fecha: {formData.date || 'Selecciona una fecha'}</p>
                            <p>Hora: {formData.time || 'Selecciona una hora'}</p>
                            <p>Número de invitados: {formData.guests}</p>
                            <p>Ubicación: {branch.location}</p>
                            <hr className="my-4" style={{ borderColor: 'white' }} />
                            <h4>Importante</h4>
                            <p>
                                Esta reserva tendrá una tolerancia máxima de 15 minutos antes y 15 minutos después de
                                la hora de reserva para aplicar a tu descuento.
                            </p>
                        </div>
                    </div>

                    <section>
                        {loading && (
                            <div className="loader-overlay">
                                <div className="loader"></div>
                            </div>
                        )}

                        {mensaje && <div>{mensaje}</div>} {/* Mensaje de éxito o error */}
                    </section>

                </div>
            </section>

            {/* Mensaje final */}
            <section className="reservation-message py-5" style={{ backgroundColor: '#F7F8FA' }}>
                <div className="container text-center">
                    <p style={{ fontSize: '1.2rem', color: '#0E1422', fontWeight: '600' }}>
                        En Heiwa, cada detalle está pensado para brindarte un refugio de paz, buena vibra y sabores
                        auténticos que conectan el alma con Japón.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ReservationPage;
