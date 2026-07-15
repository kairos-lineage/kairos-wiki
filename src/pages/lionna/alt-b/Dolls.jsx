import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'
import StepList       from '../../../components/ui/StepList'

const BASE = 'images/lionna/alt-b/'

export default function Dolls() {
  return (
    <>
      <PageHero
        title="Dolls"
        tagline="Equip, level, and enchant Dolls for powerful passive stat bonuses."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Doll</strong> system is accessible through <strong>Alt+B → Dolls</strong> and
        lets you unlock, level, and enchant a collection of Dolls that provide permanent passive
        bonuses to your character. Each Doll slot you fill increases your stats — the higher the
        grade and enchant level of each Doll, the stronger the effect.
      </p>
      <WikiFigure
        src={`${BASE}doll.png`}
        alt="Dolls main UI — level 5, enchant 5"
        caption="The Dolls interface at full progression — Level 5, Enchant 5."
        size="lg"
      />

      {/* ===== TYPES ===== */}
      <SectionHeading id="types">Doll Types &amp; Grades</SectionHeading>
      <p>
        There are <strong>five different grades</strong> of Relics and Dolls in the game:
        <strong> A, B, C, D,</strong> and <strong>Common</strong>. Higher grades unlock stronger
        stat bonuses but require more effort to level up — Exp Stones give less experience the
        better the grade.
      </p>
      <WikiFigure
        src={`${BASE}doll-1.png`}
        alt="Five different types of Dolls in the game"
        caption="Step 1 — There are five different types of Relics and Dolls in the game."
        size="lg"
      />

      {/* ===== HOW TO GET CARDS ===== */}
      <SectionHeading id="get-cards">How to Get Doll Cards</SectionHeading>
      <p>
        Each Doll is unlocked by collecting <strong>50 Cards</strong> of that specific Doll type.
        There are two ways to obtain these cards:
      </p>

      <SectionHeading id="cards-drop" level={3}>Method 1 — World Bosses, Events &amp; Special Shop</SectionHeading>
      <p>
        Relic and Doll cards can be found by <strong>farming World Bosses (WB)</strong>, through
        <strong> server events</strong>, or purchased from the <strong>special shop</strong>.
        Bosses drop <strong>Chest of Destiny Doll</strong> or <strong>Chest of Destiny Relic</strong>
        — opening a chest gives a random sub-box corresponding to one of the five grades (A–B–C–D–Common).
        Opening the sub-box gives you the actual Relic or Doll card inside.
      </p>
      <WikiFigure
        src={`${BASE}doll-relic-1.png`}
        alt="Cards from World Bosses, events and special shop"
        caption="Chest of Destiny Doll and Chest of Destiny Relic — both open random grade sub-boxes."
        size="lg"
      />

      <SectionHeading id="cards-gmshop" level={3}>Method 2 — GmShop Relic Exchange (Champion 20)</SectionHeading>
      <p>
        Once you reach <strong>Champion 20</strong> you unlock the <strong>Relic Exchange</strong>
        option in the GmShop. This lets you convert unwanted cards into materials, then use those
        materials to buy the specific cards you actually need:
      </p>
      <WikiTable
        columns={['Convert', 'Into']}
        rows={[
          ['Relic cards', 'Earth Dragon Scale Shard'],
          ['Doll cards',  'Condensed Energy Fragment'],
        ]}
      />
      <p>
        Use those materials in the GmShop exchange to purchase the exact Relic or Doll card you
        are targeting — no more relying on random drops for that final missing card.
      </p>
      <WikiFigure
        src={`${BASE}doll-relic-2.png`}
        alt="GmShop Relic Exchange at Champion 20"
        caption="At Champion 20 — use GmShop → Relic Exchange to convert cards into targeted materials."
        size="lg"
      />

      {/* ===== UNLOCKING ===== */}
      <SectionHeading id="unlock">Unlocking a Doll</SectionHeading>
      <p>
        Once you have <strong>50 Cards</strong> for a specific Doll, open the Dolls interface and
        select that Doll slot. The game will let you choose which specific Doll or Relic to unlock
        using your collected cards. After confirming, the slot is filled and the Doll is added to
        your collection at <strong>Level 1</strong>.
      </p>
      <WikiFigure
        src={`${BASE}doll-2.png`}
        alt="Collecting 50 cards to unlock a Doll"
        caption="Step 2 — Collect 50 corresponding Cards to unlock a specific Doll slot."
        size="lg"
      />
      <WikiFigure
        src={`${BASE}doll-3.png`}
        alt="Selecting the specific Doll from collected cards"
        caption="Step 3 — Select which specific Doll or Relic to unlock with your collected cards."
        size="lg"
      />
      <WikiFigure
        src={`${BASE}doll-4.png`}
        alt="Doll unlocked at Level 1"
        caption="Step 4 — Doll unlocked. It starts at Level 1 — now level it up with Exp Stones."
        size="lg"
      />

      {/* ===== LEVELING ===== */}
      <SectionHeading id="leveling">Leveling Your Doll</SectionHeading>
      <p>
        After unlocking, use <strong>Exp Stones</strong> to level your Doll from Level 1 to the
        maximum of <strong>Level 5</strong>. There are five different Exp Stone grades — one for
        each Doll/Relic type. The better the grade of the Doll, the <em>less</em> experience each
        stone gives:
      </p>
      <WikiFigure
        src={`${BASE}doll-5.png`}
        alt="Leveling a Doll with Exp Stones"
        caption="Step 4b — Use Exp Stones to level up your Doll. Higher grade stones give less exp per use."
        size="lg"
      />
      <WikiFigure
        src={`${BASE}doll-relic-3.png`}
        alt="Five Exp Stone grades and experience values"
        caption="Exp Stone Weapon A (Relic) and Exp Stone Doll A — five grades, less exp for better types."
        size="lg"
      />

      {/* ===== ENCHANTING ===== */}
      <SectionHeading id="enchanting">Enchanting at Level 5</SectionHeading>
      <p>
        Once your Doll reaches <strong>Level 5</strong>, the Enchant step becomes available. Use
        <strong> Enchant Scrolls</strong> — there are five different scrolls, one per Doll/Relic
        grade — to enchant the Doll and increase its power beyond the level cap.
      </p>
      <InfoBox variant="warning" label="Enchant Success Rate">
        <p>
          Enchant has a <strong>chance to succeed</strong> — the current success rate is
          <strong> 65%</strong>. A failed enchant does not destroy the Doll, but plan your scrolls
          accordingly as it may take several attempts.
        </p>
      </InfoBox>
      <WikiFigure
        src={`${BASE}doll-6.png`}
        alt="Doll at Level 5 ready to enchant"
        caption="Step 5 — At Level 5, enchant your Doll using the corresponding Enchant Scroll."
        size="lg"
      />
      <WikiFigure
        src={`${BASE}doll-relic-4.png`}
        alt="Enchant Scrolls — five grades, 65% success rate"
        caption="Enchant Scroll Doll A and Enchant Scroll Weapon Relic A — five grades, 65% success chance."
        size="lg"
      />

      <InfoBox variant="tip" label="Progression Summary">
        <StepList
          ordered
          steps={[
            'Collect 50 Cards for the specific Doll you want to unlock (WB drops, events, or special shop).',
            'Select the Doll slot and confirm the unlock — it starts at Level 1.',
            'Use Exp Stones to level the Doll from Level 1 → Level 5.',
            'At Level 5, use Enchant Scrolls to enchant the Doll (65% success rate).',
            'At Champion 20 you can also use GmShop → Relic Exchange to convert excess cards into targeted materials.',
          ]}
        />
      </InfoBox>
    </>
  )
}
