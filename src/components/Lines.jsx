import React from 'react';

// Titular por líneas: cada línea sube desde detrás de su propia máscara.
// El disparo lo da useScroll al añadir .is-in al contenedor con [data-reveal].
const Lines = ({ children, delay = 0, step = 0.09, className = '' }) => {
  const items = Array.isArray(children) ? children : [children];

  return (
    <span className={`lines ${className}`}>
      {items.map((line, i) => (
        <span className="line" key={i}>
          <span style={{ '--d': `${delay + i * step}s` }}>{line}</span>
        </span>
      ))}
    </span>
  );
};

export default Lines;
