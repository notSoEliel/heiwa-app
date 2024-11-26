import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" style={{ backgroundColor: '#F7F8FA', padding:"20px 50px"}}>
            {/* Logo con más margen */}
            <Navbar.Brand as={Link} to="/" style={{ marginLeft: '40px' }}>
                <img 
                    src={require("../assets/icons/logo-nombre.png")} 
                    alt="Heiwa" 
                    style={{ height: '91px' }} 
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
                {/* Botones centrados con peso 900 */}
                <Nav className="ms-auto" style={{ justifyContent: 'right', width: '100%', marginRight: "140px", fontSize:"20px" }}>
                    <Nav.Link as={Link} to="/" style={{ color: '#092035', margin: '0 20px', fontWeight: '900' }}>Home</Nav.Link>
                    <Nav.Link as={Link} to="/menu" style={{ color: '#092035', margin: '0 20px', fontWeight: '900' }}>Menú</Nav.Link>
                    <Nav.Link as={Link} to="/reservation" style={{ color: '#092035', margin: '0 20px', fontWeight: '900' }}>Reservas</Nav.Link>
                    <Nav.Link as={Link} to="/about-us" style={{ color: '#092035', margin: '0 20px', fontWeight: '900' }}>Nosotros</Nav.Link>
                </Nav>
                {/* Carrito con más margen */}
                <Nav>
                    <Nav.Link 
                        as={Link} to="/cart" 
                        style={{ 
                            color: '#0E1422', 
                            marginLeft: '20px', /* Aumentado margen izquierdo */
                            display: 'flex', 
                            alignItems: 'center' 
                        }}
                    >
                        <img 
                            src={require('../assets/icons/cart-icon.png')} 
                            alt="Carrito" 
                            style={{ width: '30px', height: '30px', marginRight: '10px' }} 
                        />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
