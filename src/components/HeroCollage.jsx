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
        <span className="hero__sticker">BUILD<br />FAST</span>

        <p className="hero__script script-accent">Digital Craftsman!</p>

        <h1 className="hero__headline display-title">
          Construimos <span className="hero__hl-accent">productos digitales</span> de punta a punta
        </h1>

        <p className="hero__lead">
          Software a medida y datos que ayudan a tomar mejores decisiones — del primer boceto hasta
          producción.
        </p>

        <div className="hero__actions">
          <a href="#proyectos" className="btn-pill">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn-pill btn-pill--white">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroCollage;
