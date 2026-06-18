import React from 'react';
import { WORK_PROCESS } from '../../data/portfolio';

export default function ProcessWork() {
  return (
    <section className="py-32 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 tracking-tight text-center text-primary">Como eu trabalho</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {WORK_PROCESS.map((step) => (
            <div key={step.step} className="relative group">
              <div className="text-4xl font-bold text-border group-hover:text-primary/30 transition-colors mb-6 font-mono">
                0{step.step}
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>

              {step.step < 5 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-[1px] bg-border/30 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
