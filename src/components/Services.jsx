import React from 'react';
import Kinetic from './Kinetic';
import './Services.css';

const services = [
  {
    num: '01',
    title: 'Desarrollo web & móvil',
    text: 'Sitios y aplicaciones en React, con su despliegue y su dominio funcionando.',
  },
  {
    num: '02',
    title: 'Datos & dashboards',
    text: 'Procesos de datos, paneles y métricas para ver cómo va el negocio sin abrir diez pestañas.',
  },
  {
    num: '03',
    title: 'Automatización',
    text: 'Integraciones entre herramientas y flujos en n8n para quitarse tareas repetitivas de encima.',
  },
  {
    num: '04',
    title: 'Arquitectura & consultoría',
    text: 'Revisión de un proyecto que ya existe: qué falla, qué cuesta mantenerlo y por dónde seguir.',
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
            <Kinetic text="Lo que hacemos." accentFrom={2} />
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
