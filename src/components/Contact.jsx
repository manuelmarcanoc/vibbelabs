import React, { useState } from 'react';
import Lines from './Lines';
import './Contact.css';

// TODO(Manuel): sustituye YOUR_FORM_ID por el ID real de tu formulario en
// https://formspree.io/forms — mientras no exista, el formulario cae a un
// mailto: para que nunca se quede muerto.
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
const EMAIL = 'manuelmarcanocubillas@gmail.com';
const configured = !FORM_ENDPOINT.includes('YOUR_FORM_ID');

const fields = [
  { name: 'name', label: 'Nombre', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
];

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    if (!configured) {
      const subject = encodeURIComponent(`Proyecto — ${data.get('name') || 'contacto web'}`);
      const body = encodeURIComponent(
        `${data.get('message') || ''}\n\n— ${data.get('name') || ''} (${data.get('email') || ''})`
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setStatus('ok');
      form.reset();
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'ok' : 'error');
      if (res.ok) form.reset();
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <footer className="ct dark" id="contacto">
      <div className="ct__in wrap">
        <div className="ct__left">
          <p className="mono" data-reveal="fade">
            Contacto
          </p>
          <h2 className="d2 ct__title" data-reveal="lines">
            <Lines>{['Cuéntanos qué', <>quieres construir.</>]}</Lines>
          </h2>
          <p className="lead ct__sub" data-reveal style={{ '--d': '0.1s' }}>
            Respondemos en 24-48h. Si prefieres el correo de toda la vida:
          </p>
          <a className="ct__mail ln" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>

        <div className="ct__right" data-reveal style={{ '--d': '0.12s' }}>
          {status === 'ok' ? (
            <p className="ct__ok">Recibido. Te respondemos muy pronto.</p>
          ) : (
            <form className="ct__form" onSubmit={onSubmit}>
              {fields.map((f) => (
                <label className="ct__field" key={f.name}>
                  <span className="mono">{f.label}</span>
                  <input type={f.type} name={f.name} autoComplete={f.autoComplete} required />
                </label>
              ))}

              <label className="ct__field">
                <span className="mono">Proyecto</span>
                <textarea name="message" rows="4" required />
              </label>

              <input
                type="text"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
                className="ct__honey"
                aria-hidden="true"
              />

              <button className="btn btn--invert ct__send" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : 'Enviar'} <span aria-hidden="true">→</span>
              </button>

              {status === 'error' && <p className="ct__err">No se pudo enviar. Prueba otra vez.</p>}
            </form>
          )}
        </div>
      </div>

      <div className="ct__bar wrap">
        <span className="mono">© 2026 Vibbe Labs</span>
        <span className="mono">España</span>
        <a className="mono ct__up" href="#inicio">
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
};

export default Contact;
