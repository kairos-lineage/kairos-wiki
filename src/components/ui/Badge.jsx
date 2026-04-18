/**
 * Inline badge with color variant.
 *
 * Props:
 *   variant — 'gold' | 'orange' | 'blue' | 'red'  (default 'gold')
 *   children
 */
export default function Badge({ variant = 'gold', children }) {
  return (
    <span className={`badge badge-${variant}`}>{children}</span>
  )
}
