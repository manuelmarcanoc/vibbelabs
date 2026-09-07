import React, { useRef } from 'react';
import Lines from './Lines';
import './Work.css';

const projects = [
  {
    id: 'kooz',
    n: '01',
    title: 'Kooz',
    kind: 'Web corporativa',
    year: '2026',
    text: 'Empresa de fundas térmicas y merchandising para festivales. Identidad de alto contraste, catálogo y captación de peticiones de muestra.',
    tags: ['Diseño', 'Desarrollo', 'Copy'],
    url: 'https://kooz.es',
    domain: 'kooz.es',
    image: 'kooz.png',
    panel: '#161613',
    tint: '#c8ff2f',
  },
  {
    id: 'istqbeasy',
    n: '02',
    title: 'ISTQBeasy',
    kind: 'Producto propio',
    year: '2026',
    text: 'Plataforma para preparar la certificación ISTQB CTFL v4.0: simulador con preguntas oficiales, apuntes y estadísticas de progreso en tres idiomas.',
    tags: ['Producto', 'React', 'Datos'],
    url: 'https://istqbeasy.com',
    domain: 'istqbeasy.com',
    image: 'istqbeasy.png',
    panel: '#2b2258',
    tint: '#a99cff',
  },
];

const Work = () => {
  const onMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <section className="work" id="proyectos">
      <div className="work__head wrap">
        <p className="mono" data-reveal="fade">
          Proyectos ({String(projects.length).padStart(2, '0')})
        </p>
        <h2 className="d2" data-reveal="lines">
          <Lines>{['Lo que ya está', <>online.</>]}</Lines>
        </h2>
      </div>

      <div className="work__stack">
        {projects.map((p, i) => (
          <article className="work__item" key={p.id} style={{ '--i': i }}>
            <a
              className="work__card"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ '--panel': p.panel, '--tint': p.tint }}
              onMouseMove={onMove}
            >
              <span className="work__cursor mono" aria-hidden="true">
                Ver sitio ↗
              </span>
              <header className="work__top">
                <span className="mono">{p.n}</span>
                <h3 className="work__title">{p.title}</h3>
                <span className="mono work__year">{p.year}</span>
              </header>

              <div className="work__shot" data-track="through">
                <img src={`${process.env.PUBLIC_URL}/${p.image}`} alt={`Captura de ${p.title}`} loading="lazy" />
              </div>

              <footer className="work__bottom">
                <p className="work__text">{p.text}</p>
                <div className="work__meta">
                  <span className="mono work__kind">{p.kind}</span>
                  <span className="mono work__tags">{p.tags.join(' · ')}</span>
                  <span className="work__go">
                    {p.domain}
                    <i aria-hidden="true">↗</i>
                  </span>
                </div>
              </footer>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
