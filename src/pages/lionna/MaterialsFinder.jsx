import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import PageHero       from '../../components/ui/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import zones          from '../../data/lionna/farm-zones.json'

function buildRows() {
  const rows = []
  for (const zone of zones) {
    for (const section of zone.sections) {
      for (const item of section.items) {
        for (const mat of item.materials) {
          if (mat.name === 'Adena') continue
        rows.push({
            material: mat.name,
            item:     item.name,
            slot:     item.slot,
            zone:     zone.name,
            link:     `${zone.path}#${section.id}`,
          })
        }
      }
    }
  }
  return rows
}

const ALL_ROWS = buildRows()

export default function MaterialsFinder() {
  const [query, setQuery] = useState('')

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return ALL_ROWS
    return ALL_ROWS.filter(
      r =>
        r.material.toLowerCase().includes(q) ||
        r.item.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <>
      <PageHero
        title="Materials Finder"
        tagline="Search by material or item name to find what drops where and what you can craft."
      />

      <SectionHeading id="search">Search</SectionHeading>

      <div className="mf-search-bar">
        <input
          className="mf-search-input"
          type="search"
          placeholder="Search material or item name…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoFocus
        />
        {query && (
          <span className="mf-result-count">
            {rows.length} result{rows.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      <div className="mf-table-wrap">
        {rows.length === 0 ? (
          <div className="mf-empty">No materials match "{query}".</div>
        ) : (
          <table className="mf-table">
            <thead>
              <tr>
                <th>Material</th>
                <th>Item</th>
                <th className="mf-col-slot">Slot</th>
                <th className="mf-col-zone">Zone</th>
                <th className="mf-col-link"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="mf-cell-material">{r.material}</td>
                  <td className="mf-cell-item">{r.item}</td>
                  <td className="mf-col-slot">{r.slot}</td>
                  <td className="mf-col-zone">{r.zone}</td>
                  <td className="mf-col-link">
                    <Link to={r.link} className="mf-details-link">View details →</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}
