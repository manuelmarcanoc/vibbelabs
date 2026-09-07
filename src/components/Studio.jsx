import React from 'react';
import Lines from './Lines';
import Marquee from './Marquee';
import './Studio.css';

const facts = [
  ['Equipo', 'Pequeño y directo'],
  ['Alcance', 'Diseño, código y despliegue'],
  ['Trato', 'Con quien decide, sin capas'],
];

const Studio = () => {
  return (
    <section className="std dark" id="estudio">
      <Marquee
        reverse
        className="std__mq"
        items={['Vibbe Labs', 'Estudio de desarrollo', 'España', 'Desde 2026']}
      />

      <div className="std__in wrap">
        <div className="std__left">
          <p className="mono" data-reveal="fade">
            El estudio
          </p>
          <h2 className="d2" data-reveal="lines">
            <Lines>{['Quien diseña', <>es quien <em className="accent">programa</em>.</>]}</Lines>
          </h2>
        </div>

        <div className="std__right">
          <p className="lead" data-reveal style={{ '--d': '0.1s' }}>
            Vibbe Labs nació de llevar ideas propias hasta producción y acabar haciéndolo también
            para otros. No hay traspaso entre quien dibuja la pantalla y quien escribe el código, así
            que lo que se acuerda es lo que acaba online.
          </p>

          <dl className="std__facts" data-reveal style={{ '--d': '0.18s' }}>
            {facts.map(([term, value]) => (
              <div className="std__fact" key={term}>
                <dt className="mono">{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <a className="btn btn--invert std__cta" href="#contacto" data-reveal style={{ '--d': '0.24s' }}>
            Cuéntanos tu proyecto <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Studio;
