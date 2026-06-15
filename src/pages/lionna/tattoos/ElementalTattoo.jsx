import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiCarousel   from '../../../components/ui/WikiCarousel'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'
import tattoos        from '../../../data/lionna/tattoos.json'

const tattoo = tattoos.find(t => t.id === 'elemental')
const BASE   = 'images/lionna/tattoo/'
const ELEMENT_ICON = { 'Fire Element Part': '🔥', 'Water Element Part': '💧', 'Earth Element Part': '🌍', 'Air Element Part': '💨' }

export default function ElementalTattoo() {
  const total = tattoo.materials.reduce((sum, m) => sum + m.qty, 0)

  return (
    <>
      <PageHero
        title="Elemental Tattoo"
        tagline="A custom tattoo forged from the power of four elemental world bosses."
      />

      {/* ===== TATTOO ITEM ===== */}
      <WikiFigure
        src={`${BASE}element-master-tattoo.png`}
        alt="Elemental Tattoo"
        caption="Elemental Tattoo — the finished custom tattoo."
        size="sm"
      />

      {/* ===== WHERE TO OBTAIN ===== */}
      <SectionHeading id="obtain">Where to Obtain</SectionHeading>
      <p>
        Purchase the Elemental Tattoo from <strong>Asta</strong> under{' '}
        <strong>Normal Tattoos</strong>. You will need the required materials in your inventory
        before she will allow the exchange.
      </p>

      {/* ===== REQUIRED MATERIALS (tattoo shop items) ===== */}
      <SectionHeading id="required-items">Required Items</SectionHeading>
      <p>To craft the Elemental Tattoo you need to bring the following two items to Asta:</p>
      <WikiCarousel
        slides={[
          { src: `${BASE}elemental-master-1.png`, alt: 'Elemental Master 1', caption: 'Elemental Master 1 — required material' },
          { src: `${BASE}elemental-master-2.png`, alt: 'Elemental Master 2', caption: 'Elemental Master 2 — required material' },
        ]}
      />

      {/* ===== ABOUT THE TATTOO ===== */}
      <SectionHeading id="about">About the Elemental Tattoo</SectionHeading>
      <p>
        The Elemental Tattoo is a <strong>custom tattoo</strong> that cannot be obtained from
        regular drops or quests. To craft it you must hunt <strong>four elemental world bosses</strong>,
        each guarding a unique zone across the Lineage II world.
      </p>
      <p>
        These bosses are powerful and their materials are <strong>not guaranteed drops</strong> —
        expect to return to each zone multiple times before you have everything you need.
      </p>

      {/* ===== BOSSES ===== */}
      <SectionHeading id="bosses">Elemental World Bosses</SectionHeading>
      <WikiCarousel
        slides={[
          { src: `${BASE}element-fire-hellfire.png`,       alt: 'Hellfire',      caption: '🔥 Fire — Hellfire'       },
          { src: `${BASE}element-water-isadora.png`,       alt: 'Isadora',       caption: '💧 Water — Isadora'       },
          { src: `${BASE}element-earth-scorpion-lord.png`, alt: 'Scorpion Lord', caption: '🌍 Earth — Scorpion Lord' },
          { src: `${BASE}element-air-eligos.png`,          alt: 'Eligos',        caption: '💨 Air — Eligos'          },
        ]}
      />
      <p>
        Each elemental world boss has a chance to drop their <strong>unique Element Part</strong>{' '}
        along with the shared drop — <strong>Warrior Halments</strong>. You need{' '}
        <strong>x25 Warrior Halments total</strong> and <strong>x1 Element Part per boss</strong> to complete the recipe.
      </p>

      {/* ===== MATERIALS TABLE ===== */}
      <SectionHeading id="materials">Required Materials</SectionHeading>
      <p>Bring the following items to <strong>Asta</strong> under <strong>Normal Tattoos</strong> to craft the Elemental Tattoo.</p>
      <table className="wiki-table">
        <thead>
          <tr>
            <th>Material</th>
            <th>Source</th>
            <th style={{ textAlign: 'right' }}>Qty</th>
          </tr>
        </thead>
        <tbody>
          {tattoo.materials.map((m, i) => (
            <tr key={i}>
              <td>{ELEMENT_ICON[m.name] ? <>{ELEMENT_ICON[m.name]} {m.name}</> : m.name}</td>
              <td>{m.source}</td>
              <td style={{ textAlign: 'right' }}>{m.qty}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}><strong>Total items</strong></td>
            <td style={{ textAlign: 'right' }}><strong>{total}</strong></td>
          </tr>
        </tfoot>
      </table>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
        <WikiFigure
          src={`${BASE}elemental-parts.png`}
          alt="Element Parts — Fire, Water, Earth, Air"
          caption="Element Parts — one from each elemental boss."
          size="sm"
        />
        <WikiFigure
          src={`${BASE}elemental-warrior-helmet.png`}
          alt="Warrior Halments"
          caption="Warrior Halments ×25 — dropped by all elemental bosses."
          size="sm"
        />
      </div>
    </>
  )
}
