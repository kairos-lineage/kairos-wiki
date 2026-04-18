import SectionHeading from '../ui/SectionHeading'
import WikiTable from '../ui/WikiTable'
import TodoBadge from '../ui/TodoBadge'

/**
 * Cost/level progression table with built-in TodoBadge support.
 *
 * Expected data shape:
 * {
 *   id:      string,
 *   title:   string,
 *   columns: string[],
 *   rows: [
 *     { cells: (string | null)[], todo?: string }
 *   ]
 * }
 *
 * A row with `todo` renders a TodoBadge in its last null cell.
 */
export default function UpgradeTable({ data }) {
  if (!data) return null

  const rows = data.rows.map((row) =>
    row.cells.map((cell, i) => {
      if (cell === null && row.todo && i === row.cells.length - 1) {
        return <TodoBadge key={i}>{row.todo}</TodoBadge>
      }
      return cell ?? '—'
    })
  )

  return (
    <>
      <SectionHeading id={data.id} level={3}>{data.title}</SectionHeading>
      <WikiTable columns={data.columns} rows={rows} />
    </>
  )
}
