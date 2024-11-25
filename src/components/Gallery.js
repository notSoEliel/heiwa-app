import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Gallery = () => {
    const images = [
        require("../assets/img/platillos1-1.png"),
        require("../assets/img/platillos1-2.png"),
        require("../assets/img/platillos2-1.jpg"),
        require("../assets/img/platillos2-2.jpg"),
        require("../assets/img/platillos2-3.jpg"),
        require("../assets/img/platillos3-1.jpg"),
        require("../assets/img/platillos3-2.jpg"),
    ];

    return (
        <div style={{ backgroundColor: "#F7F8FA", padding: "40px 140px" }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#BC002D', fontWeight: 900 }}>Platillos</h2> {/* Título centrado */}
            <Row className="g-4 d-flex" style={{ margin: "0" }}>
                <Col xs={6} md={6} lg={6} className="d-flex justify-content-around align-items-center">
                    <img src={images[0]} alt="Platillo 1" className="img-fluid rounded" style={{ height: '400px', width:"100%", objectFit: 'cover' }} />
                </Col>
                <Col xs={6} md={6} lg={6} className="d-flex justify-content-around align-items-center">
                    <img src={images[1]} alt="Platillo 2" className="img-fluid rounded" style={{ height: '400px', width:"100%", objectFit: 'cover' }} />
                </Col>
                <Col xs={4} md={4} lg={4} className="d-flex justify-content-around align-items-center">
                    <img src={images[2]} alt="Platillo 3" className="img-fluid rounded" style={{ height: '400px', width:'100%', objectFit: 'cover' }} />
                </Col>
                <Col xs={4} md={4} lg={4} className="d-flex justify-content-around align-items-center">
                    <img src={images[3]} alt="Platillo 4" className="img-fluid rounded" style={{ height: '400px', width:'100%', objectFit: 'cover' }} />
                </Col>
                <Col xs={4} md={4} lg={4} className="d-flex justify-content-around align-items-center">
                    <img src={images[4]} alt="Platillo 5" className="img-fluid rounded" style={{ height: '400px', width:'100%', objectFit: 'cover' }} />
                </Col>
                <Col xs={6} md={6} lg={6} className="d-flex justify-content-around align-items-center">
                    <img src={images[5]} alt="Platillo 6" className="img-fluid rounded" style={{ height: '400px', width:"100%", objectFit: 'cover' }} />
                </Col>
                <Col xs={6} md={6} lg={6} className="d-flex justify-content-around align-items-center">
                    <img src={images[6]} alt="Platillo 7" className="img-fluid rounded" style={{ height: '400px', width:"100%", objectFit: 'cover' }} />
                </Col>
            </Row>
        </div>
    );
};

export default Gallery;
