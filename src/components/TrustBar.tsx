import type { CSSProperties } from 'react'
import { colors, type, layout } from '../tokens'
import { useMediaQuery } from '../hooks/useMediaQuery'

const COMPANIES = [
  'GRANDGALE TECHNOLOGIES',
  'eHEALTH AFRICA',
  "JERRY'S CLICK ACADEMY",
  'KLYRO SOLUTIONS',
  'SHAMROCK INNOVATIONS',
  'HEADSTARTER',
] as const

export function TrustBar() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const sectionStyle: CSSProperties = {
    borderTop: `1px solid ${colors.outlineVariant}`,
    borderBottom: `1px solid ${colors.outlineVariant}`,
    padding: `48px ${isDesktop ? layout.marginDesktop : layout.marginMobile}`,
    backgroundColor: colors.surfaceContainerLowest,
  }

  const innerStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isDesktop ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: isDesktop ? 'center' : 'flex-start',
    gap: '32px',
    maxWidth: layout.containerMax,
    margin: '0 auto',
  }

  const companiesStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: isDesktop ? '48px' : '24px',
    alignItems: 'center',
  }

  const labelStyle: CSSProperties = {
    ...type.labelCaps,
    color: colors.onSurfaceVariant,
    opacity: 0.5,
    letterSpacing: '0.12em',
    fontSize: '11px',
  }

  return (
    <div style={sectionStyle}>
      <div style={innerStyle}>
        <span style={{ ...type.labelCaps, color: colors.onSurfaceVariant, opacity: 0.7, flexShrink: 0 }}>
          COMPANIES & TEAMS
        </span>
        <div style={companiesStyle}>
          {COMPANIES.map((company) => (
            <span key={company} style={labelStyle}>{company}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

