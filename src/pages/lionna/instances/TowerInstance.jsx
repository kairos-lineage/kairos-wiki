import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import InfoBox        from '../../../components/ui/InfoBox'

export default function TowerInstance() {
  return (
    <>
      <PageHero
        title="Tower Instance"
        tagline="Climb floor by floor through an escalating gauntlet — the Tower Instance is a unique endurance challenge unlike any other instance type."
      />

      <SectionHeading id="tower">Tower Instance</SectionHeading>
      <InfoBox variant="info" label="More Detail Coming Soon">
        <p>
          Full guide for the Tower Instance — floor structure, enemies, rewards, and
          strategies — will be added here as content is gathered.
        </p>
      </InfoBox>
    </>
  )
}
