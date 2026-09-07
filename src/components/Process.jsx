import React, { useEffect, useRef } from 'react';
import Kinetic from './Kinetic';
import './Process.css';

const steps = [
  {
    num: '01',
    title: 'Entender el problema',
    text: 'Antes de escribir una línea: qué se necesita, quién lo usa y qué restricciones reales hay detrás.',
  },
  {
    num: '02',
    title: 'Prototipo navegable',
    text: 'Las decisiones de producto se toman sobre algo que se puede tocar, no sobre un PDF de 40 páginas.',
  },
  {
    num: '03',
    title: 'Construcción por partes',
    text: 'Entregas visibles cada semana. Nada de meses a oscuras esperando una demo final.',
  },
  {
    num: '04',
    title: 'Producción y medición',
    text: 'Desplegar es el principio: métricas, ajustes y mejoras con datos reales de uso.',
  },
];

const Process = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      track.style.setProperty('--pp', '1');
      return undefined;
    }

    let frame = null;

    const update = () => {
      frame = null;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = rect.height || 1;
      const progress = (vh * 0.62 - rect.top) / total;
      track.style.setProperty('--pp', Math.max(0, Math.min(1, progress)).toFixed(3));
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="process u-dark" id="proceso">
      <div className="process__layout section-wrap">
        <div className="process__intro">
          <p className="mono-label" data-reveal="fade">
            CÓMO TRABAJAMOS
          </p>
          <h2 className="process__heading display-title" data-reveal="kinetic">
            <Kinetic text="Cuatro pasos," />
            <Kinetic text="cero humo." delay={0.16} accentFrom={1} />
          </h2>
          <p className="process__note body-text" data-reveal style={{ '--d': '0.1s' }}>
            Trabajamos directo con quien decide. Sin capas intermedias, sin reuniones que podrían
            haber sido un mensaje.
          </p>
        </div>

        <ol className="process__track" ref={trackRef}>
          <span className="process__rail" aria-hidden="true">
            <span className="process__rail-fill" />
          </span>

          {steps.map((step, i) => (
            <li
              key={step.num}
              className="process__step"
              data-reveal
              style={{ '--d': `${i * 0.08}s` }}
            >
              <span className="process__dot" aria-hidden="true" />
              <span className="process__num mono-label">{step.num}</span>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__text body-text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
