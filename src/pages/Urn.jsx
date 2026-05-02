import { useState, useMemo } from 'react'
import { Link }              from 'react-router-dom'
import PageHero              from '../components/ui/PageHero'
import SectionHeading        from '../components/ui/SectionHeading'
import InfoBox               from '../components/ui/InfoBox'

/* ── Data ──────────────────────────────────────────────────────── */

const ITEMS = {
  // Raw materials (no recipe)
  'wyrms-blood':        { label: "Wyrm's Blood" },
  'blood-root':         { label: 'Blood Root' },
  'lava-stones':        { label: 'Lava Stones' },
  'volcanic-ash':       { label: 'Volcanic Ash' },
  'moonstone-shards':   { label: 'Moonstone Shards' },
  'rotten-bone-pieces': { label: 'Rotten Bone Pieces' },
  'demons-blood':       { label: "Demon's Blood" },
  'infernium-ore':      { label: 'Infernium Ore' },
  'quicksilver':        { label: 'Quicksilver' },
  'sulfur':             { label: 'Sulfur' },
  // Tier 1
  'dracoplasm':         { label: 'Dracoplasm',      tier: 1 },
  'magma-dust':         { label: 'Magma Dust',      tier: 1 },
  'moon-dust':          { label: 'Moon Dust',        tier: 1 },
  'necroplasm':         { label: 'Necroplasm',      tier: 1 },
  'demonplasm':         { label: 'Demonplasm',      tier: 1 },
  'inferno-dust':       { label: 'Inferno Dust',    tier: 1 },
  // Tier 2
  'draconic-essence':   { label: 'Draconic Essence', tier: 2 },
  'fire-essence':       { label: 'Fire Essence',     tier: 2 },
  'lunargent':          { label: 'Lunargent',        tier: 2 },
  'midnight-oil':       { label: 'Midnight Oil',     tier: 2 },
  'demonic-essence':    { label: 'Demonic Essence',  tier: 2 },
  'abyss-oil':          { label: 'Abyss Oil',        tier: 2 },
  // Tier 3
  'hellfire-oil':       { label: 'Hellfire Oil',    tier: 3 },
  'nightmare-oil':      { label: 'Nightmare Oil',   tier: 3 },
  'pure-silver':        { label: 'Pure Silver',     tier: 3 },
}

const RECIPES = {
  'dracoplasm':        [{ id: 'wyrms-blood',        qty: 10 }, { id: 'blood-root',       qty: 1 }],
  'magma-dust':        [{ id: 'lava-stones',         qty: 10 }, { id: 'volcanic-ash',     qty: 1 }],
  'moon-dust':         [{ id: 'moonstone-shards',    qty: 10 }, { id: 'volcanic-ash',     qty: 1 }],
  'necroplasm':        [{ id: 'rotten-bone-pieces',  qty: 10 }, { id: 'blood-root',       qty: 1 }],
  'demonplasm':        [{ id: 'demons-blood',        qty: 10 }, { id: 'blood-root',       qty: 1 }],
  'inferno-dust':      [{ id: 'infernium-ore',       qty: 10 }, { id: 'volcanic-ash',     qty: 1 }],
  'draconic-essence':  [{ id: 'dracoplasm',          qty: 10 }, { id: 'quicksilver',      qty: 1 }],
  'fire-essence':      [{ id: 'magma-dust',          qty: 10 }, { id: 'sulfur',           qty: 1 }],
  'lunargent':         [{ id: 'moon-dust',           qty: 10 }, { id: 'quicksilver',      qty: 1 }],
  'midnight-oil':      [{ id: 'necroplasm',          qty: 10 }, { id: 'quicksilver',      qty: 1 }],
  'demonic-essence':   [{ id: 'demonplasm',          qty: 10 }, { id: 'sulfur',           qty: 1 }],
  'abyss-oil':         [{ id: 'inferno-dust',        qty: 10 }, { id: 'sulfur',           qty: 1 }],
  'hellfire-oil':      [{ id: 'fire-essence',        qty: 1  }, { id: 'demonic-essence',  qty: 1 }],
  'nightmare-oil':     [{ id: 'lunargent',           qty: 1  }, { id: 'midnight-oil',     qty: 1 }],
  'pure-silver':       [{ id: 'lunargent',           qty: 1  }, { id: 'quicksilver',      qty: 1 }],
}

// Goal items — tattoo:true items default to the tattoo requirement (×10)
const GOALS = [
  { id: 'hellfire-oil',     label: 'Hellfire Oil',     def: 10, tattoo: true  },
  { id: 'nightmare-oil',    label: 'Nightmare Oil',    def: 10, tattoo: true  },
  { id: 'lunargent',        label: 'Lunargent',        def: 10, tattoo: true  },
  { id: 'midnight-oil',     label: 'Midnight Oil',     def: 10, tattoo: true  },
  { id: 'demonic-essence',  label: 'Demonic Essence',  def: 10, tattoo: true  },
  { id: 'abyss-oil',        label: 'Abyss Oil',        def: 10, tattoo: true  },
  { id: 'draconic-essence', label: 'Draconic Essence', def: 0,  tattoo: false },
  { id: 'pure-silver',      label: 'Pure Silver',      def: 0,  tattoo: false },
]

const DEFAULTS = Object.fromEntries(GOALS.map(g => [g.id, g.def]))

/* ── Calculation ────────────────────────────────────────────────── */

function calculate(goals) {
  const craft = {}
  const raw   = {}

  function expand(id, qty) {
    const recipe = RECIPES[id]
    if (!recipe) { raw[id] = (raw[id] || 0) + qty; return }
    craft[id] = (craft[id] || 0) + qty
    for (const ing of recipe) expand(ing.id, ing.qty * qty)
  }

  for (const [id, qty] of Object.entries(goals)) {
    if (qty > 0) expand(id, qty)
  }

  return { craft, raw }
}

/* ── Helpers ────────────────────────────────────────────────────── */

const fmt = (n) => n.toLocaleString()

function byTier(craft, tier) {
  return Object.entries(craft)
    .filter(([id]) => ITEMS[id]?.tier === tier)
    .sort(([, a], [, b]) => b - a)
}

/* ── Sub-components ─────────────────────────────────────────────── */

function QtyControl({ value, onChange }) {
  return (
    <div className="urn-qty">
      <button onClick={() => onChange(value - 1)}>−</button>
      <input
        type="number"
        min="0"
        value={value}
        onChange={e => onChange(parseInt(e.target.value, 10))}
      />
      <button onClick={() => onChange(value + 1)}>+</button>
    </div>
  )
}

function CraftStep({ tier, label, items }) {
  if (items.length === 0) return null
  return (
    <div className="urn-step">
      <div className="urn-step-header">
        <span className="urn-step-num">T{tier}</span>
        {label}
      </div>
      <div className="urn-item-list">
        {items.map(([id, qty]) => (
          <div key={id} className="urn-item">
            <span className="urn-item-name">{ITEMS[id].label}</span>
            <span className="urn-item-qty">{fmt(qty)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Page ───────────────────────────────────────────────────────── */

export default function Urn() {
  const [goals, setGoals] = useState(DEFAULTS)

  const set = (id, val) =>
    setGoals(prev => ({ ...prev, [id]: Math.max(0, isNaN(val) ? 0 : val) }))

  const reset = () => setGoals(DEFAULTS)

  const { craft, raw } = useMemo(() => calculate(goals), [goals])

  const hasGoals  = Object.values(goals).some(v => v > 0)
  const totalUrn  = Object.values(craft).reduce((a, b) => a + b, 0)

  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <Link to="/community-board/tatto-master">← Tatto Master</Link>
      </div>
      <PageHero
        title="URN Mixing Calculator"
        tagline="Set your target quantities — see every raw material and URN operation required."
      />

      <p>
        The <strong>Mixing URN</strong> converts base materials into reagents across three tiers.
        Items highlighted in gold are the default requirements for the tattoo (×10 each).
        Adjust any value — the breakdown updates instantly.
      </p>

      <SectionHeading id="goals">Target Quantities</SectionHeading>

      <div className="urn-goals-grid">
        {GOALS.map(g => (
          <div key={g.id} className={`urn-goal-card${g.tattoo ? ' tattoo' : ''}`}>
            {g.tattoo && <span className="urn-tattoo-badge">Tattoo</span>}
            <div className="urn-goal-name">{g.label}</div>
            <QtyControl value={goals[g.id]} onChange={v => set(g.id, v)} />
          </div>
        ))}
      </div>

      <div className="urn-actions">
        <button className="urn-reset-btn" onClick={reset}>Reset to defaults</button>
      </div>

      {/* ── Results ── */}
      {!hasGoals ? (
        <p className="urn-empty">Set at least one quantity above to see the breakdown.</p>
      ) : (
        <>
          <SectionHeading id="results">Breakdown</SectionHeading>

          <div className="urn-results">
            <div className="urn-craft-col">
              <div className="urn-col-title">Craft in URN (in order)</div>
              <CraftStep tier={1} label="Low Level Reagents"  items={byTier(craft, 1)} />
              <CraftStep tier={2} label="High Level Reagents" items={byTier(craft, 2)} />
              <CraftStep tier={3} label="Final Products"      items={byTier(craft, 3)} />
              <div className="urn-total">
                Total URN uses: <strong>{fmt(totalUrn)}</strong>
              </div>
            </div>

            <div className="urn-raw-col">
              <div className="urn-col-title">Raw Materials to Farm</div>
              <div className="urn-item-list">
                {Object.entries(raw)
                  .sort(([, a], [, b]) => b - a)
                  .map(([id, qty]) => (
                    <div key={id} className="urn-item">
                      <span className="urn-item-name">{ITEMS[id].label}</span>
                      <span className="urn-item-qty">{fmt(qty)}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <InfoBox label="Mixing Order">
            Always craft <strong>Tier 1 (Low Level Reagents)</strong> first, then{' '}
            <strong>Tier 2 (High Level Reagents)</strong>, and finally{' '}
            <strong>Tier 3 (Final Products)</strong>. Each tier consumes outputs from the previous one.
          </InfoBox>
        </>
      )}
    </>
  )
}
