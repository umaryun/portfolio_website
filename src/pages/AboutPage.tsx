import type { CSSProperties } from 'react'
import { NavBar } from '../components/NavBar'
import { SimpleFooter } from '../components/SimpleFooter'
import { colors, type, layout } from '../tokens'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useHover } from '../hooks/useHover'

// ─── Constants ────────────────────────────────────────────────────────────────

const WORKSPACE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAUisfaTwOKAWBD0xYK6yTjiVEIAvSDJzQCqXUZJpGhTvhd0_k8zM75-qJd2aIytiyTi1jjWysTIMqYtKB80YrMT1t1SZGNYv-uRomY8d5jtnWVIOTCcodNVCTBDL5oTyPm-tqogxxsW6CySasySPtpwqQx7c5rLe5EL9ifk2yqbo4cAihdSTyaWWxnjAwRmzKQN4nKJ2vvQfzVOPoYelsHwOB1QweIYA14vtscy1dve31DyS-xTT8HjJrXI079cFcC4VTwZjGFHNM'

const PHILOSOPHY = [
  {
    id: 1,
    title: 'Technical Integrity',
    body: 'Code is not just a means to an end; it is the structural foundation of the user experience. I prioritize performance, safety, and clean architecture as the primary aesthetic of my work.',
  },
  {
    id: 2,
    title: 'Editorial Precision',
    body: "Interfaces should guide the user's attention with the same intent as a well-designed magazine. Minimalist layouts allow the content and the AI's output to breathe and remain authoritative.",
  },
  {
    id: 3,
    title: 'Human Centricity',
    body: 'AI models are tools, not replacements. My design process starts with human psychology—understanding how we trust, how we interpret data, and how we interact with intelligent agents.',
  },
]

const TECH_STACK = [
  {
    id: 1,
    category: 'ENGINEERING',
    items: ['TYPESCRIPT', 'JAVASCRIPT', 'PYTHON', 'REACT / NEXT.JS', 'FASTAPI', 'NODE.JS'],
  },
  {
    id: 2,
    category: 'AI & AUTOMATION',
    items: ['LLM API INTEGRATION', 'LANGCHAIN', 'N8N WORKFLOWS', 'MAKE', 'WEBHOOK ARCHITECTURE', 'SCIKIT-LEARN', 'PANDAS'],
  },
  {
    id: 3,
    category: 'DATABASE & DEVOPS',
    items: ['POSTGRESQL', 'VECTOR DB', 'SUPABASE', 'SQLALCHEMY', 'DOCKER', 'VERCEL', 'RAILWAY', 'GITHUB'],
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function PhilosophyCard({ title, body }: { title: string; body: string }) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <h3 style={{ ...type.headlineSm, color: colors.primary, margin: 0 }}>{title}</h3>
      <p style={{ ...type.bodyMd, color: colors.onSurfaceVariant, margin: 0 }}>{body}</p>
    </div>
  )
}

function TechColumn({ category, items }: { category: string; items: readonly string[] }) {
  return (
    <div>
      <p
        style={{
          ...type.labelCaps,
          color: colors.primary,
          letterSpacing: '0.15em',
          marginTop: 0,
          marginBottom: '16px',
        }}
      >
        {category}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {items.map((item) => (
          <li key={item} style={{ ...type.bodyMd, color: colors.onSurfaceVariant }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Workspace image with hover greyscale toggle ──────────────────────────────

function WorkspaceImage() {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover()
  const isLarge = useMediaQuery('(min-width: 1024px)')

  return (
    <div
      style={{
        border: `1px solid ${colors.outlineVariant}`,
        padding: '8px',
        overflow: 'hidden',
        position: 'relative',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={WORKSPACE_IMAGE}
        alt="Workspace"
        style={{
          width: '100%',
          height: 'auto',
          aspectRatio: '4 / 5',
          objectFit: 'cover',
          display: 'block',
          filter: isHovered ? 'none' : 'grayscale(100%)',
          transition: 'filter 0.7s ease',
        }}
      />

      {isLarge && (
        <div
          style={{
            position: 'absolute',
            bottom: '-16px',
            left: '-16px',
            backgroundColor: colors.surfaceContainer,
            border: `1px solid ${colors.outlineVariant}`,
            padding: '16px',
          }}
        >
          <span style={{ ...type.captionItalic, color: colors.onSurfaceVariant }}>
            Studio Residency, 2024
          </span>
        </div>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function AboutPage() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const isSmall   = useMediaQuery('(min-width: 640px)')

  const { ref: textRef, isVisible: textVisible } = useIntersectionObserver<HTMLDivElement>()

  const mainPadding: CSSProperties = {
    maxWidth: layout.containerMax,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: isDesktop ? layout.marginDesktop : layout.marginMobile,
    paddingRight: isDesktop ? layout.marginDesktop : layout.marginMobile,
  }

  // ── Hero section ──
  const heroStyle: CSSProperties = {
    ...mainPadding,
    paddingTop: layout.sectionGap,
    paddingBottom: layout.sectionGap,
    display: 'grid',
    gridTemplateColumns: isDesktop ? '7fr 5fr' : '1fr',
    gap: '64px',
    alignItems: 'center',
  }

  const textColStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    opacity: textVisible ? 1 : 0,
    transform: textVisible ? 'translateY(0)' : 'translateY(24px)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  }

  const headingStyle: CSSProperties = {
    ...(isDesktop ? type.displayLg : type.displayLgMobile),
    color: colors.primary,
    marginTop: 0,
    marginBottom: '32px',
    maxWidth: '640px',
  }

  // ── Philosophy section ──
  const philosophyStyle: CSSProperties = {
    ...mainPadding,
    paddingTop: layout.sectionGap,
    paddingBottom: layout.sectionGap,
    borderTop: `1px solid ${colors.outlineVariant}`,
  }

  const philosophyGridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : '1fr',
    gap: layout.gutter,
    marginTop: '64px',
  }

  // ── Tech stack section ──
  const techStyle: CSSProperties = {
    ...mainPadding,
    paddingTop: layout.sectionGap,
    paddingBottom: layout.sectionGap,
    borderTop: `1px solid ${colors.outlineVariant}`,
  }

  const techInnerStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isDesktop ? '4fr 8fr' : '1fr',
    gap: layout.gutter,
  }

  const skillsGridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isSmall ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
    rowGap: '32px',
  }

  return (
    <>
      <NavBar />
      <main>
        {/* ── Hero ── */}
        <section style={heroStyle} id="about">
          {/* Text */}
          <div ref={textRef} style={textColStyle}>
            <h1 style={headingStyle}>
              Engineering at the intersection of AI and human experience
            </h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '560px' }}>
              <p style={{ ...type.bodyLg, color: colors.onSurfaceVariant, margin: 0 }}>
                I am a Product and AI Engineer dedicated to crafting interfaces that make complex
                machine intelligence feel intuitive. My work lives in the delicate balance between
                technical rigor and editorial clarity.
              </p>
              <p style={{ ...type.bodyLg, color: colors.onSurfaceVariant, margin: 0 }}>
                With a background spanning full-stack development and generative model fine-tuning,
                I build tools that empower users to co-create with technology rather than merely
                consume it. I believe the future of software isn't just about automation, but about
                augmenting human agency through thoughtful design.
              </p>
              <p style={{ ...type.bodyLg, color: colors.onSurfaceVariant, margin: 0 }}>
                Currently based in Lagos, Nigeria, I collaborate with teams that prioritize
                intellectual depth and aesthetic precision.
              </p>
            </div>
          </div>

          {/* Image */}
          <div style={{ marginTop: isDesktop ? 0 : '48px', position: 'relative' }}>
            <WorkspaceImage />
          </div>
        </section>

        {/* ── Philosophy ── */}
        <section style={philosophyStyle}>
          <span style={{ ...type.labelCaps, color: colors.outline }}>PHILOSOPHY</span>
          <div style={philosophyGridStyle}>
            {PHILOSOPHY.map((item) => (
              <PhilosophyCard key={item.id} title={item.title} body={item.body} />
            ))}
          </div>
        </section>

        {/* ── Tech stack ── */}
        <section style={techStyle}>
          <div style={techInnerStyle}>
            <div>
              <span style={{ ...type.labelCaps, color: colors.outline }}>TECH STACK &amp; TOOLS</span>
            </div>
            <div style={skillsGridStyle}>
              {TECH_STACK.map((col) => (
                <TechColumn key={col.id} category={col.category} items={col.items} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SimpleFooter />
    </>
  )
}
