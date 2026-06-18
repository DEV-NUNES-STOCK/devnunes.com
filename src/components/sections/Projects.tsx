import React from 'react';
import { PROJECTS } from '../../data/portfolio';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projetos" className="py-32 border-t border-border bg-background-alt/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight text-primary">Projetos selecionados</h2>
            <p className="text-muted max-w-md">
              Uma amostra de soluções desenvolvidas para resolver problemas específicos de gestão e organização.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col p-8 rounded-3xl bg-background-alt border border-border hover:border-primary/50 transition-all overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-auto pt-6 border-t border-border">
                <p className="text-sm font-medium text-foreground">
                  <span className="text-muted font-normal">Resultado: </span>
                  {project.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
