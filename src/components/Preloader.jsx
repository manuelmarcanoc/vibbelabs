import React, { useEffect, useState } from 'react';
import Wordmark from './Wordmark';
import './Preloader.css';

// Cortina de entrada: cuenta de 0 a 100 y se retira hacia arriba.
const Preloader = ({ onDone }) => {
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(100);
      setLeaving(true);
      onDone();
      return undefined;
    }

    const start = performance.now();
    const duration = 1400;
    let frame = null;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      // desaceleración
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) {
        frame = window.requestAnimationFrame(tick);
      } else {
        setLeaving(true);
        window.setTimeout(onDone, 700);
      }
    };

    frame = window.requestAnimationFrame(tick);
    document.body.style.overflow = 'hidden';

    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      document.body.style.overflow = '';
    };
  }, [onDone]);

  return (
    <div className={`pre ${leaving ? 'pre--out' : ''}`} aria-hidden="true">
      <div className="pre__inner">
        <Wordmark className="pre__mark" />
        <div className="pre__bar">
          <span className="pre__fill" style={{ transform: `scaleX(${count / 100})` }} />
        </div>
        <p className="pre__num mono">{String(count).padStart(3, '0')}</p>
      </div>
    </div>
  );
};

export default Preloader;
