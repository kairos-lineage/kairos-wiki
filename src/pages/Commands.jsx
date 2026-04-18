import PageHero       from '../components/ui/PageHero'
import SectionHeading from '../components/ui/SectionHeading'
import WikiTable      from '../components/ui/WikiTable'
import WikiFigure     from '../components/ui/WikiFigure'
import InfoBox        from '../components/ui/InfoBox'
import Badge          from '../components/ui/Badge'
import { Link }       from 'react-router-dom'

export default function Commands() {
  return (
    <>
      <PageHero
        title="Commands"
        tagline="Reference the most important chat commands used on Kairos."
      />

      {/* ===== ESSENTIAL ===== */}
      <SectionHeading id="essential-commands">Essential Commands</SectionHeading>
      <p>Use the following commands to manage your account, party, and gameplay experience.</p>
      <WikiTable
        columns={['Command', 'Action']}
        rows={[
          [<code key="r">.register</code>,       'Create a new account.'],
          [<code key="c">.changepassword</code>,  'Update your password securely.'],
          [<code key="p">.party</code>,           'Manage party invitations and members.'],
        ]}
      />

      {/* ===== AUTO PLAY ===== */}
      <SectionHeading id="play">Auto Play — <code>.play</code></SectionHeading>
      <p>Opens the <strong>Auto Play</strong> modal, which lets you configure your character's automated hunting behaviour. Useful for grinding mobs hands-free.</p>
      <WikiFigure
        src="images/auto-play-info.png"
        alt="Auto Play modal window"
        caption="The Auto Play modal — Settings, Target Mode, and action buttons."
        size="sm"
      />

      <SectionHeading id="auto-play-settings" level={3}>Settings</SectionHeading>
      <WikiTable
        columns={['Setting', 'Description']}
        rows={[
          ['Auto Attack',          'Enables basic weapon attacks (swords, bows, daggers). No skills — pure auto-hit. Best for warriors and physical classes.'],
          ['Auto Loot',            'Automatically picks up dropped items while Auto Play is running. Has no effect when Auto Play is stopped.'],
          ['Respectful Hunting',   'Skips mobs that are already engaged by another player. Prevents accidental interference and reduces conflict in shared zones.'],
          ['Long Range Targeting', <>Extends target acquisition range — ideal for archers, mages, and skill-based ranged classes. <Badge variant="orange">Not recommended for daggers</Badge></>],
          ['Auto Rebirth',         <><Link to="/community-board#rebirth">Rebirth</Link> — automatically triggers the Rebirth process when conditions are met.</>],
        ]}
      />

      <SectionHeading id="auto-play-target-mode" level={3}>Target Mode</SectionHeading>
      <WikiTable
        columns={['Mode', 'What it targets']}
        rows={[
          ['Any Target',  'Everything — monsters, players, and NPCs.'],
          ['Monster',     'Monsters only. The safest choice for PvE grinding.'],
          ['Characters',  'Players only. Use in PvP zones.'],
          ['NPC',         'NPCs only.'],
        ]}
      />

      <SectionHeading id="auto-play-buttons" level={3}>Buttons</SectionHeading>
      <WikiTable
        columns={['Button', 'Description']}
        rows={[
          ['Start / Stop',      'Toggles Auto Play on and off. All settings above are applied at the moment you press Start.'],
          ['Buffs',             'Select any learned skill to cast automatically when its buff duration expires. No slot limit — any available buff skill can be included.'],
          ['Offensive / Debuff','Choose one or more attack skills used during Auto Play rotation. Supports multiple skills — pick your farming rotation here.'],
          ['Select Debuffs',    <>Up to <strong>5 debuff skills</strong> applied automatically to targets while Auto Play is active.</>],
          ['Select Supply Items','Add consumables (HP/MP potions, Cocktails, etc.) that are used automatically during combat when thresholds are reached.'],
        ]}
      />

      <InfoBox variant="tip" label="First time?">
        <p>See <Link to="/getting-started#auto-play">Getting Started — Auto Play</Link> for a step-by-step walkthrough on setting it up for the first time.</p>
      </InfoBox>

      {/* ===== HELP ===== */}
      <SectionHeading id="help-command">Help</SectionHeading>
      <p>For a full list of available commands type <code>.help</code> in chat or check the server message boards.</p>
    </>
  )
}
