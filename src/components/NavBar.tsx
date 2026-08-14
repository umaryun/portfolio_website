import { useState } from 'react'
import type { CSSProperties } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { colors, type, layout } from '../tokens'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useHover } from '../hooks/useHover'

// ─── Types & data ─────────────────────────────────────────────────────────────

interface NavLinkProps {
  to: string
  label: string
  active: boolean
  onClick?: () => void
}

const NAV_LINKS = [
  { to: '/',        label: 'Work'    },
  { to: '/writing', label: 'Writing' },
  { to: '/about',   label: 'About'   },
  { to: '/contact', label: 'Contact' },
] as const

// ─── Sub-components ───────────────────────────────────────────────────────────

function NavLink({ to, label, active, onClick }: NavLinkProps) {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover()

  const linkStyle: CSSProperties = {
    ...type.labelCaps,
    color: active || isHovered ? colors.primary : colors.onSurfaceVariant,
    borderBottom: active ? `2px solid ${colors.primary}` : '2px solid transparent',
    paddingBottom: '4px',
    cursor: 'pointer',
    transition: 'color 0.2s ease, border-color 0.2s ease',
    textDecoration: 'none',
  }

  return (
    <Link
      to={to}
      style={linkStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {label}
    </Link>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { pathname } = useLocation()

  const isActive = (to: string): boolean => pathname === to

  const closeMobile = () => setMobileOpen(false)

  const headerStyle: CSSProperties = {
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 50,
    backgroundColor: 'rgba(250, 249, 246, 0.85)',
    backdropFilter: 'blur(8px)',
    borderBottom: `1px solid ${colors.outlineVariant}`,
  }

  const innerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
    paddingLeft: isDesktop ? layout.marginDesktop : layout.marginMobile,
    paddingRight: isDesktop ? layout.marginDesktop : layout.marginMobile,
    maxWidth: layout.containerMax,
    margin: '0 auto',
  }

  const logoStyle: CSSProperties = {
    ...type.bodyLg,
    fontWeight: 700,
    letterSpacing: '-0.05em',
    color: colors.primary,
    textDecoration: 'none',
  }

  const mobileMenuStyle: CSSProperties = {
    backgroundColor: 'rgba(250, 249, 246, 0.97)',
    borderTop: `1px solid ${colors.outlineVariant}`,
    paddingTop: '16px',
    paddingBottom: '16px',
    paddingLeft: layout.marginMobile,
    paddingRight: layout.marginMobile,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  }

  return (
    <header style={headerStyle}>
      <nav style={innerStyle}>
        <Link to="/" style={logoStyle}>UMAR YUNUSA</Link>

        {isDesktop ? (
          <div style={{ display: 'flex', gap: '32px' }}>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                label={link.label}
                active={isActive(link.to)}
              />
            ))}
          </div>
        ) : (
          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined" style={{ color: colors.primary }}>
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        )}
      </nav>

      {!isDesktop && mobileOpen && (
        <div style={mobileMenuStyle}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              label={link.label}
              active={isActive(link.to)}
              onClick={closeMobile}
            />
          ))}
        </div>
      )}
    </header>
  )
}
