import React from 'react';
import { WORK_PROCESS } from '../../data/portfolio';

export default function ProcessWork() {
  return (
    <section className="py-32 border-t border-white/5 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 tracking-tight text-center">Como eu trabalho</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {WORK_PROCESS.map((step) => (
            <div key={step.step} className="relative">
              <div className="text-4xl font-bold text-zinc-800 mb-6 font-mono">
                0{step.step}
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {step.description}
              </p>

              {step.step < 5 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-[1px] bg-white/5 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
