
export enum UserRole {
  FOUNDER = 'FOUNDER',
  CODER = 'CODER'
}

export interface CoderProfile {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  experience: string;
  githubUrl?: string;
  projects: Project[];
  rate: string;
  avatar: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'Simple' | 'Medium' | 'Complex';
  status: 'Open' | 'In Progress' | 'Completed';
  bounty: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
