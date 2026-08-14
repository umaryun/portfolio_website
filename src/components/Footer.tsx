import { useState } from 'react'
import type { CSSProperties } from 'react'
import { colors, type, layout } from '../tokens'
import { useMediaQuery } from '../hooks/useMediaQuery'

// ─── Sub-components ───────────────────────────────────────────────────────────

interface FooterLinkProps {
  href: string
  label: string
}

function FooterLink({ href, label }: FooterLinkProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      style={{
        ...type.labelCaps,
        color: hovered ? colors.primary : colors.onSurfaceVariant,
        textDecoration: 'none',
        transition: 'color 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Footer() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const footerStyle: CSSProperties = {
    backgroundColor: colors.background,
    borderTop: `1px solid ${colors.outlineVariant}`,
    padding: `${layout.sectionGap} ${isDesktop ? layout.marginDesktop : layout.marginMobile}`,
  }

  const innerStyle: CSSProperties = {
    maxWidth: layout.containerMax,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  }

  const topRowStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isDesktop ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: isDesktop ? 'flex-end' : 'flex-start',
    gap: '48px',
  }

  const brandColStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  }

  const linkGroupsStyle: CSSProperties = {
    display: 'flex',
    gap: '48px',
  }

  const linkColumnStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  }

  const bottomRowStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '48px',
    borderTop: `1px solid ${colors.outlineVariant}`,
  }

  const iconStyle: CSSProperties = {
    color: colors.onSurfaceVariant,
    fontSize: '18px',
  }

  return (
    <footer style={footerStyle}>
      <div style={innerStyle}>
        {/* ── Top row: brand + links ── */}
        <div style={topRowStyle}>
          <div style={brandColStyle}>
            <span style={{ ...type.headlineMd, color: colors.primary }}>UMAR YUNUSA</span>
            <p style={{ ...type.bodyMd, color: colors.onSurfaceVariant, maxWidth: '280px', margin: 0 }}>
              Building scalable products with AI at the core.
            </p>
          </div>

          <div style={linkGroupsStyle}>
            <div style={linkColumnStyle}>
              <span style={{ ...type.labelCaps, color: colors.onSurfaceVariant }}>SOCIAL</span>
              <FooterLink href="https://github.com/umaryun" label="GITHUB"   />
              <FooterLink href="https://linkedin.com/ln/umar-yunusa" label="LINKEDIN" />
              <FooterLink href="https://x.com/shadowofumar" label="X"        />
            </div>

            <div style={linkColumnStyle}>
              <span style={{ ...type.labelCaps, color: colors.onSurfaceVariant }}>NAVI</span>
              <FooterLink href="#work"    label="WORK"    />
              <FooterLink href="#writing" label="WRITING" />
              <FooterLink href="#about"   label="ABOUT"   />
            </div>
          </div>
        </div>

        {/* ── Bottom row: copyright + icons ── */}
        <div style={bottomRowStyle}>
          <p style={{ ...type.labelCaps, color: colors.onSurfaceVariant, margin: 0 }}>
            © 2026 UMAR FARUK YUNUSA
          </p>

          <div style={{ display: 'flex', gap: '16px' }}>
            <span className="material-symbols-outlined" style={iconStyle} aria-hidden="true">circle</span>
            <span className="material-symbols-outlined" style={iconStyle} aria-hidden="true">change_history</span>
            <span className="material-symbols-outlined" style={iconStyle} aria-hidden="true">square</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
