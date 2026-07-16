import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE = 'images/lionna/alt-b/'

export default function Cards() {
  return (
    <>
      <PageHero
        title="Cards"
        tagline="Collect Cards from the daily Dual Boss instance — rare and unique cards define late-game power."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Cards</strong> system is accessible through <strong>Alt+B → Cards</strong>.
        Cards are equippable items that provide permanent passive stat bonuses to your character.
        They range from basic stat boosts all the way to <strong>EX Ultra Rare</strong> cards —
        the absolute pinnacle, named after the server's top players of all time and obtainable only
        through special events or extreme long-term farming. Getting the best cards requires either
        exceptional luck or consistent daily effort over a long period.
      </p>
      <WikiFigure
        src={`${BASE}cards.png`}
        alt="Cards UI — equipped cards and their stat bonuses"
        caption="The Cards interface — equipped cards contribute their bonuses passively at all times."
        size="lg"
      />

      {/* ===== HOW TO GET CARDS ===== */}
      <SectionHeading id="how-to-get">How to Get Cards — Dual Boss Instance</SectionHeading>
      <p>
        Cards come from the <strong>Kairos Random Card Box</strong>, which is earned by completing
        the <strong>Dual Boss</strong> party instance. This is the primary — and most reliable —
        source of cards in the game.
      </p>
      <WikiTable
        columns={['Detail', 'Info']}
        rows={[
          ['Access',     'Instance Keeper NPC in Giran → Page 3 → Dual Boss'],
          ['Cooldown',   '1 run per day (24-hour cooldown)'],
          ['Format',     'Party instance — 5 bosses spawn sequentially, one after another'],
          ['Completion', 'Kill all 5 bosses to receive rewards for every party member'],
        ]}
      />
      <InfoBox variant="tip" label="Run It Every Day">
        <p>
          The Dual Boss instance resets every 24 hours. Top cards can take dozens or even hundreds
          of boxes to obtain. Missing a day is a missed opportunity — make this part of your daily
          routine as soon as your party is strong enough to clear it.
        </p>
      </InfoBox>

      {/* ===== INSTANCE REWARDS ===== */}
      <SectionHeading id="rewards">Instance Rewards</SectionHeading>
      <p>
        After all five bosses are defeated, every party member receives a bundle of materials.
        The full reward pool includes:
      </p>
      <ul>
        <li>Stones for <strong>Octavia custom skills</strong></li>
        <li>The <strong>5 Mythic Tattoos</strong> (one of each type)</li>
        <li><strong>Kairos Random Card Box</strong> — opens for a random card</li>
      </ul>
      <WikiFigure
        src={`${BASE}cards-mats.png`}
        alt="Instance rewards — Kairos Random Card Box and material drops"
        caption="Reward bundle after clearing all 5 bosses — includes the Kairos Random Card Box and crafting materials."
        size="lg"
      />

      {/* ===== MYTHIC TATTOOS ===== */}
      <SectionHeading id="tattoos">Mythic Tattoos</SectionHeading>
      <p>
        Each Dual Boss clear also drops a set of <strong>5 Mythic Tattoos</strong>, each with a
        different rarity tier and stat bonus. These are unique tattoos not obtainable elsewhere:
      </p>
      <WikiFigure
        src={`${BASE}cards-tattoes.png`}
        alt="Five Mythic Tattoo tiers"
        caption="The five Mythic Tattoo tiers — Common through Ultra Rare."
        size="lg"
      />
      <WikiTable
        columns={['Tattoo', 'Rarity', 'Stat Bonus']}
        rows={[
          ['Mythic Tatto Common',    'Common',     'Increase P.Def / M.Def +25%'],
          ['Mythic Tatto Medium',    'Medium',     'Increase STATS +100'],
          ['Mythic Tatto Regular',   'Regular',    'Increase Crit Dmg / Power +25%'],
          ['Mythic Tatto Rare',      'Rare',       'Increase P.Atk / M.Atk +25%'],
          ['Mythic Tatto Ultra Rare','Ultra Rare', 'Increase PvE Dmg / Exp / PvP Dmg +25%'],
        ]}
      />
      <InfoBox variant="tip" label="Ultra Rare Is the Crown Jewel">
        <p>
          The <strong>Ultra Rare</strong> tattoo boosts PvE Dmg, Exp gain, <em>and</em> PvP Dmg
          simultaneously — one of the strongest single tattoos in the game. Prioritise equipping
          this one the moment you have it.
        </p>
      </InfoBox>

      {/* ===== CARD TIERS ===== */}
      <SectionHeading id="tiers">Card Tiers</SectionHeading>
      <p>
        Cards from the Kairos Random Card Box are tiered by rarity. Higher tiers provide
        significantly stronger bonuses:
      </p>
      <WikiTable
        columns={['Tier', 'Source', 'Description']}
        rows={[
          ['Basic',         'Kairos Random Card Box', 'Entry-level cards with modest stat boosts — a quick upgrade from nothing'],
          ['Improved',      'Kairos Random Card Box', 'Stronger versions of basic stats — noticeable gains for active players'],
          ['Rare',          'Kairos Random Card Box', 'Powerful cards with high stat values — worth equipping long-term'],
          ['Unique',        'Kairos Random Card Box', 'Named after server legends — strong stats, some class-specific, some universal'],
          ['EX Ultra Rare', 'Halloween Boss / Hardcore 11', 'The absolute top tier — exclusive acquisition paths, extreme investment required'],
        ]}
      />

      {/* ===== UNIQUE CARDS ===== */}
      <SectionHeading id="unique">Unique Cards — From the Kairos Random Card Box</SectionHeading>
      <p>
        Unique cards are the top-tier drops from the Kairos Random Card Box. Each one is named
        after a top player in the server's history. Some are universal and strong for both warriors
        and mages; others are tuned to a specific class.
      </p>
      <WikiFigure
        src={`${BASE}cards-late-game.png`}
        alt="Late-game Unique and EX Ultra Rare cards — Kyosuke, Satirist, Pandrogan, Morpheus, MedDog, Sunday"
        caption="End-game cards — Unique (top row) and EX Ultra Rare (bottom row), all named after server legends."
        size="lg"
      />
      <WikiTable
        columns={['Card', 'Notable Stats', 'Best For']}
        rows={[
          ['Kyosuke',   '+20% Stats',                                   'Universal — warriors and mages'],
          ['Satirist',  '+22% Crit Power, +43% P.Atk, +22% PvE Dmg',   'Warriors'],
          ['Pandrogan', '+48% Stats',                                   'Universal — one of the strongest overall'],
        ]}
      />
      <InfoBox variant="warning" label="Unique Cards Are RNG">
        <p>
          There is no guaranteed path to a specific Unique card. The Kairos Random Card Box is
          exactly that — random. Some players land a Unique within a week; others run the instance
          daily for months. The only thing you can control is showing up every day.
        </p>
      </InfoBox>

      {/* ===== EX ULTRA RARE CARDS ===== */}
      <SectionHeading id="ex-ultra-rare">EX Ultra Rare Cards — The True Endgame</SectionHeading>
      <p>
        <strong>EX Ultra Rare</strong> cards — <strong>Morpheus</strong>,{' '}
        <strong>MedDog</strong>, and <strong>Sunday</strong> — sit above the Unique tier entirely.
        They are not obtainable from the Kairos Random Card Box. There are two paths to acquiring
        them:
      </p>

      <SectionHeading id="ex-halloween" level={3}>Path 1 — Halloween Boss (GM Event)</SectionHeading>
      <p>
        EX Ultra Rare cards can drop from the <strong>Halloween Boss</strong>, a custom GM-run
        event. When the event runs depends entirely on the GM's schedule — it is not a permanent
        feature. Attend every time it is announced; these are rare windows that cannot be predicted
        in advance.
      </p>

      <SectionHeading id="ex-hc11" level={3}>Path 2 — Hardcore 11 (Long-term Farm)</SectionHeading>
      <p>
        The guaranteed long-term path is through <strong>Hardcore Zone 11</strong> — the highest
        and most demanding farm zone on the server. EX Ultra Rare cards are crafted there using
        <strong> 75,000,000 of a specific zone material</strong>, which can only be farmed in HC11
        itself. At realistic farm rates, accumulating that quantity takes approximately{' '}
        <strong>a full week of dedicated farming</strong>.
      </p>
      <WikiTable
        columns={['Card', 'Notable Stats', 'Best For']}
        rows={[
          ['Morpheus', '+43% P.Atk bonuses',              'Warriors'],
          ['MedDog',   '+22% Stats + defensive bonuses',  'Universal / tanky builds'],
          ['Sunday',   '+22% Crit Power, +43% P.Atk',     'Warriors'],
        ]}
      />
      <InfoBox variant="warning" label="HC11 Is End-Game Content">
        <p>
          Hardcore Zone 11 requires a fully optimised character to farm efficiently. Do not attempt
          to rush EX Ultra Rare cards until your gear, talents, and other systems are well
          developed — the time investment is enormous and you will farm far slower if you enter
          under-geared.
        </p>
      </InfoBox>

      {/* ===== CARDS IN COLLECTIONS ===== */}
      <SectionHeading id="collections">Cards in Collections</SectionHeading>
      <p>
        Cards are not only used in the Cards system — they are also a required material in the{' '}
        <strong>Collection</strong> system (<strong>Alt+B → Collection → Page 11</strong>).
        Collections consume cards in modest quantities as part of their unlock recipes. Keep
        this in mind when managing your card stock — do not equip every card you own if some are
        needed for a Collection unlock you are close to completing.
      </p>
    </>
  )
}
