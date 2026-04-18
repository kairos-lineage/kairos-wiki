import PageHero  from '../components/ui/PageHero'
import ComingSoon from '../components/content/ComingSoon'

/** Reusable stub page — used for sections that haven't been documented yet */
export default function StubPage({ title, tagline }) {
  return (
    <>
      <PageHero title={title} tagline={tagline} />
      <ComingSoon sectionName={title} />
    </>
  )
}
