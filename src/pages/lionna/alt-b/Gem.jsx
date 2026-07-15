import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE = 'images/lionna/alt-b/'

export default function Gem() {
  return (
    <>
      <PageHero
        title="Gem"
        tagline="Socket progressively stronger Gems for permanent passive combat bonuses."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Gem</strong> system, accessed through <strong>Alt+B → Gem</strong>, lets you
        socket gems into dedicated slots on your character. Each socketed gem provides permanent
        passive bonuses — things like increased critical rate, P.Atk, P.Dmg, and more — with no
        activation needed. The higher the grade of the gem you socket, the stronger the bonus it
        provides.
      </p>
      <WikiFigure
        src={`${BASE}gems.png`}
        alt="Gem UI showing socketed gems and passive bonuses"
        caption="The Gem interface — each filled slot contributes passive stat bonuses to your character."
        size="lg"
      />

      {/* ===== GEM TYPES ===== */}
      <SectionHeading id="types">Gem Grades — Full Progression</SectionHeading>
      <p>
        There are <strong>14 gem grades</strong> arranged in a clear progression from the most basic
        drop to the rarest end-game reward. They are organised into four shape families, each with
        three quality tiers (base, Flawless, Radiant) — plus the initial five flat grades at the
        start of the chain:
      </p>
      <WikiFigure
        src={`${BASE}gems-types.png`}
        alt="All 14 gem grades from Chipped to Radiant Star"
        caption="All 14 gem grades — Chipped through Radiant Star — shown in progression order."
        size="lg"
      />
      <WikiTable
        columns={['Grade', 'Family', 'Where to Get']}
        rows={[
          ['Chipped',        'Flat',   'Drops from most regular mobs across all zones'],
          ['Radiant Star',   'Star',   'Festival Box — dropped by Captain Morgull (Boss Event)'],
        ]}
      />

         {/* ===== PROGRESSION TIERS ===== */}

      <SectionHeading id="tier-event" level={3}>Radiant Star — Festival Box (Captain Morgull)</SectionHeading>
      <p>
        The <strong>Radiant Star</strong> is the pinnacle gem grade and is obtained exclusively
        through the <strong>Festival Box</strong>, which drops from <strong>Captain Morgull</strong>{' '}
        — a Boss Event that runs on the server. This is not a farmable drop from zones or instances;
        it is a reward tied directly to participating in and completing the Captain Morgull Boss
        Event. Make sure to attend this event whenever it is active, as the Radiant Star gem is the
        most powerful socket option available.
      </p>
      <InfoBox variant="tip" label="Pro Hint — Captain Morgull Event">
        <p>
          Keep an eye on the <strong>Event Times</strong> page so you never miss a Captain Morgull
          spawn. The Festival Box is the only reliable source of Radiant Star gems — each run is an
          opportunity you cannot get back. Even if your character is not fully optimised yet, attend
          the event as often as possible.
        </p>
      </InfoBox>

      <InfoBox variant="warning" label="Socket What You Have">
        <p>
          Do not wait until you have high-grade gems before socketing. Every slot you leave empty
          is a passive bonus you are not receiving. Socket the best gem currently available to you
          and upgrade the slot as better grades drop — the early bonuses add up and help you farm
          the next tier faster.
        </p>
      </InfoBox>

      {/* ===== WHERE TO FIND ===== */}
      <SectionHeading id="where-to-find">Where to Find Gems</SectionHeading>

      <SectionHeading id="custom-shop" level={3}>GmShop → Custom Shop</SectionHeading>
      <p>
        Open the <strong>GmShop</strong> (the L2 Kairos NPC shop) and scroll to the bottom of the
        list. The <strong>Custom Shop — New Items</strong> section contains gems available for
        direct purchase with in-game currency. This is the easiest early-game source and a good
        way to fill your slots quickly when you are just starting out.
      </p>
      <WikiFigure
        src={`${BASE}custom-shop.png`}
        alt="GmShop — Custom Shop section"
        caption="GmShop — scroll to Custom Shop at the bottom to find gems available for purchase."
        size="md"
      />

      <SectionHeading id="jewel-exchange" level={3}>GmShop → Jewel Exchange</SectionHeading>
      <p>
        Further down the GmShop list you will find <strong>Jewel Exchange — Up Jewels</strong>.
        This section lets you exchange gems you already own for upgraded versions. Once you have
        accumulated Radiant Star gems from events and drops, you can combine them here into a more
        powerful gem variant.
      </p>
      <WikiFigure
        src={`${BASE}gems-jewel-exchange.png`}
        alt="GmShop — Jewel Exchange section"
        caption="GmShop → Jewel Exchange — use this to upgrade and convert your gem stock."
        size="md"
      />
      <p>
        The exchange requires combining <strong>three different Radiant Star gem types</strong> —
        Sapphire, Amethyst, and Diamond — to produce a <strong>Moonstone GL Superior Gem</strong>.
        The item description notes its power is unknown and advises you to bring it to an{' '}
        <strong>NPC in Giran</strong> to discover what it can do.
      </p>
      <WikiFigure
        src={`${BASE}gems-variants.png`}
        alt="Jewel Exchange — Radiant Star gem conversion"
        caption="Exchange Sapphire, Amethyst, and Diamond Radiant Star gems to obtain the Moonstone GL Superior Gem."
        size="lg"
      />

      <SectionHeading id="stat-gems" level={3}>Mid-Grade Stat Gems</SectionHeading>
      <p>
        A separate category of gems provides fixed, specific stat combinations rather than a
        simple bonus to one stat. These mid-grade gems are targeted tools — pick the one that
        matches what your character needs most:
      </p>
      <WikiFigure
        src={`${BASE}gems-stats.png`}
        alt="Mid-grade stat gems and their bonuses"
        caption="Mid-grade stat gems — each gem provides a unique combination of passive bonuses."
        size="lg"
      />

   
    </>
  )
}
