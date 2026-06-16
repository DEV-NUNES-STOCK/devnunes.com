/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark selection:bg-brand-accent selection:text-white">
      {/* Sticky header glass node with scroll line indicator */}
      <Header onOpenResume={handleOpenResume} />

      {/* Main visual sections stream */}
      <main className="flex-1">
        {/* Hero page section with actions & SVG vectors */}
        <Hero onOpenResume={handleOpenResume} />

        {/* About section with digital services & metric credentials */}
        <About />

        {/* Experience career timeline */}
        <Experience />

        {/* Projects showcase with active filters & Real GitHub API widget representation */}
        <Projects />

        {/* Technical skills meter matrix cards */}
        <Skills />

        {/* Legible blog content with interactive filters, likes and mock comments builder */}
        <Blog />

        {/* Contact submission center with direct copy widgets */}
        <Contact />
      </main>

      {/* Corporate footer block with copyright & anchors */}
      <Footer />

      {/* Printer-friendly overlay Curriculum Modal Dialog block */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}

