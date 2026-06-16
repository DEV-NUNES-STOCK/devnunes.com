export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'design' | 'manutencao' | 'integracao';
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  metrics?: {
    stars?: number;
    forks?: number;
    completedDate?: string;
  };
  result?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skillsUsed: string[];
  current: boolean;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  iconName: string;
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  likes: number;
  commentsCount: number;
}

export interface Service {
  title: string;
  description: string;
  items: string[];
}
