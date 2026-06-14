import React, { useEffect, useState } from 'react';
import './NavBar.css';

const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#estudio', label: 'Estudio' },
  { href: '#contacto', label: 'Contacto' },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#inicio" className="nav__brand" aria-label="Vibbe Labs — inicio">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Vibbe Labs" />
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`} aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-pill nav__cta" onClick={() => setOpen(false)}>
            Hablemos
          </a>
        </nav>

        <button
          type="button"
          className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
