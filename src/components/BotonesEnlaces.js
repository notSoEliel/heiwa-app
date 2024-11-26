import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importamos Link de react-router-dom

const ButtonGroup = () => {
    return (
        <div style={{ backgroundColor: "#F7F8FA"}}>
            <Container className="my-5" >
                <Row className="justify-content-center">
                    <Col xs="auto" className="text-center">
                        <Link 
                            to="/gift-cards" // Enlace a la página de Gift Cards
                            style={{
                                textDecoration: 'none', 
                                display: 'inline-block', 
                                borderRadius: '50px', 
                                border: '2px solid #BB002D', 
                                color: '#BB002D', 
                                padding: '10px 30px', 
                                fontWeight: 700
                            }}>
                            Gift Cards
                        </Link>
                    </Col>
                    <Col xs="auto" className="text-center">
                        <a 
                            href="#sucursales" // Enlace a la página de Sucursales
                            style={{
                                textDecoration: 'none', 
                                display: 'inline-block', 
                                borderRadius: '50px', 
                                border: '2px solid #BB002D', 
                                color: '#BB002D', 
                                padding: '10px 30px', 
                                fontWeight: 700
                            }}>
                            Sucursales
                        </a>
                    </Col>
                    <Col xs="auto" className="text-center">
                        <a 
                            href='#reviews' // Enlace a la página de Reseñas
                            style={{
                                textDecoration: 'none', 
                                display: 'inline-block', 
                                borderRadius: '50px', 
                                border: '2px solid #BB002D', 
                                color: '#BB002D', 
                                padding: '10px 30px', 
                                fontWeight: 700
                            }}>
                            Reseñas
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>      
    );
};
export default ButtonGroup;
