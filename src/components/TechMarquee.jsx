import React from 'react';
import './TechMarquee.css';

const TECH_TEXT =
  'FIREBASE PYTHON NODE.JS GCP N8N POSTGRES LOOKER FLUTTER REACT TYPESCRIPT ';

const TechMarquee = () => {
  const track = TECH_TEXT.repeat(6);

  return (
    <section className="tech-strip" aria-label="Tecnologías">
      <div className="tech-strip__track">
        <span className="tech-strip__text">{track}</span>
        <span className="tech-strip__text" aria-hidden="true">
          {track}
        </span>
      </div>
    </section>
  );
};

export default TechMarquee;
