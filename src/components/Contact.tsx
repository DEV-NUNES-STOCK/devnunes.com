/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Sparkles, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('orcamento');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setLoading(true);
    // Simulate API delivery
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setInterest('orcamento');
    setMessage('');
    setFormSubmitted(false);
  };

  return (
    <section id="contato" className="py-24 bg-brand-dark/95 border-t border-brand-border/40 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-2">06 / Comunicação</p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            Iniciar um Projeto
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-sm mx-auto">
            Tem um conceito em mente? Fale comigo e vamos viabilizar soluções robustas.
          </p>
        </div>

        {/* Form and Contact layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Area: Channels Cards (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-display font-medium text-white">
              Canais de contato direto
            </h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Sinta-se livre para entrar em contato através das redes sociais ou mandar sua proposta comercial diretamente para o meu e-mail principal.
            </p>

            {/* Email copying card */}
            <div className="p-5 rounded-xl bg-brand-card border border-brand-border flex items-center justify-between group hover:border-brand-accent/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-border">
                  <Mail className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">E-mail Comercial</span>
                  <span className="text-sm font-medium text-white font-mono break-all">{PERSONAL_INFO.email}</span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 bg-brand-dark/80 hover:bg-brand-accent/20 border border-brand-border hover:border-brand-accent/40 rounded-md text-slate-400 hover:text-white transition-all cursor-pointer shrink-0 ml-2"
                title="Copiar endereço de e-mail"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location card */}
            <div className="p-5 rounded-xl bg-brand-card border border-brand-border flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-brand-dark border border-brand-border">
                <MapPin className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">Localidade</span>
                <span className="text-sm font-medium text-white font-mono">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Response speed metrics */}
            <div className="p-5 rounded-xl bg-gradient-to-tr from-brand-card to-brand-dark border border-brand-border/60">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-brand-accent-glow border border-brand-accent/20 rounded mt-0.5">
                  <Sparkles className="w-4 h-4 text-brand-accent" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">Tempo Médio de Retorno</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Costumo responder propostas organizadas de escopo técnico em até <strong>12 horas comerciais</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Area: Form (7 Columns) */}
          <div className="lg:col-span-7 bg-brand-card/75 border border-brand-border rounded-xl p-6 sm:p-8 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-name" className="text-xs font-mono text-slate-400">Como posso te chamar?</label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        placeholder="Nome completo..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-brand-dark border border-brand-border rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-white"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="form-email" className="text-xs font-mono text-slate-400">E-mail para resposta</label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        placeholder="nome@empresa.com..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-brand-dark border border-brand-border rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-white"
                      />
                    </div>

                  </div>

                  {/* Subject or Interest Category selector drop */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-slate-400">Qual o seu objetivo principal?</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'orcamento', label: 'Orçamento' },
                        { id: 'parceria', label: 'Parceria Tech' },
                        { id: 'contratacao', label: 'Contratação' },
                        { id: 'duvida', label: 'Conversar' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setInterest(item.id)}
                          className={`py-2 px-3 border rounded text-[11px] font-medium text-center transition-colors cursor-pointer ${
                            interest === item.id
                              ? 'bg-brand-accent/15 border-brand-accent text-brand-accent font-semibold shadow-sm'
                              : 'bg-brand-dark border-brand-border text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message box */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-message" className="text-xs font-mono text-slate-400">Descreva o projeto ou dúvida</label>
                    <textarea
                      id="form-message"
                      rows={5}
                      required
                      placeholder="Fale um pouco sobre o escopo, cronograma planejado ou me faça uma pergunta técnica..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-brand-dark border border-brand-border rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-white resize-none"
                    />
                  </div>

                  {/* Action button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 px-5 bg-brand-accent hover:bg-brand-accent/90 disabled:bg-brand-border text-white rounded-md text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 group transition-colors shadow-lg shadow-brand-accent/10 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Transmitindo dados seguros...
                        </>
                      ) : (
                        <>
                          Fazer Contato Comercial
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 px-2 flex flex-col items-center text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2 max-w-md">
                    <h4 className="text-xl font-display font-semibold text-white">Transmissão Concluída!</h4>
                    <p className="text-slate-300 text-sm font-light leading-relaxed">
                      Sua mensagem de contato foi enviada com sucesso para o banco de triagem. Em breve você receberá um retorno em seu e-mail de correspondência.
                    </p>
                  </div>

                  <div className="pt-2 flex gap-3 text-xs">
                    <button
                      onClick={handleResetForm}
                      className="py-2.5 px-5 bg-brand-card border border-brand-border text-slate-300 hover:text-white rounded-md transition-colors"
                    >
                      Enviar Outra Mensagem
                    </button>
                    <a
                      href="#"
                      className="py-2.5 px-5 bg-brand-accent text-white rounded-md hover:bg-brand-accent/90 transition-colors"
                    >
                      Voltar ao Início
                    </a>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
