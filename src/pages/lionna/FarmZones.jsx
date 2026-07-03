import { Link } from 'react-router-dom'
import PageHero       from '../../components/ui/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import InfoBox        from '../../components/ui/InfoBox'
import zones          from '../../data/lionna/farm-zones.json'

export default function FarmZones() {
  return (
    <>
      <PageHero
        title="Farm Zones"
        tagline="Hunting zones with exclusive craftable gear — materials, recipes, and drop sources."
      />

      <SectionHeading id="overview">Overview</SectionHeading>
      <InfoBox variant="tip" label="How Farm Zones work">
        <p>
          Each Farm Zone contains specific mobs that drop crafting materials. Collect the required
          materials and exchange them through the in-game store for exclusive Zone gear — shirts,
          cloaks, accessories, and more. Each zone has its own item pool and material set.
        </p>
      </InfoBox>

      <SectionHeading id="zones">Available Zones</SectionHeading>
      <div className="fz-zone-cards">
        {zones.map(zone => (
          <Link key={zone.id} to={zone.path} className="fz-zone-card">
            <div className="fz-zone-card-name">
              {zone.name}
              {zone.hasQuest && (
                <span className="fz-quest-star" aria-label="Quest available">★</span>
              )}
            </div>
            <div className="fz-zone-card-tagline">{zone.tagline}</div>
            <div className="fz-zone-card-items">
              {zone.sections.map(s => s.title).join(' · ')}
            </div>
            <span className="fz-zone-card-cta">View Zone →</span>
          </Link>
        ))}
      </div>
    </>
  )
}
