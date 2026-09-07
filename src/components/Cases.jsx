import React, { useEffect, useRef } from 'react';
import Kinetic from './Kinetic';
import './Cases.css';

const projects = [
  {
    id: 'kooz',
    index: '01',
    title: 'Kooz',
    kicker: 'Web corporativa',
    year: '2026',
    description:
      'Web corporativa para una empresa de fundas térmicas de neopreno y merchandising para festivales. Catálogo del producto y formulario de petición de muestras.',
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
    year: '2026',
    description:
      'Plataforma para preparar la certificación ISTQB CTFL v4.0: simulador de examen, apuntes, minijuego y estadísticas de progreso. En español, inglés y francés.',
    tags: ['REACT', 'I18N', 'DATA'],
    url: 'https://istqbeasy.com',
    domain: 'istqbeasy.com',
    image: 'istqbeasy.png',
    isNew: false,
  },
];

const Cases = () => {
  const sectionRef = useRef(null);

  // Paralaje interno: la captura deriva dentro de su marco al hacer scroll.
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const items = Array.from(root.querySelectorAll('[data-parallax]'));
    if (!items.length) return undefined;

    let frame = null;

    const update = () => {
      frame = null;
      const vh = window.innerHeight || 1;
      items.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const ratio = (center - vh / 2) / vh;
        const clamped = Math.max(-1, Math.min(1, ratio));
        el.style.setProperty('--p', clamped.toFixed(3));
      });
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
    <section className="cases" id="proyectos" ref={sectionRef}>
      <div className="section-wrap">
        <header className="cases__head">
          <p className="mono-label" data-reveal="fade">
            PROYECTOS ({String(projects.length).padStart(2, '0')})
          </p>
          <h2 className="cases__heading display-title" data-reveal="kinetic">
            <Kinetic text="Lo que hay online" />
            <Kinetic text="ahora mismo." delay={0.18} accentFrom={1} />
          </h2>
        </header>

        <div className="cases__list">
          {projects.map((project, i) => (
            <article key={project.id} className={`case ${i % 2 === 1 ? 'case--flip' : ''}`}>
              <a
                className="case__media"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                data-parallax
                data-reveal={i % 2 === 1 ? 'right' : 'left'}
                aria-label={`Visitar ${project.title} (${project.domain})`}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/${project.image}`}
                  alt={`Captura de ${project.title}`}
                  loading="lazy"
                />
                <span className="case__cta" aria-hidden="true">
                  <span>Ver sitio</span>
                  <span className="case__cta-arrow">↗</span>
                </span>
              </a>

              <div className="case__body" data-reveal style={{ '--d': '0.1s' }}>
                <span className="case__ghost" aria-hidden="true">
                  {project.index}
                </span>

                <div className="case__meta">
                  <span className="pill">{project.kicker}</span>
                  {project.isNew && <span className="pill pill--accent">NUEVO</span>}
                  <span className="mono-label case__year">{project.year}</span>
                </div>

                <h3 className="case__title display-title">{project.title}</h3>
                <p className="case__desc body-text">{project.description}</p>

                <div className="case__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  className="case__link link-draw"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.domain}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
