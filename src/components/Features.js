import React from 'react';
import { Row, Col } from 'react-bootstrap';

const features = [
    { icon: require("../assets/icons/petfriendly-icon.png"), text: 'Pet Friendly' },
    { icon: require("../assets/icons/vegan-icon.png"), text: 'Vegan' },
    { icon: require("../assets/icons/glutenfree-icon.png"), text: 'Gluten Free' },
    { icon: require("../assets/icons/wifi-icon.png"), text: 'WiFi' },
    { icon: require("../assets/icons/zenzone-icon.png"), text: 'Zen Zone' },
];

const Features = () => {
    return (
        <section className="py-5" style={{ backgroundColor: '#F7F8FA' }}>
            <div className="container">
                <Row className="justify-content-center">
                    {features.map((feature, index) => (
                        <Col
                            key={index}
                            xs={6}
                            sm={4}
                            md={2}
                            className="d-flex flex-column align-items-center text-center mb-4"
                        >
                            <div style={{ width: 'auto', borderRadius: '50%', border: 'solid 2px #BC002D', padding: '20px', marginBottom:'1em' }}>
                                <img
                                    src={feature.icon}
                                    alt={feature.text}
                                    className="img-fluid"
                                    style={{ width: '60px', marginBottom: '0' }}
                                />
                            </div>
                            <p style={{ color: '#BC002D', fontWeight: 'bold', marginBottom: '0' }}>
                                {feature.text}
                            </p>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default Features;
