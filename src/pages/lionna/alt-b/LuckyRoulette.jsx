import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE = 'images/lionna/alt-b/'

export default function LuckyRoulette() {
  return (
    <>
      <PageHero
        title="Lucky Roulette"
        tagline="Spin for one of 10 passive boosters — two free chances every 24 hours, then it gets expensive."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Lucky Roulette</strong>, accessed through{' '}
        <strong>Alt+B → Lucky Roulette</strong>, gives you a chance to activate one of{' '}
        <strong>10 passive boosters</strong> with each spin. The wheel lands on a random
        booster and applies it to your character for a set duration. Boosters cover a wide
        range of combat and farming stats — from P.Atk and M.Atk bonuses to Drop Rate,
        EXP, and PvP Damage increases.
      </p>
      <WikiFigure
        src={`${BASE}lucky-roulette.png`}
        alt="Lucky Roulette interface — 10 booster slots around a central SPIN button"
        caption="The Lucky Roulette interface — 10 passive boosters, one central SPIN button, 24h cooldown cycle."
        size="lg"
      />

      {/* ===== THE 10 BOOSTERS ===== */}
      <SectionHeading id="boosters">The 10 Passive Boosters</SectionHeading>
      <p>
        Each spin randomly activates one of the following boosters. The result is always
        random — you cannot choose which booster you receive:
      </p>
      <WikiTable
        columns={['Booster', 'Effect']}
        rows={[
          ['P.Atk Bonus',             'Increases Physical Attack'],
          ['M.Atk Bonus',             'Increases Magic Attack'],
          ['Spoil Bonus',             'Increases Spoil effectiveness'],
          ['PvE Damage Bonus',        'Increases damage dealt to monsters'],
          ['Soulshot Damage Bonus',   'Increases damage bonus from Soulshotss'],
          ['Random Material Bonus',   'Increases material drop quantities'],
          ['Item Random Chest Bonus', 'Increases chances from random item chests'],
          ['PvP Damage Bonus',        'Increases damage dealt to other players'],
          ['Drop Rate Bonus',         'Increases item drop rate from mobs'],
          ['EXP Bonus',               'Increases experience gained from kills'],
        ]}
      />

      {/* ===== SPIN RULES ===== */}
      <SectionHeading id="spins">Spin Rules — Free vs. Paid</SectionHeading>
      <p>
        The roulette operates on a <strong>24-hour cooldown cycle</strong>. Within each
        cycle you receive <strong>2 free spins</strong>. Once both free spins are used,
        additional spins are available for purchase — but at a steep price.
      </p>
      <WikiTable
        columns={['Spin Type', 'Cost', 'Limit']}
        rows={[
          ['Free Spin',  'Free',             '2 per 24h cycle'],
          ['Extra Spin', '10 Donation Coins', 'Unlimited (while DC available)'],
        ]}
      />
      <InfoBox variant="warning" label="Extra Spins Are Not Worth It">
        <p>
          At <strong>10 Donation Coins per extra spin</strong> the cost is simply too high
          relative to what a random booster provides. The boosters themselves are genuinely
          useful — but that value comes from the <strong>2 free daily spins</strong>, not
          from paying DC for more rolls. Save your Donation Coins for systems with
          guaranteed or higher-impact returns. Spin your two free spins every day and leave
          it at that.
        </p>
      </InfoBox>
      <InfoBox variant="tip" label="Make It a Daily Habit">
        <p>
          Two free spins a day is easy to overlook but adds up over time. Whatever booster
          you land on is a free passive bonus for that session — farming EXP, drop rate, or
          PvE Damage buffs while you grind is pure upside. Check the roulette every time you
          log in, the same way you check the Dual Boss cooldown.
        </p>
      </InfoBox>
    </>
  )
}
