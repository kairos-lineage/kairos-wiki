/**
 * Section heading with mandatory id for deep-linking.
 * The CSS `h2:target` / `h3:target` rule and .anchor-highlight class
 * both trigger the gold blink animation on hash navigation.
 *
 * Props:
 *   id       — string (required) — used as the HTML id and href anchor
 *   level    — 2 | 3 (default 2)
 *   children — heading text
 */
export default function SectionHeading({ id, level = 2, children }) {
  const Tag = `h${level}`
  return <Tag id={id}>{children}</Tag>
}
