import React from 'react';
import './App.css';
import useScrollReveal from './useScrollReveal';
import Interactions from './components/Interactions';
import NavBar from './components/NavBar';
import HeroCollage from './components/HeroCollage';
import TickerTape from './components/TickerTape';
import ProductGrid from './components/ProductGrid';
import Services from './components/Services';
import Studio from './components/Studio';
import TechMarquee from './components/TechMarquee';
import FooterContact from './components/FooterContact';

function App() {
  useScrollReveal();

  return (
    <div className="app-container">
      <Interactions />
      <NavBar />
      <section className="surface surface--white" aria-label="Inicio y proyectos">
        <HeroCollage />
        <TickerTape />
        <ProductGrid />
      </section>

      <Services />
      <Studio />
      <TechMarquee />
      <FooterContact />
    </div>
  );
}

export default App;
