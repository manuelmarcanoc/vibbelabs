import React, { useEffect, useState } from 'react';
import Wordmark from './Wordmark';
import './NavBar.css';

const links = [
  { href: '#proyectos', label: 'Proyectos', id: 'proyectos' },
  { href: '#servicios', label: 'Servicios', id: 'servicios' },
  { href: '#estudio', label: 'Estudio', id: 'estudio' },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Marca en el menú la sección que se está viendo.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el) => el !== null);
    if (!sections.length) return undefined;

    const visible = new Set();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        const current = links.find((l) => visible.has(l.id));
        setActive(current ? current.id : '');
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => io.observe(section));
    return () => io.disconnect();
  }, []);

  // Bloquea el scroll del fondo con el menú móvil abierto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <a href="#inicio" className="nav__brand" aria-label="Vibbe Labs — inicio">
          <Wordmark className="nav__mark" />
        </a>

        <nav className="nav__links" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav__link ${active === l.id ? 'nav__link--active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="btn nav__cta">
          Hablemos
          <span className="btn__arrow" aria-hidden="true">
            →
          </span>
        </a>

        <button
          type="button"
          className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__sheet ${open ? 'nav__sheet--open' : ''}`}>
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            className="nav__sheet-link"
            style={{ '--d': `${0.06 + i * 0.05}s` }}
            onClick={() => setOpen(false)}
          >
            <span className="mono-label">{String(i + 1).padStart(2, '0')}</span>
            {l.label}
          </a>
        ))}
        <a
          href="#contacto"
          className="nav__sheet-link nav__sheet-link--cta"
          style={{ '--d': `${0.06 + links.length * 0.05}s` }}
          onClick={() => setOpen(false)}
        >
          <span className="mono-label">05</span>
          Hablemos
        </a>
      </div>
    </header>
  );
};

export default NavBar;
