import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiCarousel   from '../../../components/ui/WikiCarousel'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'
import tattoos        from '../../../data/lionna/tattoos.json'

const tattoo = tattoos.find(t => t.id === 'elemental')
const BASE   = 'images/lionna/tattoo/'
const ICON   = { Fire: '🔥', Water: '💧', Earth: '🌍', Air: '💨' }

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
      <InfoBox variant="tip" label="Fire boss coming soon">
        <p>The Fire element boss will be added once available. Water, Earth, and Air bosses are shown below.</p>
      </InfoBox>
      <WikiCarousel
        slides={[
          { src: `${BASE}element-water-isadora.png`,       alt: 'Isadora',       caption: '💧 Water — Isadora'       },
          { src: `${BASE}element-earth-scorpion-lord.png`, alt: 'Scorpion Lord', caption: '🌍 Earth — Scorpion Lord' },
          { src: `${BASE}element-air-eligos.png`,          alt: 'Eligos',        caption: '💨 Air — Eligos'          },
        ]}
      />
      <p>
        Each elemental world boss has a chance to drop their <strong>unique element material</strong>{' '}
        along with the shared drop — <strong>Warrior Halments</strong>. You will need{' '}
        <strong>x25 Warrior Halments</strong> from each boss to complete your set.
      </p>

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
