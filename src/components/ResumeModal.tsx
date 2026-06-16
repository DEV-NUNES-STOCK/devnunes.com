/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Copy, FileText, Check, Mail, MapPin, Download } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textCV = `
${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}
E-mail: ${PERSONAL_INFO.email}
Localidade: ${PERSONAL_INFO.location}

RESUMO PROFISSIONAL
${PERSONAL_INFO.bio}

EXPERIÊNCIAS PROFISSIONAIS
${EXPERIENCES.map(
  (exp) => `
- ${exp.role} em ${exp.company} (${exp.period})
  ${exp.description.join('\n  ')}
  Tecnologias: ${exp.skillsUsed.join(', ')}
`
).join('\n')}

HABILIDADES
${SKILL_CATEGORIES.map(
  (cat) => `
* ${cat.name}:
  ${cat.skills.map((s) => `${s.name} (${s.level}%)`).join(', ')}
`
).join('\n')}

---
Gerado através de devnunes - Soluções Web
`.trim();

    navigator.clipboard.writeText(textCV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    const markdownText = `
# ${PERSONAL_INFO.name}
## ${PERSONAL_INFO.title}

- **Email:** ${PERSONAL_INFO.email}
- **Local:** ${PERSONAL_INFO.location}
- **Web:** https://devnunes.com

---

### Resumo Profissional
${PERSONAL_INFO.bio}

---

### Experiências Profissionais
${EXPERIENCES.map(
  (exp) => `
#### ${exp.role}
**${exp.company}** | *${exp.period}* | ${exp.location}
${exp.description.map((desc) => `- ${desc}`).join('\n')}
*Tecnologias:* ${exp.skillsUsed.map((s) => `\`${s}\``).join(', ')}
`
).join('\n')}

---

### Habilidades Técnicas
${SKILL_CATEGORIES.map(
  (cat) => `
#### ${cat.name}
${cat.skills.map((s) => `- **${s.name}**: ${s.level}%`).join('\n')}
`
).join('\n')}

---
*Gerado automaticamente via devnunes Soluções Web*
`.trim();

    const blob = new Blob([markdownText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'resume_dev_nunes.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="cv-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm print:p-0 print:bg-white print:relative print:z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-brand-card border border-brand-border rounded-xl shadow-2xl overflow-hidden print:border-0 print:bg-white print:text-slate-900 print:shadow-none print:max-h-full print:rounded-none"
          >
            {/* Modal Header (Hidden on print) */}
            <div className="flex items-center justify-between p-4 bg-brand-dark/85 border-b border-brand-border sticky top-0 z-10 print:hidden">
              <div className="flex items-center gap-2 text-brand-accent">
                <FileText className="w-5 h-5" />
                <span className="font-display font-medium text-white">Currículo Profissional</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  title="Imprimir ou Salvar como PDF"
                  className="p-2 bg-brand-card-light hover:bg-brand-accent hover:text-white rounded-md text-slate-300 transition-all flex items-center gap-1 text-xs"
                >
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">Imprimir / PDF</span>
                </button>
                
                <button
                  onClick={handleDownloadMarkdown}
                  title="Baixar em formato Markdown"
                  className="p-2 bg-brand-card-light hover:bg-brand-accent hover:text-white rounded-md text-slate-300 transition-all flex items-center gap-1 text-xs"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download .MD</span>
                </button>

                <button
                  onClick={handleCopyText}
                  title="Copiar Currículo como Texto"
                  className="p-2 bg-brand-card-light hover:bg-brand-accent hover:text-white rounded-md text-slate-300 transition-all flex items-center gap-1 text-xs"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span className="hidden sm:inline">{copied ? 'Copiado!' : 'Copiar Texto'}</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-2 hover:bg-red-500 hover:text-white rounded-md text-slate-400 transition-all"
                  aria-label="Minimizar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Curriculum Display Area */}
            <div id="printable-cv-content" className="flex-1 overflow-y-auto p-8 sm:p-12 print:p-0 bg-brand-card text-slate-300 print:bg-white print:text-black">
              
              {/* Header block */}
              <div className="border-b border-brand-border/40 pb-6 mb-8 print:border-slate-300 print:pb-4">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-display font-bold text-white print:text-slate-900 tracking-tight">
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-brand-accent font-medium text-lg mt-1 print:text-blue-700">
                      {PERSONAL_INFO.title}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-slate-400 print:text-slate-600 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-4 h-4" />
                      {PERSONAL_INFO.email}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio block */}
              <div className="mb-8">
                <h2 className="text-xs uppercase font-display font-semibold tracking-widest text-brand-accent print:text-blue-700 mb-2">
                  Resumo Profissional
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-300 print:text-slate-700 font-light">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              {/* Experience timeline block */}
              <div className="mb-8">
                <h2 className="text-xs uppercase font-display font-semibold tracking-widest text-brand-accent print:text-blue-700 mb-4">
                  Experiência Profissional
                </h2>
                <div className="space-y-6">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className="relative pl-0 print:break-inside-avoid">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h3 className="font-display font-semibold text-white print:text-slate-900 text-base">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-mono text-slate-400 print:text-slate-600 bg-brand-card-light/40 px-2 py-0.5 rounded border border-brand-border/30 print:border-slate-300 print:bg-slate-100">
                          {exp.period}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-slate-400 print:text-slate-500 mb-2">
                        {exp.company} — <span className="font-light italic text-xs">{exp.location}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 print:text-slate-700 mb-3 pl-1 font-light">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="leading-relaxed">
                            {desc}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {exp.skillsUsed.map((sk) => (
                          <span
                            key={sk}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-dark/50 border border-brand-border text-slate-400 print:bg-slate-100 print:text-slate-700 print:border-slate-200"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Matrices Block */}
              <div>
                <h2 className="text-xs uppercase font-display font-semibold tracking-widest text-brand-accent print:text-blue-700 mb-4">
                  Habilidades & Competências
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 print:grid-cols-2">
                  {SKILL_CATEGORIES.map((cat) => (
                    <div key={cat.name} className="print:break-inside-avoid">
                      <h4 className="font-display font-semibold text-white print:text-slate-800 text-xs tracking-wider mb-2.5 pb-1 border-b border-brand-border/20 print:border-slate-200">
                        {cat.name}
                      </h4>
                      <div className="space-y-2">
                        {cat.skills.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="font-light text-slate-300 print:text-slate-700">{skill.name}</span>
                              <span className="font-mono text-slate-400 print:text-slate-500">{skill.level}%</span>
                            </div>
                            <div className="w-full h-1 bg-brand-dark border border-brand-border rounded-full overflow-hidden print:border-slate-200 print:bg-slate-100">
                              <div
                                className="h-full bg-brand-accent rounded-full print:bg-slate-700"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Footer for print */}
              <div className="hidden print:block text-center text-[10px] text-slate-500 mt-12 pt-4 border-t border-slate-200">
                Este currículo é parte integrante do sistema devnunes Soluções Web. Acesse https://devnunes.com para ver o portfólio interativo completo.
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
