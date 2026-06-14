import React from 'react';
import './ServicesAbout.css';

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

const ServicesAbout = () => {
  return (
    <section className="services-about" id="servicios">
      <div className="services-about__layout">
        <div className="services-about__services">
          <h2 className="services-about__heading display-title">
            SERVICIOS <span className="services-about__arrow">➔</span>
          </h2>
          <ul className="services-about__list">
            {services.map((s) => (
              <li key={s.num} className="services-about__item">
                <span className="services-about__num">{s.num}</span>
                <div>
                  <h3 className="services-about__item-title">{s.title}</h3>
                  <p className="body-text">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="services-about__about" id="sobre-mi">
          <p className="services-about__section-label">SOBRE MÍ</p>
          <div className="services-about__about-grid">
            <div className="services-about__bio">
              <p className="services-about__bio-text">
                Ingeniero con perfil híbrido: desarrollo full-stack y análisis de datos.
                Llevo productos de la idea a producción — React, Firebase, Python y pipelines
                que conectan negocio con métricas reales. Basado en Barcelona, trabajo con
                startups y equipos que valoran la ejecución directa.
              </p>
            </div>
            <div className="services-about__portrait-wrap">
              <div className="services-about__portrait" role="img" aria-label="Retrato">
                <div className="services-about__portrait-fill" />
              </div>
              <span className="services-about__name script-accent">Manuel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesAbout;
