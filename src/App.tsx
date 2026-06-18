import React, { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import ProcessWork from './components/sections/ProcessWork';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-background">
      <Header />

      <main className="flex-1">
        <Hero />
        <TechStack />
        <Services />
        <About />
        <Projects />
        <ProcessWork />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
