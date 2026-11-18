import Page from '../components/Page.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import { images } from '../content.js'

export default function FoodPage({ t }) {
  return (
    <Page bgIndex={3}>
      <h2 className="title">{t.food}</h2>
      <ImageSlot file={images.food} label="Food picture" shape="wide" />
      <div className="card">
        {t.menu.map((m) => <div key={m}>{m}</div>)}
      </div>
    </Page>
  )
}
