import { useState } from 'react'
import type { CSSProperties } from 'react'
import { colors, type, layout } from '../tokens'
import { useMediaQuery } from '../hooks/useMediaQuery'

// ─── Data ─────────────────────────────────────────────────────────────────────

interface FooterLink {
  href: string
  label: string
}

const LINKS: readonly FooterLink[] = [
  { href: 'mailto:umaryunusa443@gmail.com', label: 'EMAIL'     },
  { href: 'https://x.com/shadowofumar',          label: 'TWITTER'   },
  { href: 'https://linkedin.com/ln/umar-yunusa', label: 'LINKEDIN' },
  { href: 'https://github.com/umaryun',    label: 'GITHUB'    },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SimpleFooterLink({ href, label }: FooterLink) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      style={{
        ...type.labelCaps,
        color: hovered ? colors.primary : colors.onSurfaceVariant,
        textDecoration: 'none',
        transition: 'color 0.2s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function SimpleFooter() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const footerStyle: CSSProperties = {
    width: '100%',
    paddingTop: layout.sectionGap,
    paddingBottom: layout.sectionGap,
    paddingLeft: isDesktop ? layout.marginDesktop : layout.marginMobile,
    paddingRight: isDesktop ? layout.marginDesktop : layout.marginMobile,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    borderTop: `1px solid ${colors.outlineVariant}`,
    backgroundColor: colors.background,
  }

  const nameStyle: CSSProperties = {
    ...type.headlineSm,
    color: colors.primary,
    fontWeight: 700,
    letterSpacing: '-0.02em',
    textTransform: 'uppercase' as const,
    marginBottom: '32px',
  }

  const navStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '48px',
    marginBottom: '64px',
  }

  const copyrightStyle: CSSProperties = {
    ...type.labelCaps,
    color: colors.onSurfaceVariant,
    opacity: 0.4,
  }

  return (
    <footer style={footerStyle}>
      <span style={nameStyle}>UMAR YUNUSA</span>

      <nav style={navStyle}>
        {LINKS.map((link) => (
          <SimpleFooterLink key={link.label} {...link} />
        ))}
      </nav>

      <p style={copyrightStyle}>© 2026 PORTFOLIO. ALL RIGHTS RESERVED.</p>
    </footer>
  )
}
