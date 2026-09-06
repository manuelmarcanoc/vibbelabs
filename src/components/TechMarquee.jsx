import React from 'react';
import './TechMarquee.css';

const STACK = [
  'Firebase',
  'Python',
  'Node.js',
  'GCP',
  'n8n',
  'Postgres',
  'Looker',
  'Flutter',
  'React',
  'TypeScript',
];

const TechMarquee = () => {
  return (
    <section className="tech-strip section-wrap" aria-label="Tecnologías">
      <p className="mono-label tech-strip__label">STACK</p>
      <ul className="tech-strip__list">
        {STACK.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </section>
  );
};

export default TechMarquee;
