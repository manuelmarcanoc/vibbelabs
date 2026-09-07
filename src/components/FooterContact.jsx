import React, { useState } from 'react';
import Kinetic from './Kinetic';
import './FooterContact.css';

// TODO(Manuel): sustituye YOUR_FORM_ID por el ID real de tu formulario en
// https://formspree.io/forms — mientras no exista, el formulario cae a un
// mailto: para que nunca se quede "muerto" para quien lo rellene.
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
const CONTACT_EMAIL = 'manuelmarcanocubillas@gmail.com';
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
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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
    <footer className="footer u-dark" id="contacto">
      <div className="footer__top section-wrap">
        <div className="footer__intro">
          <p className="mono-label" data-reveal="fade">
            CONTACTO
          </p>
          <h2 className="footer__title display-title" data-reveal="kinetic">
            <Kinetic text="Cuéntanos qué" />
            <Kinetic text="necesitas." delay={0.16} accentFrom={0} />
          </h2>
          <p className="footer__sub body-text" data-reveal style={{ '--d': '0.08s' }}>
            Escríbenos con lo que tengas en mente, aunque sea media idea. Contestamos en uno o dos
            días.
          </p>

          <a className="footer__mail link-draw" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="footer__form-wrap" data-reveal="right">
          {status === 'success' ? (
            <p className="footer__thanks">
              ¡Gracias! Hemos recibido tu mensaje. Te respondemos muy pronto.
            </p>
          ) : (
            <form className="footer__form" onSubmit={handleSubmit}>
              <div className="footer__field">
                <input
                  id="f-name"
                  className="footer__input"
                  type="text"
                  name="name"
                  placeholder=" "
                  autoComplete="name"
                  required
                />
                <label className="footer__label" htmlFor="f-name">
                  Tu nombre
                </label>
              </div>

              <div className="footer__field">
                <input
                  id="f-email"
                  className="footer__input"
                  type="email"
                  name="email"
                  placeholder=" "
                  autoComplete="email"
                  required
                />
                <label className="footer__label" htmlFor="f-email">
                  Tu email
                </label>
              </div>

              <div className="footer__field">
                <textarea
                  id="f-msg"
                  className="footer__input footer__textarea"
                  name="message"
                  placeholder=" "
                  rows="4"
                  required
                />
                <label className="footer__label" htmlFor="f-msg">
                  ¿Qué proyecto tienes en mente?
                </label>
              </div>

              {/* Honeypot anti-spam: invisible para humanos */}
              <input
                type="text"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
                className="footer__honey"
                aria-hidden="true"
              />

              <button className="btn footer__submit" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
                <span className="btn__arrow" aria-hidden="true">
                  →
                </span>
              </button>

              {status === 'error' && (
                <p className="footer__error">No se pudo enviar. Inténtalo de nuevo en un momento.</p>
              )}
            </form>
          )}
        </div>
      </div>

      <div className="footer__bottom section-wrap">
        <p className="mono-label">© 2026 VIBBE LABS</p>
        <p className="mono-label">BARCELONA — ESPAÑA</p>
        <a className="mono-label footer__up" href="#inicio">
          VOLVER ARRIBA ↑
        </a>
      </div>
    </footer>
  );
};

export default FooterContact;
