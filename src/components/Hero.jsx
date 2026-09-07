import React, { useEffect, useRef } from 'react';
import Kinetic from './Kinetic';
import './Hero.css';

const Hero = () => {
  const stageRef = useRef(null);

  // Paralaje suave: el logotipo responde al puntero y al scroll.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (window.matchMedia('(hover: none)').matches) return undefined;

    let px = 0;
    let py = 0;
    let sy = 0;
    let frame = null;

    const apply = () => {
      frame = null;
      stage.style.setProperty('--px', px.toFixed(3));
      stage.style.setProperty('--py', py.toFixed(3));
      stage.style.setProperty('--sy', sy.toFixed(3));
    };

    const request = () => {
      if (frame === null) frame = window.requestAnimationFrame(apply);
    };

    const onMove = (event) => {
      px = event.clientX / window.innerWidth - 0.5;
      py = event.clientY / window.innerHeight - 0.5;
      request();
    };

    const onScroll = () => {
      sy = Math.min(window.scrollY / 700, 1);
      request();
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hero" id="inicio" ref={stageRef}>
      <div className="hero__top section-wrap">
        <p className="hero__status">
          <span className="hero__dot" aria-hidden="true" />
          Disponible para nuevos proyectos
        </p>
        <p className="hero__meta mono-label">EST. 2026 — ESPAÑA</p>
      </div>

      <div className="hero__stage">
        <video
          className="hero__mark"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={`${process.env.PUBLIC_URL}/logo.png`}
          aria-label="Vibbe Labs"
        >
          <source src={`${process.env.PUBLIC_URL}/vibbelabs_video.mp4`} type="video/mp4" />
        </video>
      </div>

      <div className="hero__content section-wrap">
        <h1 className="hero__headline display-title" data-reveal="kinetic">
          <Kinetic text="Construimos productos digitales" />
          <Kinetic text="de punta a punta." delay={0.2} accentFrom={0} />
        </h1>

        <div className="hero__aside">
          <p className="hero__lead lead-text">
            Estudio de software y datos. Diseñamos, construimos y ponemos en producción — sin
            intermediarios y sin humo.
          </p>
          <div className="hero__actions">
            <a href="#proyectos" className="btn">
              Ver proyectos
              <span className="btn__arrow" aria-hidden="true">
                ↘
              </span>
            </a>
            <a href="#contacto" className="btn btn--ghost">
              Hablemos
            </a>
          </div>
        </div>
      </div>

      <div className="hero__cue" aria-hidden="true">
        <span className="hero__cue-line" />
        <span className="mono-label">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
