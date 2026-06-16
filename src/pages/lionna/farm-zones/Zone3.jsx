import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiCarousel   from '../../../components/ui/WikiCarousel'
import InfoBox        from '../../../components/ui/InfoBox'
import zones          from '../../../data/lionna/farm-zones.json'

const zone = zones.find(z => z.id === 'zone-3')

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

export default function Zone3() {
  return (
    <>
      <PageHero
        title="Farm Zone 3"
        tagline="Hunt Zone 3 monsters, collect crafting materials, and trade them for upgraded gear — including A-Grade armor sets."
      />

      <SectionHeading id="overview">Overview</SectionHeading>
      <InfoBox variant="tip" label="How it works">
        <p>
          Zone 3 follows the same progression as Zone 2 — each mob type drops specific crafting
          materials that you exchange through the in-game store. Many items require your Zone 2
          gear as a trade-in, making this a direct upgrade path. The Zone 3 boss drops{' '}
          <strong>Sealed Dark Crystal armor pieces</strong> needed to unlock the full A-Grade armor set.
        </p>
      </InfoBox>
      <WikiFigure
        src={zone.overviewImage}
        alt="Farm Zone 3 boss"
        caption="Farm Zone 3 — zone boss."
        size="lg"
      />
      <p>
        The <strong>Zone 3 Boss</strong> drops <strong>Sealed Dark Crystal Leather Armor Patterns</strong>{' '}
        and <strong>Sealed Dark Crystal Robe Fabrics</strong> — the key materials needed to exchange
        for the full A-Grade Dark Crystal armor set at the in-game store.
      </p>
      <WikiFigure
        src="images/lionna/zona-3/z3s-boss-drop.png"
        alt="Zone 3 boss drop — Sealed Dark Crystal pieces"
        caption="Zone 3 boss — example drop loot."
        size="sm"
      />

      {zone.sections.map(section => (
        <ZoneSection key={section.id} section={section} />
      ))}
    </>
  )
}
