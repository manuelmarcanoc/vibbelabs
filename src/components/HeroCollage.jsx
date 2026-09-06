import React from 'react';
import './HeroCollage.css';

const HeroCollage = () => {
  return (
    <section className="hero" id="inicio">
      <video
        className="hero__bg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={`${process.env.PUBLIC_URL}/logo.png`}
        aria-hidden="true"
      >
        <source src={`${process.env.PUBLIC_URL}/vibbelabs_video.mp4`} type="video/mp4" />
      </video>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__inner section-wrap">
        <p className="mono-label hero__eyebrow">ESTUDIO DE SOFTWARE &amp; DATOS</p>

        <h1 className="hero__headline display-title">
          Construimos productos digitales
          <span className="hero__hl-accent"> de punta a punta</span>
        </h1>

        <p className="hero__lead">
          Software a medida y datos que ayudan a tomar mejores decisiones — del primer boceto hasta
          producción.
        </p>

        <div className="hero__actions">
          <a href="#proyectos" className="btn-pill">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn-pill btn-pill--ghost">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroCollage;
