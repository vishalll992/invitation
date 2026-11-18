import Page from '../components/Page.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import { images } from '../content.js'

const LEAVES = [[14,170,-30],[22,140,20],[32,112,-35],[46,86,25],[60,62,-40],[76,38,20],[88,16,-30]]
const PETALS = [[8,'-1s','10s'],[22,'-6s','12s'],[38,'-3s','9s'],[55,'-8s','11s'],[70,'-2s','13s'],[84,'-5s','10s'],[94,'-9s','12s']]

function Lantern({ className }) {
  return (
    <svg className={`eng-lantern ${className}`} viewBox="0 0 40 120" aria-hidden="true">
      <path d="M20 0V52" stroke="#b8862d" strokeWidth="1.2" />
      <path d="M14 52h12l-2-6h-8z" fill="#9a6a1c" />
      <path d="M12 52h16l5 12v26l-5 12H12L7 90V64z" fill="url(#engGold)" stroke="#9a6a1c" strokeWidth="1.2" />
      <path d="M15 64h10v26H15z" fill="#fff3c4" opacity=".9" />
      <path d="M16 102h8l-4 14z" fill="#9a6a1c" />
    </svg>
  )
}

function Sprig({ className }) {
  return (
    <svg className={`eng-sprig ${className}`} viewBox="0 0 120 200" aria-hidden="true">
      <path d="M10 200C20 140 40 80 90 10" fill="none" stroke="#5f8f55" strokeWidth="2" />
      {LEAVES.map(([x, y, r], i) => (
        <g key={i}>
          <ellipse cx={x} cy={y} rx="14" ry="5.5" transform={`rotate(${r} ${x} ${y})`} fill={i % 2 ? '#6fa463' : '#5a8f52'} />
          {i % 3 === 0 && <circle cx={x + 10} cy={y - 8} r="5" fill="#f4a6bf" stroke="#fff" strokeWidth=".8" />}
        </g>
      ))}
    </svg>
  )
}

function Monogram() {
  return (
    <svg className="eng-monogram" viewBox="-50 -52 100 104" aria-hidden="true">
      <circle r="44" fill="rgba(255,248,235,.7)" stroke="#c9a057" strokeWidth="1.6" />
      <circle r="38" fill="none" stroke="#a52c66" strokeWidth=".6" />
      <path d="M-14 -44Q0 -60 14 -44" fill="none" stroke="#c9a057" strokeWidth="1.6" />
      <path d="M0 -58l3 4-3 4-3-4z" fill="#a52c66" />
      <text x="-13" y="12" textAnchor="middle" fontFamily="Great Vibes, cursive" fontSize="44" fill="#a52c66">V</text>
      <text x="14" y="16" textAnchor="middle" fontFamily="Great Vibes, cursive" fontSize="44" fill="#a52c66">P</text>
    </svg>
  )
}

export default function RingPage({ t }) {
  return (
    <Page bgIndex={2}>
      <section className="engagement-scene">
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <defs>
            <linearGradient id="engGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#fbe08f" />
              <stop offset="1" stopColor="#c68a22" />
            </linearGradient>
          </defs>
        </svg>

        <div className="eng-glow" />
        <div className="eng-petals">
          {PETALS.map(([l, d, s], i) => (
            <span key={i} style={{ left: `${l}%`, animationDelay: d, animationDuration: s }} />
          ))}
        </div>

        <Lantern className="eng-l1" />
        <Lantern className="eng-l2" />
        <Sprig className="eng-sp-l" />
        <Sprig className="eng-sp-r" />

        <Monogram />
        <p className="eng-top">{t.together}</p>
        <h1 className="eng-names">{t.n1} <span>&</span> {t.n2}</h1>
        <p className="eng-sub">{t.engaged}</p>

        <div className="eng-arch">
          <div className="eng-arch-glow" />
          <ImageSlot file={images.couple} label="Vikas and Priyanka" shape="tall" />
        </div>

        <div className="eng-details">
          <p className="eng-date-label">{t.saveDate}</p>
          <p className="eng-date">{t.date}</p>
          <p className="eng-event">{t.ring}</p>
        </div>
        <p className="eng-tagline">{t.tagline}</p>
      </section>
    </Page>
  )
}