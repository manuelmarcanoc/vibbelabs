import React from 'react';
import './Stack.css';

const groups = [
  {
    id: 'front',
    label: 'PRODUCTO & FRONT',
    items: ['React', 'TypeScript', 'Flutter'],
  },
  {
    id: 'data',
    label: 'DATOS & BACKEND',
    items: ['Python', 'Node.js', 'PostgreSQL', 'Looker'],
  },
  {
    id: 'infra',
    label: 'INFRA & AUTOMATIZACIÓN',
    items: ['Google Cloud', 'Firebase', 'n8n'],
  },
];

const Stack = () => {
  return (
    <section className="stack" id="stack" aria-label="Stack y capacidades">
      <div className="section-wrap">
        <div className="stack__head">
          <p className="mono-label" data-reveal="fade">
            STACK
          </p>
          <p className="stack__intro" data-reveal style={{ '--d': '0.06s' }}>
            Las herramientas con las que trabajamos a diario. No es una lista para impresionar: es
            lo que de verdad usamos para llevar cosas a producción.
          </p>
        </div>

        <div className="stack__grid">
          {groups.map((group, gi) => (
            <div
              key={group.id}
              className="stack__group"
              data-reveal
              style={{ '--d': `${gi * 0.08}s` }}
            >
              <p className="stack__group-label mono-label">{group.label}</p>
              <ul className="stack__list">
                {group.items.map((item) => (
                  <li key={item} className="stack__item">
                    <span className="stack__item-name">{item}</span>
                    <span className="stack__item-line" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
