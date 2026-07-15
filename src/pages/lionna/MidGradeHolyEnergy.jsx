import PageHero       from '../../components/ui/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import WikiFigure     from '../../components/ui/WikiFigure'
import InfoBox        from '../../components/ui/InfoBox'
import StepList       from '../../components/ui/StepList'

export default function MidGradeHolyEnergy() {
  return (
    <>
      <PageHero
        title="Mid-Grade Holy Energy"
        tagline="Compression Stone — a slow-burn achievement reward for upgrading your Agathion."
      />

      {/* ===== WHAT IS IT ===== */}
      <SectionHeading id="overview">What Is It?</SectionHeading>
      <WikiFigure
        src="images/lionna/mid-grade-holy-energy-compression-stone.png"
        alt="Mid-Grade Holy Energy Compression Stone"
        caption="Mid-Grade Holy Energy Compression Stone"
        size="sm"
      />
      <p>
        The <strong>Mid-Grade Holy Energy Compression Stone</strong> is a special material used to
        upgrade your <strong>Agathion</strong> into top-grade equipment. Unlike most progression items
        it cannot be bought, traded, or farmed in a single session — it accumulates gradually as you
        play the game and complete a wide range of achievements.
      </p>
      <p>
        You will need <strong>100 stones</strong> in total before you can proceed to the next Agathion
        upgrade. Think of it as a long-term background goal: every session moves you closer even when
        you are not actively chasing it.
      </p>

      <InfoBox variant="warning" label="Take Your Time">
        <p>
          This is not something you can rush. The achievements span many different play styles and
          activities, so progress will come naturally the more you play. Don't stress about it —
          just keep the goal in mind and the stones will pile up over time.
        </p>
      </InfoBox>

      {/* ===== HOW TO OBTAIN ===== */}
      <SectionHeading id="achievements">How to Obtain — Achievements</SectionHeading>
      <p>
        Stones are awarded by completing achievements spread across several categories. Each
        category tracks a different aspect of gameplay, so a wide variety of activities all
        contribute to the same pool:
      </p>

      <StepList
        ordered={false}
        steps={[
          <>⚔️ <strong>Kill mobs</strong> — Hunting anywhere in the game world counts. Every zone across the entire map contributes to this achievement.</>,
          <>🌍 <strong>Kill world bosses</strong> — Participating in world boss kills earns progress here. Each unique world boss may have its own achievement counter.</>,
          <>🗡️ <strong>Critical hits (Warrior)</strong> — Tracked separately for physical classes. Land enough critical strikes to fill this achievement.</>,
          <>🔮 <strong>Critical hits (Mage)</strong> — Tracked separately for magic classes. Spell criticals count toward this independent goal.</>,
          <>✨ <strong>Resurrect players</strong> — Use Resurrection skills on fallen party members or players. Every successful res counts.</>,
          <>💀 <strong>Die in combat</strong> — Even dying earns progress. Don't be afraid to push dangerous content — every death contributes.</>,
          <>🔨 <strong>Craft Eternal Pieces</strong> — Crafting materials such as <strong>Eternal Pieces</strong> for Eternal-grade armor and jewelry grants achievement progress.</>,
        ]}
      />

      <InfoBox variant="tip" label="Pro Hint — Craft Smarter">
        <p>
          Crafting <strong>Eternal Pieces</strong> for armor and jewelry — including pieces destined
          for <strong>collections</strong> — all count toward the crafting achievement. If you are
          building out your Collection Book anyway, do it through crafting rather than buying on the
          market. Every piece you craft double-dips: it fills your Collection <em>and</em> pushes
          your stone count forward at the same time.
        </p>
      </InfoBox>

      {/* ===== NEXT STEPS ===== */}
      <SectionHeading id="next-steps">Next Steps — Upgrading the Agathion</SectionHeading>
      <p>
        Once you have collected <strong>100 Mid-Grade Holy Energy Compression Stones</strong>, head
        to <strong>Giran</strong> and speak with the <strong>Rupio</strong> NPC.
      </p>

      <InfoBox variant="warning" label="Important — Unequip Your Agathion">
        <p>
          Make sure you are <strong>not wearing the Agathion</strong> when you talk to Rupio.
          Approach the NPC with it unequipped so the upgrade dialogue is available. Rupio will
          show you exactly what additional materials or conditions are required for the next upgrade.
        </p>
      </InfoBox>
    </>
  )
}
