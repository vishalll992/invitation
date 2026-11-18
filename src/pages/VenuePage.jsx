
import Page from '../components/Page.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import { images } from '../content.js'

const VENUE_ADDRESS =
  'Maharaja Banquet Madhav Mahal 1st Floor near s.k. Stone Police Chowki, Station road , Mira road (E) , @Thane -401107'

const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUE_ADDRESS)}`

export default function VenuePage({ t }) {
  return (
    <Page bgIndex={4}>
      <h2 className="title">{t.venue}</h2>

      <ImageSlot
        file={images.venue}
        label="Venue picture"
        shape="wide"
      />

      <p className="body venue-address">
        {VENUE_ADDRESS}
      </p>

      <p className="body accent">{t.date}</p>

      <a
        className="btn"
        href={MAP_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.map}
      </a>
    </Page>
  )
}
