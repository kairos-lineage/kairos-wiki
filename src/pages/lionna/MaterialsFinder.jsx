import { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import PageHero       from '../../components/ui/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import zones          from '../../data/lionna/farm-zones.json'
import dropsData      from '../../data/lionna/materials-drops.json'

function buildCraftingRows() {
  const rows = []
  for (const zone of zones) {
    for (const section of zone.sections) {
      for (const item of section.items) {
        for (const mat of item.materials) {
          if (mat.name === 'Adena') continue
          rows.push({
            material: mat.name,
            item:     item.name,
            mob:      mat.source ?? '—',
            zone:     zone.name,
            link:     `${zone.path}#${section.id}`,
          })
        }
      }
    }
  }
  return rows
}

function buildDropRows(craftingRows) {
  const crafted = new Set(craftingRows.map(r => r.material.toLowerCase()))
  return dropsData
    .filter(d => !crafted.has(d.name.toLowerCase()))
    .map(d => ({
      material: d.name,
      item:     '—',
      mob:      '—',
      zone:     d.zones.join(', '),
      link:     null,
    }))
}

const BASE = import.meta.env.BASE_URL

const ICON_MAP = {
  'Aramantine Part':      'aramantine-part.png',
  'Asofe':                'asofe.png',
  "Bottle of Freya's Soul": 'bottle-of-freyas-soul.png',
  'Essence of Kamaloka':  'essence-of-kamalorka.png',
  'Event - Coin':         'event-coin.png',
  'Gold Bar':             'gold-bar.png',
  'Event - Apiga':        'golden-apiga.png',
  'Mold Glue':            'mold-glue.png',
  'Mold Hardener':        'mold-hardener.png',
  'Mold Lubricant':       'mold-lubricant.png',
  'Fire Mantra':          'fire-mantra.png',
  'Water Mantra':         'water-mantra.png',
  'Wind Mantra':          'wind-mantra.png',
  'Coke':                 'cokes.png',
  'Cokes':                'cokes.png',
  'Steel':                'steel.png',
  'Synthetic Cokes':      'synthetic-cokes.png',
}

function MatIcon({ name }) {
  const file = ICON_MAP[name]
  if (!file) return null
  return (
    <img
      src={`${BASE}images/lionna/icons/${file}`}
      alt=""
      className="mf-mat-icon"
    />
  )
}

const CRAFTING_ROWS = buildCraftingRows()
const ALL_ROWS = [...CRAFTING_ROWS, ...buildDropRows(CRAFTING_ROWS)]

export default function MaterialsFinder() {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(() => searchParams.get('q') ?? '')

  useEffect(() => {
    const q = searchParams.get('q')
    if (q) setQuery(q)
  }, [searchParams])

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
        tagline="Search any material or item to find where it drops and what you can craft with it."
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
                <th className="mf-col-icon"></th>
                <th>Material</th>
                <th>Used In</th>
                <th className="mf-col-mob">Mob</th>
                <th className="mf-col-zone">Zone</th>
                <th className="mf-col-link"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="mf-col-icon">
                    <MatIcon name={r.material} />
                  </td>
                  <td className="mf-cell-material">{r.material}</td>
                  <td className="mf-cell-item">{r.item}</td>
                  <td className="mf-col-mob">{r.mob}</td>
                  <td className="mf-col-zone">{r.zone}</td>
                  <td className="mf-col-link">
                    {r.link && (
                      <Link to={r.link} className="mf-details-link">View details →</Link>
                    )}
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
