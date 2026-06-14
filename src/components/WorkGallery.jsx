import React from 'react';
import './WorkGallery.css';

const shots = [
  { id: 1, label: 'Dashboard de métricas', ph: 'ph-gallery-1' },
  { id: 2, label: 'Pipeline ETL', ph: 'ph-gallery-2' },
  { id: 3, label: 'App React', ph: 'ph-gallery-3' },
  { id: 4, label: 'Automatización n8n', ph: 'ph-gallery-4' },
  { id: 5, label: 'Cloud & APIs', ph: 'ph-gallery-5' },
];

const WorkGallery = () => {
  return (
    <section className="gallery" aria-label="Trabajos recientes">
      <div className="gallery__header section-wrap">
        <span className="section-tab">TRABAJOS RECIENTES</span>
      </div>
      <div className="gallery__scroll">
        {shots.map((shot) => (
          <figure key={shot.id} className="gallery__card">
            <div className={`gallery__visual ph ${shot.ph}`} role="img" aria-label={shot.label} />
            <figcaption className="gallery__caption label-caps">{shot.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default WorkGallery;
