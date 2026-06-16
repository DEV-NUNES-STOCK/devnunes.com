/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-brand-dark border-t border-brand-border/40 py-12 relative overflow-hidden print:hidden">
      
      {/* Visual glowing grid overlay */}
      <div className="absolute inset-x-0 bottom-0 h-44 pointer-events-none opacity-40 bg-gradient-to-t from-brand-accent/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and brand name column */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded bg-brand-card border border-brand-border">
            <Cpu className="w-4.5 h-4.5 text-brand-accent" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm text-white tracking-widest leading-none">DEVNUNES</span>
            <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase leading-none mt-1">Soluções Web</span>
          </div>
        </div>

        {/* Small copyright terms */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-xs text-slate-400 font-mono tracking-wide">
            &copy; {new Date().getFullYear()} devnunes. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-slate-500 font-light">
            Feito de forma nativa e minimalista para servir à inteligência web avançada.
          </p>
        </div>

        {/* Right side controls (Links and Back to Top action button) */}
        <div className="flex items-center gap-6">
          
          {/* Social connections */}
          <div className="flex items-center gap-4 text-slate-500">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white transition-colors"
              title="E-mail"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Quick back to top scroll */}
          <button
            onClick={scrollUp}
            className="p-2.5 bg-brand-card hover:bg-brand-accent hover:text-white border border-brand-border hover:border-brand-accent/30 rounded-md text-slate-400 transition-all cursor-pointer"
            title="Voltar ao início da página"
            aria-label="Voltar para cima"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
