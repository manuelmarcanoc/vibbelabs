import React, { useEffect, useRef } from 'react';
import './FlyingVial.css';

// Lanza el tubo de ensayo (vol.png) volando por la pantalla cada bastante rato,
// alternando dirección y altura. Se desactiva si el usuario prefiere menos movimiento.
const FlyingVial = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const el = ref.current;
    if (!el) return undefined;
    let timer;
    let flying = false;

    const fly = () => {
      if (flying) return;
      flying = true;
      const top = 8 + Math.random() * 62; // banda vertical (vh)
      const leftToRight = Math.random() > 0.5;
      el.style.top = `${top}vh`;
      el.classList.remove('flying-vial--ltr', 'flying-vial--rtl');
      // fuerza reflow para reiniciar la animación
      void el.offsetWidth;
      el.classList.add(leftToRight ? 'flying-vial--ltr' : 'flying-vial--rtl');
    };

    const schedule = () => {
      const delay = 35000 + Math.random() * 45000; // entre 35 y 80 s
      timer = setTimeout(fly, delay);
    };

    const onEnd = () => {
      flying = false;
      el.classList.remove('flying-vial--ltr', 'flying-vial--rtl');
      schedule();
    };

    el.addEventListener('animationend', onEnd);
    timer = setTimeout(fly, 14000); // primera aparición a los 14 s

    return () => {
      clearTimeout(timer);
      el.removeEventListener('animationend', onEnd);
    };
  }, []);

  return (
    <img
      ref={ref}
      className="flying-vial"
      src={`${process.env.PUBLIC_URL}/vol.png`}
      alt=""
      aria-hidden="true"
    />
  );
};

export default FlyingVial;
