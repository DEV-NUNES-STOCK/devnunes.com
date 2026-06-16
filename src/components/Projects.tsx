/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Star, GitFork, Search, Filter, Loader2, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(PROJECTS);

  // GitHub widget state
  const [ghUsername, setGhUsername] = useState<string>('victoroliv2004'); // default user or placeholder
  const [ghRepos, setGhRepos] = useState<any[]>([]);
  const [loadingGh, setLoadingGh] = useState<boolean>(false);
  const [ghError, setGhError] = useState<string | null>(null);

  // Filter local portfolio projects
  useEffect(() => {
    if (activeCategory === 'todos') {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter((p) => p.category === activeCategory));
    }
  }, [activeCategory]);

  // Fetch GitHub repos dynamically
  const fetchGitHubRepos = async (username: string) => {
    if (!username.trim()) return;
    setLoadingGh(true);
    setGhError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Usuário do GitHub não encontrado.');
        } else if (response.status === 403) {
          throw new Error('Limite de requisições da API atingido. Tente mais tarde.');
        } else {
          throw new Error('Ocorreu um erro ao buscar repositórios.');
        }
      }
      const data = await response.json();
      const mappedRepos = data.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'Sem descrição cadastrada neste repositório.',
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language || 'Geral',
        updatedAt: new Date(repo.updated_at).toLocaleDateString('pt-BR'),
      }));
      setGhRepos(mappedRepos);
    } catch (err: any) {
      setGhError(err.message || 'Falha ao estabelecer conexão.');
    } finally {
      setLoadingGh(false);
    }
  };

  // Initial trigger
  useEffect(() => {
    fetchGitHubRepos(ghUsername);
  }, []);

  const handleFetchClick = (e: React.FormEvent) => {
    e.preventDefault();
    fetchGitHubRepos(ghUsername);
  };

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'design', label: 'Interface & Design' },
  ];

  return (
    <section id="projetos" className="py-24 bg-brand-dark border-t border-brand-border/40 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-2">03 / Portfólio</p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            Trabalhos Recentes
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-lg mx-auto">
            Soluções modeladas de forma personalizada para diferentes propósitos tecnológicos.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium rounded-full cursor-pointer transition-all duration-200 flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-brand-accent text-white shadow-md shadow-brand-accent/25'
                  : 'bg-brand-card hover:bg-brand-card-light/50 text-slate-300 border border-brand-border/80'
              }`}
            >
              {activeCategory === cat.id && <Filter className="w-3 h-3" />}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="flex flex-col bg-brand-card rounded-xl border border-brand-border/80 hover:border-brand-accent/40 hover:bg-brand-card-light/25 overflow-hidden group transition-all duration-300 shadow-xl shadow-black/10"
              >
                
                {/* Visual Header Grid Accent / Color Accent */}
                <div className="h-2 bg-gradient-to-r from-brand-accent to-brand-cyan" />
                
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags block */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map((t) => (
                        <span key={t} className="text-[10px] font-mono bg-brand-dark px-2 py-0.5 rounded text-brand-cyan uppercase">
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-display font-semibold text-white mb-2 group-hover:text-brand-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                      {project.description}
                    </p>

                    {project.detailedDescription && (
                      <p className="text-slate-400 text-xs leading-normal font-light mt-3 border-t border-brand-border/40 pt-3">
                        {project.detailedDescription}
                      </p>
                    )}
                  </div>

                  {/* Actions footer */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-brand-border/30">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      {project.metrics?.stars && (
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                          {project.metrics.stars}
                        </span>
                      )}
                      {project.metrics?.forks && (
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5" />
                          {project.metrics.forks}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-md bg-brand-dark/60 text-slate-400 hover:text-white border border-brand-border transition-colors cursor-pointer"
                        title="Código fonte no GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="p-2 rounded-md bg-brand-accent/10 border border-brand-accent/20 text-brand-accent hover:bg-brand-accent hover:text-white transition-all cursor-pointer"
                          title="Acessar demonstração ao vivo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Real-time GitHub Integration Section */}
        <div id="github-viewer-widget" className="p-8 rounded-xl bg-brand-card/60 border border-brand-border max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-brand-border/40">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-wider text-brand-cyan font-bold block">Widget de Automação</span>
              <h3 className="text-lg font-display font-medium text-white flex items-center gap-2">
                <FolderGit2 className="w-5 h-5 text-brand-accent" />
                Carregar Repositórios via API do GitHub
              </h3>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                Insira qualquer nome de usuário do GitHub para carregar de forma 100% dinâmica as atualizações de projetos e contribuições do repositório em tempo real.
              </p>
            </div>

            {/* Input search handle */}
            <form onSubmit={handleFetchClick} className="flex gap-2 items-center w-full md:max-w-xs shrink-0">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Nome de usuário..."
                  value={ghUsername}
                  onChange={(e) => setGhUsername(e.target.value)}
                  className="w-full bg-brand-dark border border-brand-border rounded-md py-2 pl-9 pr-3 text-xs text-white"
                />
              </div>
              <button
                type="submit"
                disabled={loadingGh}
                className="py-2 px-3.5 bg-brand-accent hover:bg-brand-accent/90 disabled:bg-brand-border text-white text-xs font-medium rounded-md flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {loadingGh ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Carregar'}
              </button>
            </form>
          </div>

          {/* GitHub Repositories results */}
          {loadingGh ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <Loader2 className="w-8 h-8 text-brand-accent animate-spin" />
              <p className="text-xs text-slate-400 font-mono">Buscando repositórios mais recentes no GitHub...</p>
            </div>
          ) : ghError ? (
            <div className="text-center py-12 px-4 rounded bg-red-500/5 border border-red-500/15">
              <span className="text-red-400 font-mono text-sm block mb-1">Aviso Técnico</span>
              <p className="text-xs text-slate-300 font-light">{ghError}</p>
            </div>
          ) : ghRepos.length === 0 ? (
            <p className="text-center text-xs text-slate-500 py-6 font-mono">Nenhum repositório público encontrado ou carregado.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ghRepos.map((repo, index) => (
                <motion.a
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  key={repo.id}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-brand-dark/40 border border-brand-border hover:border-brand-accent/40 rounded-lg flex flex-col justify-between hover:bg-brand-card/40 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-brand-cyan tracking-wider bg-brand-accent/10 px-1.5 py-0.5 rounded">
                        {repo.language}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xs font-mono font-bold text-white group-hover:text-brand-accent transition-colors truncate">
                      {repo.name}
                    </h4>
                    <p className="text-slate-400 text-[11px] font-light leading-snug tracking-normal mt-1.5 line-clamp-2">
                      {repo.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mt-4 pt-2.5 border-t border-brand-border/20">
                    <span className="text-[9px]">Ajustado: {repo.updatedAt}</span>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-0.5">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <GitFork className="w-3 h-3" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
