import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiCarousel   from '../../../components/ui/WikiCarousel'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE = 'images/lionna/alt-b/'

const SLIDES = [
  { src: `${BASE}collection-1.png`,  alt: 'Collection page 1',  caption: 'Collection Book — Page 1' },
  { src: `${BASE}collection-2.png`,  alt: 'Collection page 2',  caption: 'Collection Book — Page 2' },
  { src: `${BASE}collection-3.png`,  alt: 'Collection page 3',  caption: 'Collection Book — Page 3' },
  { src: `${BASE}collection-4.png`,  alt: 'Collection page 4',  caption: 'Collection Book — Page 4' },
  { src: `${BASE}collection-5.png`,  alt: 'Collection page 5',  caption: 'Collection Book — Page 5' },
  { src: `${BASE}collection-6.png`,  alt: 'Collection page 6',  caption: 'Collection Book — Page 6' },
  { src: `${BASE}collection-7.png`,  alt: 'Collection page 7',  caption: 'Collection Book — Page 7' },
  { src: `${BASE}collection-8.png`,  alt: 'Collection page 8',  caption: 'Collection Book — Page 8' },
  { src: `${BASE}collection-9.png`,  alt: 'Collection page 9',  caption: 'Collection Book — Page 9' },
  { src: `${BASE}collection-10.png`, alt: 'Collection page 10', caption: 'Collection Book — Page 10' },
  { src: `${BASE}collection-11.png`, alt: 'Collection page 11', caption: 'Collection Book — Page 11 (some entries still locked)' },
  { src: `${BASE}collection-12.png`, alt: 'Collection page 12', caption: 'Collection Book — Page 12 (late-game entries, mostly locked)' },
]

export default function Collection() {
  return (
    <>
      <PageHero
        title="Collection"
        tagline="One of the most important long-term features in the game — unlock passive bonuses as your character evolves."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Collection</strong> system is one of the single most impactful features in
        Lionna Multiskill. Every entry you unlock adds a permanent passive bonus to your character —
        bonuses that accumulate silently in the background and can make a significant difference in
        your character's power over time. The Collection book is opened through{' '}
        <strong>Alt+B → Collection</strong>.
      </p>
      <p>
        Collections do not open all at once. They unlock <strong>progressively</strong> as your
        character evolves — as you farm through each zone, craft gear, complete achievements, and
        push into late-game content. The further you go, the more of the book becomes available.
        Pages 1 through 10 fill up naturally through normal progression; pages 11 and 12 contain
        harder entries that remain locked until you reach the appropriate stage.
      </p>

      <WikiCarousel slides={SLIDES} />

      {/* ===== WHAT YOU GET ===== */}
      <SectionHeading id="bonuses">What Collections Give You</SectionHeading>
      <p>
        Each collection entry unlocked adds passive stats directly to your character with no
        further action required. The bonuses cover a wide range of attributes:
      </p>
      <ul style={{ paddingLeft: '1.4rem', margin: '0.75rem 0', lineHeight: '2' }}>
        <li><strong>Combat stats</strong> — P.Atk, M.Atk, P.Def, M.Def, critical rate</li>
        <li><strong>Farming stats</strong> — drop rate, spoil rate</li>
        <li><strong>Base attributes</strong> — STR, DEX, CON, INT, WIT, MEN</li>
        <li>And more across the full progression of the book</li>
      </ul>
      <p>
        Because these bonuses are purely passive and stack across every entry you complete, the
        Collection book rewards consistent long-term play more than any other single system.
      </p>

      {/* ===== THREE TIERS ===== */}
      <SectionHeading id="types">Types of Collections</SectionHeading>

      <SectionHeading id="simple" level={3}>Simple — Farm Collection Books</SectionHeading>
      <p>
        The majority of early and mid-game collections require you to submit{' '}
        <strong>Collection Books</strong> — items dropped by mobs across the various farming zones.
        As you hunt through each zone, these books drop naturally. Open the Alt+B Collection screen,
        find the matching entry, submit the required books, and the passive bonus activates
        immediately. No crafting, no special conditions — just farm and unlock.
      </p>

      <SectionHeading id="advanced" level={3}>Advanced — Submit Crafted Items</SectionHeading>
      <p>
        A portion of the collection entries are more demanding. They require you to submit items
        that you have <em>already crafted for your character</em> — things like{' '}
        <strong>tattoos, soul crystals, armor pieces</strong>, and similar progression materials.
        The catch is that the same item you worked to make for your character is now being consumed
        by the collection. You have to craft or obtain that item again specifically to hand it over
        for the passive bonus. This makes these entries a deliberate second cost on top of the
        original progression.
      </p>
      <InfoBox variant="warning" label="Plan Ahead">
        <p>
          When crafting materials like Eternal Pieces, armor, jewelry, or tattoos — keep in mind
          that the collection may ask for that same item again. Crafting extras while you are
          already farming the mats saves a full second run later.
        </p>
      </InfoBox>

      <SectionHeading id="hard" level={3}>Very Hard — Late-Game Entries</SectionHeading>
      <p>
        The final pages of the Collection book contain entries that are simply out of reach until
        late game. They may require rare materials, high-tier crafted items, or achievements that
        take a long time to accumulate. Do not try to force these early — they are designed to be
        completed organically as your character reaches the end stages of progression.
      </p>
      <InfoBox variant="tip" label="Pro Hint — Be Patient">
        <p>
          The hard late-game collections will complete themselves over time as you play. Focus on
          what is available now and check back regularly — new entries unlock as your character
          advances. Rushing is not possible and not necessary; the bonuses from what you can unlock
          today are already meaningful.
        </p>
      </InfoBox>
    </>
  )
}
