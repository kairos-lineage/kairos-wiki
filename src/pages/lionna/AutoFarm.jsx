import PageHero       from '../../components/ui/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import WikiFigure     from '../../components/ui/WikiFigure'

export default function LionnaAutoFarm() {
  return (
    <>
      <PageHero
        title="Auto Farm"
        tagline="Configure automated hunting on Lionna Multiskill."
      />

      <WikiFigure
        src="images/lionna/farm.png"
        alt="Auto Farm panel"
        caption="The Auto Farm panel — opened with .farm in chat."
        size="lg"
      />

      <SectionHeading id="overview">Overview</SectionHeading>
      <p>Type <code>.farm</code> in chat to open the Auto Farm panel. From here you can configure your character's automated hunting behaviour.</p>
    </>
  )
}
