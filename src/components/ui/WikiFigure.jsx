import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

/**
 * Screenshot / image figure with caption and size variant.
 * Click the image to open a fullscreen lightbox.
 *
 * Props:
 *   src     — image path relative to /public (e.g. 'images/buffer.png')
 *   alt     — alt text
 *   caption — figcaption text
 *   size    — 'sm' | 'md' | 'lg'  (default 'md')
 */
export default function WikiFigure({ src, alt, caption, size = 'md' }) {
  const base = import.meta.env.BASE_URL
  const url = `${base}${src}`
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <figure className={`wiki-figure wiki-figure--${size}`}>
        <img
          src={url}
          alt={alt}
          onClick={() => setOpen(true)}
          className="wiki-figure-thumb"
        />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>

      {open && createPortal(
        <div className="lightbox-backdrop" onClick={() => setOpen(false)}>
          <img src={url} alt={alt} className="lightbox-img" onClick={(e) => e.stopPropagation()} />
        </div>,
        document.body
      )}
    </>
  )
}
