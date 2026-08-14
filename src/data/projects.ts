import type { Project } from '../types'

export const projects: readonly Project[] = [
  {
    id: 1,
    title: "Jerry's Click Academy",
    description:
      'AI-powered, gamified exam preparation platform serving thousands of students preparing for WAEC exams. Features real-time leaderboards, interactive quiz modules, and LLM-driven explanations.',
    tags: ['AI / EDTECH', 'FULL-STACK'],
    imageUrl: '/images/jca.png',
    imageAlt: "Jerry's Click Academy — AI EdTech Platform",
    liveUrl: 'https://jca.ng',
    role: 'Lead Product Engineer',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'LLM Integration'],
    highlights: [
      'End-to-end product leadership for an AI-powered exam prep platform',
      'Architected gamification systems: leaderboards, quiz modules, performance analytics',
      'Integrated LLM-driven explanations with personalized feedback',
    ],
  },
  {
    id: 2,
    title: 'Chat Nexa',
    description:
      'Interactive AI IT support assistant capable of automated Level-1 troubleshooting, Active Directory verification, and intelligent ticket escalation to human administrators.',
    tags: ['AI ASSISTANT', 'ENTERPRISE IT'],
    imageUrl: '/images/chatnexa.png',
    imageAlt: 'Chat Nexa — AI IT Support Assistant',
    role: 'Product Engineer',
    techStack: ['React', 'Python', 'FastAPI', 'LLM APIs', 'Active Directory/LDAP'],
    highlights: [
      'Engineered L1 automation for troubleshooting and issue verification',
      'Implemented AD domain checks for secure password resets and account unlocks',
      'Designed automated escalation pipelines with full diagnostic contexts',
    ],
  },
  {
    id: 3,
    title: 'Fraud Detection Pipeline',
    description:
      'Machine learning pipeline using Random Forest and XGBoost models to identify fraudulent credit card transactions within imbalanced datasets with SMOTE optimization.',
    tags: ['MACHINE LEARNING', 'DATA SCIENCE'],
    imageUrl: '/images/fraud-detection.png',
    imageAlt: 'Credit Card Fraud Detection Pipeline',
    role: 'ML Researcher / Developer',
    techStack: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Imbalanced-Learn'],
    highlights: [
      'Trained Random Forest and XGBoost models for fraud detection',
      'Applied SMOTE and feature scaling for precision-recall optimization',
      'Minimized false negatives in highly imbalanced transaction datasets',
    ],
  },
  {
    id: 4,
    title: 'Sleek & Chic',
    description:
      'Full-stack e-commerce platform built from 0-to-1 with a secure admin dashboard for real-time inventory management, order tracking, and a high-performance consumer storefront.',
    tags: ['E-COMMERCE', 'FULL-STACK'],
    imageUrl: '/images/sleekandchic.png',
    imageAlt: 'Sleek & Chic — E-Commerce & Admin Suite',
    liveUrl: 'https://sleekandchic.vercel.app',
    role: 'Lead Product Engineer (Solo Creator)',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'PostgreSQL'],
    highlights: [
      'Complete product ownership: UI/UX, architecture, full-stack development',
      'Built secure admin dashboard with CRUD, order tracking, and sales insights',
      'Delivered high-performance storefront with persistent cart and optimized checkout',
    ],
  },
  {
    id: 5,
    title: 'Klyro Solutions',
    description:
      'High-performance corporate web platform presenting enterprise digital solutions with SSR/SSG optimization, interactive service selection, and conversion-focused architecture.',
    tags: ['ENTERPRISE', 'WEB PLATFORM'],
    imageUrl: '/images/klyro.png',
    imageAlt: 'Klyro Solutions — Enterprise Software Platform',
    liveUrl: 'https://klyro-solutions.vercel.app',
    role: 'Lead Developer',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      'Performance & SEO optimization with SSR and SSG',
      'Interactive service selection models and client inquiry workflows',
      'Responsive, conversion-focused corporate architecture',
    ],
  },
  {
    id: 6,
    title: 'Biz Bot',
    description:
      'Multi-stage AI agent framework automating customer inquiry routing, order processing, and support escalation via WhatsApp Business API with n8n workflow integration.',
    tags: ['AI AGENTS', 'AUTOMATION'],
    imageUrl: '/images/whatsapp-ai.png',
    imageAlt: 'WhatsApp AI Business Agent Platform',
    role: 'Backend Architect & Lead Developer',
    techStack: ['FastAPI', 'Python', 'React', 'n8n', 'WhatsApp Business API'],
    highlights: [
      'Designed multi-stage AI agent framework for customer automation',
      'Architected self-hosted n8n workflows with webhook pipelines',
      'Built React monitoring dashboard for conversation logs and metrics',
    ],
  },
  
]
