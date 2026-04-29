import { useState } from 'react'
import WikiTable    from '../ui/WikiTable'
import DetailModal  from '../ui/DetailModal'
import { renderText } from '../../utils/renderText'

/**
 * Scrollable table where every row has a "View" button that opens a detail modal.
 *
 * Props:
 *   data — table JSON object with:
 *     columns    — string[]
 *     rows       — [{ cells: string[], details?: object|null }]
 *     scrollNote — string  (unit label, e.g. "tattoos")
 */
export default function ScrollableDetailTable({ data }) {
  const [active, setActive] = useState(null) // { name, details }

  const columns = [...data.columns, '']

  const rows = data.rows.map((row) => [
    ...row.cells.map((cell) => (typeof cell === 'string' ? renderText(cell) : cell)),
    <button
      key="view"
      className="detail-btn"
      onClick={() => setActive({ name: row.cells[0], details: row.details ?? null })}
    >
      View
    </button>,
  ])

  const unit = data.scrollNote ?? 'entries'

  return (
    <>
      <div className="wiki-table-scroll-wrapper">
        <WikiTable columns={columns} rows={rows} />
      </div>
      <p className="wiki-table-scroll-note">↕ Scroll to see all {data.rows.length} {unit}</p>

      {active && (
        <DetailModal
          title={active.name}
          details={active.details}
          onClose={() => setActive(null)}
        />
      )}
    </>
  )
}
