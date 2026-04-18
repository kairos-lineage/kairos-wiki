import { Link } from 'react-router-dom'

const SigilSVG = () => (
  <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
    <polygon className="sigil-outer" points="17,1 32,9 32,25 17,33 2,25 2,9" />
    <polygon className="sigil-inner" points="17,6 27,11 27,23 17,28 7,23 7,11" />
    <circle  className="sigil-core"  cx="17" cy="17" r="2.5" />
  </svg>
)

export default function Header({ sidebarOpen, onToggleSidebar }) {
  return (
    <header className="site-header">
      <Link to="/" className="header-logo">
        <div className="logo-sigil">
          <div className="sigil-glow" />
          <SigilSVG />
        </div>
        <span className="logo-title">Kairos</span>
        <div className="logo-divider" />
        <span className="logo-wiki">Wiki</span>
      </Link>

      <button
        className={`menu-toggle${sidebarOpen ? ' active' : ''}`}
        aria-label="Toggle navigation"
        onClick={onToggleSidebar}
      >
        <span /><span /><span />
      </button>
    </header>
  )
}
