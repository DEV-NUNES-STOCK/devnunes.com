/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail, ArrowUpRight, Github, Linkedin, Briefcase, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-dark"
    >
      {/* Visual background neural networks inspired by the logo */}
      <div id="neural-bg-pattern" className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="blueGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#070b12" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueGlow)" />
          
          {/* Conceptual neural nodes connections */}
          <g stroke="#1e2d42" strokeWidth="0.8" fill="none">
            <path d="M 100 200 L 300 250 L 250 450 L 400 350 L 550 500 M 300 250 L 400 350" />
            <path d="M 800 150 L 950 300 L 850 500 L 1100 450 M 950 300 L 1100 450" />
            <path d="M 150 650 L 350 700 L 500 600 L 600 750" />
          </g>

          {/* Glowing Animated Nodes */}
          <g fill="#3b82f6" opacity="0.6">
            <circle cx="300" cy="250" r="3.5">
              <animate attributeName="r" values="3.5;5;3.5" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="400" cy="350" r="2.5" />
            <circle cx="250" cy="450" r="3" />
            <circle cx="950" cy="300" r="4">
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="850" cy="500" r="2" />
            <circle cx="500" cy="600" r="3" />
          </g>
        </svg>
      </div>

      {/* Hero content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-border/80 text-xs font-mono text-slate-300 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Disponível para novos projetos
        </motion.div>

        {/* Catchy head title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs uppercase font-mono tracking-[0.25em] text-brand-accent mb-4"
        >
          {PERSONAL_INFO.title}
        </motion.p>

        {/* Main large display name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-none mb-6"
        >
          A Inteligência por trás de <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-brand-accent">
            Soluções Tecnológicas Web.
          </span>
        </motion.h1>

        {/* Brief professional bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed font-light mb-10"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* Action Call-to-Actions (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mb-12"
        >
          <a
            href="#contato"
            className="w-full sm:w-auto px-7 py-3.5 bg-brand-accent text-white hover:bg-brand-accent/90 rounded-md font-medium text-sm flex items-center justify-center gap-2 group shadow-xl shadow-brand-accent/10 hover:shadow-brand-accent/20 transition-all cursor-pointer"
          >
            Fazer Orçamento
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="w-full sm:w-auto px-7 py-3.5 glass-panel border border-brand-border text-slate-200 hover:text-white hover:border-brand-accent rounded-md font-medium text-sm flex items-center justify-center gap-2 transition-all"
          >
            Baixar Currículo
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Social Badges and Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-6 text-slate-400"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            title="Ver perfil no GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            title="Conectar no LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-white transition-colors"
            title="Enviar e-mail para devnunes"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

      </div>

      {/* Floating Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 print:hidden">
        <a href="#sobre" className="text-slate-400 hover:text-white transition-colors block">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
