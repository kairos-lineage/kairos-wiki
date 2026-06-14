import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'

const ELEMENTS = [
  { id: 'fire',  icon: '🔥', label: 'Fire',  zone: '—', boss: '—' },
  { id: 'water', icon: '💧', label: 'Water', zone: '—', boss: '—' },
  { id: 'earth', icon: '🌍', label: 'Earth', zone: '—', boss: '—' },
  { id: 'air',   icon: '💨', label: 'Air',   zone: '—', boss: '—' },
]

export default function ElementalTattoo() {
  return (
    <>
      <PageHero
        title="Elemental Tattoo"
        tagline="Master all four elements — Fire, Water, Earth, and Air."
      />

      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Elemental Tattoo</strong> is crafted by combining materials from four elemental
        world bosses, each tied to a unique zone across the Lineage II world. Each boss has a chance
        to drop <strong>Warrior Halments</strong> — you will need <strong>x25</strong> per element
        to complete the set.
      </p>

      <InfoBox variant="warning" label="Prepare for a grind">
        <p>
          Warrior Halments are <strong>not a guaranteed drop</strong>. Each element requires
          <strong> x25 Halments</strong> collected from its respective world boss, which means
          you will need to hunt each boss <strong>multiple times</strong>. Coordinate with your
          party and plan your sessions around boss respawn timers.
        </p>
      </InfoBox>

      <SectionHeading id="requirements">Requirements Summary</SectionHeading>
      <WikiTable
        columns={['Element', 'Zone', 'World Boss', 'Material Required']}
        rows={ELEMENTS.map(el => [
          <><span style={{ marginRight: '0.4rem' }}>{el.icon}</span><strong>{el.label}</strong></>,
          el.zone,
          el.boss,
          'Warrior Halments x25',
        ])}
      />

      {ELEMENTS.map(el => (
        <div key={el.id}>
          <SectionHeading id={el.id}>
            {el.icon} {el.label} Element
          </SectionHeading>
          <WikiTable
            columns={['Detail', 'Info']}
            rows={[
              ['Zone',              el.zone],
              ['World Boss',        el.boss],
              ['Drop',              'Warrior Halments'],
              ['Amount Needed',     'x25'],
            ]}
          />
        </div>
      ))}

      <SectionHeading id="combine">Combining the Elements</SectionHeading>
      <p>
        Once you have collected <strong>x25 Warrior Halments</strong> for all four elements,
        combine them to craft the <strong>Elemental Tattoo</strong>.
      </p>
      <WikiTable
        columns={['Material', 'Amount']}
        rows={[
          ['🔥 Fire — Warrior Halments',  'x25'],
          ['💧 Water — Warrior Halments', 'x25'],
          ['🌍 Earth — Warrior Halments', 'x25'],
          ['💨 Air — Warrior Halments',   'x25'],
        ]}
      />
    </>
  )
}
