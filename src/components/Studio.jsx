import React from 'react';
import Kinetic from './Kinetic';
import Wordmark from './Wordmark';
import './Studio.css';

const facts = [
  ['Proyectos', 'Propios y de cliente'],
  ['Equipo', 'Pequeño, sin capas intermedias'],
  ['Alcance', 'Diseño, código y despliegue'],
];

const Studio = () => {
  return (
    <section className="studio u-dark" id="estudio">
      <div className="studio__layout section-wrap">
        <div className="studio__body">
          <p className="mono-label" data-reveal="fade">
            EL ESTUDIO
          </p>

          <h2 className="studio__heading display-title" data-reveal="kinetic">
            <Kinetic text="Quien diseña es" />
            <Kinetic text="quien programa." delay={0.16} accentFrom={1} />
          </h2>

          <p className="studio__text body-text" data-reveal style={{ '--d': '0.08s' }}>
            Vibbe Labs nació de llevar ideas propias hasta producción y acabar haciéndolo también
            para otros. No hay traspaso entre el que dibuja la pantalla y el que escribe el código,
            así que lo que se acuerda es lo que acaba online.
          </p>

          <a className="btn studio__cta" href="#contacto" data-reveal style={{ '--d': '0.16s' }}>
            Cuéntanos tu proyecto
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <div className="studio__side">
          <Wordmark className="studio__mark" />
          <dl className="studio__facts" data-reveal="right">
            {facts.map(([term, value]) => (
              <div className="studio__fact" key={term}>
                <dt className="mono-label">{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Studio;
