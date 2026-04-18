import { renderText } from '../../utils/renderText'

/**
 * Numbered step list with gold circle counters (uses .step-list CSS class).
 *
 * Props:
 *   steps   — string[]   — list of step content (supports **bold**, *italic*, `code`)
 *   ordered — boolean    — true = ol.step-list (default), false = ul
 */
export default function StepList({ steps, ordered = true }) {
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag className="step-list">
      {steps.map((step, i) => (
        <li key={i}>{renderText(step)}</li>
      ))}
    </Tag>
  )
}
