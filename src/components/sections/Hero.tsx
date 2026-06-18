import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolio';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-balance">
            {PERSONAL_INFO.tagline}
          </h1>
          <p className="text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
            {PERSONAL_INFO.subTagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contato"
              className="w-full sm:w-auto bg-primary text-background px-8 py-4 rounded-full font-semibold hover:bg-primary-hover transition-all flex items-center justify-center gap-2"
            >
              Solicitar orçamento
              <ArrowRight size={18} />
            </a>
            <a
              href="#projetos"
              className="w-full sm:w-auto border border-border px-8 py-4 rounded-full font-medium hover:bg-foreground/5 transition-all"
            >
              Ver projetos
            </a>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-border pt-12">
            {PERSONAL_INFO.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-sm text-muted uppercase tracking-widest font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
