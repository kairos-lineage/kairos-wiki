import { Link, useLocation } from 'react-router-dom'

/**
 * A single labeled group of nav items.
 * Active detection: exact path match OR path+hash match.
 */
export default function SidebarSection({ label, items }) {
  const { pathname, hash } = useLocation()

  function isActive(to) {
    const [path, anchor] = to.split('#')
    const normPath = path === '/' ? '/' : path.replace(/\/$/, '')
    const normCurrent = pathname === '/' ? '/' : pathname.replace(/\/$/, '')

    if (anchor) {
      return normCurrent === normPath && hash === `#${anchor}`
    }
    return normCurrent === normPath && !hash
  }

  return (
    <div className="sidebar-section">
      <div className="sidebar-label">{label}</div>
      <ul className="sidebar-nav">
        {items.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className={isActive(item.to) ? 'active' : ''}>
              <span className="nav-icon">{item.icon}</span>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
