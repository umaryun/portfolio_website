export interface Project {
  readonly id: number
  readonly title: string
  readonly description: string
  readonly tags: readonly string[]
  readonly imageUrl: string
  readonly imageAlt: string
  readonly liveUrl?: string
  readonly role?: string
  readonly techStack?: readonly string[]
  readonly highlights?: readonly string[]
}

export interface ExpertiseItem {
  readonly id: number
  readonly title: string
  readonly description: string
}

export interface Article {
  readonly id: number
  readonly date: string
  readonly title: string
  readonly description: string
  readonly href: string
}
