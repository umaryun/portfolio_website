import type { CSSProperties } from 'react'

// ─── Colour palette ──────────────────────────────────────────────────────────
export const colors = {
  primary: '#000000',
  onPrimary: '#ffffff',
  background: '#faf9f6',
  onBackground: '#1a1c1a',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f4f3f1',
  surfaceContainer: '#efeeeb',
  outlineVariant: '#c4c7c7',
  outline: '#747878',
  onSurfaceVariant: '#444748',
  secondaryFixed: '#b1eeed',
  secondary: '#2a6767',
} as const

// ─── Font families ────────────────────────────────────────────────────────────
export const fonts = {
  display: '"Playfair Display", serif',
  body: '"DM Sans", sans-serif',
} as const

// ─── Typography scale ─────────────────────────────────────────────────────────
export const type = {
  displayLg: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '64px',
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    fontWeight: 700,
  } as CSSProperties,

  displayLgMobile: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '40px',
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
    fontWeight: 700,
  } as CSSProperties,

  headlineMd: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '32px',
    lineHeight: 1.3,
    fontWeight: 600,
  } as CSSProperties,

  headlineSm: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '24px',
    lineHeight: 1.4,
    fontWeight: 500,
  } as CSSProperties,

  bodyLg: {
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '18px',
    lineHeight: 1.6,
    letterSpacing: '-0.01em',
    fontWeight: 400,
  } as CSSProperties,

  bodyMd: {
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '16px',
    lineHeight: 1.6,
    fontWeight: 400,
  } as CSSProperties,

  labelCaps: {
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '12px',
    lineHeight: 1.2,
    letterSpacing: '0.1em',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
  } as CSSProperties,

  captionItalic: {
    fontFamily: '"Playfair Display", serif',
    fontSize: '14px',
    lineHeight: 1.5,
    fontWeight: 400,
    fontStyle: 'italic',
  } as CSSProperties,
}

// ─── Layout constants ─────────────────────────────────────────────────────────
export const layout = {
  containerMax: '1280px',
  marginDesktop: '64px',
  marginMobile: '20px',
  sectionGap: '128px',
  gutter: '32px',
} as const
