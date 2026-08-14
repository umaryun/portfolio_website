import { useState } from 'react'
import type { CSSProperties } from 'react'
import { NavBar } from '../components/NavBar'
import { SimpleFooter } from '../components/SimpleFooter'
import { articles } from '../data/articles'
import type { Article } from '../types'
import { colors, type, layout } from '../tokens'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

// ─── Archive button ────────────────────────────────────────────────────────────

function ArchiveButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      style={{
        backgroundColor: hovered ? 'transparent' : colors.primary,
        color: hovered ? colors.primary : colors.onPrimary,
        border: `1px solid ${colors.primary}`,
        padding: '12px 32px',
        ...type.labelCaps,
        letterSpacing: '0.15em',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      VIEW ARCHIVE
    </button>
  )
}

// ─── Article row ──────────────────────────────────────────────────────────────

interface ArticleRowProps {
  article: Article
  isListHovered: boolean
  isThisHovered: boolean
  onHoverEnter: () => void
  onHoverLeave: () => void
}

function ArticleRow({
  article,
  isListHovered,
  isThisHovered,
  onHoverEnter,
  onHoverLeave,
}: ArticleRowProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()
  const isDesktop = useMediaQuery('(min-width: 768px)')

  // Compose: scroll-reveal opacity + hover-dim opacity
  const opacity = !isVisible
    ? 0
    : isListHovered && !isThisHovered
      ? 0.4
      : 1

  const revealStyle: CSSProperties = {
    opacity,
    transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
    transition: 'opacity 0.3s ease, transform 0.7s ease',
  }

  const articleStyle: CSSProperties = {
    display: 'flex',
    flexDirection: isDesktop ? 'row' : 'column',
    paddingTop: '48px',
    paddingBottom: '48px',
    borderBottom: `1px solid ${colors.outlineVariant}`,
  }

  const dateColStyle: CSSProperties = {
    width: isDesktop ? '25%' : '100%',
    flexShrink: 0,
    marginBottom: isDesktop ? 0 : '16px',
  }

  const contentColStyle: CSSProperties = {
    flex: 1,
  }

  const readLinkStyle: CSSProperties = {
    ...type.labelCaps,
    color: colors.primary,
    textDecoration: isThisHovered ? 'underline' : 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  }

  const arrowStyle: CSSProperties = {
    fontSize: '18px',
    transform: isThisHovered ? 'translateX(4px)' : 'translateX(0)',
    transition: 'transform 0.2s ease',
  }

  return (
    <div ref={ref} style={revealStyle}>
      <article
        style={articleStyle}
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
      >
        {/* Date */}
        <div style={dateColStyle}>
          <span style={{ ...type.labelCaps, color: colors.onSurfaceVariant, opacity: 0.6 }}>
            {article.date}
          </span>
        </div>

        {/* Content */}
        <div style={contentColStyle}>
          <h2
            style={{
              ...type.headlineMd,
              color: colors.primary,
              marginTop: 0,
              marginBottom: '12px',
            }}
          >
            {article.title}
          </h2>
          <p
            style={{
              ...type.bodyMd,
              color: colors.onSurfaceVariant,
              lineHeight: 1.7,
              marginTop: 0,
              marginBottom: '24px',
            }}
          >
            {article.description}
          </p>
          <a href={article.href} style={readLinkStyle}>
            READ ARTICLE
            <span className="material-symbols-outlined" style={arrowStyle}>
              arrow_forward
            </span>
          </a>
        </div>
      </article>
    </div>
  )
}

// ─── Writing Page ─────────────────────────────────────────────────────────────

export function WritingPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const heroStyle: CSSProperties = {
    paddingTop: layout.sectionGap,
    paddingBottom: '128px',
    paddingLeft: isDesktop ? layout.marginDesktop : layout.marginMobile,
    paddingRight: isDesktop ? layout.marginDesktop : layout.marginMobile,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const listSectionStyle: CSSProperties = {
    maxWidth: '896px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: isDesktop ? layout.marginDesktop : layout.marginMobile,
    paddingRight: isDesktop ? layout.marginDesktop : layout.marginMobile,
    paddingBottom: layout.sectionGap,
  }

  return (
    <>
      <NavBar />
      <main>
        {/* ── Hero ── */}
        <section style={heroStyle}>
          <h1
            style={{
              ...(isDesktop ? type.displayLg : type.displayLgMobile),
              color: colors.primary,
              textAlign: 'center',
              margin: 0,
            }}
          >
            Writing
          </h1>
          <p
            style={{
              ...type.bodyLg,
              color: colors.onSurfaceVariant,
              marginTop: '24px',
              marginBottom: 0,
              maxWidth: '520px',
              textAlign: 'center',
            }}
          >
            Thoughts on building intelligent interfaces, the intersection of product engineering
            and machine learning, and the future of creative tools.
          </p>
        </section>

        {/* ── Article list ── */}
        <section style={listSectionStyle}>
          {articles.map((article) => (
            <ArticleRow
              key={article.id}
              article={article}
              isListHovered={hoveredId !== null}
              isThisHovered={hoveredId === article.id}
              onHoverEnter={() => setHoveredId(article.id)}
              onHoverLeave={() => setHoveredId(null)}
            />
          ))}

          <div style={{ paddingTop: '64px', paddingBottom: '64px', display: 'flex', justifyContent: 'center' }}>
            <ArchiveButton />
          </div>
        </section>
      </main>
      <SimpleFooter />
    </>
  )
}
