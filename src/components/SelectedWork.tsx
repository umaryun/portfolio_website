import { useState } from 'react'
import type { CSSProperties } from 'react'
import type { Project } from '../types'
import { projects } from '../data/projects'
import { colors, type, layout } from '../tokens'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useHover } from '../hooks/useHover'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProjectTag({ label }: { label: string }) {
  return (
    <span
      style={{
        ...type.labelCaps,
        fontSize: '10px',
        padding: '4px 8px',
        border: `1px solid ${colors.outlineVariant}`,
      }}
    >
      {label}
    </span>
  )
}

function TechPill({ label }: { label: string }) {
  return (
    <span
      style={{
        ...type.labelCaps,
        fontSize: '9px',
        padding: '3px 8px',
        backgroundColor: colors.surfaceContainerLow,
        color: colors.onSurfaceVariant,
        letterSpacing: '0.05em',
      }}
    >
      {label}
    </span>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover()
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  const cardStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  }

  const imageWrapStyle: CSSProperties = {
    overflow: 'hidden',
    border: `1px solid ${colors.outlineVariant}`,
    position: 'relative',
  }

  const imageStyle: CSSProperties = {
    width: '100%',
    aspectRatio: '4 / 3',
    objectFit: 'cover',
    filter: isHovered ? 'none' : 'grayscale(100%)',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'filter 0.5s ease, transform 0.5s ease',
  }

  const overlayStyle: CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '16px',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease',
  }

  const content = (
    <div
      ref={ref}
      style={cardStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div style={imageWrapStyle}>
        <img src={project.imageUrl} alt={project.imageAlt} style={imageStyle} />
        {project.liveUrl && (
          <div style={overlayStyle}>
            <span style={{ ...type.labelCaps, fontSize: '10px', color: '#fff' }}>
              VIEW LIVE ↗
            </span>
          </div>
        )}
      </div>

      <div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
          {project.tags.map((tag) => (
            <ProjectTag key={tag} label={tag} />
          ))}
        </div>
        <h4 style={{ ...type.headlineSm, color: colors.primary, margin: 0 }}>
          {project.title}
        </h4>
        {project.role && (
          <p style={{ ...type.labelCaps, fontSize: '10px', color: colors.secondary, marginTop: '6px', marginBottom: 0, letterSpacing: '0.08em' }}>
            {project.role}
          </p>
        )}
        <p style={{ ...type.bodyMd, color: colors.onSurfaceVariant, marginTop: '8px', marginBottom: 0 }}>
          {project.description}
        </p>
        {project.techStack && project.techStack.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
            {project.techStack.map((tech) => (
              <TechPill key={tech} label={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  )

  if (project.liveUrl) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {content}
      </a>
    )
  }

  return content
}

// ─── Archive link ─────────────────────────────────────────────────────────────

function ArchiveLink() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="https://github.com/umaryun"
      style={{
        ...type.labelCaps,
        color: hovered ? colors.primary : colors.onSurfaceVariant,
        textDecoration: 'underline',
        transition: 'color 0.2s ease',
        alignSelf: 'flex-end',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      VIEW ALL PROJECTS
    </a>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SelectedWork() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const isTablet = useMediaQuery('(min-width: 640px)')

  const sectionStyle: CSSProperties = {
    padding: `${layout.sectionGap} ${isDesktop ? layout.marginDesktop : layout.marginMobile}`,
    maxWidth: layout.containerMax,
    margin: '0 auto',
  }

  const headerRowStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '64px',
  }

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : isTablet ? 'repeat(2, 1fr)' : '1fr',
    gap: layout.gutter,
    alignItems: 'start',
  }

  return (
    <section style={sectionStyle} id="work">
      <div style={headerRowStyle}>
        <h2 style={{ ...type.headlineMd, color: colors.primary, margin: 0 }}>Selected Work</h2>
        <ArchiveLink />
      </div>

      <div style={gridStyle}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
