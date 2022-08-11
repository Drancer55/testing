import React from "react";
import './Points.css';
import { puntos } from './Puntos';
import Card from 'react-bootstrap/Card';
// Componente creado con Card de Bootstrap
// Puntos de interés dentro del sitio web
const Points = () => {

    return (
        <div className="items">
            {/* Logo */}
            <h5 className="logo"><center>LOGO</center></h5>
            {/* Iteración de los puntos de interés descritos en el arreglo de objetos en Puntos.js */}
            <div className="content">
                {/* Iteración de la informción dentro de Card by Bootstrap */}
                {puntos.map((item) => (
                    <div>
                        <center className="carta">
                            <Card border="light" key={item.id} style={{ width: '23vh', borderRadius: '20px', height: '20vh' }}>
                                <Card.Title>
                                    <img className="image" src={item.img} alt={item.title} />
                                </Card.Title>
                                <Card.Body>
                                        <p className="title">{item.title}</p>
                                </Card.Body>
                            </Card>
                        </center>
                    </div>
                ))                 
                }
            </div>
        </div>
    )
}

export default Points;