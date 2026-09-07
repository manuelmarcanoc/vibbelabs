import React, { useEffect, useRef } from 'react';
import './Cursor.css';

// Cursor propio: un cuadrado pequeño que va pegado al puntero y un marco que
// lo persigue con retardo. Se agranda sobre lo que se puede pulsar.
// Solo en escritorio con ratón: en táctil y con reduced-motion no se activa.
const Cursor = () => {
  const dotRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return undefined;

    const dot = dotRef.current;
    const box = boxRef.current;
    if (!dot || !box) return undefined;

    document.documentElement.classList.add('has-cursor');

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let bx = mx;
    let by = my;
    let frame = null;
    let visible = false;

    const onMove = (event) => {
      mx = event.clientX;
      my = event.clientY;
      if (!visible) {
        visible = true;
        bx = mx;
        by = my;
        document.documentElement.classList.add('cursor-on');
      }
    };

    const tick = () => {
      bx += (mx - bx) * 0.16;
      by += (my - by) * 0.16;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      box.style.transform = `translate3d(${bx}px, ${by}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(tick);
    };

    // Estados según lo que haya debajo del puntero
    const interactive = 'a, button, input, textarea, label, [data-cursor]';

    const onOver = (event) => {
      const target = event.target.closest(interactive);
      if (!target) return;
      document.documentElement.classList.add('cursor-hot');
      if (target.matches('input, textarea')) {
        document.documentElement.classList.add('cursor-text');
      }
    };

    const onOut = (event) => {
      const target = event.target.closest(interactive);
      if (!target) return;
      document.documentElement.classList.remove('cursor-hot', 'cursor-text');
    };

    const onLeave = () => {
      visible = false;
      document.documentElement.classList.remove('cursor-on');
    };

    const onDown = () => document.documentElement.classList.add('cursor-down');
    const onUp = () => document.documentElement.classList.remove('cursor-down');

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver);
    document.addEventListener('pointerout', onOut);
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('pointerup', onUp);
    document.addEventListener('pointerleave', onLeave);
    frame = window.requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove(
        'has-cursor',
        'cursor-on',
        'cursor-hot',
        'cursor-text',
        'cursor-down'
      );
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointerleave', onLeave);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <span ref={boxRef} className="cur cur__box" aria-hidden="true" />
      <span ref={dotRef} className="cur cur__dot" aria-hidden="true" />
    </>
  );
};

export default Cursor;
