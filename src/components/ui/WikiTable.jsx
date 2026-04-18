/**
 * Data-driven wiki table.
 *
 * Props:
 *   columns — string[]      — header labels
 *   rows    — ReactNode[][] — each row is an array of cells (string or JSX)
 *   caption — string (optional)
 */
export default function WikiTable({ columns, rows, caption }) {
  return (
    <table className="wiki-table">
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr>{columns.map((col) => <th key={col}>{col}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>
            {row.map((cell, ci) => <td key={ci}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
