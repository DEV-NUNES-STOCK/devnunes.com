import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background-alt">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-muted">
          © {currentYear} {PERSONAL_INFO.name}. Todos os direitos reservados.
        </div>

        <div className="flex gap-8 text-sm text-muted">
          <a href="#" className="hover:text-primary transition-colors font-medium">Início</a>
          <a href="#servicos" className="hover:text-primary transition-colors font-medium">Serviços</a>
          <a href="#sobre" className="hover:text-primary transition-colors font-medium">Sobre</a>
          <a href="#projetos" className="hover:text-primary transition-colors font-medium">Projetos</a>
        </div>
      </div>
    </footer>
  );
}
