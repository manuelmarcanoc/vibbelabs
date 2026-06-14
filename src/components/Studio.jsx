import React from 'react';
import './Studio.css';

const Studio = () => {
  return (
    <section className="studio" id="estudio">
      <div
        className="studio__bg"
        aria-hidden="true"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/estudio.png)` }}
      />
      <div className="section-wrap">
        <p className="label-caps studio__label">EL ESTUDIO</p>

        <div className="studio__bio" data-reveal="zoom">
          <p className="studio__bio-text">
            Vibbe Labs es un estudio de desarrollo independiente que nace de combinar la ingeniería
            de software con la excelencia operativa. Llevamos productos desde la idea hasta
            producción — React, Firebase, Python y pipelines que conectan el negocio con métricas
            reales. Trabajamos con startups y equipos que valoran la ejecución rápida y sin
            burocracia.
          </p>
        </div>

        <div className="studio__founder" data-reveal style={{ '--reveal-delay': '0.1s' }}>
          <div className="studio__shipped" aria-label="Productos en producción">
            <p className="studio__shipped-label">En producción</p>
            <ul className="studio__shipped-list">
              <li>
                <a href="https://horalavadora.es" target="_blank" rel="noopener noreferrer">
                  <span>horalavadora.es</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a href="https://istqbeasy.com" target="_blank" rel="noopener noreferrer">
                  <span>istqbeasy.com</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>
          <p className="studio__signature script-accent">
            Fundado por Manuel — Digital Craftsman
          </p>
        </div>
      </div>
    </section>
  );
};

export default Studio;
