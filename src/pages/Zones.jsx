import { useState } from 'react'
import { createPortal } from 'react-dom'
import PageHero       from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import WikiFigure     from '../components/ui/WikiFigure'
import InfoBox        from '../components/ui/InfoBox'

function m(label, src) { return { label, src } }

function stdZone(name, level, extra = []) {
  return {
    name,
    mats: [
      
      m(`Armor Piece ${level}`,  `images/mats/armor-piece-${level}.png`),
      m(`Jewel Piece ${level}`,  `images/mats/jewel-piece-${level}.png`),
      m(`Weapon Piece ${level}`, `images/mats/weapon-piece-${level}.png`),
      ...(level <= 11 ? [m(`Raid Head ${level}`, `images/mats/raid-head-${level}.png`)] : []),
      ...extra,
    ],
  }
}

const ZONES = [
  stdZone('NO Grade',           1),
  stdZone('D Grade',            2),
  stdZone('C Grade',            3),
  stdZone('B Grade',            4),
  stdZone('A Grade',            5),
  stdZone('S Grade',            6),
  stdZone('Dynasty Grade',      7),
  stdZone('Moirai Grade',       8),
  stdZone('Vesper Grade',       9),
  { name: 'Execution', mats: [
    m('Stem',    'images/mats/stem.png'),
    m('Leather', 'images/mats/leather.png'),
    m('Coal',    'images/mats/coal.png'),
  ]},
  stdZone('Vesper Noble Grade', 10, [
    m('Seed of Evil Shard', 'images/mats/seed-of-evil-shard.png'),
  ]),
  stdZone('Vorpal Grade',       11),
  stdZone('Elegia Grade',       12),
  { name: 'Pagan Temple', mats: [
    m('Life Force',              'images/mats/life-force.png'),
    m('Mark of Betrayal',        'images/mats/mark-of-betrayal.png'),
    m('Scorpion Poison Stinger', 'images/mats/scorpion-poison-stinger.png'),
  ]},
  stdZone('Elegia 2',           13),
  stdZone('Elegia 3',           14),
  stdZone('Elegia 4',           15),
  stdZone('Elegia 5',           16),
  stdZone('Elegia 6',           17),
  // stdZone('Elegia 7',           18),
  { name: 'Ketra Orc', mats: [] },
  { name: 'Elegia 7', mats: [] },
]

function MatChip({ src, label }) {
  const base = import.meta.env.BASE_URL
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="mat-chip" onClick={() => setOpen(true)} title={`View drop table: ${label}`}>
        <div className="mat-chip-img-wrap">
          <img src={`${base}${src}`} alt={label} />
        </div>
        <span className="mat-chip-label">{label}</span>
      </button>
      {open && createPortal(
        <div className="lightbox-backdrop" onClick={() => setOpen(false)}>
          <img
            src={`${base}${src}`}
            alt={label}
            className="lightbox-img"
            onClick={e => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  )
}

export default function Zones() {
  const [query, setQuery] = useState('')

  const filtered = query
    ? ZONES.filter(z => {
        const q = query.toLowerCase()
        return (
          z.name.toLowerCase().includes(q) ||
          z.mats.some(mat => mat.label.toLowerCase().includes(q))
        )
      })
    : ZONES

  return (
    <>
      <PageHero
        title="Farm Zones"
        tagline="Hunting grounds organised by gear grade — each zone drops materials for progression."
      />

      <SectionHeading id="gatekeeper">The Gatekeeper</SectionHeading>
      <p>
        The <strong>Gatekeeper</strong> NPC is your primary means of travel. From any city you can
        open the Gatekeeper and teleport instantly to any destination on the continent — cities,
        catacombs, or the dedicated <strong>Farm Zones</strong> panel.
      </p>
      <WikiFigure
        src="images/gatekeeper.png"
        alt="Gatekeeper NPC panel showing city and zone teleport options"
        caption="Gatekeeper — choose a city or click Farm Zones to see all farming destinations."
        size="lg"
      />

      <SectionHeading id="farm-zones-panel" level={3}>Farm Zones Panel</SectionHeading>
      <p>
        Clicking <strong>Farm Zones</strong> in the Gatekeeper opens a dedicated panel listing every
        available hunting zone. Zones are roughly ordered by gear grade — start at
        <strong> NO Grade</strong> and work your way up as your equipment improves.
      </p>
      <WikiFigure
        src="images/gatekeeper-1.png"
        alt="Farm Zones panel listing all zones by grade"
        caption="Farm Zones panel — all hunting zones available from the Gatekeeper."
        size="lg"
      />

      <SectionHeading id="zone-list">Zone List</SectionHeading>
      <p>
        All farm zones are accessible through the Gatekeeper. Each zone drops specific
        materials used for <strong>Tattoos</strong>, <strong>Collections</strong>, and other
        progression systems. Click any material chip to view its full drop table.
      </p>

      <div className="zone-search-wrap">
        <input
          className="zone-search"
          type="search"
          placeholder="Search zone or material…"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div className="zone-table-wrap">
        <table className="zone-table">
          <thead>
            <tr>
              <th width="300px">Zone</th>
              <th>Materials</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={2} className="zone-no-results">No zones match your search.</td>
              </tr>
            ) : filtered.map(zone => (
              <tr key={zone.name}>
                <td className="zone-name-cell">{zone.name}</td>
                <td>
                  {zone.mats.length === 0 ? (
                    <span className="zone-no-mats">Coming soon</span>
                  ) : (
                    <div className="zone-mats">
                      {zone.mats.map((mat, i) => (
                        <MatChip key={i} src={mat.src} label={mat.label} />
                      ))}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <InfoBox label="World Boss">
        <p>
          The <strong>World Boss</strong> button at the top of the Farm Zones panel teleports you to
          the current world boss encounter — a server-wide event with exclusive drops.
        </p>
      </InfoBox>
    </>
  )
}
