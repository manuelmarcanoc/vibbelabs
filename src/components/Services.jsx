import React from 'react';
import './Services.css';

const services = [
  {
    num: '01',
    title: 'DESARROLLO WEB & MÓVIL',
    text: 'SPAs, apps React y despliegues cloud con foco en rendimiento y mantenibilidad.',
  },
  {
    num: '02',
    title: 'DATOS & DASHBOARDS',
    text: 'ETL, visualización y métricas operativas para equipos que necesitan claridad.',
  },
  {
    num: '03',
    title: 'AUTOMATIZACIÓN',
    text: 'Integraciones, bots y flujos n8n que eliminan trabajo repetitivo.',
  },
  {
    num: '04',
    title: 'ARQUITECTURA & CONSULTORÍA',
    text: 'Revisiones técnicas, stack y roadmap para escalar sin deuda innecesaria.',
  },
];

const Services = () => {
  return (
    <section className="services" id="servicios">
      <div className="services__layout section-wrap">
        <h2 className="services__heading display-title" data-reveal>
          SERVICIOS <span aria-hidden="true">➔</span>
        </h2>

        <ul className="services__list">
          {services.map((s, i) => (
            <li
              key={s.num}
              className="services__item"
              data-reveal
              style={{ '--reveal-delay': `${i * 0.08}s` }}
            >
              <span className="services__num">{s.num}</span>
              <div className="services__item-body">
                <h3 className="services__item-title">{s.title}</h3>
                <p className="body-text services__item-text">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
