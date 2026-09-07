import React from 'react';

// Titular cinético: cada palabra sube desde detrás de una máscara.
// El disparo lo controla useScrollReveal al añadir .reveal-in al contenedor.
const Kinetic = ({ text, accentFrom = null, delay = 0, step = 0.055, className = '' }) => {
  const words = String(text).split(' ');

  return (
    <span className={`kinetic ${className}`}>
      {words.map((word, i) => (
        <React.Fragment key={`${word}-${i}`}>
          <span className="kinetic__mask">
            <span
              className={`kinetic__word ${
                accentFrom !== null && i >= accentFrom ? 'kinetic__accent' : ''
              }`}
              style={{ '--d': `${delay + i * step}s` }}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </span>
  );
};

export default Kinetic;
