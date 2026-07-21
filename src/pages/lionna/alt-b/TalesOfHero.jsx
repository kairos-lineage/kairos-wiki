import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE = 'images/lionna/alt-b/'

export default function TalesOfHero() {
  return (
    <>
      <PageHero
        title="Tales of Hero"
        tagline="Level up your hero's tale with special scrolls for permanent passive stat bonuses — the higher the level, the harder the climb."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        <strong>Tales of Hero</strong>, accessed through <strong>Alt+B → Tales of Hero</strong>,
        is a passive progression system that permanently strengthens your character by
        increasing its <strong>Tale Level</strong>. Each level reached grants meaningful passive
        stat bonuses that apply automatically — no activation needed. The bonuses compound as
        you climb, making Tales of Hero one of the most impactful background systems you can
        invest in over time.
      </p>
      <WikiFigure
        src={`${BASE}tales-of-hero.png`}
        alt="Tales of Hero interface — level progression and passive stat bonuses"
        caption="Tales of Hero — each level reached permanently increases your character's passive stats."
        size="lg"
      />
      <p>
        The system has one defining characteristic: <strong>leveling becomes harder with every
        step</strong>. Each attempt to raise the Tale Level consumes a scroll and applies a
        success chance — and that chance drops progressively as the level climbs. Early levels
        are straightforward; later levels can require many scroll attempts before a level-up
        lands. Patience and a steady scroll supply are what carry you forward.
      </p>

      {/* ===== SCROLL ===== */}
      <SectionHeading id="scroll">Tales of Hero Scroll</SectionHeading>
      <WikiFigure
        src={`${BASE}tales-of-hero-scroll.png`}
        alt="Tales of Hero Scroll — upgrade material consumed on each level-up attempt"
        caption="Tales of Hero Scroll — one consumed per level-up attempt, regardless of success."
        size="sm"
      />
      <p>
        Every level-up attempt consumes one <strong>Tales of Hero Scroll</strong> — win or
        lose. Failed attempts do not refund the scroll, so accumulating a healthy stockpile
        before pushing higher levels is essential.
      </p>
      <WikiTable
        columns={['Source', 'Notes']}
        rows={[
          ['World Bosses',   'Drops from most World Bosses across the server'],
          ['Custom Events',  'Obtainable as a reward from various in-game events'],
        ]}
      />
      <InfoBox variant="tip" label="Stockpile Before Pushing High Levels">
        <p>
          At lower levels a single scroll attempt usually succeeds. At higher levels the same
          attempt may fail many times before a level-up registers. Build up a reserve of scrolls
          before attempting the upper tiers — running dry mid-push means waiting for the next
          World Boss cycle before you can continue.
        </p>
      </InfoBox>

      {/* ===== LEVEL PROGRESSION ===== */}
      <SectionHeading id="progression">Level Progression &amp; Success Chance</SectionHeading>
      <p>
        The core mechanic of Tales of Hero is its <strong>diminishing success rate</strong>.
        Each level-up attempt is a chance roll — early levels have a high probability of
        succeeding on the first try, while later levels can require multiple attempts to
        advance. The scroll cost per attempt stays at one, but the number of scrolls
        consumed per actual level-up increases as the chance falls.
      </p>
      <InfoBox variant="warning" label="Failed Attempts Still Consume Scrolls">
        <p>
          A failed level-up attempt is not free — the scroll is consumed regardless of the
          outcome. At high Tale Levels where the chance may be low, expect to spend several
          scrolls per level gained. Factor this into how you plan your scroll farming so
          you are never caught without resources mid-progression.
        </p>
      </InfoBox>

      {/* ===== PASSIVE BONUSES ===== */}
      <SectionHeading id="bonuses">Passive Bonuses</SectionHeading>
      <p>
        Each Tale Level reached adds to a set of permanent passive bonuses applied directly
        to your character's stats. These bonuses are always active — they do not require
        a skill to cast, an item to equip, or any ongoing action. They simply exist as a
        permanent layer of power that grows with every level you unlock.
      </p>
      <InfoBox variant="tip" label="Do Not Ignore Tales of Hero">
        <p>
          Because the system is passive and runs in the background of other progression, it
          is easy to overlook — but the cumulative stat gain across all levels is significant.
          Treat scroll farming as a daily habit alongside your regular grind: pick up scrolls
          from World Bosses, bank them, and push a level whenever your stock allows. Characters
          who have neglected Tales of Hero are noticeably weaker than those who haven't.
        </p>
      </InfoBox>
    </>
  )
}
