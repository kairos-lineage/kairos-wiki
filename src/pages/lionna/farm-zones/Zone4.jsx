import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiCarousel   from '../../../components/ui/WikiCarousel'
import InfoBox        from '../../../components/ui/InfoBox'
import zones          from '../../../data/lionna/farm-zones.json'

const zone = zones.find(z => z.id === 'zone-4')

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
  const slides = section.mobImages.map(m => ({ src: m.src, alt: m.alt, caption: m.alt }))

  const carousel = slides.length === 1
    ? <WikiFigure src={slides[0].src} alt={slides[0].alt} caption={slides[0].alt} size="md" />
    : <WikiCarousel slides={slides} />

  if (section.carouselOnly) {
    return (
      <>
        <SectionHeading id={section.id}>{section.title}</SectionHeading>
        {section.desc && <p style={{ marginBottom: '1rem' }}>{section.desc}</p>}
        <WikiCarousel slides={slides} />
      </>
    )
  }

  return (
    <>
      <SectionHeading id={section.id}>{section.title}</SectionHeading>
      {section.desc && <p style={{ marginBottom: '0.5rem' }}>{section.desc}</p>}

      <div className="fz-layout">
        <div className="fz-mob-col">{carousel}</div>
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

const lindviorQuestSlides = [
  { src: 'images/lionna/zona-4/z4-lind-quest-1.png', alt: 'Separated Soul NPC — quest start', caption: 'Step 1 — Talk to Separated Soul and accept the quest.' },
  { src: 'images/lionna/zona-4/z4-lind-quest-2.png', alt: 'Quest dialogue — introduction', caption: 'Step 2 — Read the quest intro.' },
  { src: 'images/lionna/zona-4/z4-lind-quest-3.png', alt: 'Quest dialogue — Lindvior lore', caption: 'Step 3 — NPC explains the Wings of Sand quest.' },
  { src: 'images/lionna/zona-4/z4-lind-quest-4.png', alt: 'Quest dialogue — objective', caption: 'Step 4 — Objective: collect Large Baby Dragon from Lindvior instance.' },
  { src: 'images/lionna/zona-4/z4-lind-quest-5.png', alt: 'Quest reward — 15 Lindvior Eggs', caption: 'Step 5 — Return with Large Baby Dragon to receive 15 Lindvior Eggs.' },
]

export default function Zone4() {
  return (
    <>
      <PageHero
        title="Farm Zone 4"
        tagline="Hunt Zone 4 monsters for S-grade armor sets, exclusive accessories and weapons."
      />

      <SectionHeading id="overview">Overview</SectionHeading>
      <InfoBox variant="tip" label="How it works">
        <p>
          Zone 4 is a direct upgrade path from Zone 3 — all items require your Zone 3 gear as a
          trade-in. The Zone 4 boss drops <strong>Sealed Draconic</strong> and{' '}
          <strong>Sealed Major Arcana</strong> armor pieces needed for S-grade sets, and further
          upgrades to <strong>Apella</strong> sets are also available. S-grade weapons and armor
          materials follow a separate multi-step process shown in the carousels below.
        </p>
      </InfoBox>
      <WikiFigure
        src={zone.overviewImage}
        alt="Farm Zone 4 boss"
        caption="Farm Zone 4 — zone boss."
        size="lg"
      />
      <p>
        There are <strong>2 bosses</strong> located close to the zone area that drop{' '}
        <strong>Dark Crystal Leather Armor [A]</strong> and{' '}
        <strong>Dark Crystal Leggings [A]</strong> — required materials for the Draconic armor exchange.
        Additionally, there are <strong>2 Jewel Bosses</strong> in the area that have a chance to drop{' '}
        <strong>Sealed Tateossian set jewels</strong> — these are a drop chance from the{' '}
        <strong>Grave Keeper Dark Horror</strong>.
      </p>

      {zone.sections.map(section => (
        <ZoneSection key={section.id} section={section} />
      ))}

      <SectionHeading id="quests">Quests</SectionHeading>

      <h3 style={{ marginBottom: '0.5rem' }}>Wings of Sand — Lindvior Eggs</h3>
      <InfoBox variant="tip" label="Hidden quest">
        <p>
          This quest is hidden inside Zone 4 / Dragon Valley. Head toward the mini-boss area where{' '}
          <strong>Kintch</strong> and <strong>Grave Keeper Dark Horror</strong> spawn. On the left
          side there is a passage — follow it and you will find the NPC{' '}
          <strong>Separated Soul</strong>. Pick up the quest <strong>Wings of Sand</strong>{' '}
          (level 80+ recommended).
        </p>
      </InfoBox>

      <WikiFigure
        src="images/lionna/zona-4/z4-lind-eggs-quest.png"
        alt="Map — passage to Separated Soul NPC"
        caption="Arrow shows the passage leading to Separated Soul near the mini-boss area."
        size="lg"
      />

      <p style={{ marginBottom: '1rem' }}>
        After accepting the quest, enter the <strong>Lindvior party instance</strong>, kill the
        dragon and loot the <strong>Large Baby Dragon</strong> item. Return to{' '}
        <strong>Separated Soul</strong> and hand it in to receive <strong>15 Lindvior Eggs</strong>.
      </p>

      <WikiCarousel slides={lindviorQuestSlides} />
    </>
  )
}
