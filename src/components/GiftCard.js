import React, { useState } from 'react';
import BuyButton from './BuyButton';
import giftCard15 from '../assets/img/giftcard_15.png';  // Imágenes de las giftcards
import giftCard25 from '../assets/img/giftcard_25.png';
import giftCard50 from '../assets/img/giftcard_50.png';
import '../styles/GiftCard.css';

const GiftCard = () => {
    const giftCards = [
        { img: giftCard15, name: 'Gift Card $15', price: 15, id: 'gift-card-15' },
        { img: giftCard25, name: 'Gift Card $25', price: 25, id: 'gift-card-25' },
        { img: giftCard50, name: 'Gift Card $50', price: 50, id: 'gift-card-50' },
    ];

    const [selectedCard, setSelectedCard] = useState(giftCards[0]);  // Estado para la tarjeta seleccionada

    const priceButtonStyle = {
        padding: '10px 20px',
        backgroundColor: '#BB002D',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.2rem',
        borderRadius: '5px'
    };

    // Función para cambiar la tarjeta seleccionada
    const handleCardSelection = (card) => {
        setSelectedCard(card);
    };

    return (
        <section id="gift-card" style={{ backgroundColor: '#F7F8FA', padding: '40px 0 140px', position: 'relative'}}>
            
            {/* Link para volver a la página principal */}
            <div style={{ margin: '20px 0 0 50px' }}>
                <a href="/" style={{ color: '#0D2B45', fontSize: '1.5rem', textDecoration: 'none' }}>
                    ← Volver
                </a>
            </div>
            <div className="container">
                <h2 style={{ color: '#0D2B45', fontWeight: '500', fontSize: "3rem", textAlign: 'center', margin: '0 0 20px' }}>
                    Un regalo de serenidad
                </h2>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6">
                        <img
                            src={selectedCard.img}
                            alt={selectedCard.name}
                            className="img-fluid"
                            style={{
                                width: '600px',
                                height: '600px',
                                objectFit: 'contain',
                                zIndex: 1
                            }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h3 style={{ color: '#0D2B45', fontWeight: '900', fontSize: "3rem" }}>
                            {selectedCard.name}
                        </h3>
                        <p style={{ color: '#0D2B45', fontWeight: '400', fontSize: '1.5rem' }}>
                            Un abrazo cálido en cada sorbo. Nuestra Miso Soup combina el sabor auténtico del miso japonés con un delicado caldo dashi, tofu suave, y alga wakame, decorada con cebollín fresco. Perfecta para reconfortar el alma.
                        </p>

                        {/* Botones para seleccionar el monto de la gift card */}
                        <div className="card-buttons" style={{ display: 'flex', gap: '1rem', marginTop: '30px' }}>
                            {giftCards.map(card => (
                                <button
                                    key={card.id}
                                    onClick={() => handleCardSelection(card)}
                                    style={priceButtonStyle}
                                >
                                    {card.name}
                                </button>
                            ))}
                        </div>

                        <div style={{ marginTop: '30px' }}>
                            {/* Pasamos el ID, nombre y precio de la tarjeta seleccionada */}
                            <BuyButton
                                product={{
                                    id: selectedCard.id,
                                    name: selectedCard.name,
                                    price: selectedCard.price
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GiftCard;
