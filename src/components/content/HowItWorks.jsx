import SectionHeading from '../ui/SectionHeading'
import StepList from '../ui/StepList'

/**
 * JSON-driven "How It Works" section.
 *
 * Expected data shape:
 * {
 *   id:    string,
 *   title: string,
 *   steps: string[]
 * }
 */
export default function HowItWorks({ data }) {
  if (!data) return null
  return (
    <>
      <SectionHeading id={data.id} level={3}>{data.title}</SectionHeading>
      <StepList steps={data.steps} />
    </>
  )
}
