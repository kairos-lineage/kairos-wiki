import PageHero       from '../../components/ui/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import WikiFigure     from '../../components/ui/WikiFigure'
import CardGrid       from '../../components/ui/CardGrid'
import Card           from '../../components/ui/Card'

const SECTIONS = [
  { icon: '⚔️', title: 'Relic Weapon',      to: '/lionna/alt-b/relic-weapon',      desc: 'Collect weapon Relic cards, level to 5 with Exp Stones, then enchant for permanent combat bonuses.' },
  { icon: '🪆', title: 'Dolls',             to: '/lionna/alt-b/dolls',             desc: 'Collect 50 Cards to unlock each Doll, level it to 5 with Exp Stones, then enchant for passive stat bonuses.' },
  { icon: '📚', title: 'Collection',        to: '/lionna/alt-b/collection',        desc: 'One of the most important features — unlock passive P.Atk, M.Atk, crit, drop, attributes and more as your character progresses.' },
  { icon: '💎', title: 'Gem',               to: '/lionna/alt-b/gem',               desc: '14 gem grades from Chipped (mob drops) to Radiant Star (Captain Morgull event) — socket for permanent passive bonuses.' },
  { icon: '🌳', title: 'Talent Tree',       to: '/lionna/alt-b/talent-tree',       desc: 'Unlock and level up Talents to strengthen your character.' },
  { icon: '🍀', title: 'Luck',              to: '/lionna/alt-b/luck',              desc: 'Luck-based system with random rewards and bonuses.' },
  { icon: '🃏', title: 'Cards (Instance Keeper)', to: '/lionna/alt-b/cards',        desc: 'Collect and play Cards for stat boosts and effects.' },
  { icon: '👑', title: 'Ancestral Set',     to: '/lionna/alt-b/ancestral-set',     desc: 'Craft and upgrade the powerful Ancestral equipment set.' },
  { icon: '🎫', title: 'Battle Pass',       to: '/lionna/alt-b/battle-pass',       desc: 'Seasonal progression system with exclusive milestone rewards.' },
  { icon: '👻', title: 'Soul Hunt',         to: '/lionna/alt-b/soul-hunt',         desc: 'Hunt souls and claim rewards from the Soul Hunt system.' },
  { icon: '📦', title: 'Support Box',       to: '/lionna/alt-b/support-box',       desc: 'Claim Support Boxes earned through gameplay activities.' },
  { icon: '🔀', title: 'Shuffle Skill',     to: '/lionna/alt-b/shuffle-skill',     desc: 'Randomize and discover new skill combinations.' },
  { icon: '💨', title: 'Ventus',            to: '/lionna/alt-b/ventus',            desc: 'Ventus system — wind-based progression and rewards.' },
  { icon: '🏅', title: 'Rank',              to: '/lionna/alt-b/rank',              desc: 'Your server rank, ranking progression, and rewards.' },
  { icon: '🗡️', title: 'Kairos Sword',      to: '/lionna/alt-b/kairos-sword',      desc: 'The Kairos Sword — a unique server weapon and upgrade path.' },
  { icon: '🎰', title: 'Lucky Roulette',    to: '/lionna/alt-b/lucky-roulette',    desc: 'Spin the roulette for a chance at rare items and prizes.' },
  { icon: '🥇', title: 'Top-Players',       to: '/lionna/alt-b/top-players',       desc: 'Server-wide player rankings and leaderboard standings.' },
  { icon: '⚗️', title: 'Alchemist',         to: '/lionna/alt-b/alchemist',         desc: 'Craft and transmute materials through the Alchemist.' },
  { icon: '✨', title: 'Excellent Enchant', to: '/lionna/alt-b/excellent-enchant', desc: 'Enchant gear to Excellent grade for bonus effects.' },
  { icon: '🏭', title: 'Factory',           to: '/lionna/alt-b/factory',           desc: 'Production factory for crafting materials and equipment.' },
  { icon: '🎭', title: 'Tattoo Inventory',  to: '/lionna/alt-b/tattoo-inventory',  desc: 'View and manage all Tattoos in your inventory.' },
  { icon: '📖', title: 'Tales of Hero',     to: '/lionna/alt-b/tales-of-hero',     desc: 'Hero story quests and narrative-driven reward chains.' },
]

export default function AltB() {
  return (
    <>
      <PageHero
        title="ALT+B Community Board"
        tagline="Your central hub for all server features — press Alt+B in-game to open."
      />

      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Community Board</strong> (opened with <strong>Alt+B</strong> in-game) is the
        central interface for nearly every custom feature on Lionna Multiskill. From weapon upgrades
        and collections to clan tools, battle pass rewards, and PvP arenas — everything is a few
        clicks away without leaving the game world.
      </p>
      <WikiFigure
        src="images/lionna/alt-b/alt-b.png"
        alt="Lionna Community Board — Alt+B main screen"
        caption="The Lionna Community Board main screen — all sections are accessible from here."
        size="lg"
      />

      <SectionHeading id="sections">Sections</SectionHeading>
      <p>Select a section below to read a full guide on how it works.</p>
      <CardGrid>
        {SECTIONS.map((s) => (
          <Card key={s.to} to={s.to} icon={s.icon} title={s.title} desc={s.desc} />
        ))}
      </CardGrid>
    </>
  )
}
