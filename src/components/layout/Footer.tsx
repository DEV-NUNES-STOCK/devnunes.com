import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-zinc-500">
          © {currentYear} {PERSONAL_INFO.name}. Todos os direitos reservados.
        </div>

        <div className="flex gap-8 text-sm text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Início</a>
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#projetos" className="hover:text-white transition-colors">Projetos</a>
        </div>
      </div>
    </footer>
  );
}
