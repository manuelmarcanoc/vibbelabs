import React from 'react';
import Lines from './Lines';
import './Services.css';

const services = [
  {
    n: '01',
    title: 'Sitios y aplicaciones web',
    text: 'Desde una web corporativa hasta una aplicación con usuarios, cuentas y panel propio.',
    detail: 'React · Next · Firebase',
  },
  {
    n: '02',
    title: 'Datos y paneles',
    text: 'Procesos que recogen y limpian datos, y paneles donde por fin se entienden.',
    detail: 'Python · SQL · Looker',
  },
  {
    n: '03',
    title: 'Automatización',
    text: 'Integraciones y flujos que quitan de en medio el trabajo repetitivo de cada semana.',
    detail: 'n8n · APIs · Scripts',
  },
  {
    n: '04',
    title: 'Revisión técnica',
    text: 'Segunda opinión sobre un proyecto en marcha: qué falla, qué cuesta y por dónde seguir.',
    detail: 'Auditoría · Roadmap',
  },
];

const Services = () => {
  return (
    <section className="srv" id="servicios">
      <div className="wrap">
        <div className="srv__head">
          <p className="mono" data-reveal="fade">
            Servicios
          </p>
          <h2 className="d2" data-reveal="lines">
            <Lines>{['En qué', <>ayudamos.</>]}</Lines>
          </h2>
        </div>

        <ul className="srv__list">
          {services.map((s, i) => (
            <li className="srv__row" key={s.n} data-reveal style={{ '--d': `${i * 0.05}s` }}>
              <span className="mono srv__n">{s.n}</span>
              <h3 className="srv__title">{s.title}</h3>
              <p className="srv__text">{s.text}</p>
              <span className="mono srv__detail">{s.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
