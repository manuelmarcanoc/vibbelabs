import React from 'react';
import './App.css';
import useScrollReveal from './useScrollReveal';
import Interactions from './components/Interactions';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Cases from './components/Cases';
import Services from './components/Services';
import Process from './components/Process';
import Studio from './components/Studio';
import Stack from './components/Stack';
import FooterContact from './components/FooterContact';

function App() {
  useScrollReveal();

  return (
    <div className="app-container">
      <Interactions />
      <NavBar />
      <main>
        <Hero />
        <Cases />
        <Services />
        <Process />
        <Studio />
        <Stack />
      </main>
      <FooterContact />
    </div>
  );
}

export default App;
