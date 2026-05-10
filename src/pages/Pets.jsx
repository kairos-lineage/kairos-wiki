import { useState }    from 'react'
import { Link }        from 'react-router-dom'
import PageHero        from '../components/ui/PageHero'
import SectionHeading  from '../components/ui/SectionHeading'
import WikiCarousel    from '../components/ui/WikiCarousel'
import WikiFigure      from '../components/ui/WikiFigure'
import WikiTable       from '../components/ui/WikiTable'
import InfoBox         from '../components/ui/InfoBox'
import { renderText }  from '../utils/renderText'

const SLIDES = [
  { src: 'images/pets-1.png', alt: 'Pet upgrade panel', caption: 'Pet upgrade panel — increase your pet\'s level to maximise its bonuses.' },
  { src: 'images/pets-2.png', alt: 'Pet detail view showing current bonuses and required items', caption: 'Pet detail view — shows current bonuses and items required for the next upgrade.' },
]

const PETS = [
  { name: 'Summon Greyclaw Kutus',     buffs: '+179% P.Atk\n+110% Crit Dmg\n+5 STR' },
  { name: 'Turek Mercenary Captain',   buffs: '+220% P.Atk\n+215% PvE Phys Dmg\n+5 DEX' },
  { name: 'Retreat Spider Cletu',      buffs: '+110% M.Atk\n+110% M.Crit Power\n+5 INT' },
  { name: 'Furious Thieles',           buffs: '+68% M.Atk\n+215% PvE Magic Dmg\n+5 WIT' },
  { name: 'Ghost of Peasant Leader',   buffs: '+215% P.Def\n+320% Max HP\n+5 CON' },
  { name: '3rd Underwater Guardian',   buffs: '+267% M.Def\n+215% Max CP\n+5 MEN' },
  { name: 'Pan Dryad',                 buffs: '+57% P.Def\n+57% M.Def\n+110% HP\n+110% CP' },
  { name: 'Breka Warlock Pastu',       buffs: '+236% Max CP' },
  { name: 'Stakato Queen Zyrnna',      buffs: '+372% PvE Phys Dmg\n+5% Crit Dmg\n+3 STR' },
  { name: 'Ketra Commander Atis',      buffs: '+372% PvE Magic Dmg\n+5% M.Crit Power\n+3 INT' },
  { name: 'Atraiban',                  buffs: '+480% P.Atk\n+215% PvE Phys Dmg\n+509% Crit Dmg\n+17 STR' },
  { name: "Eva's Guardian Millenu",    buffs: '+520% P.Atk\n+173% Crit Dmg\n+17 DEX' },
  { name: "Shilen's Messenger Cabrio", buffs: '+320% M.Atk\n+110% PvE Magic Dmg\n+320% M.Crit Power\n+17 INT' },
  { name: 'Tirak',                     buffs: '+236% M.Atk\n+110% M.Crit Power\n+17 WIT' },
  { name: 'Remmel',                    buffs: '+530% P.Def\n+320% Max HP\n+17 CON' },
  { name: 'Barion',                    buffs: '+451% M.Def\n+320% Max CP\n+17 MEN' },
  { name: 'Karte',                     buffs: '+215% P.Def\n+215% M.Def\n+215% HP\n+215% CP' },
  { name: 'Verfa',                     buffs: '+551% Max CP' },
  { name: 'Rahha',                     buffs: '+530% PvE Phys Dmg\n+47% Crit Dmg\n+6 STR\n+5 DEX' },
  { name: 'Kernon',                    buffs: '+530% PvE Magic Dmg\n+47% M.Crit Power\n+6 INT\n+5 WIT' },
  { name: 'Beacon of Blue Sky',        buffs: '+1080% P.Atk\n+530% PvE Phys Dmg\n+1080% Crit Dmg\n+20 STR\n+17 DEX' },
  { name: 'Unrequited Kael',           buffs: '+1120% P.Atk\n+320% PvE Phys Dmg\n+540% Crit Dmg\n+20 DEX' },
  { name: 'Chertuba of Great Soul',    buffs: '+740% M.Atk\n+530% PvE Magic Dmg\n+740% M.Crit Power\n+20 INT\n+17 WIT' },
  { name: 'Wizard of Storm Teruk',     buffs: '+572% M.Atk\n+320% PvE Magic Dmg\n+320% M.Crit Power\n+20 WIT' },
  { name: 'Captain of Red Flag Shaka', buffs: '+1160% P.Def\n+740% HP\n+530% CP\n+20 CON' },
  { name: 'Forest Watcher Ruell',      buffs: '+1002% M.Def\n+740% CP\n+20 MEN' },
  { name: 'Princess Molrang',          buffs: '+530% P.Def\n+530% M.Def\n+530% HP\n+530% CP' },
  { name: "Cat's Eye Bandit",          buffs: '+320% HP\n+1120% CP' },
  { name: 'Leader of Cat Gang',        buffs: '+320% P.Atk\n+1160% PvE Phys Dmg\n+278% Crit Dmg\n+12 STR\n+25 DEX' },
  { name: 'Timak Orc Chief Ranger',    buffs: '+320% M.Atk\n+1160% PvE Magic Dmg\n+278% M.Crit Power\n+12 INT\n+25 WIT' },
  { name: 'Crazy Mechanic Golem',      buffs: '+1380% P.Atk\n+556% PvE Phys Dmg\n+1212% Crit Dmg\n+25 STR\n+25 DEX' },
  { name: 'Soulless Wild Boar',        buffs: '+1080% P.Atk\n+556% PvE Phys Dmg\n+556% Crit Dmg\n+25 DEX' },
  { name: 'Korim',                     buffs: '+950% M.Atk\n+556% PvE Magic Dmg\n+950% M.Crit Power\n+25 INT\n+25 WIT' },
  { name: 'Elf Renoa',                 buffs: '+740% M.Atk\n+425% PvE Magic Dmg\n+425% M.Crit Power\n+25 WIT' },
  { name: "Sejarr's Servitor",         buffs: '+1475% P.Def\n+950% HP\n+425% CP\n+25 CON' },
  { name: 'Rotting Tree Repiro',       buffs: '+1278% M.Def\n+950% CP\n+25 MEN' },
  { name: 'Shacram',                   buffs: '+687% P.Def\n+687% M.Def\n+556% HP\n+556% CP' },
  { name: 'Sorcerer Isirr',           buffs: '+293% HP\n+1080% CP' },
  { name: 'Ghost of the Well Lidia',  buffs: '+425% P.Atk\n+884% PvE Phys Dmg\n+425% Crit Dmg\n+13 STR\n+16 DEX' },
  { name: 'Meana',                    buffs: '+425% M.Atk\n+884% PvE Magic Dmg\n+425% M.Crit Power\n+13 INT\n+16 WIT' },
  { name: 'Icarus Sample 1',          buffs: '+2399% P.Atk\n+950% PvE Phys Dmg\n+2000% Crit Dmg\n+40 STR\n+25 DEX' },
  { name: 'Guillotine',               buffs: '+2084% P.Atk\n+740% PvE Phys Dmg\n+950% Crit Dmg\n+40 DEX' },
  { name: 'Berun',                    buffs: '+1664% M.Atk\n+950% PvE Magic Dmg\n+1664% M.Crit Power\n+40 INT\n+25 WIT' },
  { name: 'Leo',                      buffs: '+1412% M.Atk\n+740% PvE Magic Dmg\n+908% M.Crit Power\n+40 WIT' },
  { name: 'Tiger King Angel',         buffs: '+2420% P.Def\n+1475% HP\n+1160% CP\n+40 CON' },
  { name: 'Golkonda',                 buffs: '+2105% M.Def\n+1475% CP\n+40 MEN' },
  { name: 'Rashkos',                  buffs: '+1475% P.Def\n+1475% M.Def\n+1160% HP\n+1160% CP' },
  { name: 'Gharmash',                 buffs: '+530% HP\n+2084% CP' },
  { name: 'Carnage Lord Gato',        buffs: '+950% P.Atk\n+1475% PvE Phys Dmg\n+950% Crit Dmg\n+24 STR\n+30 DEX' },
  { name: 'Leto Chief Talkin',        buffs: '+950% M.Atk\n+1475% PvE Magic Dmg\n+950% M.Crit Power\n+24 INT\n+30 WIT' },
]

const STAT_FILTERS = [
  'P.Atk', 'M.Atk', 'Crit Dmg', 'M.Crit Power',
  'PvE Phys Dmg', 'PvE Magic Dmg', 'P.Def', 'M.Def', 'HP', 'CP',
]

export default function Pets() {
  const [active, setActive] = useState(new Set())

  const toggle = (stat) => setActive(prev => {
    const next = new Set(prev)
    if (next.has(stat)) next.delete(stat)
    else next.add(stat)
    return next
  })

  const filtered = active.size === 0
    ? PETS
    : PETS.filter(p => [...active].every(stat => p.buffs.includes(stat)))

  const rows = filtered.map(p => [p.name, renderText(p.buffs)])

  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <Link to="/community-board">← Community Board</Link>
      </div>
      <PageHero
        title="Pets"
        tagline="Raid boss companions that grant passive buffs — upgrade them for max power."
      />

      <p>
        Pets are obtained by harvesting <strong>Dense Hide</strong> — a special material dropped
        exclusively by <strong>Superior Raid Bosses</strong>. Be warned: Superiors are exceptionally
        powerful enemies that require serious preparation to take down.
      </p>
      <p>
        To harvest Dense Hide after killing a Superior, you need a <strong>Skinning Knife</strong> —
        a consumable tool purchased from the Store using Gold Bars, Event Coins, and Boss Blood Superior.
        Once you have the hide, it can be exchanged for your pet.
        Each pet grants <strong>passive buffs</strong> that persist while it is active and can be
        upgraded progressively — the table below shows <strong>max level</strong> bonus values.
      </p>
      <WikiFigure
        src="images/skinning-knife.png"
        alt="Skinning Knife in the Store showing required items: Gold Bar x2500, Event Coin x125, Boss Blood Superior x1"
        caption="Skinning Knife — required to harvest Dense Hide from Superior Raid Bosses."
        size="md"
      />
      <WikiCarousel slides={SLIDES} />

      <SectionHeading id="pets-buffs">All Pets — Max Level Buffs</SectionHeading>
      <p>Select one or more stats to filter pets that provide <strong>all</strong> of them.</p>

      <div className="pet-filters">
        {STAT_FILTERS.map(stat => (
          <label
            key={stat}
            className={`pet-filter-chip${active.has(stat) ? ' active' : ''}`}
          >
            <input
              type="checkbox"
              checked={active.has(stat)}
              onChange={() => toggle(stat)}
            />
            {stat}
          </label>
        ))}
        {active.size > 0 && (
          <button className="pet-filter-clear" onClick={() => setActive(new Set())}>
            Clear
          </button>
        )}
      </div>

      <div className="wiki-table-scroll-wrapper">
        {filtered.length === 0 ? (
          <p className="pet-no-results">No pets match all selected filters.</p>
        ) : (
          <WikiTable
            columns={['Pet Name', 'Max Level Buffs']}
            rows={rows}
          />
        )}
      </div>
      <p className="wiki-table-scroll-note">
        ↕ Showing {filtered.length} of {PETS.length} pets
      </p>

      <InfoBox variant="tip" label="Choosing Your Pet">
        Pick pets that complement your build — <strong>P.Atk / Crit Dmg</strong> for physical DPS,{' '}
        <strong>M.Atk / M.Crit Power</strong> for mages, <strong>P.Def / HP</strong> for tanks, and{' '}
        <strong>M.Def / CP</strong> for support. Higher-tier pets from harder raid bosses provide
        significantly larger bonuses.
      </InfoBox>

      <InfoBox variant="tip" label="The Trick">
        Having a pet will <strong>significantly</strong> boost your chances of killing a Superior Raid Boss —
        but you need to kill one first to get a pet. Sound impossible?{' '}
        A little help from friends who already farm Superiors goes a long way.
        Find players with pets, group up for your first Superior kill, and once you have your pet
        you will be able to return the favour.
      </InfoBox>

      <SectionHeading id="donation-pets">Donation Pets</SectionHeading>
      <p>
        Donation pets are purchased with <strong>Donation Coins</strong> from the Store and upgraded
        through 5 levels. Unlike raid boss pets they focus on quality-of-life bonuses — drop rate,
        experience, and instance energy. The table below shows the coin cost per upgrade level and
        the max level buffs.
      </p>

      <SectionHeading id="belldandy" level={3}>Belldandy</SectionHeading>
      <WikiTable
        columns={['Level', 'Donation Coins']}
        rows={[
          ['1', '5'],
          ['2', '7'],
          ['3', '8'],
          ['4', '10'],
          ['5 (Max)', '15'],
        ]}
      />
      <p style={{ marginTop: '1rem' }}><strong>Max Level Buffs (5/5):</strong></p>
      <WikiTable
        columns={['Buff']}
        rows={[
          ['+50% Drop Amount'],
          ['+50% EXP'],
          ['+50% SP'],
          ['+50% Raid Drop Amount'],
          ['-30% Instance Energy Cost'],
          ['+100% Instance Energy Regen'],
          ['+100 Instance Energy Max'],
        ]}
      />
    </>
  )
}
