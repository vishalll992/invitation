
import { useEffect, useState, useRef } from 'react'
import { content, SLIDE_MS } from './content.js'
import Door from './components/Door.jsx'
import GaneshPage from './pages/GaneshPage.jsx'
import WelcomePage from './pages/WelcomePage.jsx'
import RingPage from './pages/RingPage.jsx'
import CouplePage from './pages/CouplePage.jsx'
import VenuePage from './pages/VenuePage.jsx'
import ThankYouPage from './pages/ThankYouPage.jsx'

// Page order
const pages = [
  GaneshPage,
  WelcomePage,
  RingPage,
  CouplePage,
  VenuePage,
  ThankYouPage,
]

export default function App() {
  const [ready, setReady] = useState(false)
  const [i, setI] = useState(0)
  const [musicOn, setMusicOn] = useState(true)

  const audioRef = useRef(null)
  const t = content.en

  // Start music when the visitor taps the opening door.
  const startMusic = () => {
    const audio = audioRef.current
    if (!audio || !musicOn) return

    audio.volume = 0.25

    audio.play().catch((error) => {
      console.log('Playback blocked:', error)
    })
  }

  // Handle music on/off.
  const toggleMusic = async (e) => {
    e.stopPropagation()

    const audio = audioRef.current
    if (!audio) return

    if (musicOn) {
      audio.pause()
      setMusicOn(false)
    } else {
      setMusicOn(true)
      audio.volume = 0.25

      try {
        await audio.play()
      } catch (error) {
        console.log('Playback blocked:', error)
      }
    }
  }

  // Keep music playing after invitation opens.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !ready) return

    if (musicOn) {
      audio.volume = 0.25
      audio.play().catch((error) => {
        console.log('Playback blocked:', error)
      })
    } else {
      audio.pause()
    }
  }, [musicOn, ready])

  // Automatically change pages.
  useEffect(() => {
    if (!ready) return

    const id = setTimeout(
      () => setI((x) => (x + 1) % pages.length),
      SLIDE_MS
    )

    return () => clearTimeout(id)
  }, [i, ready])

  const Current = pages[i]

  // Manually move to the next page.
  const next = (e) => {
    if (e.target.closest('a,button')) return
    if (ready) setI((x) => (x + 1) % pages.length)
  }

  return (
    <div className="app" onClick={next}>

      {/* Background music */}
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/engagement-music.mp3`}
        loop
        preload="auto"
      />

      {/* Music on/off button */}
      {ready && (
        <button
          className="music-toggle"
          onClick={toggleMusic}
          aria-label={musicOn ? 'Turn music off' : 'Turn music on'}
          title={musicOn ? 'Turn music off' : 'Turn music on'}
        >
          {musicOn ? '♫' : '♪'}
        </button>
      )}

      <div className="stage">

        {ready && (
          <div
            className="bar"
            key={`bar-${i}`}
            style={{ animationDuration: `${SLIDE_MS}ms` }}
          />
        )}

        {ready && <div className="lights" />}

        {ready && <Current key={i} t={t} />}

        {ready && (
          <div className="dots">
            {pages.map((_, k) => (
              <i
                key={k}
                className={k === i ? 'on' : ''}
              />
            ))}
          </div>
        )}

        <Door
          text={t.tap}
          onStart={startMusic}
          onDone={() => setReady(true)}
        />

      </div>
    </div>
  )
}
