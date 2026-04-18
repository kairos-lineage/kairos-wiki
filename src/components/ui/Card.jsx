import { Link } from 'react-router-dom'

/**
 * Section overview card — links to a page or page#section.
 *
 * Props:
 *   to    — route path (e.g. '/community-board#buffer')
 *   icon  — emoji string
 *   title — card title
 *   desc  — short description
 */
export default function Card({ to, icon, title, desc }) {
  return (
    <Link to={to} className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      <div className="card-desc">{desc}</div>
    </Link>
  )
}
