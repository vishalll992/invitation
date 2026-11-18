import Page from '../components/Page.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import { images } from '../content.js'

const rnd = (n) => { const x = Math.sin(n * 91.7) * 10000; return x - Math.floor(x) }
const GREENS = ['#4f8a45', '#6aa35a', '#3f7a3c', '#82b366']
const BLOOMS = ['#8e5bd0', '#f5d03c', '#ffffff', '#f08fb0', '#f5d03c']
const ARCH = 'M12 640V240C12 120 80 44 180 14C280 44 348 120 348 240V640'

function Foliage() {
  const items = []
  let n = 0
  const add = (x, y, spread = 14, yellow = false) => {
    for (let j = 0; j < 4; j++) {
      n++
      items.push(
        <ellipse key={items.length} cx={x + (rnd(n) - 0.5) * spread} cy={y + (rnd(n + 1) - 0.5) * spread}
          rx="9" ry="3.6" transform={`rotate(${rnd(n + 2) * 360} ${x} ${y})`} fill={GREENS[(n + j) % 4]} />
      )
    }
    if (rnd(n + 7) > 0.3) {
      items.push(
        <circle key={items.length} cx={x + (rnd(n + 3) - 0.5) * spread} cy={y + (rnd(n + 4) - 0.5) * spread}
          r={2.6 + rnd(n + 5) * 1.8} fill={yellow ? '#f5d03c' : BLOOMS[Math.floor(rnd(n + 6) * 5)]} />
      )
    }
  }
  for (let k = 0; k <= 46; k++) {
    const a = Math.PI + (k * Math.PI) / 46
    add(180 + 160 * Math.cos(a), 240 + 218 * Math.sin(a), 16)
    add(180 + 148 * Math.cos(a), 240 + 204 * Math.sin(a), 18)
  }
  for (let y = 250; y < 560; y += 13) { add(24, y, 14, true); add(336, y, 14, true) }
  return <g>{items}</g>
}

function Vine({ x, len }) {
  const top = 240 - 226 * Math.sqrt(Math.max(0, 1 - ((x - 180) / 168) ** 2)) + 8
  const leaves = []
  for (let y = top + 12; y < top + len; y += 11) {
    leaves.push(<ellipse key={y} cx={x + (y % 22 ? 5 : -5)} cy={y} rx="6" ry="2.6" fill={GREENS[Math.floor(y) % 4]} transform={`rotate(${y % 22 ? 30 : -30} ${x} ${y})`} />)
  }
  return <g><path d={`M${x} ${top}V${top + len}`} stroke="#4f8a45" strokeWidth="1.2" />{leaves}</g>
}

function Canopy({ x, y, s = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className="rc-sway">
        <path d="M0 -100V-34" stroke="#b8862d" strokeWidth="1.2" />
        <path d="M-36 0Q-34 -26 0 -34Q34 -26 36 0Q18 9 0 0Q-18 9 -36 0Z" fill="url(#rcGold)" stroke="#9a6a1c" strokeWidth="1.2" />
        {[-24, -12, 0, 12, 24].map((v) => (
          <path key={v} d={`M0 -34Q${v * 1.1} -14 ${v} 3`} fill="none" stroke="#9a6a1c" strokeWidth=".8" />
        ))}
        {[-30, -18, -6, 6, 18, 30].map((v, i) => (
          <g key={v}>
            <path d={`M${v} 4V13`} stroke="#b8862d" strokeWidth=".8" />
            <circle cx={v} cy="15" r="2.2" fill={['#e8508a', '#3fa7d6', '#f5c945'][i % 3]} />
          </g>
        ))}
      </g>
    </g>
  )
}

function Tassel({ x, y, len = 60 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="rc-sway">
        <path d={`M0 0V${len}`} stroke="#b8862d" strokeWidth="1" />
        <path d={`M0 ${len}l5 7-5 7-5-7z`} fill="url(#rcGold)" />
        {[-6, -2, 2, 6].map((v, i) => (
          <path key={v} d={`M${v} ${len + 13}v11`} stroke={['#e8508a', '#3fa7d6'][i % 2]} strokeWidth="1.6" />
        ))}
      </g>
    </g>
  )
}

function Butterfly({ x, y, c, d }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="rc-fly" style={{ animationDelay: `${d}s` }}>
        <path d="M0 0Q-12 -13 -10 -2Q-8 7 0 4Z" fill={c} />
        <path d="M0 0Q12 -13 10 -2Q8 7 0 4Z" fill={c} />
        <path d="M0 -2V6" stroke="#5a1330" strokeWidth="1" />
      </g>
    </g>
  )
}

function Backdrop() {
  return (
    <svg className="rc-bg" viewBox="0 0 360 640" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="rcGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbe08f" /><stop offset="1" stopColor="#c68a22" />
        </linearGradient>
        <linearGradient id="rcWood" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9a46b" /><stop offset="1" stopColor="#b8814a" />
        </linearGradient>
        <pattern id="rcPat" width="14" height="14" patternUnits="userSpaceOnUse">
          <rect width="14" height="14" fill="#e3a06f" />
          <circle cx="7" cy="7" r="3" fill="#2f8f8a" />
          <circle cx="0" cy="0" r="2" fill="#c9582f" /><circle cx="14" cy="14" r="2" fill="#c9582f" />
        </pattern>
        <pattern id="rcDam" width="44" height="44" patternUnits="userSpaceOnUse">
          <path d="M22 4Q30 14 22 22Q14 14 22 4ZM22 22Q30 30 22 40Q14 30 22 22Z" fill="none" stroke="#eadcc2" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="360" height="640" fill="#fffaf0" />
      <rect width="360" height="640" fill="url(#rcDam)" />
      <path d={`M0 0H360V640H0Z${ARCH}Z`} fill="url(#rcPat)" fillRule="evenodd" />
      <path d={ARCH} fill="none" stroke="#c9922e" strokeWidth="4" />
      <path d={ARCH} fill="none" stroke="#f3d48a" strokeWidth="1.2" transform="translate(5 0)" />

      <Foliage />
      {[48, 92, 140, 225, 270, 314].map((x, i) => <Vine key={x} x={x} len={[70, 110, 60, 65, 120, 75][i]} />)}

      <Canopy x={122} y={132} />
      <Canopy x={188} y={146} s={1.2} />
      <Canopy x={260} y={126} />
      <Tassel x={60} y={70} len={80} />
      <Tassel x={98} y={90} len={60} />
      <Tassel x={300} y={72} len={90} />
      <Tassel x={330} y={110} len={50} />

      <Butterfly x={80} y={158} c="#e8508a" d={0} />
      <Butterfly x={246} y={92} c="#3fa7d6" d={1} />
      <Butterfly x={300} y={188} c="#ff9f68" d={1.8} />

      <rect x="0" y="556" width="360" height="9" fill="#efe3cf" stroke="#cdb792" />
      {Array.from({ length: 16 }, (_, i) => (
        <rect key={i} x={10 + i * 23} y="565" width="10" height="26" rx="4" fill="#eadcc4" stroke="#cdb792" />
      ))}
      <rect x="0" y="590" width="360" height="50" fill="url(#rcWood)" />
      <path d="M0 606H360M0 622H360" stroke="#a9763f" strokeWidth="1" />
    </svg>
  )
}

export default function RingCeremonyPage({ t }) {
  return (
    <Page bgIndex={2}>
      <section className="rc-scene">
        <Backdrop />
        <p className="rc-invited">{t.rcInvited}</p>
         <div className="rc-couple">
  <ImageSlot file={images.ring} label="Ring image" shape="wide" />
</div>

<h1 className="rc-title">{t.ring}</h1>
<p className="rc-of">{t.rcOf}</p>

<div className="rc-ring">
  <ImageSlot file={images.ringCouple} label="Add Ring Ceremony couple photo" shape="square" />
</div>
       
      </section>
    </Page>
  )
}