/**
 * Screenshot / image figure with caption and size variant.
 *
 * Props:
 *   src     — image path relative to /public (e.g. 'images/buffer.png')
 *   alt     — alt text
 *   caption — figcaption text
 *   size    — 'sm' | 'md' | 'lg'  (default 'md')
 */
export default function WikiFigure({ src, alt, caption, size = 'md' }) {
  const base = import.meta.env.BASE_URL
  return (
    <figure className={`wiki-figure wiki-figure--${size}`}>
      <img src={`${base}${src}`} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
