import { useState } from 'react'
import type { CSSProperties } from 'react'
import { colors, type, layout } from '../tokens'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// ─── Sub-components ───────────────────────────────────────────────────────────

interface ButtonProps {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  onClick?: () => void
}

function CTAButton({ children, variant, onClick }: ButtonProps) {
  const [hovered, setHovered] = useState(false)

  const isPrimary = variant === 'primary'

  const btnStyle: CSSProperties = {
    backgroundColor: isPrimary
      ? hovered ? 'transparent' : colors.primary
      : hovered ? colors.primary : 'transparent',
    color: isPrimary
      ? hovered ? colors.primary : colors.onPrimary
      : hovered ? colors.onPrimary : colors.primary,
    border: `1px solid ${colors.primary}`,
    padding: '16px 40px',
    ...type.labelCaps,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  }

  return (
    <button
      style={btnStyle}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function HeroSection() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { ref: textRef, isVisible: textVisible } = useIntersectionObserver<HTMLDivElement>()
  const { ref: imageRef, isVisible: imageVisible } = useIntersectionObserver<HTMLDivElement>()

  const sectionStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isDesktop ? '7fr 5fr' : '1fr',
    alignItems: 'center',
    minHeight: '80vh',
    padding: `${layout.sectionGap} ${isDesktop ? layout.marginDesktop : layout.marginMobile}`,
    maxWidth: layout.containerMax,
    margin: '0 auto',
    gap: layout.gutter,
  }

  const textColStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '32px',
    opacity: textVisible ? 1 : 0,
    transform: textVisible ? 'translateY(0)' : 'translateY(32px)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  }

  const imageColStyle: CSSProperties = {
    position: 'relative',
    marginTop: isDesktop ? 0 : '48px',
    opacity: imageVisible ? 1 : 0,
    transform: imageVisible ? 'translateY(0)' : 'translateY(32px)',
    transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
  }

  const headingStyle: CSSProperties = {
    ...(isDesktop ? type.displayLg : type.displayLgMobile),
    color: colors.primary,
    maxWidth: '520px',
    margin: 0,
  }

  return (
    <section style={sectionStyle}>
      {/* ── Text column ── */}
      <div ref={textRef} style={textColStyle}>
        <span style={{ ...type.labelCaps, color: colors.onSurfaceVariant, letterSpacing: '0.15em' }}>
          PRODUCT ENGINEER · AI SYSTEMS
        </span>

        <h1 style={headingStyle}>I build products that think.</h1>

        <p style={{ ...type.bodyLg, color: colors.onSurfaceVariant, maxWidth: '400px', margin: 0 }}>
          I design and engineer AI-powered products from zero to one. Based in Lagos.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <CTAButton variant="primary">See My Work</CTAButton>
          <CTAButton variant="secondary">Download My Resume</CTAButton>
        </div>
      </div>

      {/* ── Image column ── */}
      <div ref={imageRef} style={imageColStyle}>
        <img
          src={'/images/me.png'}
          alt="Professional portrait of Umar Yunusa"
          style={{
            width: '100%',
            aspectRatio: '4 / 5',
            objectFit: 'cover',
            filter: 'grayscale(100%) contrast(1.25)',
          }}
        />
        {/* Decorative teal accent square */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-16px',
            left: '-16px',
            width: '48px',
            height: '48px',
            backgroundColor: colors.secondaryFixed,
            opacity: 0.5,
            zIndex: -1,
          }}
        />
      </div>
    </section>
  )
}
