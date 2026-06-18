import React from 'react';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolio';

export default function Contact() {
  return (
    <section id="contato" className="py-32 border-t border-border bg-background-alt/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-foreground">
          Vamos conversar sobre o seu projeto
        </h2>
        <p className="text-xl text-muted mb-12 leading-relaxed">
          Possui um projeto em mente ou precisa melhorar um sistema existente? Entre em contato e vamos encontrar a melhor solução técnica.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-full font-semibold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
          >
            <Mail size={18} />
            Enviar e-mail
          </a>
          <a
            href={PERSONAL_INFO.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-foreground/5 transition-colors text-foreground"
          >
            <MessageSquare size={18} />
            WhatsApp
          </a>
        </div>

        <div className="flex justify-center gap-8 pt-12 border-t border-border text-muted">
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 font-medium">
            <Linkedin size={20} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 font-medium">
            <Github size={20} />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
