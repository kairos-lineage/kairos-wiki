import PageHero       from '../../components/ui/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import WikiTable      from '../../components/ui/WikiTable'
import InfoBox        from '../../components/ui/InfoBox'

export default function RebirthSystem() {
  return (
    <>
      <PageHero
        title="Rebirth System"
        tagline="Reset your level and permanently grow stronger with each cycle — allocate User Points to shape your character."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Rebirth System</strong> lets you reset your character back to level 1 in exchange
        for permanent stat growth. You start with <strong>25 free User Points</strong> at character
        creation to allocate through the Rebirth Manager NPC in Giran, and every{' '}
        <strong>Grand Rebirth</strong> earns you 1 more. After each reset you level up again,
        rebirth again, and keep accumulating. The effect compounds: a character with hundreds of
        rebirths — and the Grand Points earned along the way — is fundamentally stronger at every
        level than one without any.
      </p>
      <p>
        The first 30 rebirths require no Grand Rebirth Scroll — but Normal Rebirths are never
        entirely free: they consume <strong>Festival Adena</strong>, a material you farm in the
        world. Grand Rebirths (every 10th from #30 onward) instead cost <strong>COL</strong> to
        purchase a Grand Rebirth Scroll. There is no rush — consistency matters far more than speed.
      </p>

      {/* ===== USER POINTS ===== */}
      <SectionHeading id="user-points">User Points</SectionHeading>
      <p>
        When you create a new character the game grants you <strong>25 free User Points</strong>{' '}
        to distribute across your character's core stats. After that, every{' '}
        <strong>Grand Rebirth</strong> awards <strong>1 additional User Point</strong>. These points
        are permanent — they accumulate across your entire account progression and permanently shape
        your character's stat ceiling.
      </p>
      <p>
        To allocate your points, speak with the <strong>Rebirth Manager</strong> NPC in{' '}
        <strong>Giran</strong>. The NPC requires you to complete a brief{' '}
        <strong>captcha verification</strong> — this is intentional and prevents automated farming.
        It takes only a few seconds.
      </p>
      <WikiTable
        columns={['Class Type', 'Recommended Stats', 'Why']}
        rows={[
          ['Warrior / Physical DPS', 'STR, DEX', 'Increases P.Atk and attack speed'],
          ['Mage / Magic DPS',       'INT, WIT', 'Increases M.Atk and casting speed'],
        ]}
      />
      <InfoBox variant="tip" label="Commit to Your Build">
        <p>
          User Points are permanent and accumulate slowly — 25 at the start, then 1 per Grand
          Rebirth. Misallocating them is costly. Decide your character's role before spending a
          single point and stay consistent: physical characters go STR + DEX, magic characters go
          INT + WIT. Spreading across all stats weakens the entire investment.
        </p>
      </InfoBox>

      {/* ===== FESTIVAL ADENA ===== */}
      <SectionHeading id="festival-adena">Festival Adena — Normal Rebirth Cost</SectionHeading>
      <p>
        Every <strong>Normal Rebirth</strong> requires <strong>Festival Adena</strong> — a material
        you collect through regular gameplay. It does not come from the shop; you farm it directly
        from the world.
      </p>
      <WikiTable
        columns={['Source', 'Notes']}
        rows={[
          ['Champion Monsters', 'Drop Festival Adena — available from Zone 5 onward'],
          ['Zone 11 — OXXX mobs', 'Dedicated farming spot for Festival Adena'],
        ]}
      />
      <InfoBox variant="tip" label="Farm Festival Adena Alongside Your Normal Grinding">
        <p>
          Champion Monsters appear throughout the world from Zone 5 onward, so you will naturally
          collect Festival Adena while leveling. If you need to stock up faster, head to Zone 11
          and farm the OXXX mobs directly — they are the most reliable concentrated source.
        </p>
      </InfoBox>

      {/* ===== GRAND REBIRTH SCROLL ===== */}
      <SectionHeading id="grs">Grand Rebirth Scroll (GRS)</SectionHeading>
      <p>
        Starting from rebirth <strong>#40</strong> (and every 10th Grand Rebirth after that), you
        need a <strong>Grand Rebirth Scroll (GRS)</strong> — a single-use item consumed each time
        you perform a Grand Rebirth.
      </p>
      <WikiTable
        columns={['Item', 'How to Obtain', 'Currency']}
        rows={[
          ['Grand Rebirth Scroll (GRS)', 'GM Shop → Otras Cosas → Event Items', 'COL'],
        ]}
      />
      <InfoBox variant="tip" label="Stock Up Before You Reach the Threshold">
        <p>
          You will need your first GRS at rebirth <strong>#40</strong>. Buy several in advance
          rather than scrambling for COL when the time comes — running out delays your entire cycle
          by whatever time it takes to farm the next scroll.
        </p>
      </InfoBox>

      {/* ===== 500 MILESTONE ===== */}
      <SectionHeading id="milestone">The 500 Rebirths Milestone</SectionHeading>
      <p>
        Reaching <strong>500 total rebirths</strong> is a major long-term benchmark on the server.
        Features and bonuses that are gated behind this threshold become available once you cross it,
        marking the transition from an actively leveling character to a fully developed one. At the
        natural rhythm of regular play this is a long-haul goal — but because every rebirth along
        the way permanently increases your power, the journey itself is the progression.
      </p>
      <InfoBox variant="warning" label="Do Not Skip Grand Rebirths">
        <p>
          Each Grand Rebirth you skip is 1 User Point you never gain. These accumulate slowly — the
          only way to earn more is to do the Grand Rebirths. Even if you are in a hurry to gear or
          farm, never delay a Grand Rebirth once the level and GRS requirements are met.
        </p>
      </InfoBox>

      {/* ===== REBIRTH CYCLE ===== */}
      <SectionHeading id="cycle">Rebirth Cycle &amp; Requirements</SectionHeading>
      <p>
        The rebirth cycle follows a clear pattern: the first 30 rebirths are completely free, then
        from rebirth 31 onward <strong>every 10th rebirth is a Grand Rebirth</strong> (40, 50, 60,
        70 …). Between each pair of Grand Rebirths sit 9 Normal Rebirths, done in <strong>groups
        of 3</strong> at a time.
      </p>
      <WikiTable
        columns={['Rebirth Type', 'Level Required', 'Cost', 'Grants']}
        rows={[
          ['Normal (rebirths 1–29)', 'None',  'Festival Adena', '—'],
          ['Grand (rebirth #30)',    'None',  'Festival Adena (no GRS)', '1 User Point'],
          ['Normal (rebirth 31+)',   '60',    'Festival Adena', '—'],
          ['Grand (every 10th: 40, 50, 60 …)', '70', 'COL → Grand Rebirth Scroll', '1 User Point'],
        ]}
      />
      <p>
        The cycle from rebirth 30 onward repeats like this — three groups of three normal rebirths
        followed by one Grand Rebirth every ten steps:
      </p>
      <WikiTable
        columns={['Rebirths', 'Type', 'Requirement']}
        rows={[
          ['1 – 29',  'Normal',         'Festival Adena'],
          ['30',      'Grand',          'Festival Adena (no GRS)'],
          ['31 – 33', 'Normal (×3)',    'Level 60 + Festival Adena'],
          ['34 – 36', 'Normal (×3)',    'Level 60 + Festival Adena'],
          ['37 – 39', 'Normal (×3)',    'Level 60 + Festival Adena'],
          ['40',      'Grand',          'Level 70 + COL (GRS)'],
          ['41 – 43', 'Normal (×3)',    'Level 60 + Festival Adena'],
          ['44 – 46', 'Normal (×3)',    'Level 60 + Festival Adena'],
          ['47 – 49', 'Normal (×3)',    'Level 60 + Festival Adena'],
          ['50',      'Grand',          'Level 70 + COL (GRS)'],
          ['51 – 59', 'Normal (×3 ea.)','Level 60 + Festival Adena'],
          ['60',      'Grand',          'Level 70 + COL (GRS)'],
          ['…',       'Repeating cycle','Same pattern continues'],
        ]}
      />
      <InfoBox variant="tip" label="Level Up Fully Before Each Rebirth">
        <p>
          Normal Rebirths require level <strong>60</strong> and Grand Rebirths require level{' '}
          <strong>70</strong>. Do not rebirth the moment you hit the minimum — reach your natural
          level cap first to maximise the EXP you gain on the next cycle and keep your leveling
          momentum consistent.
        </p>
      </InfoBox>
    </>
  )
}
