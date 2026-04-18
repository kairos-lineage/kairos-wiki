/**
 * Converts a plain-text string with simple inline markdown to React elements.
 *
 * Supported:
 *   `code`   → <code>code</code>
 *   **bold** → <strong>bold</strong>
 *   *italic* → <em>italic</em>
 *   \n       → line break (for multi-line body strings)
 *
 * Returns an array of React nodes — spread directly into JSX or wrap in <p>.
 */
export function renderText(str) {
  if (!str) return null

  // Split on newlines first, then process inline tokens per line
  const lines = str.split('\n')
  const result = []

  lines.forEach((line, lineIdx) => {
    if (lineIdx > 0) result.push(<br key={`br-${lineIdx}`} />)

    // Tokenise the line into alternating plain/code/bold/italic segments
    const tokens = []
    // Regex: `code` | **bold** | *italic*
    const re = /`([^`]+)`|\*\*([^*]+)\*\*|\*([^*]+)\*/g
    let last = 0
    let m

    while ((m = re.exec(line)) !== null) {
      if (m.index > last) tokens.push(line.slice(last, m.index))
      if (m[1] !== undefined) tokens.push(<code key={m.index}>{m[1]}</code>)
      else if (m[2] !== undefined) tokens.push(<strong key={m.index}>{m[2]}</strong>)
      else if (m[3] !== undefined) tokens.push(<em key={m.index}>{m[3]}</em>)
      last = re.lastIndex
    }

    if (last < line.length) tokens.push(line.slice(last))
    result.push(...tokens)
  })

  return result
}
