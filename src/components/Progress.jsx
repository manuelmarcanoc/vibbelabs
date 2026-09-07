import React, { useEffect, useRef } from 'react';
import './Progress.css';

// Línea de progreso de lectura, arriba del todo.
const Progress = () => {
  const ref = useRef(null);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const ratio = max > 0 ? el.scrollTop / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${ratio.toFixed(4)})`;
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className="prog" aria-hidden="true" />;
};

export default Progress;
