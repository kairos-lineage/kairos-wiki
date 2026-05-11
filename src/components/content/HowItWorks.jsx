import SectionHeading from '../ui/SectionHeading'
import StepList from '../ui/StepList'
import WikiFigure from '../ui/WikiFigure'

/**
 * JSON-driven "How It Works" section.
 *
 * Expected data shape:
 * {
 *   id:     string,
 *   title:  string,
 *   figure: object (optional, rendered before steps),
 *   steps:  string[]
 * }
 */
export default function HowItWorks({ data }) {
  if (!data) return null
  return (
    <>
      <SectionHeading id={data.id} level={3}>{data.title}</SectionHeading>
      {data.figure && <WikiFigure {...data.figure} />}
      <StepList steps={data.steps} />
    </>
  )
}
