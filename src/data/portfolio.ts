import { Project, Experience, SkillCategory, Service } from './types';

export const PERSONAL_INFO = {
  name: 'Victor Ricardo',
  title: 'Desenvolvedor Full Stack',
  tagline: 'Desenvolvimento Web para empresas e profissionais.',
  subTagline: 'Criação, manutenção e evolução de sistemas web utilizando React, Laravel, Next.js e outras tecnologias modernas.',
  bio: 'Desenvolvedor Full Stack com 2 anos de experiência profissional, com passagem pela Recife Tecnologia atuando no desenvolvimento e manutenção de aplicações web. Foco em resolver problemas reais através de código limpo, usabilidade e manutenção contínua.',
  email: 'victoroliv2004@gmail.com',
  github: 'https://github.com/DEV-NUNES-STOCK',
  linkedin: 'https://www.linkedin.com/in/victornunesdev/',
  whatsapp: 'https://wa.me/5581999999999', // Placeholder number, user should update
  location: 'Recife, PE / Remoto',
  metrics: [
    { label: '2 anos de experiência', value: '2' },
    { label: 'Desenvolvedor Web', value: 'Full Stack' },
    { label: 'Suporte e manutenção contínua', value: 'Ativo' }
  ]
};

export const SERVICES: Service[] = [
  {
    title: 'Desenvolvimento Web',
    description: 'Sistemas robustos e escaláveis para gestão e produtividade.',
    items: ['sistemas administrativos', 'dashboards', 'CRUDs', 'portais internos']
  },
  {
    title: 'Landing Pages',
    description: 'Páginas focadas em conversão e presença digital.',
    items: ['páginas institucionais', 'páginas de captura', 'sites responsivos']
  },
  {
    title: 'Manutenção de Sistemas',
    description: 'Evolução e correção de softwares existentes.',
    items: ['correção de bugs', 'melhorias', 'refatoração', 'performance']
  },
  {
    title: 'Integrações',
    description: 'Conexão entre diferentes serviços e plataformas.',
    items: ['APIs REST', 'Firebase', 'bancos de dados']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'recife-tecnologia',
    role: 'Desenvolvedor Web',
    company: 'Recife Tecnologia',
    location: 'Recife, PE',
    period: '2022 - Presente',
    description: [
      'Desenvolvimento e manutenção de aplicações web utilizando tecnologias modernas.',
      'Integração com APIs REST e bancos de dados.',
      'Foco em qualidade de código, usabilidade e correção de problemas.',
      'Melhoria contínua de sistemas existentes para otimização de processos.'
    ],
    skillsUsed: ['PHP', 'Laravel', 'JavaScript', 'React', 'MySQL', 'Git'],
    current: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Linguagens',
    iconName: 'Code',
    skills: ['JavaScript', 'TypeScript', 'PHP', 'Python']
  },
  {
    name: 'Frameworks & Libs',
    iconName: 'Cpu',
    skills: ['React.js', 'Next.js', 'Laravel', 'Flask']
  },
  {
    name: 'Bancos de Dados',
    iconName: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB']
  },
  {
    name: 'Ferramentas',
    iconName: 'Terminal',
    skills: ['Git', 'GitHub', 'Docker', 'APIs REST']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'fgh-qrcode',
    title: 'FGH QRCode',
    description: 'Sistema desenvolvido para o Hospital Miguel Arraes para agilizar a identificação de ativos de manutenção através de QR Codes.',
    category: 'fullstack',
    tags: ['Python', 'Flask', 'JavaScript'],
    result: 'Padronização e maior agilidade no fluxo de manutenção.',
    featured: true
  },
  {
    id: 'iebimembresia',
    title: 'IEBIMembresia',
    description: 'Sistema para gestão de membros e congregados de uma igreja local.',
    category: 'fullstack',
    tags: ['Next.js', 'TypeScript', 'Firebase'],
    result: 'Modernização do processo de cadastro e organização das informações.',
    featured: true
  }
];

export const WORK_PROCESS = [
  {
    step: 1,
    title: 'Entendimento da necessidade',
    description: 'Análise profunda do problema e dos objetivos do negócio.'
  },
  {
    step: 2,
    title: 'Planejamento da solução',
    description: 'Desenho da arquitetura e definição das tecnologias adequadas.'
  },
  {
    step: 3,
    title: 'Desenvolvimento',
    description: 'Codificação seguindo boas práticas, testes e revisões.'
  },
  {
    step: 4,
    title: 'Entrega',
    description: 'Implantação do sistema em ambiente de produção.'
  },
  {
    step: 5,
    title: 'Suporte e melhorias',
    description: 'Acompanhamento contínuo e evolução do software.'
  }
];
