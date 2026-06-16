/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Award, Users, Hourglass, Star } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const stats = [
    { label: 'Anos de Experiência', value: '5+', icon: Hourglass },
    { label: 'Projetos Entregues', value: '45+', icon: Award },
    { label: 'Clientes Satisfeitos', value: '100%', icon: Users },
    { label: 'Média de Velocidade', value: '0.8s', icon: Star },
  ];

  return (
    <section id="sobre" className="py-24 bg-brand-dark border-t border-brand-border/40 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <p className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-2">01 / Sobre Mim</p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            Arquitetando Interfaces que Conectam <br />
            <span className="text-slate-400">Pessoas e Soluções.</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Bio info text (Left 7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-display font-medium text-white">
              Quem está por trás da devnunes?
            </h3>
            <p className="text-slate-300 leading-relaxed font-light text-base">
              Olá! Sou o <strong>Victor Nunes</strong>, criador da devnunes. Trabalho com o desenvolvimento profissional de software, especializado na modelagem de produtos e websites que priorizam altíssima velocidade de renderização, legibilidade de conteúdo e robustez estrutural das APIs.
            </p>
            <p className="text-slate-400 leading-relaxed font-light text-sm">
              Inspirado pela mecânica avançada de redes neurais e processamento cerebral coerente, busco otimizar cada linha de código para que o usuário final receba um site super ágil e confortável de se navegar, que converta objetivos de negócios em ações tangíveis.
            </p>

            {/* List of services */}
            <div className="pt-6 border-t border-brand-border/30">
              <h4 className="text-sm font-mono tracking-wider text-slate-300 uppercase mb-4">Serviços Oferecidos</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PERSONAL_INFO.services.map((service, index) => (
                  <div key={index} className="p-4 rounded-lg bg-brand-card/50 border border-brand-border hover:border-brand-accent/30 hover:bg-brand-card/85 transition-all">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-display font-medium text-slate-200 text-sm">{service.title}</h5>
                        <p className="text-slate-400 text-xs mt-1.5 leading-relaxed font-light">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics & stats column (Right 5 Columns) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl bg-brand-card border border-brand-border/80 flex flex-col justify-between group hover:border-brand-accent/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-brand-dark border border-brand-border group-hover:border-brand-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-brand-accent" />
                    </div>
                    <span className="text-xs text-emerald-400 font-mono">OK</span>
                  </div>
                  <div>
                    <span className="block text-3xl sm:text-4xl font-display font-bold text-white mb-1 group-hover:text-brand-accent transition-colors">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-400 font-light leading-snug">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* A decorative bento card */}
            <div className="col-span-2 p-6 rounded-xl bg-gradient-to-br from-brand-card to-brand-dark border border-brand-border flex items-center justify-between group">
              <div className="space-y-1">
                <span className="text-xs font-mono text-brand-cyan">Performance Padrão</span>
                <p className="text-sm font-display text-white">Carregamento Core Web Vitals</p>
                <p className="text-xs text-slate-400 font-light">Lighthouse score médio de 98% a 100%.</p>
              </div>
              <div className="relative w-12 h-12 flex items-center justify-center bg-brand-card-light rounded-full border border-brand-border">
                <span className="text-lg font-display font-bold text-emerald-400">100</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
