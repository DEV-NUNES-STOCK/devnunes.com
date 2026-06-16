/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'design';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: {
    stars?: number;
    forks?: number;
    completedDate?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string; // e.g., "Set 2024 - Presente"
  description: string[];
  skillsUsed: string[];
  current: boolean;
}

export interface SkillCategory {
  name: string;
  iconName: string; // Lucide icon identifier
  skills: {
    name: string;
    level: number; // 0 - 100 percentage
  }[];
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
