import { useState, useMemo, useEffect } from 'react'
import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import InfoBox        from '../../../components/ui/InfoBox'
import WikiFigure     from '../../../components/ui/WikiFigure'

const INSTANCES = [
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 2,
    boss: 'Turek Mercenary Captain',
    drops: [
      { qty: '300,000', item: 'Adena' },
      { qty: 10,        item: 'Event-Coin' },
      { qty: 25,        item: 'Coke' },
      { qty: 10,        item: 'Fire Potion' },
      { qty: 75,        item: 'Gold Einhasad' },
      { qty: 25,        item: "Beleth's Blood Dragon" },
      { qty: 10,        item: 'Blessed Scroll: Enchant Weapon (A-Grade)' },
      { qty: 10,        item: 'Blessed Scroll: Enchant Armor (A-Grade)' },
      { qty: 10,        item: 'Fire Potion' },
      { qty: 10,        item: 'Maestro Holder' },
      { qty: 7,         item: 'Sealed Dark Crystal Leather Armor Pattern' },
      { qty: 7,         item: 'Sealed Dark Crystal Robe Fabric' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 3,
    boss: 'Retreat Spider Cletu',
    drops: [
      { qty: '500,000', item: 'Adena' },
      { qty: 10,        item: 'Event-Coin' },
      { qty: 100,       item: 'Gold Einhasad' },
      { qty: 10,        item: 'Water Potion' },
      { qty: 10,        item: 'Blessed Scroll: Enchant Armor (A-Grade)' },
      { qty: 10,        item: 'Blessed Scroll: Enchant Weapon (A-Grade)' },
      { qty: '1,000',   item: 'Freed Soul' },
      { qty: 1,         item: 'Earring of Orfen' },
      { qty: 1,         item: 'Ring of Core' },
      { qty: 25,        item: "Beleth's Blood Dragon" },
      { qty: 15,        item: 'Sealed Draconic Leather Armor Part' },
      { qty: 15,        item: 'Sealed Major Arcana Robe Part' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 4,
    boss: 'Furious Thiefs',
    drops: [
      { qty: '2,500,000', item: 'Adena' },
      { qty: 10,          item: 'Event-Coin' },
      { qty: 10,          item: 'Blessed Scroll: Enchant Weapon (S-Grade)' },
      { qty: 10,          item: 'Blessed Scroll: Enchant Armor (S-Grade)' },
      { qty: 5,           item: "Giant's Codex" },
      { qty: 10,          item: "Beast's Claws" },
      { qty: 10,          item: 'Water Potion' },
      { qty: 100,         item: 'Gold Einhasad' },
      { qty: 15,          item: "Beleth's Blood Dragon" },
      { qty: 50,          item: 'Event - Medal' },
      { qty: 25,          item: 'Stone of Anguish' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 5,
    boss: 'Ghost of Peasant Leader',
    drops: [
      { qty: '15,000,000',  item: 'Adena' },
      { qty: 10,            item: 'Event-Coin' },
      { qty: 10,            item: 'Eye of Infinity Stone' },
      { qty: 150,           item: 'Gold Einhasad' },
      { qty: 10,            item: 'Earth Potion' },
      { qty: 15,            item: 'Ancient Armor Enchant Crystal (S-Grade)' },
      { qty: 15,            item: 'Ancient Weapon Enchant Crystal (S-Grade)' },
      { qty: '1,000',       item: 'Sealed Moirai Leather Breastplate Piece' },
      { qty: '1,000',       item: 'Sealed Moirai Tunic Piece' },
      { qty: '5,000,000',   item: 'Ancient Adena' },
      { qty: 20,            item: "Beleth's Silver Dragon" },
      { qty: 35,            item: 'Event - Glittering Medal' },
      { qty: 500,           item: 'Essence of Kamaloka' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 6,
    boss: '...The 3rd Underwater Guar',
    drops: [
      { qty: '55,000,000', item: 'Adena' },
      { qty: 10,           item: 'Event-Coin' },
      { qty: 150,          item: 'Gold Einhasad' },
      { qty: 20,           item: 'Ancient Armor Enchant Crystal (S-Grade)' },
      { qty: 20,           item: 'Ancient Weapon Enchant Crystal (S-Grade)' },
      { qty: 50,           item: 'Shiny Cube Fragment Weapon - D' },
      { qty: 1,            item: 'Book of Aklantoth - Part 1' },
      { qty: 1,            item: 'Book of Aklantoth - Part 2' },
      { qty: 1,            item: 'Book of Aklantoth - Part 3' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 7,
    boss: 'Pan Druid',
    drops: [
      { qty: '75,000,000',  item: 'Adena' },
      { qty: 10,            item: 'Event-Coin' },
      { qty: 500,           item: 'Essence of Kamaloka' },
      { qty: 150,           item: 'Gold Einhasad' },
      { qty: '10,000,000',  item: 'Ancient Adena' },
      { qty: 50,            item: 'Shiny Cube Fragment Weapon - D' },
      { qty: 15,            item: 'Ancient Weapon Enchant Crystal (S-Grade)' },
      { qty: 15,            item: 'Ancient Armor Enchant Crystal (S-Grade)' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 8,
    boss: 'Queen',
    tattoo: 'Octavia > Queen Ant',
    drops: [
      { qty: 15,          item: 'Divine Armor Enchant Crystal (S-Grade)' },
      { qty: 2,           item: "Giant's Codex - Mastery" },
      { qty: 10,          item: 'Event-Coin' },
      { qty: 15,          item: 'Divine Weapon Enchant Crystal (S-Grade)' },
      { qty: 5,           item: "Giant's Codex - Mastery" },
      { qty: 10,          item: "Beast's Claws" },
      { qty: 10,          item: 'Eye of Infinity Stone' },
      { qty: '1,500',     item: 'Golden Apiga' },
      { qty: 20,          item: "Bottle of Freya's Soul" },
      { qty: 200,         item: 'Noble Enhancement Stone' },
      { qty: 1,           item: 'Gold Bar' },
      { qty: 250,         item: 'Festival Adena' },
      { qty: '2,000',     item: 'Kaldis Gold Dragon' },
      { qty: 150,         item: 'Gold Einhasad' },
      { qty: 300,         item: 'Water Dragon Scale' },
      { qty: 3,           item: 'Queen Ant' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 9,
    boss: 'Behe',
    tattoo: 'Octavia > Behe',
    drops: [
      { qty: 15,    item: 'Divine Weapon Enchant Crystal (S-Grade)' },
      { qty: 2,     item: "Giant's Codex - Mastery" },
      { qty: 10,    item: 'Event-Coin' },
      { qty: 15,    item: 'Divine Armor Enchant Crystal (S-Grade)' },
      { qty: 10,    item: 'Event-Coin' },
      { qty: 1,     item: 'Exp Potion' },
      { qty: 3,     item: 'Momumu Part' },
      { qty: 2,     item: 'Rebirth Coin' },
      { qty: 1,     item: 'Gracian Anniversary Coins' },
      { qty: 3,     item: 'Behemoth' },
      { qty: 150,   item: 'Gold Einhasad' },
      { qty: 250,   item: 'Festival Adena' },
      { qty: 300,   item: 'Water Dragon Scale' },
      { qty: 500,   item: 'Golden Apiga' },
      { qty: 1,     item: 'Gold Bar' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 10,
    boss: 'Zaken',
    tattoo: 'Octavia > Zaken',
    drops: [
      { qty: 15,    item: 'Divine Weapon Enchant Crystal (S-Grade)' },
      { qty: 2,     item: "Giant's Codex - Mastery" },
      { qty: 10,    item: 'Event-Coin' },
      { qty: 15,    item: 'Divine Armor Enchant Crystal (S-Grade)' },
      { qty: 5,     item: 'Gold Bar' },
      { qty: 20,    item: 'Event-Coin' },
      { qty: 3,     item: 'Exp Potion' },
      { qty: 3,     item: 'Aramantine Part' },
      { qty: 3,     item: 'Zaken' },
      { qty: 150,   item: 'Gold Einhasad' },
      { qty: 300,   item: 'Water Dragon Scale' },
      { qty: 500,   item: 'Golden Apiga' },
      { qty: 250,   item: 'Festival Adena' },
      { qty: 2,     item: 'Gracian Anniversary Coins' },
      { qty: 5,     item: 'Rebirth Coin' },
      { qty: 6,     item: 'Momumu Part' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 11,
    boss: 'Maloso',
    tattoo: "Olf's Scroll Level 1",
    drops: [
      { qty: 5,     item: 'Rebirth Coin' },
      { qty: 2,     item: "Giant's Codex - Mastery" },
      { qty: 10,    item: 'Event-Coin' },
      { qty: 3,     item: 'Gracian Anniversary Coins' },
      { qty: 500,   item: 'Gold Bar' },
      { qty: 250,   item: 'Gold Einhasad' },
      { qty: 450,   item: 'Water Dragon Scale' },
      { qty: '1,500', item: 'Golden Apiga' },
      { qty: 450,   item: 'Festival Adena' },
      { qty: 1,     item: "Blessed Olf's T-shirt Enchant Scroll" },
      { qty: 1,     item: 'Top-Grade Life Stone - Level 86' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 12,
    boss: 'Ojoso',
    tattoo: "Olf's Scroll Level 1",
    drops: [
      { qty: 5,       item: 'Rebirth Coin' },
      { qty: 2,       item: "Giant's Codex - Mastery" },
      { qty: 15,      item: 'Event-Coin' },
      { qty: 3,       item: 'Gracian Anniversary Coins' },
      { qty: 500,     item: 'Gold Bar' },
      { qty: 1,       item: "Blessed Olf's T-shirt Enchant Scroll" },
      { qty: 250,     item: 'Gold Einhasad' },
      { qty: 450,     item: 'Water Dragon Scale' },
      { qty: '1,500', item: 'Golden Apiga' },
      { qty: 450,     item: 'Festival Adena' },
      { qty: 1,       item: 'Top-Grade Life Stone - Level 86' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 13,
    boss: 'Boloso',
    tattoo: "Olf's Scroll Level 1",
    drops: [
      { qty: 5,       item: 'Rebirth Coin' },
      { qty: 2,       item: "Giant's Codex - Mastery" },
      { qty: 15,      item: 'Event-Coin' },
      { qty: 3,       item: 'Gracian Anniversary Coins' },
      { qty: 500,     item: 'Gold Bar' },
      { qty: 1,       item: "Blessed Olf's T-shirt Enchant Scroll" },
      { qty: 250,     item: 'Gold Einhasad' },
      { qty: 450,     item: 'Water Dragon Scale' },
      { qty: '1,500', item: 'Golden Apiga' },
      { qty: 450,     item: 'Festival Adena' },
      { qty: 1,       item: 'Top-Grade Life Stone - Level 86' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 14,
    boss: 'Torakoso',
    tattoo: "Olf's Scroll Level 1 · Orfen Doll",
    drops: [
      { qty: 5,       item: 'Rebirth Coin' },
      { qty: 2,       item: "Giant's Codex - Mastery" },
      { qty: 15,      item: 'Event-Coin' },
      { qty: 3,       item: 'Gracian Anniversary Coins' },
      { qty: 500,     item: 'Gold Bar' },
      { qty: 1,       item: "Blessed Olf's T-shirt Enchant Scroll" },
      { qty: 250,     item: 'Gold Einhasad' },
      { qty: 450,     item: 'Water Dragon Scale' },
      { qty: '1,500', item: 'Golden Apiga' },
      { qty: 450,     item: 'Festival Adena' },
      { qty: 3,       item: 'Orfen Doll' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 15,
    boss: 'Baylor',
    tattoo: 'Octavia > Baylor · Event Coins',
    drops: [
      { qty: 15,      item: 'Event-Coin' },
      { qty: 3,       item: 'Gracian Anniversary Coins' },
      { qty: 500,     item: 'Gold Bar' },
      { qty: 500,     item: 'Event-Coin' },
      { qty: 1,       item: 'Master Potion' },
      { qty: 10,      item: 'Dragon Claw' },
      { qty: 1,       item: 'Key of Enigma' },
      { qty: 250,     item: 'Gold Einhasad' },
      { qty: 450,     item: 'Water Dragon Scale' },
      { qty: '1,500', item: 'Golden Apiga' },
      { qty: 450,     item: 'Festival Adena' },
      { qty: 500,     item: 'Elf Stone' },
      { qty: 15,      item: "Olf's T-shirt Enchant Scroll" },
      { qty: 1,       item: 'Baylor' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 16,
    boss: 'Kechudo',
    drops: [
      { qty: 5,         item: "Olf's T-shirt Enchant Scroll" },
      { qty: 15,        item: 'Event-Coin' },
      { qty: 15,        item: 'Earth Jewel' },
      { qty: 15,        item: 'Fire Jewel' },
      { qty: 15,        item: 'Water Jewel' },
      { qty: 250,       item: 'Gold Einhasad' },
      { qty: 450,       item: 'Water Dragon Scale' },
      { qty: '1,500',   item: 'Golden Apiga' },
      { qty: 450,       item: 'Festival Adena' },
      { qty: '500,000', item: 'Dragon Torch' },
      { qty: '500,000', item: 'Dragon Breath' },
      { qty: '500,000', item: 'Dragon Arrow' },
      { qty: 1,         item: 'Two Demons' },
      { qty: 10,        item: 'Dragon Claw' },
      { qty: 20,        item: 'Gracian Anniversary Coins' },
      { qty: '1,000',   item: 'Gold Bar' },
      { qty: 3,         item: 'Master Potion' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 17,
    boss: 'Kartudo',
    drops: [
      { qty: 3,       item: 'Ancestral Keys' },
      { qty: 15,      item: 'Event-Coin' },
      { qty: 15,      item: "Lidia's Dress" },
      { qty: 250,     item: 'Gold Einhasad' },
      { qty: 450,     item: 'Water Dragon Scale' },
      { qty: '1,500', item: 'Golden Apiga' },
      { qty: 450,     item: 'Festival Adena' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Easy · Level 10–85',
    index: 18,
    boss: 'Verfudo',
    drops: [
      { qty: 10,      item: "Lidia's Dress" },
      { qty: 15,      item: 'Event-Coin' },
      { qty: 3,       item: 'Ancestral Keys' },
      { qty: 250,     item: 'Gold Einhasad' },
      { qty: 450,     item: 'Water Dragon Scale' },
      { qty: '1,500', item: 'Golden Apiga' },
      { qty: 450,     item: 'Festival Adena' },
      { qty: 1,       item: 'Sphere of Contained Energy' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Hard · +5 Rebirths',
    index: 19,
    boss: '',
    drops: [],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Hard · +5 Rebirths',
    index: 20,
    boss: '',
    drops: [],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Hard · +5 Rebirths',
    index: 21,
    boss: '',
    drops: [],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Hard · +5 Rebirths',
    index: 22,
    boss: '',
    drops: [],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Hard · +5 Rebirths',
    index: 23,
    boss: '',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Extreme · +100 Rebirths',
    index: 24,
    boss: 'Lagarto',
    drops: [
      { qty: '5,000',  item: 'Gold Bar' },
      { qty: 25,       item: 'Rebirth Coin' },
      { qty: 30,       item: "Beast's Claws" },
      { qty: 35,       item: 'Gracian Anniversary Coins' },
      { qty: 1,        item: "Kali's Blood Dragon" },
      { qty: 1,        item: 'Chest of Destiny Doll' },
      { qty: 1,        item: 'Chest of Destiny Relic' },
      { qty: 5,        item: 'Chest Infernal' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Extreme · +100 Rebirths',
    index: 25,
    boss: 'Milei',
    drops: [
      { qty: '7,000', item: 'Gold Bar' },
      { qty: 30,      item: 'Rebirth Coin' },
      { qty: 30,      item: "Beast's Claws" },
      { qty: 45,      item: 'Gracian Anniversary Coins' },
      { qty: 1,       item: 'Chest of Destiny Doll' },
      { qty: 1,       item: 'Chest of Destiny Relic' },
      { qty: 5,       item: 'Chest Infernal' },
    ],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Extreme · +100 Rebirths',
    index: 26,
    boss: 'Fletcher',
    drops: [
      { qty: '10,000', item: 'Gold Bar' },
      { qty: 60,       item: 'Rebirth Coin' },
      { qty: 30,       item: "Beast's Claws" },
      { qty: 55,       item: 'Gracian Anniversary Coins' },
      { qty: 1,        item: 'Chest of Destiny Doll' },
      { qty: 1,        item: 'Chest of Destiny Relic' },
      { qty: 5,        item: 'Chest Infernal' },
    ],
  },
  {
    type: 'party',
    instance_type: 'party',
    label: 'Party Instance: Extreme · +100 Rebirths',
    index: 27,
    boss: '',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Extreme · +100 Rebirths',
    index: 28,
    boss: 'King Wind',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Superior · +300 Rebirths',
    index: 29,
    boss: 'King Water',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Superior · +300 Rebirths',
    index: 30,
    boss: 'King Fire',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Superior · +300 Rebirths',
    index: 31,
    boss: 'King Earth',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Superior · +300 Rebirths',
    index: 32,
    boss: 'Mechanical Engineer',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Superior · +300 Rebirths',
    index: 33,
    boss: 'Mechanical Proletaries',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Superior · +300 Rebirths',
    index: 34,
    boss: 'Mechanical Zahasher',
    drops: [],
  },
  {
    type: 'solo',
    instance_type: 'solo',
    label: 'Solo Instance: Superior · +300 Rebirths',
    index: 35,
    boss: 'Mechanical Berserker',
    drops: [],
  },
]

function matches(str, q) {
  return q && str.toLowerCase().includes(q.toLowerCase())
}

function InstanceCard({ data, highlight }) {
  const q = highlight.trim()
  const headerClass = `instance-card__header instance-card__header--${data.type}`
  const bossMatch   = q && matches(data.boss, q)
  const tattooMatch = q && data.tattoo && matches(data.tattoo, q)

  return (
    <div className="instance-card">
      <div className={headerClass}>
        <span className="instance-card__label">{data.label}</span>
        <span className="instance-card__index">#{data.index}</span>
      </div>
      <div className="instance-card__body">
        {data.boss && (
          <p className={`instance-card__boss${bossMatch ? ' instance-card__boss--match' : ''}`}>
            Boss: {data.boss}
            {bossMatch && <span className="instance-match-badge">match</span>}
          </p>
        )}
        {tattooMatch && (
          <p className="instance-card__tattoo instance-card__tattoo--match">
            🔱 Tattoo unlock: <strong>{data.tattoo}</strong>
            <span className="instance-match-badge">match</span>
          </p>
        )}
        {!tattooMatch && data.tattoo && (
          <p className="instance-card__tattoo">
            🔱 Tattoo unlock: <strong>{data.tattoo}</strong>
          </p>
        )}
        {data.drops.length > 0 ? (
          <ul className="instance-card__drops">
            {data.drops.map((d, i) => {
              const hit = q && matches(d.item, q)
              return (
                <li key={i} className={`instance-card__drop${hit ? ' instance-card__drop--match' : ''}`}>
                  <span className="instance-card__drop-qty">×{d.qty}</span>
                  <span>{d.item}</span>
                  {hit && <span className="instance-match-badge">match</span>}
                </li>
              )
            })}
          </ul>
        ) : (
          <p className="instance-card__tbd">Drop data coming soon.</p>
        )}
      </div>
    </div>
  )
}

export default function SoloInstances() {
  const [search,    setSearch]    = useState('')
  const [highlight, setHighlight] = useState('')

  useEffect(() => {
    const t = setTimeout(() => setHighlight(search), 1000)
    return () => clearTimeout(t)
  }, [search])

  const visible = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return INSTANCES
    return INSTANCES.filter(inst => {
      if (inst.boss.toLowerCase().includes(q))                              return true
      if (inst.label.toLowerCase().includes(q))                             return true
      if (inst.tattoo && inst.tattoo.toLowerCase().includes(q))             return true
      if (String(inst.index).includes(q))                                   return true
      if (inst.drops.some(d => d.item.toLowerCase().includes(q)))           return true
      return false
    })
  }, [search])

  return (
    <>
      <PageHero
        title="Solo Instances"
        tagline="Face the Instance Keeper's challenges alone — from beginner-friendly runs to grueling endgame fights, each with unique bosses and rewards."
      />

      {/* ===== INSTANCE KEEPER ===== */}
      <SectionHeading id="instance-keeper">Instance Keeper</SectionHeading>
      <p>
        All instances — solo and party alike — are accessed through the{' '}
        <strong>Instance Keeper</strong> NPC located in <strong>Giran town</strong>. Open its
        menu to browse the available instance list organized by type and difficulty.
      </p>
      <p>
        With the exception of the <strong>Tiat Instance</strong> (which has a 1-minute
        cooldown), every instance operates on a <strong>24-hour cooldown</strong>. This
        means each instance can be visited once per day to fight its mini boss and collect
        its rewards.
      </p>
      <InfoBox variant="tip" label="When Does the Cooldown Reset?">
        <p>
          The cooldown timer starts the moment you <strong>enter</strong> the instance —
          not when you finish or exit it. If you enter an instance at <strong>13:00</strong>,
          your next available run will be the following day at <strong>13:00</strong>. Plan
          your daily runs accordingly to maximize efficiency.
        </p>
      </InfoBox>

      {/* ===== SOLO INSTANCES ===== */}
      <SectionHeading id="solo">Solo Instances</SectionHeading>
      <p>
        Solo instances are designed for individual players and are generally more accessible
        than their party counterparts. A new player can begin tackling the first few solo
        instances as soon as they have completed some of the starter{' '}
        <strong>Improved Skills</strong> from the <strong>Octavia NPC</strong> — having a
        solid base of passive improvements makes the early bosses manageable even without
        high-end gear.
      </p>
      <p>
        As the instance number increases so does the difficulty — each step up brings
        stronger mini bosses with more complex mechanics — but the{' '}
        <strong>rewards scale in kind</strong>. Higher instances drop better materials,
        rarer items, and greater quantities than the lower-tier runs, making the progression
        worth pushing into even when it feels challenging.
      </p>
      <InfoBox variant="tip" label="Getting Started">
        <p>
          If you are new to instances, focus first on the <strong>Octavia NPC</strong> to
          unlock your starter Improved Skills, then return to the Instance Keeper and work
          through the solo list from the beginning. Do not skip ahead — each instance is
          tuned to a specific power level and jumping too far will result in quick deaths
          and wasted cooldowns.
        </p>
      </InfoBox>

      {/* ===== INSTANCE MAP ===== */}
      <SectionHeading id="map">Instance Keeper — Page 1</SectionHeading>
      <div className="instance-legend">
        <span className="instance-legend__item instance-legend__item--solo">Solo Instance</span>
        <span className="instance-legend__item instance-legend__item--party">Party Instance</span>
      </div>
      <WikiFigure
        src="images/lionna/instances/instances-page-1-marked.png"
        alt="Instance Keeper page 1 — solo and party instances marked"
        caption="Instance Keeper — Page 1 (green = solo, orange = party)"
      />

      {/* ===== INSTANCE CARDS ===== */}
      <SectionHeading id="drops">Instance Bosses & Drops</SectionHeading>
      <div className="instance-search-bar">
        <input
          type="text"
          className="tattoo-filter-input tattoo-filter-input--wide"
          placeholder="Search by boss, item drop, difficulty, index…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {search && (
          <button className="tattoo-filter-clear" onClick={() => setSearch('')}>Clear</button>
        )}
        <span className="instance-search-count">
          {visible.length} of {INSTANCES.length} instances
        </span>
      </div>
      {visible.length === 0 ? (
        <p className="instance-card__tbd">No instances match your search.</p>
      ) : (
        visible.map((inst) => (
          <InstanceCard key={inst.index} data={inst} highlight={highlight} />
        ))
      )}
    </>
  )
}
