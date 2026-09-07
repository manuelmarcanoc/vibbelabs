import React from 'react';
import './Marquee.css';

// Cinta que se desplaza con el scroll (no en bucle automático) y se inclina
// ligeramente con la velocidad del scroll.
const Marquee = ({ items, className = '', reverse = false }) => {
  const track = [...items, ...items, ...items];

  return (
    <div className={`mq ${reverse ? 'mq--rev' : ''} ${className}`} data-track="through" aria-hidden="true">
      <div className="mq__track">
        {track.map((item, i) => (
          <span className="mq__item" key={i}>
            {item}
            <i className="mq__dot" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
