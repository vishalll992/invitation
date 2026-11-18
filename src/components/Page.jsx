import { images } from '../content.js'

// One full page of the invitation. `bgIndex` picks the optional bg-N.png image.
export default function Page({ bgIndex, children }) {
  const src = `${import.meta.env.BASE_URL}images/${images.bg[bgIndex]}`
  return (
    <section className="page">
      <img className="page-bg" src={src} alt="" onError={(e) => (e.currentTarget.style.display = 'none')} />
      <div className="page-inner">{children}</div>
    </section>
  )
}
