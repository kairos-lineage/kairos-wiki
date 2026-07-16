import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiCarousel   from '../../../components/ui/WikiCarousel'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE = 'images/lionna/alt-b/'

const TOP_SOULS = [
  {
    src:     `${BASE}soul-hunt-top-1.png`,
    alt:     'Soul of Kaos — +110% P.Atk, M.Atk, +35% Max HP',
    caption: 'Soul of Kaos — +110% P.Atk / M.Atk, +35% Max HP. Farm-currency path.',
  },
  {
    src:     `${BASE}soul-hunt-top-2.png`,
    alt:     'Soul of Peace — +110% Crit Dmg/Power, +35% Max HP',
    caption: 'Soul of Peace — +110% Crit Dmg/Power, +35% Max HP. Farm-currency path.',
  },
  {
    src:     `${BASE}soul-hunt-top-3.png`,
    alt:     'Soul of Tranquility — +110% P.Def, M.Def, +35% Max HP',
    caption: 'Soul of Tranquility — +110% P.Def / M.Def, +35% Max HP. Event and rebirth currency path.',
  },
  {
    src:     `${BASE}soul-hunt-top-4.png`,
    alt:     "Soul of Nightmare — +115% Stats, +35% Max HP",
    caption: "Soul of Nightmare — +115% Stats, +35% Max HP. Requires Rebirth Coins, Seiya Coins, and Lidia's Dresses Grade 3 & 4.",
  },
]

export default function SoulHunt() {
  return (
    <>
      <PageHero
        title="Soul Hunt"
        tagline="Collect and upgrade Souls through progressive tiers — from basic farm drops to mythical crafts that redefine your character's power."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Soul Hunt</strong> system, accessed through <strong>Alt+B → Soul Hunt</strong>,
        lets you equip powerful souls that grant permanent passive stat bonuses to your character.
        Souls scale across multiple tiers — from entry-level boss-drop crafts all the way to mythical
        and top souls requiring deep investment in rare currencies. Each tier is a significant step
        up in both power and material cost.
      </p>
      <WikiFigure
        src={`${BASE}soul-hunt.png`}
        alt="Soul Hunt interface — equipped souls and their passive stat bonuses"
        caption="The Soul Hunt interface — each soul slot contributes permanent passive bonuses to your character."
        size="lg"
      />

      <InfoBox variant="tip" label="Unlocking Soul Slots — Gracian Anniversary Coins">
        <p>
          Before you can equip souls you need to <strong>unlock the soul slots</strong> themselves.
          Each slot is activated with <strong>Gracian Anniversary Coins</strong> — the same currency
          used for early soul crafting, so it serves a dual purpose. Unlock slots progressively
          as your coin income allows; you do not need every slot open from day one.
        </p>
      </InfoBox>

      {/* ===== WHERE TO FIND ===== */}
      <SectionHeading id="where-to-find">Where to Find Souls</SectionHeading>

      <SectionHeading id="custom-shop" level={3}>GmShop → Custom Shop</SectionHeading>
      <p>
        Open the <strong>GmShop</strong> (the L2 Kairos NPC shop) and scroll to the bottom of the
        list. The <strong>Custom Shop — New Items</strong> section at the bottom is where new and
        unique items are available, including souls and their crafting materials.
      </p>
      <WikiFigure
        src={`${BASE}custom-shop.png`}
        alt="GmShop — main shop categories including Custom Shop at the bottom"
        caption="GmShop — scroll to Custom Shop at the bottom to access souls and related materials."
        size="md"
      />

      <SectionHeading id="soul-boss" level={3}>GmShop → Soul Boss / Soul System</SectionHeading>
      <p>
        Further down the GmShop list you will find the <strong>Soul Boss</strong> category —
        labelled <em>Soul System</em>. This section contains all purchasable and craftable souls
        organised by tier, from base crafts up through the top souls.
      </p>
      <WikiFigure
        src={`${BASE}gems-jewel-exchange.png`}
        alt="GmShop — Soul Boss / Soul System category"
        caption="GmShop → Soul Boss / Soul System — the hub for all soul tiers and crafting recipes."
        size="md"
      />

      {/* ===== SOUL PROGRESSION ===== */}
      <SectionHeading id="progression">Soul Progression Overview</SectionHeading>
      <p>
        Souls follow a clear progression path tied to your farming stage and overall character
        strength. Early players start with <strong>Base</strong> souls built from basic boss drops,
        then work up through <strong>Medium</strong> and <strong>Improved</strong> tiers as their
        access to materials grows. Late and end-game players push further into{' '}
        <strong>Mythical</strong> and <strong>Top</strong> souls that demand significant investment
        across multiple currencies and rare crafting components.
      </p>

      {/* ===== BASE SOULS ===== */}
      <SectionHeading id="base">Base Souls</SectionHeading>
      <p>
        The entry point into the Soul system. Base souls are crafted using{' '}
        <strong>Gracian Anniversary Coins</strong> combined with raid boss soul drops such as{' '}
        <strong>Soul Valakas</strong> and <strong>Soul Baium</strong>. A good example is{' '}
        <strong>Soul Orfen Reborn</strong>, which already provides meaningful combat boosts:
        +60% P.Atk, +60% M.Atk, +60% Critical Dmg, and +60% Magic Critical Power.
        These souls are accessible to players who are actively farming and defeating world bosses.
      </p>
      <WikiFigure
        src={`${BASE}soul-hunt-base.png`}
        alt="Base soul crafting — Soul Orfen Reborn requiring Gracian Anniversary Coins, Soul Valakas, and Soul Baium"
        caption="Base soul example — Soul Orfen Reborn, crafted from Gracian Anniversary Coins and boss soul drops."
        size="md"
      />

      {/* ===== MEDIUM SOULS ===== */}
      <SectionHeading id="medium">Medium Souls</SectionHeading>
      <p>
        Medium souls represent the next step and require combining multiple lower-tier souls.
        The <strong>Master of Soul Dante</strong> is a key medium-tier soul, crafted from four
        different soul types: <strong>Soul Rin</strong>, <strong>Soul Explorer</strong>,{' '}
        <strong>Soul Death</strong>, <strong>Soul Minak</strong> ... and all other from the same tier — two of each. At this tier,
        stats are only revealed once the soul is equipped, so commit to the craft when you are
        ready to use it.
      </p>
      <WikiFigure
        src={`${BASE}soul-hunt-medium.png`}
        alt="Medium soul crafting — Master of Soul Dante requiring Soul Rin, Soul Explorer, Soul Death, Soul Minak x2 each"
        caption="Medium soul — Master of Soul Dante, crafted by combining four different soul types."
        size="md"
      />

      {/* ===== IMPROVED SOULS ===== */}
      <SectionHeading id="improved">Improved Souls</SectionHeading>
      <p>
        Improved souls are a significant step up and are built by upgrading a medium soul with
        a set of named specialist souls. The <strong>Soul of Dante Upgrade</strong>, for example,
        requires the <strong>Master of Soul Dante</strong> plus all other souls of this tier—
        such as Soul of Malachai, Soul of Lilith, Soul of Asmodeus, etc. — each tied to a specific stat
        archetype.
      </p>
      <WikiFigure
        src={`${BASE}soul-hunt-improved.png`}
        alt="Improved soul crafting — Soul of Dante Upgrade requiring Master of Soul Dante plus named specialist souls"
        caption="Improved soul — Soul of Dante Upgrade, built by combining a medium soul with named specialist souls."
        size="md"
      />
      <p>
        At the Improved tier, each soul has a clearly defined role. The full set of Improved souls
        and their stat contributions:
      </p>
      <WikiFigure
        src={`${BASE}soul-hunt-improved-stats.png`}
        alt="Improved soul stats — full list from Soul Malachai through Soul of Dante Upgrade"
        caption="Improved soul stat list — each soul provides a focused bonus, from raw stats to Crit Power and PvE Damage."
        size="lg"
      />
      <WikiTable
        columns={['Soul', 'Stat Bonus']}
        rows={[
          ['Soul Malachai, the Soul Devourer',    '+150 DEX/WIT'],
          ['Soul of Lilith, the Soul Queen',       '+200% P.Def, M.Def'],
          ['Soul of Asmodeus, the Soul Thief',    '+200% Critical Dmg/Power'],
          ['Soul of Valeria, the Soul Redeemer',  '+200% HP, +150 CON'],
          ['Soul of Marcelus, the Soul Tormentor','100% PvE Damage'],
          ['Soul of Zephyr, the Soul Collector',  '+200% P.Atk, M.Atk'],
          ['Soul of Moros, the Soul Reaper',      '+150 STR/INT'],
          ['Soul of Belzor, the Soul Hunter',     '+150 CON/MEN'],
          ['Soul of Vaelin, the Soul Guardian',   '+100 STAT'],
          ['Soul of Dante Upgrade',               '+600% Stats, +600% Crit Dmg/Power, +250 STAT'],
        ]}
      />

      {/* ===== MYTHICAL SOULS ===== */}
      <SectionHeading id="mythical">Mythical Souls</SectionHeading>
      <p>
        Most late-game power from souls comes from the <strong>Mythical tier</strong>. These souls
        require a significant amount of materials — particularly <strong>Blue Eva Coin of Luck</strong>{' '}
        and <strong>Rebirth Coins</strong> — alongside three different grades of{' '}
        <strong>Lidia's Dresses</strong>. Mythical souls arrive in multiple sub-tiers of increasing
        power, each demanding more investment than the last. Plan your material flow carefully before
        committing to crafts at this level.
      </p>
      <WikiFigure
        src={`${BASE}soul-hunt-mythical-1.png`}
        alt="Mythical souls tier 1 and 2 — full stat list from Soul of Aurora through Soul of Selene"
        caption="Mythical souls — first two sub-tiers. Highlighted (green) souls are the combined capstone of each set."
        size="lg"
      />
      <WikiFigure
        src={`${BASE}soul-hunt-mythical-2.png`}
        alt="Mythical souls tier 3 and 4 — full stat list from Soul of Thalia through Soul of Elio"
        caption="Mythical souls — upper sub-tiers. Orange/gold highlighted souls are crossover bridge souls between tiers."
        size="lg"
      />

      {/* ===== TOP SOULS ===== */}
      <SectionHeading id="top">Top Souls</SectionHeading>
      <p>
        At the very top of the soul ladder sit four <strong>Top Souls</strong> — each offering
        extreme stat bonuses and requiring a substantial mix of rare currencies and materials.
        Two of them are obtained primarily through farm currencies (Mythic Red Sand, Unknown Black
        Crystal, Coin of Eva, Blue Eva), while the other two demand event and rebirth currencies
        alongside Lidia's Dresses.
      </p>
      <WikiCarousel slides={TOP_SOULS} />
      <WikiTable
        columns={['Soul', 'Key Stats', 'Main Currencies']}
        rows={[
          ['Soul of Kaos',        '+110% P.Atk / M.Atk, +35% Max HP', 'Mythic Red Sand, Unknown Black Crystal, Coin of Eva, Blue Eva'],
          ['Soul of Peace',       '+110% Crit Dmg/Power, +35% Max HP', 'Mythic Red Sand, Unknown Black Crystal, Coin of Eva, Blue Eva'],
          ['Soul of Tranquility', '+110% P.Def / M.Def, +35% Max HP',  'Event Coin, Gracian Anniversary Coins, Gold Bar, Rebirth Coin'],
          ["Soul of Nightmare",   '+115% Stats, +35% Max HP',           "Rebirth Coin, Seiya Coin, Lidia's Dress Grade 3 & 4"],
        ]}
      />

      {/* ===== TOP SOUL FARMING LOCATION ===== */}
      <InfoBox variant="gold" label="Top Soul Farming Location — Hardcore Zone 9">
        <p>
          The materials required to craft Top Souls drop exclusively in <strong>Hardcore Zone 9</strong>.
          Before you can farm there efficiently, you will need a significant portion of your progression
          already in place — regular and improved souls equipped, key mythical souls unlocked, and your
          relevant Collections completed. These systems all feed into the raw power needed to clear HC9
          at a pace where Top Soul crafting becomes realistic. Do not rush to HC9 under-prepared;
          build your foundation first and the farm will pay off much faster.
        </p>
      </InfoBox>

      {/* ===== COLLECTIONS & FINAL NOTE ===== */}
      <SectionHeading id="collections">Souls in Collections & Planning Advice</SectionHeading>
      <p>
        Souls are considered one of the features that can truly transform your character's power
        level — the stat multipliers at higher tiers are substantial. However, they consume an
        enormous amount of materials across every crafting stage, so plan your progression
        carefully and avoid rushing tiers before your farm income can support them.
      </p>
      <p>
        Worth noting: like some Cards, several Souls are also required as ingredients in the{' '}
        <strong>Collection</strong> system (<strong>Alt+B → Collection → Page 11</strong>). Some
        of the souls used for Collections are relatively easy to obtain early on, while others are
        deep late-game or outright end-game crafts. Check your Collection page 11 requirements
        before spending souls — you may need to hold some back for a collection unlock rather than
        slotting them directly.
      </p>
      <InfoBox variant="warning" label="Material Planning Is Critical">
        <p>
          Blue Eva Coins of Luck, Rebirth Coins, and Lidia's Dresses are shared requirements
          across multiple late-game systems — not just Souls. Before committing large quantities
          to a soul craft, cross-check whether those same materials are needed for a higher-priority
          upgrade elsewhere in your progression.
        </p>
      </InfoBox>
    </>
  )
}
