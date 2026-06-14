import PageHero        from '../../components/ui/PageHero'
import SectionHeading  from '../../components/ui/SectionHeading'
import WikiCarousel    from '../../components/ui/WikiCarousel'
import WikiTable       from '../../components/ui/WikiTable'
import InfoBox         from '../../components/ui/InfoBox'

export default function LionnaAutoFarm() {
  return (
    <>
      <PageHero
        title="Auto Farm"
        tagline="Configure automated hunting on Lionna Multiskill."
      />

      <WikiCarousel
        slides={[
          { src: 'images/lionna/farm.png',        alt: 'Auto Farm panel',             caption: 'Auto Farm panel — opened with .farm in chat.' },
          { src: 'images/lionna/farm-assist.png', alt: 'Auto Farm — Assist mode',     caption: 'Assist mode — follow and help a selected party member.' },
          { src: 'images/lionna/farm-buffs.png',  alt: 'Auto Farm — Buffs',           caption: 'Buffs — select skills to auto-cast when their duration expires.' },
          { src: 'images/lionna/farm-spoil.png',  alt: 'Auto Farm — Spoil',           caption: 'Spoil — select your Spoil skill for automatic spoiling.' },
          { src: 'images/lionna/farm-sweep.png',  alt: 'Auto Farm — Sweep',           caption: 'Sweep — select your Sweep skill to auto-sweep spoiled mobs.' },
        ]}
      />

      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        Type <code>.farm</code> in chat to open the Auto Farm panel. Configure your hunting
        behaviour, then press <strong>Auto Farm</strong> at the bottom to toggle farming on or off.
        All skill selections are permanent — they stay configured until you manually change them.
      </p>

      {/* ===== MODE ===== */}
      <SectionHeading id="mode">Mode</SectionHeading>
      <WikiTable
        columns={['Mode', 'Description']}
        rows={[
          [
            <strong key="n">Normal</strong>,
            'The character takes full control of its own hunting. It moves, targets, and kills mobs independently.',
          ],
          [
            <strong key="a">Assist</strong>,
            <>
              The character follows a selected party member and assists them in killing their targets.
              When <strong>Assist</strong> is selected, an additional field appears to choose which
              party member to follow. <em>The character must be in a party for Assist mode to work.</em>
            </>,
          ],
        ]}
      />

      {/* ===== AUTO ATTACK ===== */}
      <SectionHeading id="auto-attack">Auto Attack</SectionHeading>
      <p>
        Enables basic weapon attacks between skill casts. Recommended for <strong>Archers</strong> and{' '}
        <strong>Fighters</strong>. For <strong>Mages</strong> this should be left off — casting spells
        with hands provides no benefit and interrupts skill rotations.
      </p>

      {/* ===== AUTO POTION ===== */}
      <SectionHeading id="auto-potion">Auto Potion</SectionHeading>
      <p>
        When enabled, the character automatically uses potions during combat based on configured
        thresholds. Supports HP potions, MP potions, and custom consumables such as{' '}
        <strong>Momumu Blood</strong>.
      </p>
      <WikiTable
        columns={['Setting', 'Description']}
        rows={[
          ['Auto Potion', 'Enable or disable automatic potion usage during farm.'],
          ['Use at HP %', 'HP threshold that triggers automatic HP potion use. Example: set to 70 to drink when HP drops below 70%.'],
          ['Use at MP %', 'MP threshold that triggers automatic MP potion use.'],
          ['Custom Potions', 'Configure non-standard consumables (e.g. Momumu Blood) to be used automatically alongside standard potions.'],
        ]}
      />

      {/* ===== TARGETING ===== */}
      <SectionHeading id="targeting">Targeting Range</SectionHeading>
      <p>Sets how far the character searches for targets. Choose based on your class and the zone density.</p>
      <WikiTable
        columns={['Range', 'Best For']}
        rows={[
          ['1000', 'Tight zones or melee classes that need close-range control.'],
          ['2000', 'General use — balanced range for most classes and zones.'],
          ['3000', 'Archers and mages farming wide open areas.'],
        ]}
      />

      {/* ===== EXCLUDED ===== */}
      <SectionHeading id="excluded">Excluded</SectionHeading>
      <p>
        Add specific <strong>mobs</strong> or <strong>bosses</strong> to the exclusion list.
        The character will skip any target on this list and never attack them — useful for avoiding
        dangerous bosses that spawn in farming zones or preserving specific mobs for other purposes.
      </p>

      {/* ===== SKILLS ===== */}
      <SectionHeading id="skills">Skills</SectionHeading>
      <p>
        Configure the full skill rotation used during Auto Farm. Selections are <strong>permanent</strong> — they
        remain active across sessions until you manually change them in the panel.
      </p>
      <WikiTable
        columns={['Slot', 'Description']}
        rows={[
          ['Buffs',         'Select buff skills to cast automatically when their duration expires. Any available buff skill can be included — no slot limit.'],
          ['Attack Skills', 'Choose the offensive skills used in the farming rotation. Multiple skills can be selected.'],
          ['Spoil',         'Select your Spoil skill to automatically spoil mobs during combat.'],
          ['Sweep',         'Select your Sweep skill to automatically sweep spoiled mobs after they die.'],
        ]}
      />
      <InfoBox variant="tip" label="Skill Persistence">
        <p>Skill configuration is saved permanently. You only need to set it up once — it will remain active the next time you open the panel or restart farming.</p>
      </InfoBox>

      {/* ===== AUTO DEBUFF ===== */}
      <SectionHeading id="auto-debuff">Auto Debuff</SectionHeading>
      <p>
        Select up to <strong>5 debuff skills</strong> to apply automatically to surrounding monsters
        during combat. Debuffs are cast without manual input as targets enter range.
      </p>

      {/* ===== TOGGLE ===== */}
      <SectionHeading id="toggle">Auto Farm Toggle</SectionHeading>
      <p>
        The <strong>Auto Farm</strong> button at the bottom of the panel starts and stops farming.
        All settings above are applied at the moment you press it. To farm offline, start Auto Farm
        first and then use <code>.offlineplay</code> in chat before closing the client.
      </p>
      <InfoBox variant="warning" label="Offline Farm">
        <p>
          Auto Farm must be <strong>running</strong> before you trigger <code>.offlineplay</code>.
          Offline mode stays active until the next server restart.
        </p>
      </InfoBox>
    </>
  )
}
