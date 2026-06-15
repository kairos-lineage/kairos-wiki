import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import PageHero       from '../../components/ui/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import InfoBox        from '../../components/ui/InfoBox'
import tattoos        from '../../data/lionna/tattoos.json'

const ALL_TYPES = [...new Set(tattoos.map(t => t.type))]

export default function LionnaTattoos() {
  const [query, setQuery]     = useState('')
  const [activeType, setType] = useState(null)

  const filtered = useMemo(() => {
    return tattoos.filter(t => {
      const matchType  = !activeType || t.type === activeType
      const q          = query.toLowerCase()
      const matchQuery = !q
        || t.name.toLowerCase().includes(q)
        || t.type.toLowerCase().includes(q)
        || t.obtain.toLowerCase().includes(q)
        || t.materials.some(m =>
            m.name.toLowerCase().includes(q) ||
            m.source.toLowerCase().includes(q) ||
            (m.element && m.element.toLowerCase().includes(q))
          )
      return matchType && matchQuery
    })
  }, [query, activeType])

  return (
    <>
      <PageHero
        title="Custom Tattoos"
        tagline="All custom tattoos available on Lionna Multiskill."
      />

      <SectionHeading id="overview">Overview</SectionHeading>
      <InfoBox variant="tip" label="How tattoos work">
        <p>Custom tattoos grant unique stat bonuses and are obtained through various in-game activities — quests, drops, and crafting. Click <strong>View Details</strong> on any tattoo to see how to obtain it.</p>
      </InfoBox>

      <SectionHeading id="all-tattoos">All Tattoos</SectionHeading>

      {/* Filters */}
      <div className="zone-search-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
        <input
          className="zone-search"
          type="text"
          placeholder="Search tattoos…"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <div className="pet-filters">
          {ALL_TYPES.map(type => (
            <button
              key={type}
              className={`pet-filter-chip${activeType === type ? ' active' : ''}`}
              onClick={() => setType(prev => prev === type ? null : type)}
            >
              {type}
            </button>
          ))}
          {activeType && (
            <button className="pet-filter-clear" onClick={() => setType(null)}>Clear</button>
          )}
        </div>
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <p className="zone-no-results">No tattoos match your search.</p>
      ) : (
        <table className="wiki-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Effect</th>
              <th>How to Obtain</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(t => (
              <tr key={t.id}>
                <td><strong>{t.name}</strong></td>
                <td>{t.type}</td>
                <td>{t.effect}</td>
                <td>{t.obtain}</td>
                <td>
                  <Link to={t.path} className="tattoo-details-link">View Details →</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}
