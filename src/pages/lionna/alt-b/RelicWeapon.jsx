import { Link }       from 'react-router-dom'
import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE = 'images/lionna/alt-b/'

export default function RelicWeapon() {
  return (
    <>
      <PageHero
        title="Relic Weapon"
        tagline="Collect and enchant Weapon Relics for permanent combat stat bonuses."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        <strong>Weapon Relics</strong> are a parallel system to Dolls, accessible through
        <strong> Alt+B → Relic Weapon</strong>. Instead of Doll-type collectibles, you fill a grid
        of Relic slots — each representing a weapon-type relic that grants permanent passive bonuses
        such as increased accuracy, critical rate, PK damage, and more. Like Dolls, Relics come in
        five grades (<strong>A, B, C, D, Common</strong>) and each slot must be unlocked by
        collecting the corresponding cards.
      </p>
      <WikiFigure
        src={`${BASE}relics.png`}
        alt="Relic Weapon UI — level 5, enchant 5"
        caption="The Relic Weapon interface at full progression — Level 5, Enchant 5."
        size="lg"
      />

      {/* ===== SAME PROCESS ===== */}
      <SectionHeading id="progression">Unlock, Level &amp; Enchant</SectionHeading>
      <InfoBox variant="tip" label="Same Process as Dolls">
        <p>
          The full progression for Weapon Relics — collecting cards, unlocking slots, leveling with
          Exp Stones, and enchanting at Level 5 — is <strong>identical to the Doll system</strong>.
          All details including drop sources, the GmShop Relic Exchange, Exp Stone grades, and
          Enchant Scroll success rates are documented in the Dolls guide.
        </p>
        <p style={{ marginTop: '0.6rem' }}>
          <Link to="/lionna/alt-b/dolls" style={{ color: 'var(--gold)', fontWeight: 700 }}>
            → Read the full Dolls &amp; Relics progression guide
          </Link>
        </p>
      </InfoBox>
    </>
  )
}
