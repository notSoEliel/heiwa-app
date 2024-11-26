import React from 'react';
import BuyButton from '../BuyButton';
import ramen1 from '../../assets/img/ramen-test2.png';
import boyNaruto from '../../assets/img/boy-narutos.png';


const MenuSection = () => {
    return (
        <section style={{ backgroundColor: '#BC002D', padding: '300px 0 100px' }}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 style={{ color: '#F7F8FA', fontWeight: '900', fontSize: '4rem',}}>Menú</h2>
                    <div>
                        <button
                            className="btn btn-outline-secondary me-2"
                            style={{
                                backgroundColor: '#F7F8FA',
                                color: '#BC002D',
                                fontWeight: '700',
                                borderRadius: '50px',
                                fontSize: '1.3rem',
                            }}
                        >
                            Categorías
                        </button>
                        <button
                            className="btn btn-outline-secondary"
                            style={{
                                backgroundColor: '#BC002D',
                                color: '#F7F8FA',
                                fontWeight: '700',
                                borderRadius: '50px',
                                fontSize: '1.3rem',

                            }}
                        >
                            Filtros
                        </button>
                    </div>
                </div>
                <div className="row" style={{marginTop:'10px', paddingBottom: '80px', 
}}>
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div key={index} className="col-md-4 mb-4 d-flex justify-content-center">
                            <div
                                className="position-relative "
                                style={{
                                    backgroundColor: '#F7F8FA',
                                    border: 'solid #0F1423 3px',
                                    boxShadow: '0px 4px 8px rgba(0,0,0,0.5)',
                                    width: '100%',
                                    paddingBottom: '40px', 
                                    marginTop: '200px',
                                }}
                            >
                                <div
                                    className="position-absolute"
                                    style={{
                                        top: '-160px', 
                                        left: '50%',
                                        transform: 'translateX(-50%)',

                                    }}
                                >
                                    <img
                                        src={ramen1}
                                        alt="Alimento"
                                        className="img-fluid"
                                        style={{
                                            borderRadius: '15px',
                                            width: '250px', 
                                            height: '250px',
                                            objectFit: 'cover',
                                            overflow: 'visible',

                                        }}
                                    />
                                </div>
                                <div className="text-center d-flex flex-column align-items-center" style={{ marginTop: '80px' }}>
                                    <h5 style={{ color: '#0D2B45', marginTop: '25px', fontWeight: '900', fontSize: '2rem' }}>
                                        Alimento {index + 1}
                                    </h5>
                                    <p style={{ color: '#13649D', fontWeight: '700', fontSize: '1.7rem' }}>$8.00</p>
                                    <div style={{ textAlign: 'center' }}>
                                        <BuyButton style={{ width: '150px', margin: '0 auto' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <img
                        src={boyNaruto}
                        alt="Decoración Naruto"
                        className="img-fluid"
                        style={{ maxWidth: '300px', opacity: 0.8 }}
                    />
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
