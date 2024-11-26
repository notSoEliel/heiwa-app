import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGift, FaMapMarkerAlt, FaStar } from 'react-icons/fa'; // Importamos los íconos
import '../styles/ButtonGroup.css'; // Importamos el CSS

const ButtonGroup = () => {
    return (
        <div className="button-group-container">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={4} md="auto" className="text-center">
                        <Link to="/gift-cards" className="custom-button">
                            <FaGift className="icon" />
                            <span className="button-text">Gift Cards</span>
                        </Link>
                    </Col>
                    <Col xs={4} md="auto" className="text-center">
                        <a href="#sucursales" className="custom-button">
                            <FaMapMarkerAlt className="icon" />
                            <span className="button-text">Sucursales</span>
                        </a>
                    </Col>
                    <Col xs={4} md="auto" className="text-center">
                        <a href="#reviews" className="custom-button">
                            <FaStar className="icon" />
                            <span className="button-text">Reseñas</span>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ButtonGroup;
