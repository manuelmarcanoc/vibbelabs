import React from 'react';
import Kinetic from './Kinetic';
import Wordmark from './Wordmark';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero__inner section-wrap">
        <div className="hero__top">
          <Wordmark className="hero__mark" />

          <div className="hero__aside">
            <p className="hero__lead lead-text">
              Vibbe Labs es un estudio de desarrollo. Hacemos sitios a medida, aplicaciones web y la
              parte de datos que va detrás.
            </p>
            <div className="hero__actions">
              <a href="#proyectos" className="btn">
                Ver proyectos
                <span className="btn__arrow" aria-hidden="true">
                  ↘
                </span>
              </a>
              <a href="#contacto" className="btn btn--ghost">
                Escríbenos
              </a>
            </div>
          </div>
        </div>

        <h1 className="hero__headline display-title" data-reveal="kinetic">
          <Kinetic text="Webs y productos digitales," />
          <Kinetic text="del diseño al despliegue." delay={0.22} accentFrom={0} />
        </h1>
      </div>
    </section>
  );
};

export default Hero;
