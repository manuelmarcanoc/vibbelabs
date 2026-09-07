// Scroll suave con inercia, al estilo Lenis, escrito a mano (sin dependencias).
// Intercepta la rueda y lleva el scroll real hacia un objetivo con interpolación
// exponencial. Deja el scroll nativo intacto en táctil y con reduced-motion.

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export default function createSmoothScroll({ lerp = 0.085, wheelMultiplier = 1 } = {}) {
  if (typeof window === 'undefined') return () => {};

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  if (reduce || coarse) {
    document.documentElement.classList.add('native-scroll');
    return () => document.documentElement.classList.remove('native-scroll');
  }

  const root = document.documentElement;
  let target = window.scrollY;
  let current = target;
  let frame = null;
  let programmatic = false;
  let velocity = 0;

  const maxScroll = () => root.scrollHeight - window.innerHeight;

  const write = (value) => {
    programmatic = true;
    window.scrollTo(0, value);
    root.style.setProperty('--scroll-velocity', velocity.toFixed(3));
    programmatic = false;
  };

  const tick = () => {
    const diff = target - current;

    if (Math.abs(diff) < 0.08) {
      current = target;
      velocity = 0;
      write(current);
      frame = null;
      root.classList.remove('is-scrolling');
      return;
    }

    current += diff * lerp;
    velocity = clamp(diff / 90, -1, 1);
    write(current);
    frame = window.requestAnimationFrame(tick);
  };

  const run = () => {
    if (frame === null) {
      root.classList.add('is-scrolling');
      frame = window.requestAnimationFrame(tick);
    }
  };

  const onWheel = (event) => {
    if (event.ctrlKey) return; // zoom del navegador
    event.preventDefault();
    target = clamp(target + event.deltaY * wheelMultiplier, 0, maxScroll());
    run();
  };

  // Si el scroll lo mueve otra cosa (barra, teclado, buscar en página), resincroniza.
  const onScroll = () => {
    if (programmatic) return;
    target = window.scrollY;
    current = window.scrollY;
  };

  const onResize = () => {
    target = clamp(target, 0, maxScroll());
  };

  window.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);

  // API para anclas y botones.
  window.__vibbeScrollTo = (y) => {
    target = clamp(y, 0, maxScroll());
    run();
  };

  return () => {
    window.removeEventListener('wheel', onWheel);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
    if (frame !== null) window.cancelAnimationFrame(frame);
    delete window.__vibbeScrollTo;
  };
}
