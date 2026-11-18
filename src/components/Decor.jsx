export function GoldDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <linearGradient id="engGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbe08f" />
          <stop offset="1" stopColor="#c68a22" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Lantern({ className }) {
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

const LEAVES = [[14,170,-30],[22,140,20],[32,112,-35],[46,86,25],[60,62,-40],[76,38,20],[88,16,-30]]

export function Sprig({ className }) {
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

const PETALS = [[8,'-1s','10s'],[22,'-6s','12s'],[38,'-3s','9s'],[55,'-8s','11s'],[70,'-2s','13s'],[84,'-5s','10s'],[94,'-9s','12s']]

export function Petals() {
  return (
    <div className="eng-petals">
      {PETALS.map(([l, d, s], i) => (
        <span key={i} style={{ left: `${l}%`, animationDelay: d, animationDuration: s }} />
      ))}
    </div>
  )
}

export function Lotus({ className }) {
  return (
    <svg className={`gn-lotus ${className}`} viewBox="-50 -52 100 62" aria-hidden="true">
      {[-72, 72, -40, 40, 0].map((a, i) => (
        <g key={i} transform={`rotate(${a})`}>
          <ellipse cx="0" cy="-26" rx="11" ry="26" fill={i < 2 ? '#ef9ab8' : i < 4 ? '#f7b6cb' : '#fff0f4'} stroke="#fff" strokeWidth="1" />
        </g>
      ))}
      <ellipse cx="0" cy="4" rx="30" ry="5" fill="#5a8f52" />
    </svg>
  )
}