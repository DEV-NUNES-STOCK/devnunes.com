/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, SkillCategory, BlogPost } from './types';

export const PERSONAL_INFO = {
  name: 'Devnunes',
  title: 'Desenvolvedor Web Full-Stack',
  tagline: 'Transformando suas necessidades em soluções digitais inteligentes, do planejamento à manutenção contínua',
  bio: 'Especialista em criar ecossistemas web seguros, escaláveis e visualmente impecáveis. Com foco na arquitetura de software limpa, design funcional e carregamento instantâneo, ajudo empresas a solidificarem sua presença digital e otimizarem a experiência de seus usuários.',
  email: 'victoroliv2004@gmail.com', // Filled from user metadata contact
  github: 'https://github.com', // Placeholder or real GitHub root
  linkedin: 'https://linkedin.com',
  location: 'Brasil / Remoto',
  phone: '+55 (11) 99999-9999',
  services: [
    {
      title: 'Desenvolvimento Full-Stack',
      description: 'Sistemas robustos de ponta a ponta utilizando, Laravel, React.js, Next.js e bancos de dados modernos, priorizando segurança e escalabilidade.'
    },
    {
      title: 'Soluções Web sob Medida',
      description: 'Aplicações institucionais, Landing Pages de alta conversão, portfólios elegantes e blogs que carregam em milissegundos.'
    },
    {
      title: 'Arquitetura e Refatoração',
      description: 'Auditoria de código, melhoria nos índices de Core Web Vitals, otimização de SEO e transição de legados para pilhas tecnológicas modernas.'
    }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Desenvolvedor Full Stack Sênior & Consultor Tech',
    company: 'Nunes Soluções Web (devnunes)',
    location: 'Remoto / Freelance',
    period: 'Jan 2024 - Presente',
    description: [
      'Liderança técnica e desenvolvimento de portfólios premium, plataformas de e-learning e painéis de dados otimizados para clientes nacionais e internacionais.',
      'Aprimoramento nas métricas do Google Lighthouse de sites parceiros de 40% para acima de 95%, otimizando conversões em até 3x.',
      'Desenho de layouts focados em usabilidade e design minimalista de alta legibilidade, reduzindo a fadiga cognitiva ocular do usuário.'
    ],
    skillsUsed: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'PostgreSQL', 'Docker'],
    current: true
  },
  {
    id: 'exp2',
    role: 'Desenvolvedor Frontend Specialist',
    company: 'Nexum Tech Solutions',
    location: 'São Paulo, Brasil (Híbrido)',
    period: 'Jul 2022 - Dez 2023',
    description: [
      'Arquitetura de microsserviços frontend de alto desempenho utilizando arquitetura modular e React Query.',
      'Colaboração direta com designers UX/UI para construir e consolidar um Design System interno baseado em Tailwind CSS e acessibilidade WCAG.',
      'Implementação de rotinas de testes integrados e unitários, diminuindo a incidência de falhas em produção em 60%.'
    ],
    skillsUsed: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'Jest', 'Git/GitHub'],
    current: false
  },
  {
    id: 'exp3',
    role: 'Desenvolvedor Full Stack Pleno',
    company: 'MindGroup Digital',
    location: 'Remoto',
    period: 'Fev 2020 - Jun 2022',
    description: [
      'Desenvolvimento de APIs RESTful estruturadas em Express e Nest.js integradas com bancos relatoriais e caches Redis.',
      'Manutenção de painéis de telemetria complexos com atualização em tempo real por meio de WebSockets e SSE.',
      'Ouvinte ativo das demandas de clientes para desenhar o mapeamento técnico de requisitos de sistemas e MVP.'
    ],
    skillsUsed: ['Node.js', 'Express', 'React', 'MongoDB', 'Redis', 'WebSockets', 'SCSS'],
    current: false
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend Core',
    iconName: 'Layout',
    skills: [
      { name: 'React (18 / 19)', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'Next.js', level: 88 },
      { name: 'HTML5 / CSS3 / ES6+', level: 96 }
    ]
  },
  {
    name: 'Backend & APIs',
    iconName: 'Cpu',
    skills: [
      { name: 'Node.js (Express)', level: 89 },
      { name: 'APIs RESTful & GraphQL', level: 91 },
      { name: 'PostgreSQL / MySQL', level: 85 },
      { name: 'MongoDB / Firestore', level: 82 },
      { name: 'WebSockets (Real-time)', level: 80 }
    ]
  },
  {
    name: 'Ferramentas & Infra',
    iconName: 'Terminal',
    skills: [
      { name: 'Git / GitHub Workflow', level: 93 },
      { name: 'Docker Containers', level: 80 },
      { name: 'Vite / Esbuild Bundlers', level: 87 },
      { name: 'Vercel / Cloud Run / CDN', level: 84 },
      { name: 'SEO & Performance (Lighthouse)', level: 95 }
    ]
  },
  {
    name: 'Princípios de Design',
    iconName: 'Sparkles',
    skills: [
      { name: 'Design Minimalista (Minimal)', level: 95 },
      { name: 'Acessibilidade (WCAG)', level: 85 },
      { name: 'Design Responsivo (Mobile-First)', level: 98 },
      { name: 'Prototipação (Figma)', level: 82 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Cerebrum Analytics - Node Visualizer',
    description: 'Interface de telemetria em tempo real que mapeia o fluxo neural de servidores com gráficos dinâmicos e layout focado em performance.',
    detailedDescription: 'O Cerebrum Analytics foi projetado pensando na estética do logotipo devnunes. É um painel gráfico que renderiza árvores de dependência lógica e rotas de redes. Desenvolvido para administradores de sistemas monitorarem picos de memória e gargalos de processadores, operando com desempenho crítico e renderização ultra leve.',
    category: 'frontend',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'WebSockets'],
    githubUrl: 'https://github.com/devnunes/cerebrum-analytics',
    liveUrl: '#',
    featured: true,
    metrics: { stars: 124, forks: 18, completedDate: '2025-10-12' }
  },
  {
    id: 'proj2',
    title: 'BunnyStore API - High Performance Backend',
    description: 'API de e-commerce robusta e com caching otimizado para lidar com mais de 10.000 requisições simultâneas por segundo.',
    detailedDescription: 'Um microsserviço de backend escalável de comércio eletrônico, construído expressivamente com tipagem estrita, banco relacional distribuído e indexador de buscas Redis. Possui checkout rápido integrado ao Stripe e arquitetura de pagamentos assíncronos via webhooks securizados.',
    category: 'backend',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/devnunes/bunnystore-api',
    featured: true,
    metrics: { stars: 89, forks: 24, completedDate: '2025-02-18' }
  },
  {
    id: 'proj3',
    title: 'Synapse UI Component Library',
    description: 'Biblioteca de componentes React minimalistas e acessíveis (WAI-ARIA) com efeitos de glassmorphism de alta fidelidade visual.',
    detailedDescription: 'Conjunto de botões estruturados, modais animados à prova de latência, carrosséis táteis e menus flutuantes responsivos. Utiliza CSS inteligente de baixo footprint para carregamentos otimizados em redes instáveis ou dispositivos de menor capacidade gráfica.',
    category: 'design',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/devnunes/synapse-ui',
    liveUrl: '#',
    featured: true,
    metrics: { stars: 245, forks: 31, completedDate: '2026-01-05' }
  },
  {
    id: 'proj4',
    title: 'BrainNote - Local First Workspace',
    description: 'Editor markdown focado em máxima legibilidade de código, autossave instantâneo em localStorage e visão interconectada de anotações.',
    detailedDescription: 'BrainNote permite que engenheiros de software organizem e estruturem suas notas técnica e fluxogramas de desenvolvimento com atalhos de teclado ágeis. Possui suporte nativo à sintaxe de blocos de códigos com realce elegante.',
    category: 'fullstack',
    tags: ['React', 'Vite', 'Tailwind CSS', 'IndexedDB', 'Markdown'],
    githubUrl: 'https://github.com/devnunes/brainnote-workspace',
    liveUrl: '#',
    featured: false,
    metrics: { stars: 42, forks: 5, completedDate: '2024-11-20' }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post1',
    title: 'A Psicologia do Design Dark: Minimizando a Fadiga Cognitiva Ocular',
    slug: 'psicologia-design-dark-fadiga-ocular',
    summary: 'Entenda como paletas escuras bem balanceadas influenciam na retenção de foco do visitante e ajudam a manter uma experiência fluida.',
    content: `## A Psicologia do Design Dark

Você já parou para pensar por que desenvolvedores, cientistas de dados e designers profissionais quase sempre preferem interfaces de tom escuro de alta fidelidade gráfica? 

A resposta não reside apenas no fato de ser "esteticamente tecnológico", mas sim na biologia do olho humano e na forma como o nosso cérebro processa luz e formas geométricas.

### 1. Fadiga Ocular e o Brilho Intrusivo

Em salas com pouca iluminação, o contraste excessivo de um fundo branco brilhante estimula excessivamente os receptores de luz (bastonetes e cones) na nossa retina. Isso força os músculos pupilares a se contraírem defensivamente, o que desencadeia a famigerada fadiga visual após algumas horas. 

A escolha de uma paleta de cores escura inspirada no logotipo de devnunes (tons de azul profundo, ardósia e grafites suaves):
- **Reduz a emissão de luz nociva** (especialmente a luz azul que prejudica a produção de melatonina).
- **Proporciona um fundo calmo**, onde o texto esbranquiçado ou prata de alta legibilidade se destaca suavemente sem provocar reflexos fortes.
- **Mantém o cérebro ativamente focado**, isolando ruídos nas bordas e direcionando a atenção exatamente ao conteúdo que importa.

### 2. Contraste de Textos e Legibilidade

Uma interface escura de sucesso não usa preto puro (\`#000000\`) para o fundo e branco puro (\`#ffffff\`) para o texto, pois isso gera um efeito de cintilação óptica chamado "haliamento". 

O correto é utilizar tons off-black profundos, como o nosso **navy deep charcoal** (\`#070b12\`), acompanhado de fontes com pesos balanceados (entre 400 e 600) e cor cinza-claro (\`#e2e8f0\` / \`#f1f5f9\`). Isso distribui o contraste suavemente nas bordas das letras, resultando em uma leitura confortável e natural, idêntica ao papel impresso sob luz agradável.

### 3. Conclusão para Criadores Web

Ao projetar um portfólio profissional, focar nessas regras de neuro-design faz com que o cliente em potencial passe mais tempo admirando seus projetos e lendo com calma suas propostas comerciais, sem sentir urgência de fechar a aba devido ao desconforto ocular.`,
    category: 'Design & UX',
    date: '31 de Maio, 2026',
    readTime: '4 min',
    tags: ['UX', 'Minimalismo', 'Cores', 'Acessibilidade'],
    likes: 45,
    commentsCount: 3
  },
  {
    id: 'post2',
    title: 'Como Otimizar Core Web Vitals para Carregamento em Menos de 1 Segundo',
    slug: 'como-otimizar-core-web-vitals-carregamento-rapido',
    summary: 'A velocidade de carregamento é o primeiro critério de retenção de clientes. Aprenda técnicas práticas para bater notas altíssimas no Lighthouse.',
    content: `## Otimizando Core Web Vitals

A web moderna sofre de obesidade digital. Saborosos frameworks e bibliotecas sobrepõem megabytes de códigos desnecessários sobre navegadores de celulares modestos. 

Se o seu site profissional demora mais de 2.5 segundos para exibir o conteúdo principal, você já perdeu cerca de 30% a 40% da sua audiência potencial antes mesmo de dizer olá.

### O Que São Core Web Vitals?

São as métricas estabelecidas pelo Google para qualificar a experiência de carregamento, interatividade e estabilidade visual de uma página web:

1. **LCP (Largest Contentful Paint)**: Mede o tempo até o maior elemento visual (geralmente a imagem ou texto herói) ser desenhado. Alvo: abaixo de 2.5 segundos.
2. **INP (Interaction to Next Paint)**: Mede o tempo de resposta da página para cliques, toques ou comandos. Alvo: abaixo de 200 milissegundos.
3. **CLS (Cumulative Layout Shift)**: Mede o quanto os elementos "pulam" de lugar enquanto carregam. Alvo: abaixo de 0.1.

### Estratégias Práticas Aplicadas a este Portfólio

Para garantir que a plataforma devnunes permaneça ultrarrápida e leve, seguimos esses parâmetros técnicos rigorosos:

- **Isenção de dependências de fontes pesadas**: Todas as fontes são importadas de forma assíncrona, e o navegador utiliza substitutos de sistema enquanto o download não finaliza.
- **Vite e Esbuild como Bundlers**: Em vez de compiladores antigos, nosso ecossistema elimina "código morto" (*tree-shaking*) e empacota módulos utilitários em blocos compactos que baixam apenas sob demanda.
- **Otimização de Ícones (Lucide-react)**: Importamos os ícones cirurgicamente por desestruturação a fim de não importar arquivos órfãos não utlizados.
- **Animações Fluidas com Engine de Baixa Latência**: Usamos propriedades CSS transformadas pela placa gráfica (GPU) para evitar recálculos caros de layout no navegador principal.

### Testando os Resultados

Faça auditorias frequentes integrando seu fluxo com o Chrome DevTools e o Lighthouse corporativo. Manter as notas consolidadas próximas a 100 garante mais leads, melhores posições de ranqueamento em motores de busca (SEO) e satisfação profunda do visitante da sua aplicação.`,
    category: 'Desenvolvimento',
    date: '15 de Maio, 2026',
    readTime: '6 min',
    tags: ['Performance', 'Next.js', 'Vite', 'Web Vitals'],
    likes: 67,
    commentsCount: 5
  },
  {
    id: 'post3',
    title: 'Migrando para Tailwind CSS v4: O Futuro da Estilização Web',
    slug: 'migrando-para-tailwind-css-v4-futuro-estilizacao',
    summary: 'Uma análise profunda das novas variáveis declarativas nativas, motor de compilação em Rust e velocidade de desenvolvimento sem precedentes.',
    content: `## O Futuro com Tailwind v4

A chegada do **Tailwind CSS v4** representa um dos marcos mais transformadores para nós, arquitetos de interface. O principal foco desta versão foi otimização extrema e integração nativa com recursos de ponta das especificações do W3C.

### O Novo Motor em Rust: Lightningcss

Nas versões anteriores do Tailwind, a compilação gerava uma cadeia em Node baseada em PostCSS. Agora, o compilador usa o poder bruto do Rust para analisar suas tags de classe na velocidade da luz.
- Builds do projeto reduzem seu tempo em até **10x**.
- Processamento e compressão reduzem drasticamente o peso final do bundle CSS.
- Módulos órfãos e pseudo-seletores obsoletos são higienizados dinamicamente.

### Configuração Direta em Arquivos de Estilos (.css)

A grande surpresa é o fim de arquivos volumosos como \`tailwind.config.js\`. Agora, você personaliza todo o seu tema diretamente no cabeçalho CSS usando regras do ecossistema \`@theme\`.

Por exemplo, veja nossa declaração em \`src/index.css\` para registrar as paletas da marca nunes:

\`\`\`css
@import "tailwindcss";

@theme {
  --color-brand-dark: #070b12;
  --color-brand-card: #0d1523;
  --color-brand-accent: #3b82f6;
}
\`\`\`

Isso significa que todas as propriedades se tornam variáveis CSS nativas em runtime, permitindo que você as manipule facilmente com JavaScript vanilla ou interações dinâmicas se necessário. O Tailwind gerou o casamento perfeito entre rapidez de design e fidelidade arquitetural nativa.`,
    category: 'Tecnologia',
    date: '02 de Maio, 2026',
    readTime: '5 min',
    tags: ['Tailwind', 'CSS v4', 'Rust', 'Builds'],
    likes: 38,
    commentsCount: 2
  }
];
