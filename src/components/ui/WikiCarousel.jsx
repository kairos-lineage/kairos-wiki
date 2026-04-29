import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

/**
 * Image carousel with arrow navigation and dot indicators.
 *
 * Props:
 *   slides — [{ src, alt, caption }]  image path relative to /public
 */
export default function WikiCarousel({ slides }) {
  const base = import.meta.env.BASE_URL
  const [current, setCurrent] = useState(0)
  const [open, setOpen] = useState(false)

  const prev = () => setCurrent(i => (i - 1 + slides.length) % slides.length)
  const next = () => setCurrent(i => (i + 1) % slides.length)
  const slide = slides[current]

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, current])

  return (
    <div className="wiki-carousel">
      <div className="carousel-stage">
        <button className="carousel-arrow carousel-arrow--prev" onClick={prev} aria-label="Previous">&#8249;</button>
        <figure className="wiki-figure wiki-figure--lg carousel-figure">
          <img
            src={`${base}${slide.src}`}
            alt={slide.alt}
            className="wiki-figure-thumb"
            onClick={() => setOpen(true)}
          />
          {slide.caption && <figcaption>{slide.caption}</figcaption>}
        </figure>
        <button className="carousel-arrow carousel-arrow--next" onClick={next} aria-label="Next">&#8250;</button>
      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {open && createPortal(
        <div className="lightbox-backdrop" onClick={() => setOpen(false)}>
          <img
            src={`${base}${slide.src}`}
            alt={slide.alt}
            className="lightbox-img"
            onClick={e => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </div>
  )
}
