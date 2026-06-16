import React from 'react';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolio';

export default function Contact() {
  return (
    <section id="contato" className="py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
          Vamos conversar sobre o seu projeto
        </h2>
        <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
          Possui um projeto em mente ou precisa melhorar um sistema existente? Entre em contato e vamos encontrar a melhor solução técnica.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors"
          >
            <Mail size={18} />
            Enviar e-mail
          </a>
          <a
            href={PERSONAL_INFO.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-white/10 px-6 py-3 rounded-full font-medium hover:bg-white/5 transition-colors"
          >
            <MessageSquare size={18} />
            WhatsApp
          </a>
        </div>

        <div className="flex justify-center gap-8 pt-12 border-t border-white/5 text-zinc-500">
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
            <Linkedin size={20} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
            <Github size={20} />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
