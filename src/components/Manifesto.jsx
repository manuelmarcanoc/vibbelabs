import React from 'react';
import './Manifesto.css';

const TEXT =
  'No subcontratamos, no pasamos el proyecto de mano en mano y no entregamos maquetas que luego nadie sabe montar. Lo dibuja y lo programa la misma gente.';

const Manifesto = () => {
  const words = TEXT.split(' ');

  return (
    <section className="man" data-track="self">
      <div className="man__sticky">
        <div className="wrap">
          <p className="mono man__label">Cómo trabajamos</p>
          <p className="man__text d3" style={{ '--n': words.length }}>
            {words.map((word, i) => (
              <span className="man__w" key={i} style={{ '--i': i }}>
                {word}{' '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
