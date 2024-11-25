import React from 'react';
import matcha from '../../assets/img/matcha.png';
import BuyButton from '../BuyButton';

const Matcha = () => {
    return (
        <section style={{ backgroundColor: '#F7F8FA', padding: '40px 0 140px', position: 'relative'}}>
            <div className="container">
                <h2 style={{ color: '#0D2B45', fontWeight: '500', fontSize:"3rem", textAlign:'center', margin:'0 0 100px'}}>Primera taza de paz</h2>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div
                            style={{
                                width: '700px',
                                height: '700px',
                                backgroundColor: '#BB002D',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '50%',
                                left: '-350px', 
                                transform: 'translateY(-50%)', 
                            }}
                        ></div>
                        <img
                            src={matcha}
                            alt="Matcha"
                            className="img-fluid"
                            style={{ 
                                width: '600px',
                                height: '600px',
                                minWidth: '400px',
                                minHeight: '400px',
                                position: 'relative', 
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h3 style={{ color: '#0D2B45', fontWeight: '900', fontSize:"3rem" }}>Matcha <span style={{ color: '#11639B', fontWeight: '300', fontSize:'2rem' }}>6oz</span></h3>
                        <h4 style={{ color: '#13649D', fontWeight: 'bold' }}>$3.00</h4>
                        <p style={{ color: '#0D2B45 ', fontWeight: '400', fontSize: '1.5rem' }}>
                            Descubre la magia del matcha japonés en su forma más pura con nuestro exclusivo tamaño
                            de 6 oz, diseñado para enamorar tus sentidos. Un regalo especial para nuevos visitantes,
                            hecho con polvo de matcha importado directamente desde Japón. 
                        </p>
                        <p style={{ color: '#0D2B45 ', fontWeight: '400', fontSize: '1.5rem' }}>
                            Siéntate, relájate, y deja
                            que Heiwa te invite a un momento de tranquilidad.
                        </p>
                        <BuyButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Matcha;