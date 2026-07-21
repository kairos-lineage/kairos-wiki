import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE = 'images/lionna/alt-b/'

export default function Ventus() {
  return (
    <>
      <PageHero
        title="Ventus"
        tagline="A slow, deliberate progression — unlock glyph slots with rare materials and fill them with powerful passive bonuses that compound over time."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Ventus</strong> system, accessed through <strong>Alt+B → Ventus</strong>, is
        one of the longest-term investments on the server — and one that demands patience above all
        else. The core mechanic is <strong>not</strong> about crafting different types of glyphs;
        it is about <strong>unlocking the slots</strong> that hold them. Each slot requires a rare
        material to open, and unlike other systems where progression currency is relatively
        farmable, Ventus slots represent a genuine long-term bottleneck. Every slot you unlock is
        a meaningful milestone.
      </p>
      <WikiFigure
        src={`${BASE}ventus.png`}
        alt="Ventus interface — glyph slots arranged in a circular formation"
        caption="The Ventus interface — glyph slots unlock over time, each one adding a permanent passive bonus."
        size="lg"
      />

      {/* ===== WHERE TO NAVIGATE ===== */}
      <SectionHeading id="where-to-find">Accessing Ventus</SectionHeading>

      <SectionHeading id="custom-shop" level={3}>Custom Shop</SectionHeading>
      <p>
        Open the <strong>Custom Shop</strong> NPC. The shop is split across multiple pages —
        Ventus and its related items are not on the first page.
      </p>
      <WikiFigure
        src={`${BASE}custom-shop.png`}
        alt="Custom Shop — first page of the NPC shop"
        caption="Custom Shop — open the NPC shop and navigate to the next page to find Ventus."
        size="md"
      />

      <SectionHeading id="custom-shop-ventus" level={3}>Custom Shop — Page 2 → Ventus</SectionHeading>
      <p>
        On the second page of the Custom Shop you will find the <strong>Ventus</strong> section
        with the items and materials relevant to the system.
      </p>
      <WikiFigure
        src={`${BASE}custom-shop-2.png`}
        alt="Custom Shop page 2 — Ventus section"
        caption="Custom Shop page 2 — Ventus items and materials available here."
        size="md"
      />

      {/* ===== UNLOCKING SLOTS ===== */}
      <SectionHeading id="slots">Unlocking Slots — HarGunn's Oscular Gem</SectionHeading>
      <p>
        Each Ventus slot is unlocked by consuming one{' '}
        <strong>HarGunn's Oscular Gem</strong> — a rare material with very limited sources.
        Unlike the <strong>Gracian Anniversary Coins</strong> used to unlock slots in the Soul Hunt
        and Gem systems, this gem is significantly harder to obtain, which is what makes Ventus
        progression genuinely slow even for dedicated players.
      </p>
      <WikiFigure
        src={`${BASE}ventus-slot-gem.png`}
        alt="HarGunn's Oscular Gem — rare material required to unlock Ventus slots"
        caption="HarGunn's Oscular Gem — one required per Ventus slot unlock."
        size="sm"
      />
      <p>
        <strong>HarGunn's Oscular Gem</strong> is obtained from the{' '}
        <strong>Party Instance</strong> available through the{' '}
        <strong>Instance Keeper NPC → Page 2 → Row 2, instances 3–4–5</strong>.
        The target boss is <strong>Robuso</strong>. Come well prepared — even with maximum
        Critical Damage output, Robuso is a tanky fight that will take a noticeable amount
        of time to bring down. Coordinate with your party before entering.
      </p>
      <InfoBox variant="warning" label="Robuso Takes Time to Kill">
        <p>
          Do not underestimate Robuso. Even fully geared parties with high Crit Damage will
          spend a meaningful amount of time on this boss. Make sure your party knows the
          fight before committing a run — wasted attempts slow your slot unlock progress
          considerably given how rare each gem drop is.
        </p>
      </InfoBox>

      {/* ===== GLYPH TIERS ===== */}
      <SectionHeading id="tiers">Glyph Tiers</SectionHeading>
      <WikiFigure
        src={`${BASE}ventis-glyphs.png`}
        alt="Ventus glyphs overview — all available glyphs displayed"
        caption="All available Ventus Glyphs — Mythical and Top tiers."
        size="lg"
      />
      <p>
        Ventus Glyphs come in two distinct power groups — <strong>Mythical</strong> and{' '}
        <strong>Top</strong>. Each glyph socketed into an unlocked slot provides a permanent
        passive stat bonus. The tier of the glyph determines how large that bonus is.
      </p>
      <WikiFigure
        src={`${BASE}ventus-tiers.png`}
        alt="Ventus glyph tiers — Mythical glyphs and Top glyphs with full stat list"
        caption="Ventus glyph tiers — Mythical (large pool, Party Instance farmable) and Top (small pool, HC8 required)."
        size="lg"
      />

      {/* ===== MYTHICAL GLYPHS ===== */}
      <SectionHeading id="mythical">Mythical Glyphs</SectionHeading>
      <p>
        The Mythical tier contains a wide range of glyphs covering P.Def, M.Def, P.Atk, M.Atk,
        Crit Damage, Magic Crit Power, and flat STR/INT bonuses. These are the glyphs you will be
        working toward first, and they are farmable through the{' '}
        <strong>Party Instance</strong> via the Instance Keeper. The key crafting materials are{' '}
        <strong>Infernal Core Orb</strong> and <strong>Battery of Arcane Energy</strong>.
        With a reliable party running instances consistently, accumulating enough of both
        materials to craft the full Mythical set takes a <strong>few weeks</strong>.
      </p>
      <WikiTable
        columns={['Glyph', 'Stat Bonus']}
        rows={[
          ['Azure Wind Glyph',           '+15% P Def'],
          ['Lightbringer Glyph',         '+15% M Def'],
          ['Nightmare Flame Glyph',      '+15% M Atk'],
          ["Odyn's Eternal Glyph",       '+15% P Atk'],
          ['Emerald Whisper Glyph',      '+25% P Def'],
          ['Inferno Talon Glyph',        '+25% M Def'],
          ['Flameborn Vortex Glyph',     '+15% Crit Damage'],
          ['Radiance Beacon Glyph',      '+15% Magic Crit Power'],
          ['Progenitor Glyph of Power',  '+75 STR'],
          ['Primordial Strength Glyph',  '+75 INT'],
          ['Nyalotha Essence Glyph',     '+25% P Atk'],
          ['Sea Priest Glyph',           '+25% M Atk'],
          ["Zuldazar's Ancient Glyph",   '+45% P Def'],
          ['Torghast Soul Glyph',        '+45% M Def'],
          ['Castle Nathria Glyph',       '+35% P Atk'],
          ["Progenitor's Legacy Glyph",  '+35% M Atk'],
          ['Ashborn Ember Glyph',        '+25% Magic Crit Power'],
          ['Vantus Ancients Glyph',      '+25% Crit Damage'],
        ]}
      />
      <InfoBox variant="tip" label="Prioritise Offensive Glyphs First">
        <p>
          If you are unsure where to start, focus on glyphs that boost{' '}
          <strong>P.Atk / M.Atk</strong> and <strong>Crit Damage / Magic Crit Power</strong>{' '}
          first — these compound directly with your other offensive systems. Defensive
          glyphs (P.Def / M.Def) are valuable but less impactful for farming speed in
          the early progression stages.
        </p>
      </InfoBox>

      {/* ===== TOP GLYPHS ===== */}
      <SectionHeading id="top">Top Glyphs</SectionHeading>
      <p>
        The Top tier is a small set of four elite glyphs with significantly higher bonuses —
        representing the true ceiling of the Ventus system. These are upgraded versions of
        their Mythical counterparts and require materials only available in high-end content.
      </p>
      <WikiTable
        columns={['Glyph', 'Stat Bonus']}
        rows={[
          ['Azure Wind Glyph',     '+65% P Atk'],
          ['Lightbringer Glyph',   '+55% Crit Damage'],
          ['Ashborn Ember Glyph',  '+65% Magic Atk'],
          ['Vantus Ancients Glyph','+55% Magic Crit Power'],
        ]}
      />
      <InfoBox variant="gold" label="Top Glyph Farming Location — Hardcore Zone 8">
        <p>
          The materials required to craft Top Glyphs drop exclusively in{' '}
          <strong>Hardcore Zone 8</strong>. This is end-game territory — attempting HC8 before
          your character is fully developed will result in very slow farming and minimal returns.
          Complete your Mythical glyph set, develop your other progression systems, and let your
          character's power naturally open the door to HC8 at the right time.
        </p>
      </InfoBox>
    </>
  )
}
