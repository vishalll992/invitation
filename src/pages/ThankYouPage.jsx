import Page from '../components/Page.jsx'
import ImageSlot from '../components/ImageSlot.jsx'
import { images } from '../content.js'

export default function ThankYouPage({ t }) {
  return (
    <Page bgIndex={5}>
      <h2 className="names">{t.thanks}</h2>
      <p className="body">{t.thanks2}</p>
      <ImageSlot file={images.thanks} label="Thank you picture" shape="tall" />
      <p className="small">{t.thanks3}</p>
    </Page>
  )
}
