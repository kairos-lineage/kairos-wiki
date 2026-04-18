import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
      <div className="hero-ornament" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>✦ ✦ ✦</div>
      <h1 className="hero-title" style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>404</h1>
      <p className="hero-tagline">This page doesn't exist — or hasn't been written yet.</p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.6rem 1.6rem', border: '1px solid var(--gold-dim)', borderRadius: '4px', color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
        Return Home
      </Link>
    </div>
  )
}
