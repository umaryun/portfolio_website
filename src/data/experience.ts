export interface Experience {
  readonly id: number
  readonly company: string
  readonly role: string
  readonly description: readonly string[]
}

export const experiences: readonly Experience[] = [
  {
    id: 1,
    company: 'Grandgale Technologies',
    role: 'Software / Product Engineer',
    description: [
      'Led technical execution on web applications and enterprise products.',
      'Managed cross-functional coordination between design, frontend, and backend development phases.',
    ],
  },
  {
    id: 2,
    company: 'eHealth Africa',
    role: 'ICT Services Intern',
    description: [
      'Managed system maintenance, hardware diagnostics, and network configuration tasks.',
      'Assisted in resolving internal technical issues and optimizing IT support infrastructure.',
    ],
  },
  {
    id: 3,
    company: 'Shamrock Innovations',
    role: 'Software Engineer',
    description: [
      'Developed software solutions and responsive web features using modern JavaScript/TypeScript ecosystems.',
    ],
  },
  {
    id: 4,
    company: 'Headstarter',
    role: 'Software Engineer',
    description: [
      'Built full-stack software applications and AI-driven features in an accelerated collaborative engineering environment.',
    ],
  },
]
