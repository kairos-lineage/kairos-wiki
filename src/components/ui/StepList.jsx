/**
 * Numbered step list with gold circle counters (uses .step-list CSS class).
 *
 * Props:
 *   steps   — ReactNode[]   — list of step content (string or JSX)
 *   ordered — boolean       — true = ol.step-list (default), false = ul
 */
export default function StepList({ steps, ordered = true }) {
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag className="step-list">
      {steps.map((step, i) => (
        <li key={i}>{step}</li>
      ))}
    </Tag>
  )
}
