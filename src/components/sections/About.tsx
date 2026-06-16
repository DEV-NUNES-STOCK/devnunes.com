import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolio';

export default function About() {
  return (
    <section id="sobre" className="py-32 border-t border-white/5 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8 tracking-tight">Sobre</h2>
            <p className="text-xl text-zinc-300 leading-relaxed mb-6">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-zinc-500 leading-relaxed">
              Atualmente na Recife Tecnologia, foco no desenvolvimento de sistemas que combinam performance técnica com interfaces intuitivas. Acredito que o papel do desenvolvedor vai além do código; é sobre entender o negócio e entregar valor real para o usuário final.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5">
              <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Experiência Recente</h4>
              <h3 className="text-xl font-semibold mb-1">Desenvolvedor Web</h3>
              <p className="text-zinc-400 mb-6">Recife Tecnologia • 2022 — Presente</p>
              <ul className="space-y-3">
                <li className="text-sm text-zinc-400 flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-zinc-700 mt-2 shrink-0" />
                  Desenvolvimento e manutenção de sistemas web.
                </li>
                <li className="text-sm text-zinc-400 flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-zinc-700 mt-2 shrink-0" />
                  Integração com APIs e bancos de dados SQL/NoSQL.
                </li>
                <li className="text-sm text-zinc-400 flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-zinc-700 mt-2 shrink-0" />
                  Foco em qualidade, usabilidade e manutenção contínua.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
