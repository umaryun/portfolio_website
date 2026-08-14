import type { CSSProperties } from 'react'
import type { ExpertiseItem } from '../types'
import { colors, type, layout } from '../tokens'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useHover } from '../hooks/useHover'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// ─── Data ─────────────────────────────────────────────────────────────────────

const EXPERTISE: readonly ExpertiseItem[] = [
  {
    id: 1,
    title: 'AI Product Engineering',
    description:
      'Building AI-native products end to end, from vector databases to responsive interfaces.',
  },
  {
    id: 2,
    title: 'AI Systems & Integration',
    description:
      'Integrating LLM APIs, building AI-driven automation workflows with n8n, and designing intelligent agents for customer support, education, and business operations.',
  },
  {
    id: 3,
    title: 'Systems & Craft',
    description:
      'Clean architecture and UIs that feel inevitable. Scalable code meets meticulous design.',
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function ExpertiseCard({ item }: { item: ExpertiseItem }) {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover()
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  const cardStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '32px',
    border: `1px solid ${isHovered ? colors.primary : colors.outlineVariant}`,
    transition: 'border-color 0.2s ease, opacity 0.7s ease, transform 0.7s ease',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
  }

  return (
    <div
      ref={ref}
      style={cardStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <h3 style={{ ...type.headlineSm, color: colors.primary, margin: 0 }}>{item.title}</h3>
      <p style={{ ...type.bodyMd, color: colors.onSurfaceVariant, margin: 0 }}>
        {item.description}
      </p>
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ExpertiseSection() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const sectionStyle: CSSProperties = {
    padding: `${layout.sectionGap} ${isDesktop ? layout.marginDesktop : layout.marginMobile}`,
    maxWidth: layout.containerMax,
    margin: '0 auto',
  }

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : '1fr',
    gap: '48px',
    marginTop: '64px',
  }

  return (
    <section style={sectionStyle}>
      <h2 style={{ ...type.headlineMd, color: colors.primary, margin: 0 }}>What I do</h2>
      <div style={gridStyle}>
        {EXPERTISE.map((item) => (
          <ExpertiseCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
