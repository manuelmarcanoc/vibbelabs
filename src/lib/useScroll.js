import { useEffect } from 'react';
import createSmoothScroll from './smoothScroll';

// Un único bucle rAF para toda la página:
//  · arranca el scroll suave
//  · escribe en cada elemento [data-track] una variable --p de 0 a 1 con su
//    progreso por el viewport, para que el CSS haga el resto
//  · revela los [data-reveal] cuando entran
export default function useScroll() {
  useEffect(() => {
    const destroySmooth = createSmoothScroll();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // —— Revelado al entrar ——
    const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
    let observer = null;

    if (reduce) {
      revealEls.forEach((el) => el.classList.add('is-in'));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );
      revealEls.forEach((el) => observer.observe(el));
    }

    // —— Progreso continuo ——
    const tracked = Array.from(document.querySelectorAll('[data-track]'));
    let frame = null;

    const update = () => {
      frame = null;
      const vh = window.innerHeight || 1;

      tracked.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const mode = el.getAttribute('data-track');
        let p;

        if (mode === 'through') {
          // 0 cuando el elemento entra por abajo, 1 cuando sale por arriba
          p = (vh - rect.top) / (vh + rect.height);
        } else if (mode === 'self') {
          // 0 al llegar arriba del todo, 1 cuando termina de pasar
          p = -rect.top / Math.max(1, rect.height - vh);
        } else {
          // 'center': -1 arriba del centro, 0 en el centro, 1 debajo
          p = (rect.top + rect.height / 2 - vh / 2) / vh;
        }

        el.style.setProperty('--p', Math.max(-1, Math.min(1.2, p)).toFixed(4));
      });
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    if (!reduce) {
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
    }
    update();

    // —— Anclas con el mismo scroll suave ——
    const onClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href').slice(1);
      const dest = document.getElementById(id);
      if (!dest) return;
      event.preventDefault();
      const y = dest.getBoundingClientRect().top + window.scrollY - 8;
      if (window.__vibbeScrollTo) window.__vibbeScrollTo(y);
      else window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    };

    document.addEventListener('click', onClick);

    return () => {
      destroySmooth();
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.removeEventListener('click', onClick);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);
}
