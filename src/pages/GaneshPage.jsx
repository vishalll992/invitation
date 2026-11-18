import Page from '../components/Page.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import { images } from '../content.js'
import { GoldDefs, Lantern, Sprig, Petals, Lotus } from '../components/Decor.jsx'

const RAYS = Array.from({ length: 24 }, (_, i) => i * 15)

function Halo() {
  return (
    <svg className="gn-halo" viewBox="-110 -110 220 220" aria-hidden="true">
      <defs>
        <radialGradient id="gnHalo">
          <stop offset="0" stopColor="#fffbea" />
          <stop offset=".7" stopColor="#fff0c9" />
          <stop offset="1" stopColor="#f6d58e" />
        </radialGradient>
      </defs>
      <g>
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="80s" repeatCount="indefinite" />
        {RAYS.map((a) => (
          <line key={a} x1="0" y1="-98" x2="0" y2="-108" transform={`rotate(${a})`} stroke="#d9a94a" strokeWidth="2.4" strokeLinecap="round" />
        ))}
      </g>
      <circle r="94" fill="url(#gnHalo)" stroke="#c9a057" strokeWidth="2" />
      <circle r="86" fill="none" stroke="#c9a057" strokeWidth=".8" strokeDasharray="2 4" />
      <circle r="78" fill="none" stroke="#e5c27a" strokeWidth=".8" />
    </svg>
  )
}

export default function GaneshPage({ t }) {
  return (
    <Page bgIndex={0}>
      <section className="ganesh-scene">
        <GoldDefs />
        <div className="gn-temple" />
        <div className="eng-glow" />
        <Petals />

        <Lantern className="eng-l1" />
        <Lantern className="eng-l2" />
        <Sprig className="eng-sp-l" />
        <Sprig className="eng-sp-r" />

        <p className="gn-heading">॥ {t.tap} ॥</p>

        <div className="gn-deity">
          <Halo />
          <ImageSlot file={images.ganesh} label="Lord Ganesha" shape="square" />
        </div>

        <div className="gn-shloka">
          {t.shl[0]}
          <br />
          {t.shl[1]}
        </div>

        <svg className="gn-orn" viewBox="0 0 120 12" aria-hidden="true">
          <path d="M0 6H48M72 6H120" stroke="#c9a057" strokeWidth="1" />
          <path d="M60 0l6 6-6 6-6-6z" fill="#a52c66" />
        </svg>
        <p className="gn-blessing">शुभारम्भ • मंगलमय भविष्य</p>

        <Lotus className="gn-lo-l" />
        <Lotus className="gn-lo-r" />
        <Lotus className="gn-lo-ml" />
        <Lotus className="gn-lo-mr" />
      </section>
    </Page>
  )
}