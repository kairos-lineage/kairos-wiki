import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiCarousel   from '../../../components/ui/WikiCarousel'
import InfoBox        from '../../../components/ui/InfoBox'
import zones          from '../../../data/lionna/farm-zones.json'

const zone = zones.find(z => z.id === 'zone-2')

function ItemBlock({ item }) {
  return (
    <div className="fz-item">
      <div className="fz-item-screenshot">
        <WikiFigure src={item.image} alt={item.name} />
      </div>
      <div className="fz-item-header">
        <p className="fz-item-name">{item.name}</p>
        <p className="fz-item-slot">{item.slot}</p>
        <div className="fz-stat-chips">
          {item.stats.map((s, i) => (
            <span key={i} className="fz-stat-chip">{s}</span>
          ))}
        </div>
      </div>
      <table className="fz-mat-table">
        <thead>
          <tr>
            <th>Material</th>
            <th>Source</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {item.materials.map((m, i) => (
            <tr key={i}>
              <td>{m.name}</td>
              <td style={{ color: 'var(--text-dim)' }}>{m.source}</td>
              <td>{m.qty.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ZoneSection({ section }) {
  const mobSlides = section.mobImages

  return (
    <>
      <SectionHeading id={section.id}>{section.title}</SectionHeading>
      {section.desc && <p style={{ marginBottom: '0.5rem' }}>{section.desc}</p>}

      <div className="fz-layout">
        <div className="fz-mob-col">
          {mobSlides.length === 1 ? (
            <WikiFigure
              src={mobSlides[0].src}
              alt={mobSlides[0].alt}
              caption={mobSlides[0].alt}
              size="md"
            />
          ) : (
            <WikiCarousel
              slides={mobSlides.map(m => ({
                src: m.src,
                alt: m.alt,
                caption: m.alt,
              }))}
            />
          )}
        </div>

        <div className="fz-items">
          {section.items.length > 0
            ? section.items.map((item, i) => <ItemBlock key={i} item={item} />)
            : <div className="fz-item-placeholder">Shop screenshot coming soon.</div>
          }
        </div>
      </div>
    </>
  )
}

export default function Zone2() {
  return (
    <>
      <PageHero
        title="Farm Zone 2"
        tagline="Hunt Zone 2 monsters, collect crafting materials, and trade them for exclusive gear."
      />

      <SectionHeading id="overview">Overview</SectionHeading>
      <InfoBox variant="tip" label="How it works">
        <p>
          Each mob type in Zone 2 drops specific crafting materials. Collect enough and exchange
          them through the in-game store for exclusive items. Items come in physical (P.Atk) and
          magic (M.Atk) variants — choose based on your class.
        </p>
      </InfoBox>
      <WikiFigure
        src={zone.overviewImage}
        alt="Farm Zone 2 area overview"
        caption="Farm Zone 2 — overview of the hunting area."
        size="lg"
      />
      <p>
        The creature shown in the image is the <strong>Zone 2 Mini Boss</strong> — a powerful
        enemy always found at the same fixed location within the zone. It drops unique{' '}
        <strong>Armor Parts</strong> that can be combined to upgrade your base armor to the next
        tier, making it a priority target for players pushing their gear further.
      </p>
      <WikiFigure
        src="images/lionna/zona-2/zona-2-boss-drop.png"
        alt="Zone 2 Mini Boss drops"
        caption="Zone 2 Mini Boss — example drop loot."
        size="sm"
      />

      {zone.sections.map(section => (
        <ZoneSection key={section.id} section={section} />
      ))}
    </>
  )
}
