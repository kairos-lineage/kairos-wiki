import PageHero        from '../components/ui/PageHero'
import SectionHeading  from '../components/ui/SectionHeading'
import InfoBox         from '../components/ui/InfoBox'
import WikiFigure      from '../components/ui/WikiFigure'
import StepList        from '../components/ui/StepList'
import { Link }        from 'react-router-dom'

export default function GettingStarted() {
  return (
    <>
      <PageHero
        title="Getting Started"
        tagline="Connect, create your character, and take your first steps in Kairos."
      />

      {/* ===== DOWNLOAD ===== */}
      <SectionHeading id="download">Download the Client</SectionHeading>
      <p>Get the latest Kairos client from the official download page and verify the files before running the launcher.</p>
      <InfoBox variant="tip" label="Pro Tip">
        <p>Use the recommended client version to avoid compatibility issues with custom server scripts.</p>
      </InfoBox>

      {/* ===== ACCOUNT ===== */}
      <SectionHeading id="create-account">Create Your Account</SectionHeading>
      <p>No registration required — your account is created automatically the first time you log in. Simply enter a username and password in the launcher and your account is ready.</p>

      {/* ===== CONNECT ===== */}
      <SectionHeading id="connect">Connecting to the Server</SectionHeading>
      <p>Download and apply the full client patch before launching. The latest patch is always available in the dedicated Discord channel:</p>
      <InfoBox label="Full Patch">
        <p>
          Get the latest patch from the{' '}
          <a href="https://discord.com/channels/1248039237207461978/1461064891233210554" target="_blank" rel="noopener noreferrer">
            Kairos Discord — #patch-download
          </a>{' '}
          channel and apply it to your client folder before connecting.
        </p>
      </InfoBox>

      {/* ===== FIRST STEPS ===== */}
      <SectionHeading id="first-steps">First Steps In-Game</SectionHeading>
      <p>
        Once your character is created you will spawn in the <strong>No-Grade Zone</strong> — the starting area
        designed for new players. Follow the steps below to gear up and get into action fast.
      </p>

      <SectionHeading id="free-buffer" level={3}>Step 1 — Use the Free Buffer</SectionHeading>
      <p>
        Before doing anything else, open the{' '}
        <Link to="/community-board/buffer">Community Board Buffer</Link>
        {' '}(<code>Alt+B</code> → <strong>Buffer</strong>) and apply your buff scheme.
        The Buffer is free — no NPC hunting required. It gives you a full set of combat and support buffs
        that make a significant difference even at starter level.
      </p>
      <InfoBox variant="tip" label="New to the Buffer?">
        <p>See the <Link to="/community-board/buffer">Buffer guide</Link> to learn how to build and save your own scheme.</p>
      </InfoBox>

      <SectionHeading id="beginner-pack" level={3}>Step 2 — Claim Your Beginner Pack</SectionHeading>
      <p>Every new character receives a <strong>Beginner Pack</strong> in their inventory. Open it to receive your starting equipment and consumables.</p>
      <WikiFigure
        src="images/begginer.png"
        alt="Beginner Pack item in inventory"
        caption="The Beginner Pack as it appears in your inventory — right-click to unpack."
        size="md"
      />

      <SectionHeading id="beginner-items" level={3}>Step 3 — Your Starting Items</SectionHeading>
      <p>Unpacking the Beginner Pack fills your inventory with everything you need to start fighting:</p>
      <ul>
        <li>Starter gear appropriate for your class</li>
        <li><strong>Blue Cocktail</strong> — grants a set of support buffs</li>
        <li><strong>Red Cocktail</strong> — grants a set of combat buffs</li>
        <li>Miscellaneous consumables to sustain early grinding</li>
      </ul>
      <WikiFigure
        src="images/begginer-items.png"
        alt="Inventory after unpacking the Beginner Pack"
        caption="Your inventory after unpacking — cocktails, gear, and supplies ready to use."
        size="md"
      />
      <InfoBox label="Cocktails">
        <p>Use the <strong>Blue</strong> and <strong>Red Cocktails</strong> before heading into combat — they act as extra buff layers on top of your Buffer scheme and wear off over time.</p>
      </InfoBox>

      <SectionHeading id="equip-gear" level={3}>Step 4 — Equip Your Gear</SectionHeading>
      <p>Open your inventory (<code>Alt+B</code> or <code>I</code>), right-click each gear piece to equip it. Make sure your weapon and armor are on before engaging any enemies.</p>

      <SectionHeading id="auto-play" level={3}>Step 5 — Start Hunting with Auto Play</SectionHeading>
      <p>
        Kairos includes a built-in <strong>Auto Play</strong> system. Type <code>.play</code> in chat to open
        the Auto Play modal and configure your hunting behaviour — target selection, skill rotation, and looting.
      </p>
      <WikiFigure
        src="images/auto-play-info.png"
        alt="Auto Play modal window"
        caption="The Auto Play modal — configure target type, attack range, and looting before starting."
        size="md"
      />
      <InfoBox variant="tip" label="Quick Reference">
        <p>See <Link to="/commands#play">Commands — .play</Link> for the full list of Auto Play options and toggles.</p>
      </InfoBox>

      {/* ===== CHECKLIST ===== */}
      <SectionHeading id="checklist">Quick Checklist</SectionHeading>
      <StepList steps={[
        '`Alt+B` → Buffer and apply your buff scheme.',
        'Claim and unpack the Beginner Pack from your inventory.',
        'Use both Cocktails (Blue & Red) for extra buffs.',
        'Equip all gear pieces from the pack.',
        '`.play` and configure Auto Play to start grinding.',
      ]} />
      <InfoBox variant="success" label="You're Ready">
        <p>With buffs active, gear equipped, and Auto Play running you're set to progress through the No-Grade Zone and beyond.</p>
      </InfoBox>
    </>
  )
}
