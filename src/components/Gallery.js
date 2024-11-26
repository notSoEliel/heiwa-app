import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/Gallery.css'; // Importa el archivo CSS

const Gallery = () => {
    const items = [
        { name: "Entradas", src: require("../assets/img/platillos1-1.png") },
        { name: "Sopas", src: require("../assets/img/platillos1-2.png") },
        { name: "Sushi", src: require("../assets/img/platillos2-1.jpg") },
        { name: "Platos Fuertes", src: require("../assets/img/platillos2-2.jpg") },
        { name: "Bebidas", src: require("../assets/img/platillos2-3.jpg") },
        { name: "Postres", src: require("../assets/img/platillos3-1.jpg") },
        { name: "Menú para niños", src: require("../assets/img/platillos3-2.jpg") },
    ];

    return (
        <div className="gallery-container">
            <h2 className="gallery-title">Platillos</h2>
            <Row className="g-4 gallery-row"> {/* Gap manejado como 0 aquí */}
                <Col xs={12} md={6} lg={6} className="gallery-col">
                    <div className="gallery-image-wrapper">
                        <img src={items[0].src} alt={items[0].name} className="gallery-image" />
                        <div className="gallery-text">{items[0].name}</div>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={6} className="gallery-col">
                    <div className="gallery-image-wrapper">
                        <img src={items[1].src} alt={items[1].name} className="gallery-image" />
                        <div className="gallery-text">{items[1].name}</div>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={4} className="gallery-col">
                    <div className="gallery-image-wrapper">
                        <img src={items[2].src} alt={items[2].name} className="gallery-image" />
                        <div className="gallery-text">{items[2].name}</div>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={4} className="gallery-col">
                    <div className="gallery-image-wrapper">
                        <img src={items[3].src} alt={items[3].name} className="gallery-image" />
                        <div className="gallery-text">{items[3].name}</div>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={4} className="gallery-col">
                    <div className="gallery-image-wrapper">
                        <img src={items[4].src} alt={items[4].name} className="gallery-image" />
                        <div className="gallery-text">{items[4].name}</div>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={6} className="gallery-col">
                    <div className="gallery-image-wrapper">
                        <img src={items[5].src} alt={items[5].name} className="gallery-image" />
                        <div className="gallery-text">{items[5].name}</div>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={6} className="gallery-col">
                    <div className="gallery-image-wrapper">
                        <img src={items[6].src} alt={items[6].name} className="gallery-image" />
                        <div className="gallery-text">{items[6].name}</div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Gallery;
