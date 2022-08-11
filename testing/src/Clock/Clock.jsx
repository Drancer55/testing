import React, { useState, useEffect } from 'react';
import './Clock.css';
// Componente de reloj y fecha
export const Clock = () => {
    // seteo de la fecha actual
    const [dateState, setDateState] = useState(new Date());
    // se actualiza cada 30000 ms (medio minuto)
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    return (
        <div className='date'>
            {/* La hora ha sido establecida con el idioma y formato de México */}
            <p className='time'>
            {dateState.toLocaleString('es-MX', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: false,
            })}
            </p>
            {/* La fecha ha sido establecida con el idioma y formato de México */}
            <p className='calendar'>
                {' '}
                {dateState.toLocaleDateString('es-MX', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
            </p>
        </div>
    );
};
