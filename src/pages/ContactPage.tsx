import { useState } from 'react'
import type { CSSProperties } from 'react'
import { NavBar } from '../components/NavBar'
import { SimpleFooter } from '../components/SimpleFooter'
import { colors, type, layout } from '../tokens'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useHover } from '../hooks/useHover'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// ─── Constants ────────────────────────────────────────────────────────────────

const ARCH_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCdOc1NDZnI1KMWGLm-PsfkcC8saxtyQc8-7u9yl4JaL8JW6Bm6eQ4nZ71gMu_ntHYE9CMPblDmkR-FgyBokNTTcnPm4Zflu9ENeaN5l3NxUkCP1oqRCVCsMckXd2LdVj94-t1K4bVwELrQfVwZQoXwM8BPRhALmf6WevtqFG7rGzw93xclO8jIdfzMwfpUB86Gbh5NBa9kEZQDsIGc1SyEblolUYJKQFnTQEqoMZir2TNqyJ-TR8SCDQLQ56i5Y-8jWQEgMLoJRZg'

const SOCIAL_LINKS = [
  { id: 1, label: 'Github',      href: 'https://github.com/umaryun' },
  { id: 2, label: 'LinkedIn',    href: 'https://linkedin.com/ln/umar-yunusa' },
  { id: 3, label: 'X (Twitter)', href: 'https://x.com/shadowofumar' },
] as const

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Email link with expanding underline on hover */
function EmailHero() {
  const [hovered, setHovered] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const linkStyle: CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    fontFamily: '"Playfair Display", serif',
    fontSize: isDesktop ? '48px' : '28px',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    fontWeight: 600,
    color: colors.primary,
    textDecoration: 'none',
    transition: 'opacity 0.2s ease',
  }

  const underlineStyle: CSSProperties = {
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    height: '2px',
    width: hovered ? '100%' : '0%',
    backgroundColor: colors.primary,
    transition: 'width 0.5s ease',
  }

  return (
    <a
      href="mailto:umaryunusa443@gmail.com"
      style={linkStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      umaryunusa443@gmail.com
      <span style={underlineStyle} aria-hidden="true" />
    </a>
  )
}

/** Social link row with border + arrow-translate on hover */
function SocialLink({ label, href }: { label: string; href: string }) {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover()

  const rowStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '8px',
    paddingBottom: '8px',
    borderBottom: `1px solid ${isHovered ? colors.primary : colors.outlineVariant}`,
    textDecoration: 'none',
    transition: 'border-color 0.2s ease',
  }

  const iconStyle: CSSProperties = {
    fontSize: '20px',
    color: colors.onBackground,
    transform: isHovered ? 'translate(4px, -4px)' : 'translate(0, 0)',
    transition: 'transform 0.2s ease',
  }

  return (
    <a
      href={href}
      style={rowStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      target="_blank"
      rel="noreferrer"
    >
      <span style={{ ...type.headlineSm, color: colors.primary }}>{label}</span>
      <span className="material-symbols-outlined" style={iconStyle}>
        north_east
      </span>
    </a>
  )
}

/** Pulsing availability card */
function AvailabilityCard() {
  const cardStyle: CSSProperties = {
    marginTop: '48px',
    padding: '32px',
    backgroundColor: colors.surfaceContainerLow,
    border: `1px solid ${colors.outlineVariant}`,
  }

  const dotWrapStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  }

  const dotOuterStyle: CSSProperties = {
    position: 'relative',
    display: 'flex',
    width: '12px',
    height: '12px',
    flexShrink: 0,
  }

  const dotPingStyle: CSSProperties = {
    position: 'absolute',
    display: 'inline-flex',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: colors.secondary,
    opacity: 0.75,
  }

  const dotCoreStyle: CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: colors.secondary,
  }

  const statusStyle: CSSProperties = {
    ...type.labelCaps,
    fontSize: '10px',
    letterSpacing: '0.15em',
    color: colors.secondary,
  }

  return (
    <div style={cardStyle}>
      <h3
        style={{
          ...type.labelCaps,
          color: colors.primary,
          marginTop: 0,
          marginBottom: '16px',
        }}
      >
        CURRENT AVAILABILITY
      </h3>
      <p
        style={{
          ...type.bodyMd,
          color: colors.onSurfaceVariant,
          marginTop: 0,
          marginBottom: '24px',
        }}
      >
        Open for product engineering roles and high-impact AI consulting projects. Let's build something exceptional together.
      </p>
      <div style={dotWrapStyle}>
        <span style={dotOuterStyle}>
          <span className="ping" style={dotPingStyle} />
          <span style={dotCoreStyle} />
        </span>
        <span style={statusStyle}>ACTIVE STATUS</span>
      </div>
    </div>
  )
}

/** Full-width architectural image */
function ArchImage() {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover()
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <div
      ref={ref}
      style={{
        paddingLeft: isDesktop ? layout.marginDesktop : layout.marginMobile,
        paddingRight: isDesktop ? layout.marginDesktop : layout.marginMobile,
        paddingBottom: layout.sectionGap,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <div
        style={{
          aspectRatio: '21 / 9',
          width: '100%',
          backgroundColor: colors.surfaceContainer,
          overflow: 'hidden',
          filter: 'grayscale(100%) contrast(1.25)',
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img
          src={ARCH_IMAGE}
          alt="Modernist concrete architecture in Lagos at dusk"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.8,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 1s ease',
          }}
        />
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function ContactPage() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { ref: gridRef, isVisible: gridVisible } = useIntersectionObserver<HTMLDivElement>()

  const mainPadding: CSSProperties = {
    maxWidth: layout.containerMax,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: isDesktop ? layout.marginDesktop : layout.marginMobile,
    paddingRight: isDesktop ? layout.marginDesktop : layout.marginMobile,
  }

  // ── Hero ──
  const heroStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: layout.sectionGap,
    paddingBottom: '64px',
    paddingLeft: isDesktop ? layout.marginDesktop : layout.marginMobile,
    paddingRight: isDesktop ? layout.marginDesktop : layout.marginMobile,
    textAlign: 'center',
  }

  const heroHeadingStyle: CSSProperties = {
    ...(isDesktop ? type.displayLg : type.displayLgMobile),
    color: colors.primary,
    marginTop: 0,
    marginBottom: '32px',
  }

  // ── Details grid ──
  const detailsStyle: CSSProperties = {
    ...mainPadding,
    paddingTop: layout.sectionGap,
    paddingBottom: layout.sectionGap,
  }

  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isDesktop ? 'repeat(12, 1fr)' : '1fr',
    gap: layout.gutter,
    borderTop: `1px solid ${colors.outlineVariant}`,
    paddingTop: '64px',
    opacity: gridVisible ? 1 : 0,
    transform: gridVisible ? 'translateY(0)' : 'translateY(24px)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  }

  const leftColStyle: CSSProperties = {
    gridColumn: isDesktop ? '1 / span 5' : '1 / -1',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  }

  const rightColStyle: CSSProperties = {
    gridColumn: isDesktop ? '8 / span 5' : '1 / -1',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    marginTop: isDesktop ? 0 : '64px',
  }

  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh' }}>
        {/* ── Hero ── */}
        <section style={heroStyle}>
          <h1 style={heroHeadingStyle}>Let's collaborate</h1>
          <div style={{ marginTop: '32px' }}>
            <EmailHero />
          </div>
        </section>

        {/* ── Details grid ── */}
        <section style={detailsStyle}>
          <div ref={gridRef} style={gridStyle}>
            {/* Social links */}
            <div style={leftColStyle}>
              <h2
                style={{
                  ...type.labelCaps,
                  color: colors.onSurfaceVariant,
                  opacity: 0.6,
                  margin: 0,
                }}
              >
                SOCIAL
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.id}>
                    <SocialLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Location + availability */}
            <div style={rightColStyle}>
              <h2
                style={{
                  ...type.labelCaps,
                  color: colors.onSurfaceVariant,
                  opacity: 0.6,
                  margin: 0,
                }}
              >
                LOCATION
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p style={{ ...type.headlineSm, color: colors.primary, margin: 0 }}>Lagos, NG</p>
                <p style={{ ...type.bodyLg, color: colors.onSurfaceVariant, margin: 0 }}>
                  Available for remote worldwide.
                </p>
              </div>
              <AvailabilityCard />
            </div>
          </div>
        </section>

        {/* ── Full-width image ── */}
        <ArchImage />
      </main>
      <SimpleFooter />
    </>
  )
}
