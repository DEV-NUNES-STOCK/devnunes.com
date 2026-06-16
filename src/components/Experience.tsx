/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data';

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-brand-dark/95 border-t border-brand-border/40 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-2">02 / Carreira</p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            Trajetória Profissional
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
            Sólida bagagem técnica atuando com projetos de escala e arquiteturas modernas de software.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-brand-border/70 ml-4 md:ml-32 pl-6 sm:pl-8 space-y-12">
          
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              {/* Year/Time side column for wider viewports */}
              <div className="hidden md:block absolute right-full mr-12 top-1 text-right w-28">
                <span className="text-xs font-mono text-slate-400 block mb-1">
                  {exp.period}
                </span>
                <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wide">
                  {exp.current ? 'Atual' : 'Concluído'}
                </span>
              </div>

              {/* Node bullet marker */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-brand-dark transition-all duration-300 group-hover:scale-125 ${
                  exp.current
                    ? 'border-brand-accent shadow-[0_0_8px_var(--color-brand-accent)]'
                    : 'border-brand-border group-hover:border-slate-400'
                }`}
              />

              {/* Box container */}
              <div className="p-6 rounded-xl bg-brand-card/70 border border-brand-border hover:border-brand-accent/30 hover:bg-brand-card/95 transition-all duration-200">
                
                {/* Header detail */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-display font-semibold text-white group-hover:text-brand-accent transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-slate-300 mt-1 flex items-center gap-1.5 flex-wrap">
                      <span>{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400 text-xs flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Fallback period badge on small viewports */}
                  <div className="block md:hidden flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-cyan bg-brand-card-light/40 px-2 py-0.5 rounded border border-brand-border/40">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Sub-descriptions */}
                <ul className="space-y-2 mb-5 text-sm font-light text-slate-300">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.skillsUsed.map((sk) => (
                    <span
                      key={sk}
                      className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-brand-dark border border-brand-border hover:border-brand-accent/20 text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      {sk}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
