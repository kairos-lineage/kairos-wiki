/**
 * Info box with left-border accent and label.
 *
 * Props:
 *   variant — '' | 'tip' | 'success' | 'warning'  (default '')
 *   label   — string shown in small caps above the content
 *   children
 */
export default function InfoBox({ variant = '', label, children }) {
  const cls = ['info-box', variant].filter(Boolean).join(' ')
  return (
    <div className={cls}>
      {label && <div className="box-label">{label}</div>}
      {children}
    </div>
  )
}
