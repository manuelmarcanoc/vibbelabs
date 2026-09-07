import React, { useCallback, useState } from 'react';
import './App.css';
import useScroll from './lib/useScroll';
import Preloader from './components/Preloader';
import Progress from './components/Progress';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Work from './components/Work';
import Services from './components/Services';
import Studio from './components/Studio';
import Contact from './components/Contact';

function App() {
  const [ready, setReady] = useState(false);
  const onDone = useCallback(() => setReady(true), []);

  useScroll();

  return (
    <div className={`app ${ready ? 'app--ready' : ''}`}>
      <Preloader onDone={onDone} />
      <Progress />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Work />
        <Services />
        <Studio />
      </main>
      <Contact />
    </div>
  );
}

export default App;
