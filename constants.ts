
import { CoderProfile, Project } from './types';

export interface StartupPitch {
  id: string;
  name: string;
  tagline: string;
  videoThumb: string;
  description: string;
}

export interface SocialPost {
  id: string;
  founder: string;
  startup: string;
  problem: string;
  applicants: number;
  time: string;
  bounty: string;
  valuation: string;
}

export interface NewsHeadline {
  id: string;
  source: string;
  headline: string;
  description?: string;
  date: string;
  url: string;
  category: 'AI Displacement' | 'Layoffs' | 'Hiring Crisis' | 'Market Shift';
}

export const MOCK_CODERS: CoderProfile[] = [
  {
    id: '1',
    name: 'Elias Thorne',
    specialty: 'Distributed Systems',
    bio: 'Former infra engineer at a scaling unicorn. Obsessed with elegant abstractions and high-concurrency performance.',
    experience: '8 years',
    avatar: 'https://picsum.photos/seed/elias/200/200',
    rate: '₹1,500/hr',
    projects: [
      { id: 'p1', title: 'Rust-based Query Engine', description: 'Built a custom OLAP engine for sub-second metrics.', difficulty: 'Complex', status: 'Completed', bounty: '₹12,500' }
    ]
  },
  {
    id: '2',
    name: 'Aria Vane',
    specialty: 'Product-Focused Frontend',
    bio: 'Crafting interfaces that feel invisible. I focus on motion design and accessibility for early-stage B2B SaaS.',
    experience: '5 years',
    avatar: 'https://picsum.photos/seed/aria/200/200',
    rate: '₹950/hr',
    projects: [
      { id: 'p2', title: 'Nebula UI Kit', description: 'An open-source design system for data-heavy apps.', difficulty: 'Medium', status: 'Completed', bounty: '₹6,400' }
    ]
  }
];

export const MOCK_PITCHES: StartupPitch[] = [
  {
    id: 'pitch1',
    name: 'Aether Labs',
    tagline: 'Decentralized Grid Systems',
    videoThumb: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600&h=1000',
    description: 'We are re-engineering the local power grid using zero-knowledge proofs for secure distribution.'
  },
  {
    id: 'pitch2',
    name: 'Vesper AI',
    tagline: 'The Sensory Internet',
    videoThumb: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=600&h=1000',
    description: 'Vesper translates environmental audio into real-time digital interactions for the sight-impaired.'
  },
  {
    id: 'pitch3',
    name: 'Kinetics',
    tagline: 'Next-Gen Logistics',
    videoThumb: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600&h=1000',
    description: 'Building the OS for autonomous warehouse swarms.'
  }
];

export const MOCK_SOCIAL_POSTS: SocialPost[] = [
  {
    id: 's1',
    founder: 'Marcus J.',
    startup: 'Lumina',
    problem: 'Our real-time ingestion pipeline is dropping 15% of packets under peak load. Need a systems architect to help refactor the Go-buffer.',
    applicants: 12,
    time: '2h ago',
    bounty: '₹11,200',
    valuation: '$4.2M'
  },
  {
    id: 's2',
    founder: 'Sarah L.',
    startup: 'Fold',
    problem: 'Typo in the landing page CSS is breaking the mobile layout on Safari. Quick fix needed for the hero section.',
    applicants: 42,
    time: '4h ago',
    bounty: '₹1,500',
    valuation: '$0.8M'
  },
  {
    id: 's3',
    founder: 'Kenji T.',
    startup: 'Nexus',
    problem: 'Deploying our first LLM mesh. The orchestration logic is complex. Who has experience with edge-runtime distribution?',
    applicants: 15,
    time: '6h ago',
    bounty: '₹14,500',
    valuation: '$55.0M'
  },
  {
    id: 's4',
    founder: 'Elena R.',
    startup: 'Terra',
    problem: 'Missing a single validation hook in our onboarding flow. Users can bypass the KYC check.',
    applicants: 5,
    time: '12h ago',
    bounty: '₹2,100',
    valuation: '$1.4M'
  }
];

export const MOCK_AI_NEWS: NewsHeadline[] = [
  { 
    id: 'n1', 
    source: 'The Verge', 
    headline: 'Klarna says AI assistant doing work of 700 full-time agents.', 
    description: 'The company claims its OpenAI-powered assistant handled two-thirds of customer service chats in its first month.',
    date: 'Feb 2024',
    url: 'https://www.theverge.com/2024/2/28/24085447/klarna-ai-customer-service-assistant-openai-700-jobs',
    category: 'AI Displacement'
  },
  { 
    id: 'n2', 
    source: 'TechRadar', 
    headline: 'Nvidia CEO claims the death of coding is near.', 
    description: 'Jensen Huang suggests that AI will allow everyone to be a programmer through natural language.',
    date: 'Feb 2024',
    url: 'https://www.techradar.com/computing/artificial-intelligence/nvidia-ceo-claims-the-death-of-coding-is-near',
    category: 'Market Shift'
  }
];
