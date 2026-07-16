import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE     = 'images/lionna/alt-b/'
const ICONS    = 'images/lionna/icons/'

export default function Luck() {
  return (
    <>
      <PageHero
        title="Luck"
        tagline="Roll 16 stat categories for permanent multipliers — lock the best grades to keep them forever."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Luck</strong> system is accessible through <strong>Alt+B → Luck</strong>. It
        contains <strong>16 stat categories</strong>, each starting at a base value of{' '}
        <strong>1.00</strong>. You spend <strong>Gracian Anniversary Coins</strong> to roll all
        unlocked categories simultaneously — each roll randomises their values and you keep
        whatever comes up. The goal is to push every category as high as possible, with{' '}
        <strong>1.30</strong> being the end-game target.
      </p>
      <WikiFigure
        src={`${BASE}luck.png`}
        alt="Luck UI — 16 stat categories with current roll values and LOCK buttons"
        caption="The Luck interface — 16 categories, each showing its current grade and a LOCK button."
        size="lg"
      />

      {/* ===== CURRENCY ===== */}
      <SectionHeading id="currency">Gracian Anniversary Coins</SectionHeading>
      <WikiFigure
        src={`${ICONS}gracian-anniversary-coins.png`}
        alt="Gracian Anniversary Coins"
        caption="Gracian Anniversary Coins — the currency used to roll Luck and purchase other key items."
        size="sm"
      />
      <p>
        Gracian Anniversary Coins are obtained from <strong>World Bosses</strong>,{' '}
        <strong>server events</strong>, and various in-game activities. They are the fuel for
        every Luck roll, but they are also needed for <strong>tattoos</strong> and — most
        critically — for unlocking <strong>Champion rank</strong>.
      </p>
      <InfoBox variant="warning" label="Coins Are Shared — Spend Wisely">
        <p>
          Gracian Anniversary Coins are required for multiple systems. Before rolling Luck
          aggressively, make sure you have accounted for:
        </p>
        <ul>
          <li>
            <strong>Champion Level 1</strong> — costs <strong>10,000 Gracian Anniversary
            Coins</strong> plus <strong>500 Rebirths</strong>. This is the most important
            milestone on the server and should be your first savings goal.
          </li>
          <li>
            <strong>Tattoos</strong> — several tattoo upgrades also consume these coins.
          </li>
        </ul>
        <p>
          Reach Champion Level 1 first. Only spend coins on Luck once that target is secured.
        </p>
      </InfoBox>

      {/* ===== MECHANICS ===== */}
      <SectionHeading id="mechanics">How Rolling Works</SectionHeading>
      <p>
        Each roll randomises every <em>unlocked</em> category at the same time. Locked categories
        are frozen — their current grade is permanent and they are excluded from all future rolls.
        The base cost is <strong>1 coin per roll</strong>.
      </p>
      <p>
        Grade targets to aim for:
      </p>
      <WikiTable
        columns={['Grade', 'When to Aim For It']}
        rows={[
          ['1.25+', 'Early goal — solid improvement over base 1.00'],
          ['1.27+', 'Mid-game target — noticeable impact on farming and combat'],
          ['1.30',  'End-game — maximum grade, the goal for every category'],
        ]}
      />

      {/* ===== LOCK MECHANIC ===== */}
      <SectionHeading id="locking">Locking — The Cost Escalation</SectionHeading>
      <p>
        When you are happy with a category's grade, you can <strong>lock it</strong> to make that
        value permanent. The catch: every lock permanently increases the coin cost of each
        subsequent roll by <strong>+1</strong>. With 16 categories, the cost compounds quickly:
      </p>
      <WikiTable
        columns={['Locked Stats', 'Cost per Roll']}
        rows={[
          ['0 (start)',  '1 coin'],
          ['1',         '2 coins'],
          ['2',         '3 coins'],
          ['3',         '4 coins'],
          ['4',         '5 coins'],
          ['5',         '6 coins'],
          ['6',         '7 coins'],
          ['7',         '8 coins'],
          ['8',         '9 coins'],
          ['9',         '10 coins'],
          ['10',        '11 coins'],
          ['11',        '12 coins'],
          ['12',        '13 coins'],
          ['13',        '14 coins'],
          ['14',        '15 coins'],
          ['15',        '16 coins  ← chasing the last category'],
        ]}
      />
      <InfoBox variant="warning" label="The Last Categories Are Brutal">
        <p>
          Locking 15 stats and chasing the final one costs <strong>16 coins per roll</strong>.
          If you are unlucky on the last few categories, you can burn through hundreds of coins
          very quickly. Decide in advance which categories you are willing to settle on a lower
          grade for, rather than chasing 1.30 on every single one at maximum cost.
        </p>
      </InfoBox>

      {/* ===== STRATEGY ===== */}
      <SectionHeading id="strategy">Strategy &amp; Priority</SectionHeading>
      <p>
        Because locking raises the cost of every future roll, the order in which you lock
        matters. A solid approach:
      </p>
      <ul>
        <li>
          <strong>Do not lock anything early.</strong> Roll at 1 coin/roll until several
          categories have grades you are happy with, then lock them all at once before committing
          to more rolls.
        </li>
        <li>
          <strong>Lock your least-important categories first.</strong> The cheaper early locks are
          wasted on stats that do not matter much to your build — save the premium 1-coin-per-roll
          window for the stats you care about most.
        </li>
        <li>
          <strong>Accept a lower grade on the last 1–2 categories</strong> rather than paying
          15–16 coins per roll indefinitely. The difference between 1.27 and 1.30 on a secondary
          stat is small compared to the coin cost.
        </li>
      </ul>

      <InfoBox variant="tip" label="Priority Stats by Playstyle">
        <p>
          Focus your patience (and coins) on these categories first:
        </p>
        <ul>
          <li><strong>Drop Rate</strong> and <strong>Spoil Rate</strong> — universally valuable for all characters. Higher grades here accelerate every other part of your progression.</li>
          <li><strong>P.Atk Critical</strong> — highest priority for physical warriors.</li>
          <li><strong>M.Atk Critical</strong> — highest priority for mages.</li>
        </ul>
        <p>
          Chase these four to 1.27+ before worrying about the remaining categories.
        </p>
      </InfoBox>
    </>
  )
}
