import React, { useEffect, useRef } from 'react';
import './Interactions.css';

// Barra de progreso de scroll.
const Interactions = () => {
  const barRef = useRef(null);

  // —— Barra de progreso de scroll ——
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const ratio = max > 0 ? el.scrollTop / max : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${ratio})`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
};

export default Interactions;
