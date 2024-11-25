import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import cataSake from '../assets/img/cata-sake.jpg'
import claseSushi from '../assets/img/clase-sushi.jpg'
import japanFestival from '../assets/img/japan-festival.jpg'

const activities = [
    { title: 'Clase de Sushi', text: 'Aprende a hacer sushi con nuestros chefs.', image: claseSushi },
    { title: 'Festival Japonés', text: 'Celebra con nosotros en un ambiente tradicional.', image: japanFestival },
    { title: 'Cata de Sake', text: 'Disfruta de una experiencia única de sake.', image: cataSake },
];

const Activities = () => {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center" style={{ color: '#BB002D', fontWeight:'900' }}>Actividades del Mes</h2>
                <Row className="mt-4">
                    {activities.map((activity, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card style={{ border: '2px solid #BB002D' }}>
                                <Card.Img variant="top" src={activity.image} />
                                <Card.Body>
                                    <Card.Title style={{ color: '#BB002D' }}>{activity.title}</Card.Title>
                                    <Card.Text>{activity.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default Activities;
