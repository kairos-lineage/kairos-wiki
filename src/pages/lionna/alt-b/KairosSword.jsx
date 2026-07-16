import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiCarousel   from '../../../components/ui/WikiCarousel'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE = 'images/lionna/alt-b/'

const WEAPON_SLIDES = [
  {
    src:     `${BASE}karios-sword-sword.png`,
    alt:     'Kairos Sword — Sword stats',
    caption: 'Sword — P.Def +30%, M.Def +30%, CON +30, MEN +30, P.Atk +2%, M.Atk +2%, STR +2, INT +2',
  },
  {
    src:     `${BASE}karios-sword-dagger.png`,
    alt:     'Kairos Sword — Dagger stats',
    caption: 'Dagger — AtkSpd +30%, Casting +30%, WIT +30, DEX +30, P.Atk +3%, M.Atk +3%, STR +4, INT +4',
  },
  {
    src:     `${BASE}karios-sword-fists.png`,
    alt:     'Kairos Sword — Fists stats',
    caption: 'Fists — AtkSpd +30%, Casting +30%, WIT +30, DEX +30, P.Atk +3%, M.Atk +3%, STR +3, INT +3',
  },
  {
    src:     `${BASE}karios-sword-bow.png`,
    alt:     'Kairos Sword — Bow stats',
    caption: 'Bow — P.Atk +30%, STR +30, AtkSpd +9%, P.Def +8%, M.Atk +3%, M.Def +4%',
  },
  {
    src:     `${BASE}karios-sword-2h.png`,
    alt:     'Kairos Sword — Two Handed Sword stats',
    caption: 'Two Handed Sword — P.Def +30%, M.Def +30%, CON +30, MEN +30, P.Atk +3%, M.Atk +3%',
  },
  {
    src:     `${BASE}karios-sword-mace.png`,
    alt:     'Kairos Sword — Mace stats',
    caption: 'Mace — M.Atk +30%, INT +30, Casting +10%, M.Def +6%, P.Def +6%, P.Atk +1%',
  },
  {
    src:     `${BASE}karios-sword-stuff.png`,
    alt:     'Kairos Sword — Staff stats',
    caption: 'Staff — M.Atk +10%, INT +30, Casting +9%, P.Def +7%, P.Atk +2%, M.Def +2%',
  },
  {
    src:     `${BASE}kairos-sword-axe.png`,
    alt:     'Kairos Sword — Axe stats',
    caption: 'Axe — P.Atk +30%, STR +30, AtkSpd +10%, P.Def +15%, M.Def +15%, DEX +11',
  },
]

export default function KairosSword() {
  return (
    <>
      <PageHero
        title="Kairos Sword"
        tagline="Eight evolved weapons for every playstyle — powerful like Legendary gear, earned only by the most dedicated players."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Kairos Sword</strong> system, accessed through{' '}
        <strong>Alt+B → Kairos Sword</strong>, presents eight categories of evolved weapons —
        one for each weapon type. Described in-game as <em>"powerful like Legendary Weapons,
        yet distinct in their own way"</em>, obtaining any of them is a true challenge reserved
        for the most dedicated players. Each weapon type provides its own set of permanent
        passive stat bonuses tuned to the strengths of that weapon class, and each can be
        leveled up <strong>10 times</strong> to grow those bonuses further.
      </p>
      <WikiFigure
        src={`${BASE}karios-sword.png`}
        alt="Kairos Sword selection screen — eight weapon types: Sword, Dagger, Fists, Bow, Two Handed Sword, Mace, Staff, Axe"
        caption="The Kairos Sword selection screen — choose your weapon type, then forge and level it."
        size="lg"
      />

      {/* ===== MATERIAL ===== */}
      <SectionHeading id="material">Upgrade Material — Mythic Purple Scroll</SectionHeading>
      <p>
        Every level of every Kairos Sword weapon requires <strong>Mythic Purple Scrolls</strong>{' '}
        as the upgrade material. Each scroll is consumed on use and is needed in increasing
        quantities as the weapon advances through its 10 levels.
      </p>
      <WikiFigure
        src={`${BASE}karios-sword-scroll.png`}
        alt="Mythic Purple Scroll — upgrade material for Kairos Sword, ID 68100"
        caption="Mythic Purple Scroll — the sole material needed to level up any Kairos Sword weapon."
        size="sm"
      />
      <p>
        Mythic Purple Scrolls are obtained primarily from the{' '}
        <strong>Captain Morgull event</strong> in Giran Harbor, which fires every{' '}
        <strong>2.5 hours after server restart</strong>. To get there, type{' '}
        <strong>.heine</strong> in chat for a quick port, then speak to the{' '}
        <strong>Flauen NPC</strong> and take the port to <strong>Giran Harbor</strong>.
        Make attending Captain Morgull a priority — it is one of the most material-dense
        events on the server and scrolls are among its guaranteed rewards.
      </p>

      {/* ===== CAPTAIN MORGULL ===== */}
      <SectionHeading id="captain-morgull">Captain Morgull — Event Guide</SectionHeading>
      <WikiFigure
        src={`${BASE}captain-morgull.png`}
        alt="Captain Morgull — World Boss, Rum & Chests Pirate"
        caption="Captain Morgull — World Boss event in Giran Harbor, every 2.5h after server restart."
        size="lg"
      />
      <p>
        Captain Morgull spawns in <strong>Giran Harbor</strong> every{' '}
        <strong>2.5 hours after server restart</strong>. Access via{' '}
        <strong>.heine</strong> quick port → speak to <strong>Flauen NPC</strong> → port to
        Giran Harbor. Before you port, <strong>spend all your adena</strong> or store it —
        Morgull heals a percentage of the adena carried by nearby players, so arriving with
        0 adena is essential to prevent him from regenerating health during the fight.
      </p>
      <InfoBox variant="warning" label="Empty Your Adena Before Porting">
        <p>
          Captain Morgull heals based on the adena in players' inventories around him. Arriving
          with adena — even a small amount — contributes to his healing pool and makes the fight
          harder for everyone. Drop it in a shop, transfer it to another character, or spend it
          before you port. Zero adena is the rule.
        </p>
      </InfoBox>

      <SectionHeading id="morgull-mechanics" level={3}>Fight Mechanics — The Candle System</SectionHeading>
      <p>
        The fight requires a balance of <strong>damage and survivability</strong> — pure glass-cannon
        setups struggle here. The defining mechanic is the <strong>Candle system</strong>, which
        activates once Morgull drops below <strong>80% HP</strong> and then triggers again at
        every subsequent <strong>10% HP threshold</strong> he crosses.
      </p>
      <p>
        When a threshold is hit, <strong>multiple Candles</strong> spawn around the boss area.
        The crowd fills with <strong>Red Candles</strong> — ignore them entirely. There is exactly{' '}
        <strong>one Candle Blue</strong> hidden among them, and that is the{' '}
        <strong>only target that matters</strong>. Find it and kill it immediately. Failing to
        kill the Candle Blue in time causes Morgull to heal or reset, costing the entire group
        precious time.
      </p>
      <InfoBox variant="tip" label="Macro — Target Candle Blue Instantly">
        <p>
          Set up a macro with <strong>/target Candle Blue</strong> and bind it to an easy key.
          The moment Candles spawn, fire the macro — it snaps your target to the Blue one through
          the crowd instantly. Advanced players use Adrenaline bot scripts to automate targeting
          and attacking so they never miss a spawn. At minimum, the macro is a must.
        </p>
      </InfoBox>

      <SectionHeading id="morgull-chest" level={3}>The Chest — 20 to 30 Seconds to Loot</SectionHeading>
      <p>
        Once Captain Morgull is defeated, a <strong>treasure chest spawns</strong> on the kill
        spot and stays there for only <strong>20 to 30 seconds</strong>. The area becomes
        immediately crowded and clicking the chest with the mouse is unreliable. Open it by{' '}
        <strong>double-clicking</strong>, <strong>attacking it directly</strong>, or — most
        reliably — using a macro with <strong>/target treasure</strong> to lock onto it through
        the crowd, then attack or interact. Do not waste time hunting for it visually; fire the
        macro the instant Morgull dies.
      </p>

      <SectionHeading id="morgull-rewards" level={3}>Chest Rewards</SectionHeading>
      <p>
        The Captain Morgull chest is one of the most reward-dense drops in the game. Opening it
        yields a bundle of high-value materials:
      </p>
      <WikiTable
        columns={['Reward', 'Notes']}
        rows={[
          ['Mythic Purple Scroll', 'Primary source — used to level Kairos Sword weapons'],
          ['COL — Coin of Luck',   'Key currency for late-game systems'],
          ['BE — Blue Eva',        'Rare currency used across multiple end-game crafts'],
          ['Keys Grade 1–5',       'Critical for progressing the Ancestral Set system'],
          ['Festival Box',         'Contains Radiant Star Gems, Ancestral Token Lvl 6, COL, BE, Talent Potion, and other materials'],
        ]}
      />
      <InfoBox variant="tip" label="Never Miss Captain Morgull">
        <p>
          Between the Mythic Purple Scrolls for Kairos Sword, the Blue Eva and COL for late-game
          crafts, the Ancestral Keys for the Ancestral Set, and the Festival Box gems — this single
          event touches nearly every major progression system on the server. Use{' '}
          <strong>Alt+B → Rank → Server Stats</strong> to check the server uptime and calculate
          the next Morgull window. Every missed event is a missed bundle of irreplaceable materials.
        </p>
      </InfoBox>

      {/* ===== LEVELING COST ===== */}
      <SectionHeading id="leveling">Leveling Cost Per Weapon</SectionHeading>
      <p>
        Each level requires exactly as many scrolls as the level number — level 1 costs 1 scroll,
        level 2 costs 2, and so on up to level 10 which costs 10. Maxing a single weapon to
        level 10 therefore requires <strong>55 Mythic Purple Scrolls</strong>.
      </p>
      <WikiTable
        columns={['Level', 'Scrolls Required', 'Cumulative Total']}
        rows={[
          ['1',  '1',  '1'],
          ['2',  '2',  '3'],
          ['3',  '3',  '6'],
          ['4',  '4',  '10'],
          ['5',  '5',  '15'],
          ['6',  '6',  '21'],
          ['7',  '7',  '28'],
          ['8',  '8',  '36'],
          ['9',  '9',  '45'],
          ['10', '10', '55'],
        ]}
      />
      <p>
        To max all <strong>8 weapon categories</strong> to level 10, the grand total is:
      </p>
      <WikiTable
        columns={['Weapons', 'Scrolls per Weapon', 'Grand Total']}
        rows={[
          ['8', '55', '440 Mythic Purple Scrolls'],
        ]}
      />
      <InfoBox variant="warning" label="440 Scrolls Is a Long Road">
        <p>
          Mythic Purple Scrolls are not a casual drop — budgeting all 440 for a full max
          across every weapon type is a long-term goal. Focus on leveling the weapon type
          that matches your current class and playstyle first, then work outward from there.
          Even a single weapon at level 10 is a meaningful permanent power boost.
        </p>
      </InfoBox>

      {/* ===== WEAPON GALLERY ===== */}
      <SectionHeading id="weapons">Weapon Stats by Type</SectionHeading>
      <p>
        Each weapon type is tuned to a different combat role. Warrior-oriented weapons
        (Sword, Two Handed Sword, Axe, Bow) emphasise P.Atk, STR, and physical bonuses;
        caster weapons (Mace, Staff) focus on M.Atk, INT, and Casting Speed; hybrid types
        (Dagger, Fists) boost both attack speed and casting with balanced stat spreads.
        Browse through each weapon below to see its specific bonus profile.
      </p>
      <WikiCarousel slides={WEAPON_SLIDES} />
    </>
  )
}
