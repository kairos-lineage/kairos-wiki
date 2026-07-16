import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE = 'images/lionna/alt-b/'

export default function TopPlayers() {
  return (
    <>
      <PageHero
        title="Top Players"
        tagline="Power Ranking — the truest measure of a character's strength across every system the server has to offer."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Top Players</strong> panel, accessed through{' '}
        <strong>Alt+B → Top Players</strong>, displays the <strong>Power Ranking</strong> —
        a live leaderboard titled <em>"The Strongest Characters of L2Kairos"</em>. It is
        a purely informational view showing the top 10 players on the server ranked by a
        composite <strong>Points</strong> score.
      </p>
      <WikiFigure
        src={`${BASE}top-players.png`}
        alt="Top Players — Power Ranking leaderboard showing top 10 characters and their points"
        caption="The Power Ranking — top 10 characters of L2Kairos, ranked by composite Points score."
        size="lg"
      />

      {/* ===== HOW POINTS WORK ===== */}
      <SectionHeading id="points">How Points Are Calculated</SectionHeading>
      <p>
        The Points score is not a single stat — it is a composite value that draws from{' '}
        <strong>every major feature and system</strong> the server has to offer. Character
        level, equipment quality, collections completed, soul and gem progression, talent
        trees, cards, dolls, relics, active playtime, and many other dimensions all
        contribute to the final number. There is no single shortcut to the top — the
        ranking rewards players who have invested broadly and deeply across the entire
        game rather than those who focused on just one or two systems.
      </p>
      <p>
        This is why you can see players with <strong>20 trillion P.Atk</strong> sitting
        alongside players at <strong>7 trillion P.Atk</strong> in the same top 10. Raw
        offensive power alone does not determine rank — a player who maxed their
        collections, progressed their souls, completed their talent tree, and built their
        gem slots will outscore someone who poured everything into a single stat. The
        ranking reflects the full picture of a character, not just the headline number.
      </p>
      <InfoBox variant="tip" label="Your Points Move Constantly">
        <p>
          Do not be surprised if you appear in the top 10 one session and are gone a few
          hours later. Points update as players progress across all systems — someone
          completing a collection, unlocking a new soul tier, or leveling a Shuffle Skill
          can shift the rankings at any time. Only the players who have developed every
          corner of their character consistently over a long period stay at the top
          permanently. Those are the <strong>Legends of Kairos</strong>.
        </p>
      </InfoBox>

      {/* ===== THE LEGENDS ===== */}
      <SectionHeading id="legends">The Legends of Kairos</SectionHeading>
      <p>
        Reaching and holding a position in the <strong>top 10</strong> is the ultimate
        measure of long-term dedication on this server. It means a player has not only
        farmed hard but has engaged with and progressed through collections, souls, gems,
        Ventus glyphs, Kairos Sword levels, Shuffle Skills, cards, dolls, and every other
        system the server provides. The top 10 are not the players with the most adena
        or the best single weapon — they are the players who left nothing on the table.
      </p>
      <InfoBox variant="gold" label="The True Benchmark">
        <p>
          If you want a realistic gauge of how complete your character is, check your
          position relative to the Power Ranking. The gap between you and the top 10 is
          a direct map of which systems you have not yet fully developed. Use it as a
          guide, not a discouragement — every system you unlock and progress moves your
          score and closes the gap.
        </p>
      </InfoBox>
    </>
  )
}
