/**
 * Visually prominent TODO marker — dark yellow bg, uppercase, "TODO:" prefix.
 * Used inline inside table cells or paragraphs wherever content is missing.
 *
 * Props:
 *   children — short description of what needs to be added
 */
export default function TodoBadge({ children }) {
  return (
    <span className="todo">TODO: {children}</span>
  )
}
