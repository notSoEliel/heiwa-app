import React from 'react';
import '../../styles/Circle.css'; // Importamos los estilos CSS


const Circle = ({ position }) => {
    return <div className={`circle ${position}`} />; // Asignamos la clase según la posición
};

export default Circle;
