/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header state
      setScrolled(window.scrollY > 20);

      // Math for line progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 print:hidden ${
        scrolled
          ? 'bg-brand-dark/80 backdrop-blur-md border-b border-brand-border/60 py-3 shadow-lg shadow-black/10'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Top scroll progress bar */}
      <div
        id="scroll-progress-indicator"
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-accent to-brand-cyan transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand logo modeled after user's logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-brand-card border border-brand-border group-hover:border-brand-accent/50 transition-colors">
            <Cpu className="w-5 h-5 text-brand-accent group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 rounded-lg bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <div className="font-display leading-none font-bold text-lg text-white tracking-wider">
              DEV<span className="text-brand-accent">NUNES</span>
            </div>
            <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase leading-none mt-1">
              Soluções Web
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 hover:text-white hover:translate-y-[-1px] transition-all duration-150 relative pb-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-accent group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white rounded-md transition-all duration-200"
          >
            Currículo.pdf
            <ArrowUpRight className="w-3 h-3" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-slate-300 hover:text-white focus:outline-none"
            aria-label="Abrir Menu de Navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-brand-border bg-brand-card/95 backdrop-blur-lg w-full overflow-hidden absolute top-full left-0 z-30"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-brand-card-light/40 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-brand-border/40 px-3">
                <button
                  onClick={() => {
                    handleLinkClick();
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white font-mono text-sm rounded-md transition-all"
                >
                  Visualizar Currículo
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
