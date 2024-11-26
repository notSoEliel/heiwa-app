import React from 'react';

// Ejemplo de reseñas con imágenes
const reviews = [
    {
        name: 'María López',
        review: 'La comida es espectacular y el ambiente acogedor.',
        stars: 5,
        image: require('../assets/img/mujer-1.jpg'),
    },
    {
        name: 'Carlos Pérez',
        review: 'El mejor ramen que he probado.',
        stars: 5,
        image: require('../assets/img/hombre-1.jpg'),
    },
    {
        name: 'Ana Torres',
        review: 'El servicio fue excelente y los postres increíbles.',
        stars: 5,
        image: require('../assets/img/mujer-2.jpg'),
    },
];

const ReviewCard = ({ name, review, stars, image }) => {
    return (
        <div
            className="p-4 mb-3 d-flex align-items-center"
            style={{
                backgroundColor: '#F7F8FA',
                borderRadius: '12px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
        >
            <div className="me-3">
                <img
                    src={image}
                    alt={`Foto de ${name}`}
                    className="rounded-circle"
                    style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'cover',
                        border: '2px solid #BB002D',
                    }}
                />
            </div>
            <div>
                <h5 style={{ color: '#0E1422', fontWeight: '900', marginBottom: '8px' }}>
                    {name}
                </h5>
                <p style={{ margin: '0 0 8px 0' }}>{review}</p>
                <p style={{ color: '#BB002D', fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {'⭐'.repeat(stars)}
                </p>
            </div>
        </div>
    );
};

const Reviews = () => {
    return (
        <section id='reviews' className="py-5" style={{ backgroundColor: '#BB002D', color: '#0F1423' }}>
            <div className="container">
                <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color:'#F7F8FA' }}>
                    Reseñas de Clientes
                </h2>
                {reviews.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </div>
        </section>
    );
};

export default Reviews;
