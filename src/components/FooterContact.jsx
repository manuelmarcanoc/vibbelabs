import React, { useState } from 'react';
import './FooterContact.css';

// TODO(Manuel): sustituye YOUR_FORM_ID por el ID real de tu formulario en
// https://formspree.io/forms — en cuanto exista, el formulario envía por
// Formspree. Hasta entonces, cae automáticamente a un mailto: para que el
// formulario nunca se quede "muerto" para quien lo rellene.
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
const FALLBACK_EMAIL = 'manuelmarcanocubillas@gmail.com';
const isFormConfigured = !FORM_ENDPOINT.includes('YOUR_FORM_ID');

const FooterContact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    if (!isFormConfigured) {
      const subject = encodeURIComponent(`Proyecto — ${data.get('name') || 'contacto web'}`);
      const body = encodeURIComponent(
        `${data.get('message') || ''}\n\n— ${data.get('name') || ''} (${data.get('email') || ''})`
      );
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
      setStatus('success');
      form.reset();
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <footer className="footer" id="contacto">
      <p className="mono-label footer__eyebrow">HABLEMOS</p>
      <p className="footer__tagline display-title" data-reveal>
        Cuéntanos qué quieres construir
      </p>
      <p className="footer__sub" data-reveal>
        Te respondemos en 24-48h.
      </p>

      {status === 'success' ? (
        <p className="footer__thanks" data-reveal>
          ¡Gracias! Hemos recibido tu mensaje. Te respondemos muy pronto.
        </p>
      ) : (
        <form className="footer__form" onSubmit={handleSubmit} data-reveal>
          <div className="footer__row">
            <input
              className="footer__input"
              type="text"
              name="name"
              placeholder="Tu nombre"
              autoComplete="name"
              required
            />
            <input
              className="footer__input"
              type="email"
              name="email"
              placeholder="Tu email"
              autoComplete="email"
              required
            />
          </div>
          <textarea
            className="footer__input footer__textarea"
            name="message"
            placeholder="¿Qué proyecto tienes en mente?"
            rows="4"
            required
          />
          {/* Honeypot anti-spam: invisible para humanos */}
          <input
            type="text"
            name="_gotcha"
            tabIndex="-1"
            autoComplete="off"
            className="footer__honey"
            aria-hidden="true"
          />
          <button
            className="btn-pill footer__submit"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
          </button>
          {status === 'error' && (
            <p className="footer__error">
              No se pudo enviar. Inténtalo de nuevo en un momento.
            </p>
          )}
        </form>
      )}

      <p className="footer__location">Barcelona</p>

      <p className="footer__copy">© 2026 Vibbe Labs</p>

      <a
        href="https://buymeacoffee.com/manuelmc"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__coffee"
      >
        Buy me a coffee
      </a>
    </footer>
  );
};

export default FooterContact;
