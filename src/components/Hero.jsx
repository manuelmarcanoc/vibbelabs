import React from 'react';
import Lines from './Lines';
import Marquee from './Marquee';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero__head wrap">
        <p className="mono hero__status">
          <i className="hero__dot" aria-hidden="true" />
          Disponible para nuevos proyectos
        </p>
        <p className="mono">Est. 2026 — España</p>
      </div>

      <div className="hero__title wrap" data-reveal="lines">
        <h1 className="d1">
          <Lines delay={0.15}>
            {['Webs y productos', <>digitales, del diseño</>, <>al <em className="accent">despliegue</em>.</>]}
          </Lines>
        </h1>
      </div>

      <div className="hero__foot wrap">
        <p className="lead hero__lead" data-reveal style={{ '--d': '0.5s' }}>
          Vibbe Labs es un estudio de desarrollo. Hacemos sitios a medida, aplicaciones web y la
          parte de datos que va detrás.
        </p>

        <div className="hero__actions" data-reveal style={{ '--d': '0.6s' }}>
          <a href="#proyectos" className="btn btn--solid">
            Ver proyectos <span aria-hidden="true">→</span>
          </a>
          <a href="#contacto" className="btn">
            Escríbenos
          </a>
        </div>
      </div>

      <Marquee
        className="hero__mq"
        items={['Diseño', 'Desarrollo', 'Datos', 'Automatización', 'Despliegue']}
      />
    </section>
  );
};

export default Hero;
