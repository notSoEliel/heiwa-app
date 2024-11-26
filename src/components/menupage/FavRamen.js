import React from 'react';
import BuyButton from '../BuyButton';
import ramen1 from '../../assets/img/ramen1.png';
import ramen2 from '../../assets/img/ramen2.png';
import ramen3 from '../../assets/img/ramen3.png';

const FavRamen = () => {
    const ramens = [
        { img: ramen1, name: 'Ramen Clásico', price: '12.00' },
        { img: ramen2, name: 'Ramen Especial', price: '15.00' },
        { img: ramen3, name: 'Ramen Picante', price: '13.00' },
    ];

    return (
        <section style={{ backgroundColor: '#F7F8FA', padding: '0 0 0px', position: 'relative' }}>
            <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
                <h2 style={{ color: '#BB002D', fontWeight: '900', marginBottom: '40px', fontSize: '3rem' }}>
                    Ramenes Favoritos
                </h2>
                <div className="row justify-content-center">
                    {ramens.map((ramen, index) => (
                        <div
                            key={index}
                            className={`col-md-${index === 1 ? 4 : 3} mb-4`}
                            style={{ position: 'relative' }}
                        >
                            <img
                                src={ramen.img}
                                alt={ramen.name}
                                className="img-fluid"
                                style={{ borderRadius: '15px' }}
                            />
                            <div
                                className="text-center d-flex flex-column align-items-center"
                                style={{ marginTop: '15px' }}
                            >
                                <h5
                                    style={{
                                        color: '#0E1422',
                                        fontWeight: '900',
                                        marginBottom: '10px',
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    {ramen.name}
                                </h5>
                                <p
                                    style={{
                                        color: '#11639B',
                                        fontWeight: '700',
                                        marginBottom: '15px',
                                        fontSize: '1.3rem',
                                    }}
                                >
                                    ${ramen.price}
                                </p>
                                <BuyButton 
                                    product={{ 
                                        id: index + 1, // Generar un ID único para cada producto
                                        name: ramen.name, 
                                        price: parseFloat(ramen.price) 
                                    }} 
                                    style={{ width: '150px', margin: '0 auto' }} 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Círculos decorativos */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '-160px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '500px',
                    height: '500px',
                    backgroundColor: '#F7F8FA',
                    borderRadius: '50%',
                    zIndex: 0,
                }}
            ></div>
            <div
                style={{
                    position: 'absolute',
                    bottom: '-160px',
                    left: '20%',
                    transform: 'translateX(-50%)',
                    width: '500px',
                    height: '500px',
                    backgroundColor: '#F7F8FA',
                    borderRadius: '50%',
                    zIndex: 0,
                }}
            ></div>
            <div
                style={{
                    position: 'absolute',
                    bottom: '-160px',
                    left: '80%',
                    transform: 'translateX(-50%)',
                    width: '500px',
                    height: '500px',
                    backgroundColor: '#F7F8FA',
                    borderRadius: '50%',
                    zIndex: 0,
                }}
            ></div>
        </section>
    );
};

export default FavRamen;
