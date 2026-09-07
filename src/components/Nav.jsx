import React, { useEffect, useRef, useState } from 'react';
import Wordmark from './Wordmark';
import './Nav.css';

const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#estudio', label: 'Estudio' },
];

const Nav = () => {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState('');
  const last = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > 240 && y > last.current);
      last.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Europe/Madrid',
        }).format(new Date())
      );
    };
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${solid ? 'nav--solid' : ''} ${hidden ? 'nav--hide' : ''}`}>
        <div className="nav__in">
          <a href="#inicio" className="nav__brand" aria-label="Vibbe Labs — inicio">
            <Wordmark />
          </a>

          <nav className="nav__links" aria-label="Principal">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav__link ln">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav__right">
            <span className="nav__time mono">MAD {time}</span>
            <a href="#contacto" className="btn nav__cta">
              Hablemos
            </a>
            <button
              type="button"
              className={`nav__burger ${open ? 'is-open' : ''}`}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <i />
              <i />
            </button>
          </div>
        </div>
      </header>

      <div className={`sheet ${open ? 'sheet--open' : ''}`}>
        <div className="sheet__list">
          {links.concat({ href: '#contacto', label: 'Contacto' }).map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="sheet__link"
              style={{ '--d': `${0.08 + i * 0.06}s` }}
              onClick={() => setOpen(false)}
            >
              <span className="mono">{String(i + 1).padStart(2, '0')}</span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
