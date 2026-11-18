
import { useEffect, useRef, useState } from 'react'

export default function Door({ text, onStart, onDone }) {
  const [phase, setPhase] = useState('closed')
  const onDoneRef = useRef(onDone)
  const onStartRef = useRef(onStart)

  useEffect(() => {
    onDoneRef.current = onDone
    onStartRef.current = onStart
  }, [onDone, onStart])

  useEffect(() => {
    // Start music and opening animation automatically.
    onStartRef.current?.()

    const t1 = setTimeout(() => {
      setPhase('open')
    }, 150)

    const t2 = setTimeout(() => {
      setPhase('fade')
      onDoneRef.current?.()
    }, 2400)

    const t3 = setTimeout(() => {
      setPhase('gone')
    }, 3300)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  if (phase === 'gone') return null

  const cls = `door ${phase !== 'closed' ? 'open' : ''} ${
    phase === 'fade' ? 'fade' : ''
  }`

  return (
    <div className={cls}>
      <div className="leaf left">
        <span className="knob" />
        <div className="shade" />
      </div>

      <div className="leaf right">
        <span className="knob" />
        <div className="shade" />
      </div>

      <div className="door-text">
        <span className="om">ॐ</span>
        <span>{text}</span>
        <small className="tap-hint">
          Welcome to the Celebration
        </small>
      </div>
    </div>
  )
}
