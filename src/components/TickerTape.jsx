import React from 'react';
import './TickerTape.css';

const MARQUEE_TEXT = '↓ PROYECTOS DESTACADOS ↓ PROYECTOS DESTACADOS ↓ ';

const TickerTape = () => {
  const track = MARQUEE_TEXT.repeat(8);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <span className="marquee__text">{track}</span>
        <span className="marquee__text">{track}</span>
      </div>
    </div>
  );
};

export default TickerTape;
