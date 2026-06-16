/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Layout, Cpu, Terminal, Sparkles, Code2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

export default function Skills() {
  // Lucide helper map for categories
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-brand-accent" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-brand-cyan" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-brand-accent" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-brand-accent" />;
    }
  };

  return (
    <section id="habilidades" className="py-24 bg-brand-dark/95 border-t border-brand-border/40 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-2">04 / Tecnologias</p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            Ferramentas & Habilidades
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
            Stack tecnológica em constante refinamento para prover a maior integridade operacional em ecossistemas web.
          </p>
        </div>

        {/* Dynamic Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.name}
              className="p-6 rounded-xl bg-brand-card/75 border border-brand-border hover:border-brand-accent/25 transition-all duration-300"
            >
              
              {/* Category Title Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-border/40">
                <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-border">
                  {getIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-base">
                    {category.name}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Performance Ativa
                  </span>
                </div>
              </div>

              {/* Skills Progress list */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between text-xs sm:text-sm mb-1.5 font-light">
                      <span className="text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
                      <span className="font-mono text-slate-400 group-hover:text-brand-accent transition-colors">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress track */}
                    <div className="w-full h-1.5 bg-brand-dark border border-brand-border/65 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand-accent to-brand-cyan rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Quick Highlights block */}
        <div className="mt-12 p-6 rounded-xl bg-brand-card/30 border border-brand-border/70 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-sm font-display font-medium text-white">Prefere um código pronto para produção?</h4>
            <p className="text-xs text-slate-400 font-light max-w-xl">
              Nossos layouts seguem alto rigor de performance técnica, com semântica SEO, tipagem estrita via TypeScript e otimizações automáticas para carregamento rápido.
            </p>
          </div>
          <a
            href="#contato"
            className="py-2.5 px-5 bg-brand-card-light hover:bg-brand-accent hover:text-white border border-brand-border text-slate-300 text-xs font-medium rounded-md transition-all font-mono self-start md:self-auto shrink-0"
          >
            Ver Detalhes do Projeto
          </a>
        </div>

      </div>
    </section>
  );
}
