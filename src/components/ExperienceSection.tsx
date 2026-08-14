import type { CSSProperties } from 'react'
import { experiences } from '../data/experience'
import { colors, type, layout } from '../tokens'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useHover } from '../hooks/useHover'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// ─── Sub-components ───────────────────────────────────────────────────────────

function ExperienceRow({
  company,
  role,
  description,
}: {
  company: string
  role: string
  description: readonly string[]
}) {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover()
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const rowStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isDesktop ? 'row' : 'column',
    gap: isDesktop ? '64px' : '16px',
    paddingTop: '40px',
    paddingBottom: '40px',
    borderBottom: `1px solid ${isHovered ? colors.primary : colors.outlineVariant}`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
    transition:
      'opacity 0.7s ease, transform 0.7s ease, border-color 0.2s ease',
  }

  return (
    <div
      ref={ref}
      style={rowStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div style={{ width: isDesktop ? '35%' : '100%', flexShrink: 0 }}>
        <h3 style={{ ...type.headlineSm, color: colors.primary, margin: 0 }}>
          {company}
        </h3>
        <p
          style={{
            ...type.labelCaps,
            fontSize: '10px',
            color: colors.secondary,
            marginTop: '8px',
            marginBottom: 0,
            letterSpacing: '0.08em',
          }}
        >
          {role}
        </p>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {description.map((line) => (
          <p
            key={line}
            style={{ ...type.bodyMd, color: colors.onSurfaceVariant, margin: 0 }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function ExperienceSection() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const sectionStyle: CSSProperties = {
    padding: `${layout.sectionGap} ${isDesktop ? layout.marginDesktop : layout.marginMobile}`,
    maxWidth: layout.containerMax,
    margin: '0 auto',
  }

  return (
    <section style={sectionStyle} id="experience">
      <h2 style={{ ...type.headlineMd, color: colors.primary, margin: 0 }}>
        Experience
      </h2>
      <div style={{ marginTop: '48px' }}>
        {experiences.map((exp) => (
          <ExperienceRow
            key={exp.id}
            company={exp.company}
            role={exp.role}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  )
}
