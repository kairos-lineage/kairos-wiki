import PageHero       from '../../components/ui/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import WikiTable      from '../../components/ui/WikiTable'
import InfoBox        from '../../components/ui/InfoBox'
import StepList       from '../../components/ui/StepList'
import { Link }       from 'react-router-dom'

export default function LionnaGettingStarted() {
  return (
    <>
      <PageHero
        title="Getting Started"
        tagline="Your first steps on Lionna Multiskill."
      />

      {/* ===== STEP 1: GEAR ===== */}
      <SectionHeading id="starter-gear">Step 1 — Buy Starter Gear</SectionHeading>
      <p>
        When you first spawn you will have a small amount of Adena. Head to the shop NPC nearby
        and buy <strong>dummy B-grade equipment</strong> to get started.
      </p>

      <SectionHeading id="weapon" level={3}>Weapon</SectionHeading>
      <WikiTable
        columns={['Class Type', 'Weapon', 'Note']}
        rows={[
          ['Archer / Fighter', 'B-grade Bow', <>Buy at least <strong>1 Arrow</strong> and place it in the bow ammo slot. Arrows are not consumed — one is enough, it just needs to be equipped.</>],
          ['Mage',             'B-grade Mage Weapon', 'Staff or other mage weapon of your choice.'],
        ]}
      />

      <SectionHeading id="armor" level={3}>Armor</SectionHeading>
      <WikiTable
        columns={['Armor Type', 'For']}
        rows={[
          ['Light Armor', 'Archers and most Fighter classes.'],
          ['Robe',        'Mages.'],
        ]}
      />

      <SectionHeading id="consumables" level={3}>Consumables</SectionHeading>
      <p>
        Buy <strong>Custom Soulshot Blessed</strong> from the shop. This is a single custom type
        that works for both <strong>mages</strong> and <strong>warriors</strong> — you do not need
        to activate it manually, it applies automatically.
      </p>

      <InfoBox variant="tip" label="Arrows">
        <p>Arrows are <strong>not consumed</strong> on Lionna. Buy just 1 and slot it — that is all you ever need.</p>
      </InfoBox>

      {/* ===== STEP 2: ZONE 1 ===== */}
      <SectionHeading id="zone-1">Step 2 — Farm Zone 1 &amp; Kill the Mini Boss</SectionHeading>
      <p>
        From your spawn position, run <strong>straight ahead</strong> — Zone 1 is right there.
        Your first target is the <strong>mini boss</strong> in that zone. It drops a custom
        material called <strong>Valkos Skull</strong>.
      </p>
      <WikiTable
        columns={['Item', 'Amount Needed', 'Purpose']}
        rows={[
          ['Valkos Skull', '6',  'Minimum to get started.'],
          ['Valkos Skull', '15', 'Required to learn your first set of skills at level 10.'],
        ]}
      />
      <InfoBox variant="warning" label="Level up first">
        <p>
          You need to reach <strong>level 10</strong> before you can learn your first skill set.
          Use <Link to="/lionna/auto-farm"><code>.farm</code></Link> to open the Auto Farm panel and
          grind the mobs in Zone 1 to level up quickly.
        </p>
      </InfoBox>

      {/* ===== STEP 3: AUTO FARM ===== */}
      <SectionHeading id="auto-farm">Step 3 — Set Up Auto Farm</SectionHeading>
      <p>Type <code>.farm</code> in chat to open the <Link to="/lionna/auto-farm">Auto Farm</Link> panel and configure your character for automated hunting.</p>
      <StepList
        steps={[
          'Type `.farm` in chat to open the Auto Farm panel.',
          'Set **Mode** to **Normal** to farm independently.',
          'Enable **Auto Attack** if you are playing an Archer or Fighter.',
          'Set your **Targeting Range** — start with 2000 for Zone 1.',
          'Under **Skills**, add your attack skills and buff skills.',
          'Press **Auto Farm** at the bottom to start farming.',
        ]}
      />
    </>
  )
}
