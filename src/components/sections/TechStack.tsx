import React from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolio';

export default function TechStack() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-[0.2em] mb-12">Tecnologias que utilizo</h2>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
          {SKILL_CATEGORIES.flatMap(cat => cat.skills).map((skill) => (
            <span key={skill} className="text-xl md:text-2xl font-medium text-zinc-400 hover:text-white transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
