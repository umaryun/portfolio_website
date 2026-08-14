import type { CSSProperties } from 'react'
import { colors, type, layout } from '../tokens'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// ─── Constants ────────────────────────────────────────────────────────────────

const SKILLS = [
  'LLMs',
  'PRODUCT STRATEGY',
  'TYPESCRIPT',
  'JAVASCRIPT',
  'PYTHON',
  'REACT',
  'NEXT.JS',
  'FASTAPI',
  'TAILWIND CSS',
  'POSTGRESQL',
  'SUPABASE',
  'NODE.JS',
  'LLM APIS',
  'N8N',
  'MAKE',
  'VECTOR DB',
  'APIS',
  'SYSTEMS DESIGN',
  'PROTOTYPING',
  'DOCKER',
  'REST APIS',
  'JWT',
  'SQLALCHEMY',
  'GIT',
  'VERCEL',
] as const

// ─── Component ────────────────────────────────────────────────────────────────

export function AboutSection() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { ref: imgRef, isVisible: imgVisible } = useIntersectionObserver<HTMLDivElement>()
  const { ref: textRef, isVisible: textVisible } = useIntersectionObserver<HTMLDivElement>()

  const sectionStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isDesktop ? '5fr 7fr' : '1fr',
    gap: '64px',
    alignItems: 'center',
    padding: `${layout.sectionGap} ${isDesktop ? layout.marginDesktop : layout.marginMobile}`,
    maxWidth: layout.containerMax,
    margin: '0 auto',
  }

  const imageColStyle: CSSProperties = {
    opacity: imgVisible ? 1 : 0,
    transform: imgVisible ? 'translateY(0)' : 'translateY(32px)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  }

  const textColStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    opacity: textVisible ? 1 : 0,
    transform: textVisible ? 'translateY(0)' : 'translateY(32px)',
    transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
  }

  const imageStyle: CSSProperties = {
    width: '100%',
    aspectRatio: '1 / 1',
    objectFit: 'cover',
    filter: 'grayscale(100%)',
    border: `1px solid ${colors.outlineVariant}`,
  }

  const quoteStyle: CSSProperties = {
    ...type.headlineMd,
    color: colors.primary,
    lineHeight: 1.35,
    margin: 0,
  }

  const bioStyle: CSSProperties = {
    ...type.bodyLg,
    color: colors.onSurfaceVariant,
    maxWidth: '560px',
    margin: 0,
  }

  return (
    <section style={sectionStyle}>
      {/* ── Portrait ── */}
      <div ref={imgRef} style={imageColStyle}>
        <img src={'/images/aboutimage.jpg'} alt="Portrait of Umar Yunusa" style={imageStyle} />
      </div>

      {/* ── Text ── */}
      <div ref={textRef} style={textColStyle}>
        <blockquote style={quoteStyle}>
          "I'm a product engineer who builds at the intersection of AI and great UX."
        </blockquote>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={bioStyle}>
            With a decade of experience across fintech, logistics, and creative tools, I focus on
            bridging the gap between raw machine learning capability and human-centric utility. I
            believe the future of software isn't just about efficiency—it's about augmentation.
          </p>

          <div>
            <span
              style={{
                ...type.labelCaps,
                color: colors.onSurfaceVariant,
                display: 'block',
                marginBottom: '16px',
              }}
            >
              CORE STACK &amp; SKILLS
            </span>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  style={{
                    ...type.labelCaps,
                    fontSize: '11px',
                    padding: '8px 16px',
                    border: `1px solid ${colors.outlineVariant}`,
                    color: colors.primary,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
