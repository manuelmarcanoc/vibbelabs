import React from 'react';
import Kinetic from './Kinetic';
import './Studio.css';

const facts = [
  'Trato directo con quien decide',
  'Entregas visibles cada semana',
  'Del boceto a producción',
];

const Studio = () => {
  return (
    <section className="studio" id="estudio">
      <div className="studio__layout section-wrap">
        <figure className="studio__figure" data-reveal="left">
          <img
            src={`${process.env.PUBLIC_URL}/estudio.png`}
            alt="El escritorio del estudio"
            loading="lazy"
          />
          <figcaption className="mono-label studio__caption">EL ESCRITORIO</figcaption>
        </figure>

        <div className="studio__body">
          <p className="mono-label" data-reveal="fade">
            EL ESTUDIO
          </p>

          <h2 className="studio__heading display-title" data-reveal="kinetic">
            <Kinetic text="Un estudio pequeño" />
            <Kinetic text="que entrega." delay={0.16} accentFrom={1} />
          </h2>

          <p className="studio__text body-text" data-reveal style={{ '--d': '0.08s' }}>
            Vibbe Labs combina ingeniería de software con obsesión por la ejecución. Llevamos
            productos de la idea a producción — React, Firebase, Python y pipelines que conectan el
            negocio con métricas reales. Trabajamos con equipos que valoran avanzar rápido sin
            romper lo importante.
          </p>

          <ul className="studio__facts" data-reveal style={{ '--d': '0.14s' }}>
            {facts.map((fact) => (
              <li key={fact}>
                <span aria-hidden="true">—</span>
                {fact}
              </li>
            ))}
          </ul>

          <a className="btn studio__cta" href="#contacto" data-reveal style={{ '--d': '0.2s' }}>
            Trabajemos juntos
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Studio;
