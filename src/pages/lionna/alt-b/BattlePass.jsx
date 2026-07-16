import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE = 'images/lionna/alt-b/'

export default function BattlePass() {
  return (
    <>
      <PageHero
        title="Battle Pass"
        tagline="Level a 150-tier reward track each session — farm Exp Scrolls, claim materials, top items, and unique tattoos."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Battle Pass</strong> is accessible through <strong>Alt+B → Battle Pass</strong>.
        Each <strong>season</strong> can contain multiple Battle Pass <strong>sessions</strong> —
        every session runs independently and has its own <strong>150-level reward track</strong>.
        Progressing through the track unlocks farming materials, top-grade items, and unique tattoos
        at various milestones along the way.
      </p>
      <WikiFigure
        src={`${BASE}battle-pass-150.png`}
        alt="Battle Pass reward track — level 31, showing milestone reward boxes"
        caption="The Battle Pass track — 150 levels of milestone rewards per session."
        size="lg"
      />

      {/* ===== REQUIREMENTS ===== */}
      <SectionHeading id="requirements">Requirements</SectionHeading>
      <p>
        The Battle Pass is not available from day one. To activate and use it you need:
      </p>
      <WikiTable
        columns={['Requirement', 'Amount']}
        rows={[
          ['Rebirths', '200 (minimum to use the Battle Pass)'],
        ]}
      />
      <InfoBox variant="warning" label="Rebirths First">
        <p>
          Do not worry about the Battle Pass until you have reached <strong>200 Rebirths</strong>.
          Focus on rebirthing as your main progression goal — the Battle Pass will be there once
          you qualify.
        </p>
      </InfoBox>

      {/* ===== HOW TO LEVEL ===== */}
      <SectionHeading id="leveling">Leveling the Battle Pass</SectionHeading>
      <p>
        Battle Pass levels are gained exclusively by using <strong>Battle Pass Exp Scrolls</strong>.
        Each scroll grants <strong>250 Battle Pass Exp</strong>. The exp required per level
        increases as you progress.
      </p>
      <WikiFigure
        src={`${BASE}battle-pass-exp.png`}
        alt="Battle Pass Exp scroll — 250 exp per scroll, ID 64307"
        caption="Battle Pass Exp scroll — each one gives 250 Battle Pass Exp toward the next level."
        size="sm"
      />
      <p>
        Exp Scrolls drop from <strong>mobs level 100 and above</strong>. The higher the zone,
        the better your scroll income. Farm consistently in the best zone your character can
        handle — scrolls accumulate quickly in top zones.
      </p>
      <InfoBox variant="tip" label="Stack Scrolls Before Using">
        <p>
          There is no urgency in using scrolls the moment you earn them. Consider stockpiling them
          and burning through levels in one session so you can plan your reward claims more
          efficiently rather than spending them one by one.
        </p>
      </InfoBox>

      {/* ===== REWARDS ===== */}
      <SectionHeading id="rewards">Rewards</SectionHeading>
      <p>
        Across the 150 levels, the Battle Pass rewards include:
      </p>
      <ul>
        <li><strong>Farming materials</strong> — useful resources for crafting and progression systems</li>
        <li><strong>Top-grade items</strong> — high-quality equipment and upgrade components</li>
        <li><strong>Unique Tattoos</strong> — exclusive tattoos not available through other content</li>
      </ul>
      <InfoBox variant="tip" label="Tattoo Inventory Connection">
        <p>
          Several of the unique tattoos earned from the Battle Pass are specifically used in the{' '}
          <strong>Alt+B → Tattoo Inventory</strong> section. Keep an eye on which tattoos you
          receive — they may be ingredients for Tattoo Inventory upgrades rather than something
          you equip directly.
        </p>
      </InfoBox>

      {/* ===== DONATION / PREMIUM ===== */}
      <SectionHeading id="premium">Donation Premium Pass</SectionHeading>
      <p>
        Players with <strong>Donation Coins</strong> can purchase the <strong>Premium Pass</strong>{' '}
        for the current session. The Premium Pass is a one-time unlock that improves the rewards
        across the entire 150-level track:
      </p>
      <WikiTable
        columns={['Detail', 'Info']}
        rows={[
          ['Cost',         '15 Donation Coins (current season)'],
          ['What it does', 'Unlocks the premium reward tier for all 150 levels — extra items and significantly higher quantities'],
          ['Still need',   'You must still level the Battle Pass to 150 to claim the rewards — the pass does not auto-complete'],
        ]}
      />
      <InfoBox variant="tip" label="Worth It If You Farm Daily">
        <p>
          The Premium Pass multiplies the quantity and quality of rewards you claim at each
          milestone, but only if you actually level the track. If you are consistently farming
          mobs 100+ and accumulating Exp Scrolls, the Premium Pass provides excellent value for
          15 Donation Coins. If you are unlikely to reach level 150, save the coins for something
          else.
        </p>
      </InfoBox>
    </>
  )
}
