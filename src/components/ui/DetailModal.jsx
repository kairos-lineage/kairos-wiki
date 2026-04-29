import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import WikiCarousel from './WikiCarousel'
import WikiFigure   from './WikiFigure'

/**
 * Generic detail modal.
 *
 * Props:
 *   title   — string
 *   details — { slides?: [{src,alt,caption}], body?: [{type,text|src,alt,caption}] } | null
 *   onClose — fn
 */
export default function DetailModal({ title, details, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return createPortal(
    <div className="detail-modal-backdrop" onClick={onClose}>
      <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
        <div className="detail-modal-header">
          <h3 className="detail-modal-title">{title}</h3>
          <button className="detail-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="detail-modal-body">
          {details ? (
            <>
              {details.slides?.length > 0 && <WikiCarousel slides={details.slides} />}
              {details.body?.map((block, i) => {
                if (block.type === 'p')   return <p key={i}>{block.text}</p>
                if (block.type === 'img') return (
                  <WikiFigure key={i} src={block.src} alt={block.alt} caption={block.caption} size="sm" />
                )
                return null
              })}
            </>
          ) : (
            <p className="detail-modal-soon">Full details for this tattoo are being added — check back soon.</p>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}
