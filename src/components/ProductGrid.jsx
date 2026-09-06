import React from 'react';
import './ProductGrid.css';

const projects = [
  {
    id: 'kooz',
    index: '01',
    title: 'Kooz',
    kicker: 'Web corporativa',
    description:
      'Web corporativa para empresa especializada en fundas térmicas para bebidas y merchandising para festivales y empresas de eventos.',
    tags: ['WEB', 'MERCH', 'EVENTOS'],
    url: 'https://kooz.es',
    domain: 'kooz.es',
    image: 'kooz.png',
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
    isNew: false,
  },
];

const ProductGrid = () => {
  return (
    <section className="cases" id="proyectos">
      <div className="section-wrap">
        <header className="cases__head" data-reveal>
          <p className="mono-label">PROYECTOS</p>
          <h2 className="cases__heading display-title">Lo que construimos</h2>
          <p className="cases__intro body-text">
            Productos digitales reales, en producción y con usuarios. Haz clic para visitarlos.
          </p>
        </header>

        <div className="cases__list">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`case ${i % 2 === 1 ? 'case--reverse' : ''}`}
              data-reveal
              style={{ '--reveal-delay': `${i * 0.08}s` }}
            >
              <a
                className="case__media"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${project.title} (${project.domain})`}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/${project.image}`}
                  alt={`Captura de ${project.title}`}
                  loading="lazy"
                />
              </a>

              <div className="case__body">
                <div className="case__meta">
                  <span className="mono-label case__index">{project.index}</span>
                  <span className="pill">{project.kicker}</span>
                  {project.isNew && <span className="pill pill--red">NUEVO</span>}
                </div>

                <h3 className="case__title display-title">{project.title}</h3>
                <p className="case__desc body-text">{project.description}</p>

                <div className="case__footer">
                  <div className="case__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    className="case__link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.domain} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
