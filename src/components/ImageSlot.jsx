
import { useState, useEffect } from 'react'

export default function ImageSlot({
  file = 'engagement-couple.png',
  label = 'Engagement Couple',
  shape = 'square'
}) {
  const [missing, setMissing] = useState(false)

  const src = `${import.meta.env.BASE_URL}images/${encodeURIComponent(file)}`

  // Reset image error when changing images
  useEffect(() => {
    setMissing(false)
  }, [file])

  if (missing) {
    return (
      <div className={`slot slot-${shape} slot-empty`}>
        <b>{label}</b>
        <small>Image not found</small>
        <small>Place your image here:</small>
        <small>public/images/{file}</small>
      </div>
    )
  }

  return (
    <img
      className={`slot slot-${shape}`}
      src={src}
      alt={label}
      loading="eager"
      onError={() => setMissing(true)}
    />
  )
}
