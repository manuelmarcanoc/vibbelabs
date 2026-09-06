import React from 'react';
import './ProductGrid.css';

const projects = [
  {
    id: 'kooz',
    index: '01',
    title: 'Kooz',
    kicker: 'Web Corporativa',
    description:
      'Web corporativa para empresa especializada en fundas térmicas para bebidas y merchandising para festivales y empresas de eventos.',
    tags: ['WEB', 'MERCH', 'EVENTOS'],
    url: 'https://kooz.es',
    domain: 'kooz.es',
    image: 'kooz.png',
    orientation: 'landscape',
    theme: 'warm',
    isNew: true,
  },
  {
    id: 'istqbeasy',
    index: '02',
    title: 'ISTQBeasy',
    kicker: 'Producto propio',
    description:
      'Plataforma de preparación para la certificación ISTQB CTFL v4.0. Simulador con preguntas oficiales, apuntes, minijuego y estadísticas de progreso. Disponible en ES, EN y FR.',
    tags: ['REACT', 'I18N', 'DATA'],
    url: 'https://istqbeasy.com',
    domain: 'istqbeasy.com',
    image: 'istqbeasy.png',
    orientation: 'landscape',
    theme: 'violet',
    isNew: false,
  },
];

const ProductGrid = () => {
  return (
    <section className="portfolio" id="proyectos">
      <div className="section-wrap">
        <header className="portfolio__head" data-reveal>
          <span className="section-tab">PROYECTOS</span>
          <h2 className="portfolio__heading display-title">
            LO QUE <span className="script-accent">construimos</span>
          </h2>
          <p className="portfolio__intro body-text">
            Productos digitales reales, en producción y con usuarios. Haz clic para visitarlos.
          </p>
        </header>

        <div className="portfolio__grid">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`pcard pcard--${project.theme}`}
              data-reveal={i % 2 === 0 ? 'left' : 'right'}
              style={{ '--reveal-delay': `${i * 0.08}s` }}
            >
              <a
                className="pcard__link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${project.title} (${project.domain})`}
              >
                <div className="pcard__top">
                  <span className="pcard__index">{project.index}</span>
                  <div className="pcard__heading">
                    <p className="pcard__kicker">{project.kicker}</p>
                    <h3 className="pcard__title display-title">{project.title}</h3>
                  </div>
                  {project.isNew && <span className="pill pill--red pcard__badge">NUEVO</span>}
                </div>

                <div className={`pcard__shot pcard__shot--${project.orientation}`}>
                  <img
                    src={`${process.env.PUBLIC_URL}/${project.image}`}
                    alt={`Captura de ${project.title}`}
                    loading="lazy"
                  />
                </div>

                <p className="pcard__desc body-text">{project.description}</p>

                <div className="pcard__footer">
                  <div className="pcard__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="pcard__visit">
                    {project.domain} <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
