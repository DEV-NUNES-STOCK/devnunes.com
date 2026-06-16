/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, Clock, ArrowRight, X, Heart, MessageSquare, Send, BookOpen, ThumbsUp } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

interface Comment {
  id: string;
  postId: string;
  author: string;
  text: string;
  date: string;
}

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('todos');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Dynamic user interaction states
  const [likesState, setLikesState] = useState<Record<string, number>>({
    post1: BLOG_POSTS[0].likes,
    post2: BLOG_POSTS[1].likes,
    post3: BLOG_POSTS[2].likes,
  });
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  // Dynamic user comments state
  const [comments, setComments] = useState<Comment[]>([
    { id: 'c1', postId: 'post1', author: 'Luciano Silva', text: 'Muito bom o artigo! A paleta de cores deste site realmente cansa muito menos os olhos ao ler.', date: 'Ontem' },
    { id: 'c2', postId: 'post1', author: 'Mariana Duarte', text: 'Estética incrível. Parabéns, conteúdo refinado de verdade.', date: 'Ontem' },
    { id: 'c3', postId: 'post2', author: 'Felipe Dev', text: 'Estou sofrendo com o LCP no meu app legada. Vou colocar em prática as orientações.', date: 'Há 2 dias' },
  ]);

  // Comment Form inputs
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');

  // Extract all unique tags
  const allTags = ['todos', ...Array.from(new Set(BLOG_POSTS.flatMap((p) => p.tags)))];

  // Filter blog posts based on search query AND tags
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = selectedTag === 'todos' || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  const handleLike = (postId: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    const alreadyLiked = likedPosts[postId];
    setLikesState((prev) => ({
      ...prev,
      [postId]: alreadyLiked ? prev[postId] - 1 : prev[postId] + 1,
    }));
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !alreadyLiked,
    }));
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPost || !commentName.trim() || !commentText.trim()) return;

    const newComment: Comment = {
      id: `comment_${Date.now()}`,
      postId: selectedPost.id,
      author: commentName.trim(),
      text: commentText.trim(),
      date: 'Agora mesmo',
    };

    setComments((prev) => [newComment, ...prev]);
    setCommentName('');
    setCommentText('');
  };

  const activeComments = selectedPost
    ? comments.filter((c) => c.postId === selectedPost.id)
    : [];

  return (
    <section id="blog" className="py-24 bg-brand-dark border-t border-brand-border/40 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-widest text-brand-accent uppercase mb-2">05 / Artigos</p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
            Seção de Blog & Insights
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-lg mx-auto">
            Ideias, lições e tutoriais rápidos sobre engenharia de software frontend, usabilidade e design.
          </p>
        </div>

        {/* Search and Tag filter rows */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          
          {/* Tag Filter pills */}
          <div className="flex flex-wrap items-center gap-1.5 order-2 md:order-1">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`py-1.5 px-3 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                  selectedTag === tag
                    ? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/30'
                    : 'bg-brand-card/45 border border-brand-border text-slate-400 hover:text-slate-200'
                }`}
              >
                {tag === 'todos' ? 'Todos os artigos' : `#${tag}`}
              </button>
            ))}
          </div>

          {/* Search text input */}
          <div className="relative w-full md:max-w-xs order-1 md:order-2">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Pesquisar artigos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-card/75 border border-brand-border/80 rounded-md py-2 pl-9 pr-4 text-xs text-white"
            />
          </div>

        </div>

        {/* Articles List stream */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 rounded bg-brand-card/30 border border-brand-border">
            <p className="text-sm text-slate-500 font-mono">Nenhum artigo corresponde à sua pesquisa.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group flex flex-col justify-between p-6 rounded-xl bg-brand-card border border-brand-border/80 hover:border-brand-accent/40 hover:bg-brand-card-light/25 cursor-pointer shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Category flag and indicators */}
                  <div className="flex items-center justify-between gap-2 text-[10px] font-mono text-slate-400 mb-4 pb-3 border-b border-brand-border/20">
                    <span className="text-brand-cyan tracking-wider font-medium">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-medium text-white mb-2.5 group-hover:text-brand-accent transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-3 mb-6">
                    {post.summary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-brand-border/30">
                  <span className="text-[11px] font-mono text-slate-500">{post.date}</span>
                  
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    {/* Interactive Like action from card */}
                    <button
                      onClick={(e) => handleLike(post.id, e)}
                      className={`flex items-center gap-1 group-hover:text-red-400 transition-colors ${
                        likedPosts[post.id] ? 'text-red-400 font-bold' : ''
                      }`}
                      title="Curtir artigo"
                    >
                      <Heart className={`w-3.5 h-3.5 ${likedPosts[post.id] ? 'fill-red-400 text-red-500' : ''}`} />
                      {likesState[post.id]}
                    </button>

                    <span className="flex items-center gap-1" title="Comentários">
                      <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                      {comments.filter((c) => c.postId === post.id).length}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Expanded Blog Reader Modal Overlay */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-brand-card border border-brand-border rounded-xl shadow-2xl overflow-hidden"
            >
              
              {/* Reader Header */}
              <div className="flex items-center justify-between p-4 bg-brand-dark border-b border-brand-border sticky top-0 z-10">
                <div className="flex items-center gap-2 text-brand-cyan text-xs font-mono uppercase tracking-widest">
                  <BookOpen className="w-4 h-4 text-brand-accent" />
                  <span>Lendo Insights</span>
                </div>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-1.5 hover:bg-brand-border rounded-md text-slate-400 hover:text-white transition-colors"
                  aria-label="Fechar leitor"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Reader Core Content Body */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-brand-card">
                
                {/* Meta details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-brand-dark border border-brand-border text-brand-accent">
                      {selectedPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {selectedPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {selectedPost.readTime} de leitura
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight leading-tight">
                    {selectedPost.title}
                  </h1>
                </div>

                {/* Main Content Markdown Parser Area (Clean inline styles) */}
                <div className="text-slate-300 font-light text-sm sm:text-base leading-relaxed space-y-4 border-b border-brand-border/40 pb-8 prose prose-invert max-w-none">
                  {selectedPost.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                      return (
                        <h2 key={index} className="text-xl font-display font-semibold text-white pt-4 pb-1">
                          {paragraph.replace('## ', '')}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={index} className="text-base font-display font-medium text-brand-cyan pt-3 pb-0.5">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('- ')) {
                      return (
                        <ul key={index} className="list-disc list-inside pl-2 space-y-1 my-3 text-slate-300 text-sm">
                          {paragraph.split('\n').map((li, i) => (
                            <li key={i}>{li.replace('- ', '')}</li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={index} className="font-light">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Article Interactive Controls Panel */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-brand-dark/55 border border-brand-border/70">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleLike(selectedPost.id)}
                      className={`flex items-center gap-2 py-2 px-4 rounded-md text-xs font-mono font-medium transition-colors cursor-pointer ${
                        likedPosts[selectedPost.id]
                          ? 'bg-red-500/25 text-red-400 border border-red-500/30'
                          : 'bg-brand-card hover:bg-brand-card-light/45 text-slate-300 border border-brand-border'
                      }`}
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${likedPosts[selectedPost.id] ? 'fill-red-400 text-red-500' : ''}`} />
                      {likedPosts[selectedPost.id] ? 'Você curto!' : 'Apoiar Autor'}
                    </button>
                    <span className="text-xs font-mono text-slate-500">{likesState[selectedPost.id]} curtidas</span>
                  </div>

                  <span className="text-xs font-mono text-slate-500">
                    Artigo exclusivo devnunes
                  </span>
                </div>

                {/* Live Comments Form & Feeds */}
                <div className="space-y-6 pt-4">
                  <h3 className="text-sm font-mono tracking-widest text-slate-200 uppercase">
                    Comentários ({activeComments.length})
                  </h3>

                  {/* Comment submit form */}
                  <form onSubmit={handleCommentSubmit} className="space-y-4 p-4 rounded-xl bg-brand-dark/30 border border-brand-border/50">
                    <span className="text-xs font-mono text-brand-cyan block">Deixe sua opinião estruturada:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="Seu nome..."
                        required
                        value={commentName}
                        onChange={(e) => setCommentName(e.target.value)}
                        className="sm:col-span-1 bg-brand-dark border border-brand-border rounded-md px-3 py-2 text-xs text-white"
                      />
                      <input
                        type="text"
                        placeholder="Sua mensagem de feedback..."
                        required
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="sm:col-span-2 bg-brand-dark border border-brand-border rounded-md px-3 py-2 text-xs text-white"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="py-1.5 px-4 bg-brand-accent hover:bg-brand-accent/90 text-white text-xs font-medium rounded-md flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        Enviar
                        <Send className="w-3 h-3" />
                      </button>
                    </div>
                  </form>

                  {/* Listed feedback posts */}
                  <div className="space-y-4">
                    {activeComments.length === 0 ? (
                      <p className="text-xs text-slate-500 font-mono italic">Seja o primeiro a deixar um feedback sobre este artigo!</p>
                    ) : (
                      activeComments.map((comment) => (
                        <div key={comment.id} className="p-4 bg-brand-dark/40 border border-brand-border/40 rounded-lg space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold text-white">{comment.author}</span>
                            <span className="text-[10px] text-slate-500 font-mono">{comment.date}</span>
                          </div>
                          <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                            {comment.text}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>

              </div>
              
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
