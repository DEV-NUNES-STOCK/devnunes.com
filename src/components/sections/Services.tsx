import React from 'react';
import { SERVICES } from '../../data/portfolio';

export default function Services() {
  return (
    <section id="servicos" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 tracking-tight">Serviços</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
