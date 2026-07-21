import { useState, useMemo } from 'react'
import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiCarousel   from '../../../components/ui/WikiCarousel'
import InfoBox        from '../../../components/ui/InfoBox'
import TATTOOS        from '../../../data/lionna/tattoo-inventory.json'

const BASE = 'images/lionna/alt-b/'

const SLIDES = Array.from({ length: 9 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return {
    src:     `${BASE}tattoo-inv-${n}.png`,
    alt:     `Tattoo Inventory — page ${i + 1} of 9`,
    caption: `Tattoo Inventory — page ${i + 1} of 9`,
  }
})

export default function TattooInventory() {
  const [search,          setSearch]          = useState('')
  const [filterPage,      setFilterPage]      = useState('')
  const [filterActivate,  setFilterActivate]  = useState('')
  const [filterSource,    setFilterSource]    = useState('')
  const [filterImproved,  setFilterImproved]  = useState('')

  const visible = useMemo(() => {
    const q = search.toLowerCase()
    return TATTOOS.filter(t => {
      if (q && !t.name.toLowerCase().includes(q))                        return false
      if (filterPage     && String(t.page) !== filterPage)               return false
      if (filterActivate && String(t.canActivate) !== filterActivate)    return false
      if (filterSource   && !t.source.toLowerCase().includes(filterSource.toLowerCase())) return false
      if (filterImproved === 'yes' && !t.improved)                       return false
      if (filterImproved === 'no'  &&  t.improved)                       return false
      return true
    })
  }, [search, filterPage, filterActivate, filterSource, filterImproved])

  const hasFilters = search || filterPage || filterActivate || filterSource || filterImproved

  function clearAll() {
    setSearch('')
    setFilterPage('')
    setFilterActivate('')
    setFilterSource('')
    setFilterImproved('')
  }

  return (
    <>
      <PageHero
        title="Tattoo Inventory"
        tagline="Browse all available tattoos — filter by name, page, activation, source, or whether an improved version exists."
      />

      {/* ===== GALLERY ===== */}
      <SectionHeading id="gallery">Inventory Pages</SectionHeading>
      <p>
        The Tattoo Inventory spans <strong>9 pages</strong>. Use the arrows or dots to browse
        each page, or click any image to open it full-size.
      </p>
      <WikiCarousel slides={SLIDES} />

      {/* ===== TABLE ===== */}
      <SectionHeading id="tattoos">All Tattoos</SectionHeading>
      <InfoBox variant="tip" label="Using the Filters">
        <p>
          Search by name to find a specific tattoo, filter by <strong>Page</strong> to see
          only tattoos from one inventory screen, or use <strong>Can Activate</strong> to
          separate passive entries from activatable ones. Source and Improved filters narrow
          down where to farm and whether an upgraded version exists.
        </p>
      </InfoBox>

      <div className="tattoo-filter-bar">
        <input
          type="text"
          className="tattoo-filter-input tattoo-filter-input--wide"
          placeholder="Search by name…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="tattoo-filter-select"
          value={filterPage}
          onChange={e => setFilterPage(e.target.value)}
        >
          <option value="">All pages</option>
          {[1,2,3,4,5,6,7,8,9].map(p => (
            <option key={p} value={String(p)}>Page {p}</option>
          ))}
        </select>
        <select
          className="tattoo-filter-select"
          value={filterActivate}
          onChange={e => setFilterActivate(e.target.value)}
        >
          <option value="">Can Activate — all</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <input
          type="text"
          className="tattoo-filter-input"
          placeholder="Source…"
          value={filterSource}
          onChange={e => setFilterSource(e.target.value)}
        />
        <select
          className="tattoo-filter-select"
          value={filterImproved}
          onChange={e => setFilterImproved(e.target.value)}
        >
          <option value="">Improved — all</option>
          <option value="yes">Has improved</option>
          <option value="no">None</option>
        </select>
        {hasFilters && (
          <button className="tattoo-filter-clear" onClick={clearAll}>
            Clear
          </button>
        )}
      </div>

      <p className="tattoo-filter-count">
        Showing <strong>{visible.length}</strong> of <strong>{TATTOOS.length}</strong> tattoos
      </p>

      <div className="zone-table-wrap">
        <table className="wiki-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Page</th>
              <th>Can Activate</th>
              <th>Source</th>
              <th>Improved</th>
            </tr>
          </thead>
          <tbody>
            {visible.length === 0 ? (
              <tr>
                <td colSpan={5} className="tattoo-no-results">
                  No tattoos match the current filters.
                </td>
              </tr>
            ) : (
              visible.map((t, i) => (
                <tr key={i}>
                  <td>{t.name || <span className="tattoo-empty">—</span>}</td>
                  <td>{t.page}</td>
                  <td className={t.canActivate ? 'tattoo-yes' : 'tattoo-no'}>
                    {t.canActivate ? '✔' : '✘'}
                  </td>
                  <td>{t.source   || <span className="tattoo-empty">—</span>}</td>
                  <td>{t.improved || <span className="tattoo-empty">—</span>}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
