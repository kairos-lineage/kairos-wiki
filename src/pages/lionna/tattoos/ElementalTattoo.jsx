import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiCarousel   from '../../../components/ui/WikiCarousel'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'
import tattoos        from '../../../data/lionna/tattoos.json'

const tattoo = tattoos.find(t => t.id === 'elemental')

const BASE = 'images/lionna/tattoo/'

const BOSS_SLIDES = [
  { src: `${BASE}element-water-isadora.png`,       alt: 'Isadora — Water World Boss',       caption: '💧 Water — Isadora'       },
  { src: `${BASE}element-earth-scorpion-lord.png`, alt: 'Scorpion Lord — Earth World Boss', caption: '🌍 Earth — Scorpion Lord' },
  { src: `${BASE}element-air-eligos.png`,          alt: 'Eligos — Air World Boss',          caption: '💨 Air — Eligos'          },
]

const ICON = { Fire: '🔥', Water: '💧', Earth: '🌍', Air: '💨' }

export default function ElementalTattoo() {
  const total = tattoo.materials.reduce((sum, m) => sum + m.qty, 0)

  return (
    <>
      <PageHero
        title="Elemental Tattoo"
        tagline="Master all four elements — Fire, Water, Earth, and Air."
      />

      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Elemental Tattoo</strong> is crafted from materials dropped by four elemental
        world bosses spread across the Lineage II world. Each element has its own dedicated zone
        and boss. Hunt them down, collect <strong>Warrior Halments</strong>, and combine all four
        elements to forge the tattoo.
      </p>
      <InfoBox variant="warning" label="Prepare for a grind">
        <p>
          Warrior Halments are <strong>not a guaranteed drop</strong>. You need{' '}
          <strong>x25 per element</strong> (<strong>x{total} total</strong>) which means
          hunting each boss multiple times. Plan sessions around respawn timers.
        </p>
      </InfoBox>

      {/* ===== BOSSES ===== */}
      <SectionHeading id="bosses">Elemental World Bosses</SectionHeading>
      <InfoBox variant="tip" label="Fire boss coming soon">
        <p>The Fire element boss image will be added shortly. The other three bosses are shown below.</p>
      </InfoBox>
      <WikiCarousel slides={BOSS_SLIDES} />

      {/* ===== ELEMENT PARTS ===== */}
      <SectionHeading id="parts">Element Parts</SectionHeading>
      <p>Each boss drops its respective Element Part in addition to Warrior Halments. Collect one part per element.</p>
      <WikiFigure
        src={`${BASE}elemental-parts.png`}
        alt="Elemental Parts — all four elements"
        caption="Elemental Parts — Fire, Water, Earth, and Air."
        size="md"
      />

      {/* ===== WARRIOR HALMENTS ===== */}
      <SectionHeading id="warrior-halments">Warrior Halments</SectionHeading>
      <p>
        The core crafting material. Each of the four elemental world bosses has a chance to drop
        their element's <strong>Warrior Halments</strong>. You need <strong>x25 per element</strong>.
      </p>
      <WikiFigure
        src={`${BASE}elemental-warrior-helmet.png`}
        alt="Warrior Halments"
        caption="Warrior Halments — dropped by elemental world bosses."
        size="sm"
      />

      {/* ===== MASTER TATTOOS ===== */}
      <SectionHeading id="master">Elemental Master Tattoos</SectionHeading>
      <p>Combine all four elements to create one of the two <strong>Elemental Master Tattoos</strong>.</p>
      <WikiCarousel
        slides={[
          { src: `${BASE}elemental-master-1.png`, alt: 'Elemental Master Tattoo 1', caption: 'Elemental Master Tattoo — variant 1' },
          { src: `${BASE}elemental-master-2.png`, alt: 'Elemental Master Tattoo 2', caption: 'Elemental Master Tattoo — variant 2' },
        ]}
      />

      {/* ===== MATERIALS TABLE ===== */}
      <SectionHeading id="materials">Required Materials</SectionHeading>
      <table className="wiki-table">
        <thead>
          <tr>
            <th>Element</th>
            <th>Material</th>
            <th>Source</th>
            <th style={{ textAlign: 'right' }}>Qty</th>
          </tr>
        </thead>
        <tbody>
          {tattoo.materials.map((m, i) => (
            <tr key={i}>
              <td>{ICON[m.element]} {m.element}</td>
              <td>{m.name}</td>
              <td>{m.source}</td>
              <td style={{ textAlign: 'right' }}>{m.qty}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}><strong>Total</strong></td>
            <td style={{ textAlign: 'right' }}><strong>{total}</strong></td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}
