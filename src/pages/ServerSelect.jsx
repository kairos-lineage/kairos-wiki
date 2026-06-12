import { Link } from 'react-router-dom'

const SERVERS = [
  {
    to: '/multiskill',
    name: 'Multiskill',
    subtitle: 'Kairos Multiskill',
    desc: 'High-rate custom server with MultiSkill system, Rebirth, Faction War, Tattoo, URN, and deep Community Board features.',
    accent: 'gold',
    logo: 'images/image-removebg-preview.png',
  },
  {
    to: '/lionna',
    name: 'Lionna Multiskill',
    subtitle: 'Kairos Lionna',
    desc: 'The Lionna Multiskill experience — same Kairos spirit with its own progression, rates, and community content.',
    accent: 'arcane',
    logo:  'images/image-removebg-preview-lionna.png',
  },
]

export default function ServerSelect() {
  return (
    <div className="server-select">
      <div className="server-select__header">
        <h1 className="server-select__title">Kairos Wiki</h1>
        <p className="server-select__sub">Choose your server</p>
      </div>

      <div className="server-select__grid">
        {SERVERS.map((s) => (
          <Link key={s.to} to={s.to} className={`server-card server-card--${s.accent}`}>
            <div className="server-card__glow" />
            {s.logo && (
              <img
                src={`${import.meta.env.BASE_URL}${s.logo}`}
                alt={`${s.name} logo`}
                className="server-card__logo"
              />
            )}
            {!s.logo && <div className="server-card__icon">⚔️</div>}
            <div className="server-card__name">{s.name}</div>
            <div className="server-card__subtitle">{s.subtitle}</div>
            <p className="server-card__desc">{s.desc}</p>
            <div className="server-card__enter">Enter Wiki →</div>
          </Link>
        ))}
      </div>

      <p className="server-select__footer">
        Kairos Wiki &copy; 2026 &mdash; Community-maintained. Not affiliated with NCSoft.
      </p>
    </div>
  )
}
