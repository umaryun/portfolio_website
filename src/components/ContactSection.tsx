import { useState } from 'react'
import type { CSSProperties } from 'react'
import { colors, type, layout } from '../tokens'
import { useMediaQuery } from '../hooks/useMediaQuery'

export function ContactSection() {
  const [linkHovered, setLinkHovered] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const sectionStyle: CSSProperties = {
    padding: `${layout.sectionGap} ${isDesktop ? layout.marginDesktop : layout.marginMobile}`,
    maxWidth: layout.containerMax,
    margin: '0 auto',
    borderTop: `1px solid ${colors.outlineVariant}`,
    textAlign: 'center',
  }

  const innerStyle: CSSProperties = {
    maxWidth: '640px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '32px',
  }

  const headingStyle: CSSProperties = {
    ...(isDesktop ? type.headlineMd : type.displayLgMobile),
    color: colors.primary,
    margin: 0,
  }

  const subStyle: CSSProperties = {
    ...type.bodyLg,
    color: colors.onSurfaceVariant,
    margin: 0,
  }

  const emailStyle: CSSProperties = {
    ...type.headlineSm,
    color: colors.primary,
    textDecoration: 'underline',
    opacity: linkHovered ? 0.6 : 1,
    transition: 'opacity 0.2s ease',
    cursor: 'pointer',
  }

  return (
    <section id="contact" style={sectionStyle}>
      <div style={innerStyle}>
        <h2 style={headingStyle}>Have a project in mind?</h2>
        <p style={subStyle}>
          I'm currently open to selective consulting and full-time product roles at AI-first
          companies.
        </p>
        <a
          href="mailto:umaryunusa443@gmail.com"
          style={emailStyle}
          onMouseEnter={() => setLinkHovered(true)}
          onMouseLeave={() => setLinkHovered(false)}
        >
          umaryunusa443@gmail.com
        </a>
      </div>
    </section>
  )
}
