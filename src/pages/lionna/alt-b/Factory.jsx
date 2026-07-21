import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE = 'images/lionna/alt-b/'

export default function Factory() {
  return (
    <>
      <PageHero
        title="Factory"
        tagline="A passive income machine — stay online and earn valuable items automatically, upgraded over time with Eggward the Brave eggs."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Factory</strong> system (also called the <strong>Mining System</strong>),
        accessed through <strong>Alt+B → Factory</strong>, is a passive production engine
        that rewards you simply for staying online and spending time in the game. While you
        farm, level, or even stand idle, the Factory quietly accumulates valuable items in
        the background — including currencies and materials that feed directly into the
        server's most important progression systems.
      </p>
      <WikiFigure
        src={`${BASE}factory-1.png`}
        alt="Factory system — Alt+B Factory interface overview"
        caption="The Factory interface — passive production runs automatically while you are online."
        size="lg"
      />
      <WikiFigure
        src={`${BASE}factory-2.png`}
        alt="Factory system — production slots and output detail"
        caption="Factory production detail — outputs accumulate over time and can be collected regularly."
        size="lg"
      />

      <InfoBox variant="warning" label="Open It Once to Start the Timers">
        <p>
          The Factory does <strong>not</strong> start producing automatically. You must open
          the Factory panel at least <strong>once</strong> to activate it — this is a one-time
          action and triggers all production timers. Once started, it runs continuously for
          as long as you are online. Do it immediately when you unlock access; every hour
          you leave it closed is production lost.
        </p>
      </InfoBox>
      <InfoBox variant="warning" label="Requires 500 Rebirths — New Restriction">
        <p>
          As of the latest server update, the Factory is no longer available from level 1.
          You must reach a minimum of <strong>500 total rebirths</strong> before the system
          unlocks. This change makes the Factory a mid-to-late game reward rather than an
          early-game bonus — plan your rebirth pace accordingly and make accessing it a
          rebirth milestone goal.
        </p>
      </InfoBox>

      {/* ===== WHAT YOU EARN ===== */}
      <SectionHeading id="output">What the Factory Produces</SectionHeading>
      <p>
        The Factory passively generates a mix of currencies and materials that are directly
        useful across multiple end-game systems:
      </p>
      <WikiTable
        columns={['Item', 'Use']}
        rows={[
          ['Event Coins',        'Currency for event shops and special purchases'],
          ['Blue Eva (BE)',      'Rare currency used in multiple end-game crafts'],
          ['Coin of Luck (COL)', 'Key late-game currency for GM Shop and upgrades'],
          ['Seiya Coin',         'Currency for Seiya-related progression items'],
          ['Ancestral Key Lvl 1','Opens Ancestral Set containers and reward chests'],
          ['Gold Bar',           'General-purpose crafting and exchange material'],
        ]}
      />
      <InfoBox variant="tip" label="Collect Regularly">
        <p>
          Factory output has a cap — if you let it sit too long without collecting, you may
          hit the production limit and waste potential gains. Check and collect your Factory
          output each session, the same way you check your daily spins and boss cooldowns.
        </p>
      </InfoBox>

      {/* ===== IMPROVING THE FACTORY ===== */}
      <SectionHeading id="upgrade">Improving the Factory — Thunder Wyrm Eggs</SectionHeading>
      <p>
        The Factory's baseline production can be <strong>improved and upgraded</strong> using
        a special material called the <strong>Thunder Wyrm Egg</strong>. Each egg applied to
        the system increases its output rate, making the passive income more meaningful over
        time. The only source of Thunder Wyrm Eggs is the{' '}
        <strong>Eggward the Brave event</strong> — a world boss that spawns in Giran Harbor on a
        fixed schedule.
      </p>
      <WikiFigure
        src={`${BASE}bunny-egg.png`}
        alt="Thunder Wyrm Egg — Factory upgrade material from Eggward the Brave event"
        caption="Thunder Wyrm Egg — obtained from the Eggward the Brave Treasure Chest, used to upgrade Factory output."
        size="sm"
      />

      {/* ===== EASTERN BUNNY ===== */}
      <SectionHeading id="eastern-bunny">Eggward the Brave — Event Guide</SectionHeading>
      <WikiFigure
        src={`${BASE}bunny-event.png`}
        alt="Eggward the Brave — World Boss event in Giran Harbor"
        caption="Eggward the Brave — World Boss event in Giran Harbor, every 2h 15min after server restart."
        size="lg"
      />
      <p>
        The <strong>Eggward the Brave</strong> spawns in <strong>Giran Harbor</strong> every{' '}
        <strong>2 hours and 15 minutes after server restart</strong>, immediately following
        the World Boss window. Access via <strong>.heine</strong> quick port → speak to the{' '}
        <strong>Flauen NPC</strong> → port to <strong>Giran Harbor</strong>. Players have a
        limited window of time to kill the boss before it despawns — do not delay after
        arriving.
      </p>

      <SectionHeading id="bunny-mechanics" level={3}>Fight Mechanics — Rabbit Waves</SectionHeading>
      <p>
        The Eggward the Brave fight follows the same <strong>10% HP threshold</strong> mechanic
        as Captain Morgull. Each time the bunny drops another 10% of its maximum HP, it
        becomes <strong>completely invulnerable</strong> — all damage is blocked — and a
        wave of <strong>small rabbits</strong> spawns in a circle around it and charges
        directly toward the players.
      </p>
      <p>
        The rule during a wave is absolute: <strong>do not touch the small rabbits</strong>.
        If a small rabbit reaches you and hits you — you die. If you accidentally strike a
        small rabbit with any attack — you die. Do not auto-attack, do not use AoE skills,
        do not click anything in the crowd. Stand still and wait for the wave to pass. Once
        the rabbits are gone the bunny becomes vulnerable again and the fight resumes. This
        cycle repeats at every 10% threshold down to zero.
      </p>
      <InfoBox variant="tip" label="Macro — Stop Attacking During Rabbit Waves">
        <p>
          The safest approach is a macro that <strong>cancels your auto-attack</strong> the
          instant a wave starts. Bind a key to toggle off auto-attack and hit it the moment
          you see the bunny's HP lock. Advanced players use Adrenaline scripts to detect the
          invulnerability phase and pause all actions automatically — at minimum, cutting your
          auto-attack manually is a must. One stray hit on a small rabbit ends your run.
        </p>
      </InfoBox>

      <SectionHeading id="bunny-chest" level={3}>The Chest — Open It Fast</SectionHeading>
      <p>
        When the Eggward the Brave is defeated, a <strong>Treasure Chest</strong> spawns on the
        kill spot and remains available for only a short window. The area becomes crowded
        immediately and clicking the chest manually is unreliable. Use a macro with{' '}
        <strong>/target treasure</strong> to lock onto it through the crowd the instant the
        boss falls, then attack or interact to open it. Fire the macro the moment you see
        the bunny die — do not waste time looking for it visually.
      </p>
      <InfoBox variant="tip" label="Macro — /target treasure">
        <p>
          Set up a macro with <strong>/target treasure</strong> and bind it to an easy key
          before you enter Giran Harbor. The same macro works here as it does for the Captain
          Morgull chest. The moment the Eggward the Brave dies, fire it — it snaps your target
          to the chest through the crowd instantly so you can open it before it disappears.
        </p>
      </InfoBox>

      <SectionHeading id="bunny-rewards" level={3}>Chest Rewards</SectionHeading>
      <p>
        Successfully opening the Treasure Chest rewards you with:
      </p>
      <WikiTable
        columns={['Reward', 'Notes']}
        rows={[
          ['Thunder Wyrm Egg', 'Used to upgrade Factory output rate — the only source in the game'],
        ]}
      />
      <InfoBox variant="tip" label="Every Egg Counts">
        <p>
          Thunder Wyrm Eggs are the <strong>only way</strong> to improve your Factory's
          production rate, and you get at most one per Eggward the Brave event window. Missing
          an event is a missed upgrade — treat Eggward the Brave with the same priority as
          Captain Morgull. Use <strong>Alt+B → Rank → Server Stats</strong> to track server
          uptime and calculate the next spawn window.
        </p>
      </InfoBox>
    </>
  )
}
