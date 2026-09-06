import React from 'react';
import './App.css';
import useScrollReveal from './useScrollReveal';
import Interactions from './components/Interactions';
import NavBar from './components/NavBar';
import HeroCollage from './components/HeroCollage';
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
      <HeroCollage />
      <ProductGrid />
      <Services />
      <Studio />
      <TechMarquee />
      <FooterContact />
    </div>
  );
}

export default App;
