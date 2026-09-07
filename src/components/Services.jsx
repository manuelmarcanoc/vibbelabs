import React from 'react';
import Kinetic from './Kinetic';
import './Services.css';

const services = [
  {
    num: '01',
    title: 'Desarrollo web & móvil',
    text: 'SPAs, apps React y despliegues cloud con foco en rendimiento y mantenibilidad.',
  },
  {
    num: '02',
    title: 'Datos & dashboards',
    text: 'ETL, visualización y métricas operativas para equipos que necesitan claridad.',
  },
  {
    num: '03',
    title: 'Automatización',
    text: 'Integraciones, bots y flujos n8n que eliminan trabajo repetitivo.',
  },
  {
    num: '04',
    title: 'Arquitectura & consultoría',
    text: 'Revisiones técnicas, stack y roadmap para escalar sin deuda innecesaria.',
  },
];

const Services = () => {
  return (
    <section className="services" id="servicios">
      <div className="section-wrap">
        <header className="services__head">
          <p className="mono-label" data-reveal="fade">
            SERVICIOS
          </p>
          <h2 className="services__heading display-title" data-reveal="kinetic">
            <Kinetic text="Lo que hacemos bien." accentFrom={3} />
          </h2>
        </header>

        <ul className="services__list">
          {services.map((s, i) => (
            <li key={s.num} className="services__item" data-reveal style={{ '--d': `${i * 0.06}s` }}>
              <span className="services__num mono-label">{s.num}</span>
              <h3 className="services__title">{s.title}</h3>
              <p className="services__text">{s.text}</p>
              <span className="services__arrow" aria-hidden="true">
                ↗
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
