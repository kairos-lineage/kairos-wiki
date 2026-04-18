/**
 * Page hero banner — ornament + h1 title + tagline.
 * Props:
 *   title   — string
 *   tagline — string or JSX
 */
export default function PageHero({ title, tagline }) {
  return (
    <div className="hero">
      <div className="hero-ornament">✦ ✦ ✦</div>
      <h1 className="hero-title">{title}</h1>
      {tagline && <p className="hero-tagline">{tagline}</p>}
    </div>
  )
}
