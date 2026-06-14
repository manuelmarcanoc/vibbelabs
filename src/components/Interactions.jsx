import React, { useEffect, useRef } from 'react';
import './Interactions.css';

// Barra de progreso de scroll + cursor personalizado (anillo que sigue al ratón).
const Interactions = () => {
  const barRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);

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

  // —— Cursor personalizado (solo con ratón, no en táctil) ——
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined;

    const ring = ringRef.current;
    const dot = dotRef.current;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const onOver = (e) => {
      const interactive = e.target.closest(
        'a, button, .btn-pill, input, textarea, [role="button"]'
      );
      if (ring) ring.classList.toggle('cursor-ring--active', Boolean(interactive));
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (ring) {
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    document.body.classList.add('has-custom-cursor');
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <>
      <div ref={barRef} className="scroll-progress" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
};

export default Interactions;
