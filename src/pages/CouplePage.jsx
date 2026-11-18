const LOTUS = [-60, -30, 0, 30, 60]
const FLOWERS = ['🌸', '🌼', '🌺', '🏵️']

// Falling flowers (fixed values so they don't jump on re-render)
const FALLING = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 7 + 5) % 92,
  delay: (i * 0.9) % 9,
  dur: 8 + (i % 5) * 1.6,
  size: 16 + (i % 4) * 5,
  emoji: FLOWERS[i % FLOWERS.length],
}))

const SPARKLES = [
  { top: '30%', left: '10%', d: 0 },
  { top: '38%', left: '86%', d: 0.8 },
  { top: '52%', left: '8%', d: 1.4 },
  { top: '60%', left: '88%', d: 0.3 },
  { top: '24%', left: '80%', d: 1.1 },
  { top: '70%', left: '16%', d: 1.8 },
]

function Lotus() {
  return (
    <svg className="lotus" viewBox="0 0 120 60" aria-hidden="true">
      {LOTUS.map((a, i) => (
        <g key={a} transform={`rotate(${a} 60 56)`}>
          <ellipse
            className="lp"
            style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            cx="60"
            cy="32"
            rx="9"
            ry="24"
            fill={a === 0 ? '#e8a2bd' : '#f3c6d7'}
            stroke="#b8923a"
            strokeWidth="1"
          />
        </g>
      ))}
      <path d="M30 56 H90" stroke="#b8923a" strokeWidth="1.5" />
      <circle cx="60" cy="56" r="3" fill="#b8923a" />
    </svg>
  )
}

function Corner({ className }) {
  return (
    <svg className={`corner ${className}`} viewBox="0 0 60 60" aria-hidden="true">
      <path d="M4 56 V16 C4 9 9 4 16 4 H56" fill="none" stroke="#b8923a" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 56 V22 C12 16 16 12 22 12 H56" fill="none" stroke="#b8923a" strokeWidth="1" />
      <circle cx="16" cy="16" r="3.5" fill="#b8923a" />
      <circle cx="30" cy="8" r="1.8" fill="#b8923a" />
      <circle cx="8" cy="30" r="1.8" fill="#b8923a" />
    </svg>
  )
}

function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span />
      <i />
      <span />
    </div>
  )
}

function Toran() {
  const beads = Array.from({ length: 9 }, (_, i) => i)
  return (
    <div className="toran" aria-hidden="true">
      {beads.map((i) => (
        <span
          key={i}
          className="bead"
          style={{
            left: `${6 + i * 11}%`,
            height: `${22 + (i % 3) * 12}px`,
            animationDelay: `${i * 0.25}s`,
          }}
        >
          <b />
        </span>
      ))}
    </div>
  )
}

function Diya() {
  return (
    <span className="diya" aria-hidden="true">
      <i className="flame" />
      <i className="bowl" />
    </span>
  )
}

export default function CouplePage({ t }) {
  const c = t.couple

  return (
    <section className="couple-page">
      <div className="card">
        {/* Falling flowers */}
        <div className="falling" aria-hidden="true">
          {FALLING.map((f, i) => (
            <span
              key={i}
              style={{
                left: `${f.left}%`,
                fontSize: `${f.size}px`,
                animationDelay: `${f.delay}s`,
                animationDuration: `${f.dur}s`,
              }}
            >
              {f.emoji}
            </span>
          ))}
        </div>

        <Toran />

        <Corner className="tl" />
        <Corner className="tr" />
        <Corner className="bl" />
        <Corner className="br" />

        {/* Sparkles */}
        {SPARKLES.map((s, i) => (
          <span
            key={i}
            className="sparkle"
            style={{ top: s.top, left: s.left, animationDelay: `${s.d}s` }}
            aria-hidden="true"
          >
            ✦
          </span>
        ))}

        <Lotus />
        <p className="blessing">{t.tap}</p>

        <Divider />

        <div className="names">
          <h1 className="name groom">{c.groom}</h1>
          <p className="parents">{c.groomParents}</p>

          <svg className="rings" viewBox="0 0 120 60" aria-hidden="true">
            <ellipse className="r1" cx="45" cy="35" rx="22" ry="14" />
            <ellipse className="r2" cx="72" cy="28" rx="22" ry="14" />
          </svg>

          <h1 className="name bride">{c.bride}</h1>
          <p className="parents">{c.brideParents}</p>
        </div>

        <Divider />

        <div className="when-row">
          <Diya />
          <p className="when">{t.date}</p>
          <Diya />
        </div>
      </div>
    </section>
  )
}