import React from 'react';
import { SERVICES } from '../../data/portfolio';

export default function Services() {
  return (
    <section id="servicos" className="py-32 border-t border-border bg-background-alt/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 tracking-tight text-primary">Serviços</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-background-alt border border-border hover:border-primary/50 transition-all group"
            >
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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
