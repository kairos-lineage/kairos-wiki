import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE = 'images/lionna/alt-b/'

export default function TalentTree() {
  return (
    <>
      <PageHero
        title="Talent Tree"
        tagline="Unlock nodes across four trees — Attack, Defence, Utility, and Greed — using Talent Tree Potions."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Talent Tree</strong> system is accessible through <strong>Alt+B → Talent Tree</strong>.
        It gives you four separate skill trees — <strong>Attack</strong>, <strong>Defence</strong>,{' '}
        <strong>Utility</strong>, and <strong>Greed</strong> — each containing a branching set of
        nodes that permanently strengthen your character. Every node you unlock applies its bonus
        immediately and passively, with no activation required.
      </p>
      <p>
        Nodes are unlocked using <strong>Talent Tree Potions</strong> — the single currency that
        powers all four trees. Each node costs a specific number of potions depending on how deep
        in the tree it sits. Nodes further along the tree cost progressively more.
      </p>

      {/* ===== TALENT TREE POTION ===== */}
      <SectionHeading id="potion">Talent Tree Potion</SectionHeading>
      <WikiFigure
        src={`${BASE}talent-tree-potion.png`}
        alt="Talent Tree Potion"
        caption="Talent Tree Potion — the resource used to unlock every node across all four trees."
        size="sm"
      />
      <p>
        Talent Tree Potions drop from <strong>World Bosses</strong>. Not all bosses drop them —
        the confirmed sources are:
      </p>
      <WikiTable
        columns={['World Boss', 'Drops Talent Tree Potion']}
        rows={[
          ['World Boss 4',  '✔'],
          ['World Boss 5',  '✔'],
          ['World Boss 6',  '✔'],
          ['World Boss 7',  '✔'],
          ['World Boss 8',  '✔'],
          ['World Boss 15', '✔'],
          ['World Boss 16', '✔'],
          ['World Boss 17', '✔'],
        ]}
      />
      <InfoBox variant="tip" label="Plan Before You Spend">
        <p>
          Each standard tree (Attack, Defence, Utility) costs <strong>174 potions</strong> to fully
          unlock. The Greed tree costs <strong>1,950 potions</strong>. Completing all four trees
          requires <strong>2,472 potions</strong> in total — stockpile before committing so you can
          plan your unlock path efficiently.
        </p>
      </InfoBox>

      {/* ===== NODE COST BREAKDOWN ===== */}
      <SectionHeading id="node-costs">Node Cost Breakdown</SectionHeading>
      <p>
        The <strong>Attack</strong>, <strong>Defence</strong>, and <strong>Utility</strong> trees
        all share the same node layout and cost structure, divided into 10 vertical columns.
        The cost per node increases with each column, and some columns contain more nodes than others:
      </p>
      <WikiTable
        columns={['Column', 'Nodes in Column', 'Cost per Node', 'Column Total', 'Running Total']}
        rows={[
          ['1',  '1', '1',  '1',   '1'],
          ['2',  '4', '2',  '8',   '9'],
          ['3',  '1', '3',  '3',   '12'],
          ['4',  '3', '4',  '12',  '24'],
          ['5',  '6', '5',  '30',  '54'],
          ['6',  '3', '6',  '18',  '72'],
          ['7',  '3', '7',  '21',  '93'],
          ['8',  '3', '8',  '24',  '117'],
          ['9',  '3', '9',  '27',  '144'],
          ['10', '3', '10', '30',  '174'],
          ['Total', '30 nodes', '—', '—', '174 potions'],
        ]}
      />
      <p>
        Fully unlocking one standard tree costs <strong>174 Talent Tree Potions</strong>. All
        three standard trees together cost <strong>522 potions</strong>.
      </p>
      <SectionHeading id="greed-costs">Greed Tree — Node Cost Breakdown</SectionHeading>
      <p>
        The <strong>Greed</strong> tree shares the same column and node layout as the standard trees
        (30 nodes across 10 columns), but every node costs vastly more potions. The first five
        columns each cost <strong>50 potions per node</strong>; from column 6 onward the cost rises
        by 10 per column:
      </p>
      <WikiTable
        columns={['Column', 'Nodes in Column', 'Cost per Node', 'Column Total', 'Running Total']}
        rows={[
          ['1',  '1', '50',  '50',   '50'],
          ['2',  '4', '50',  '200',  '250'],
          ['3',  '1', '50',  '50',   '300'],
          ['4',  '3', '50',  '150',  '450'],
          ['5',  '6', '50',  '300',  '750'],
          ['6',  '3', '60',  '180',  '930'],
          ['7',  '3', '70',  '210',  '1,140'],
          ['8',  '3', '80',  '240',  '1,380'],
          ['9',  '3', '90',  '270',  '1,650'],
          ['10', '3', '100', '300',  '1,950'],
          ['Total', '30 nodes', '—', '—', '1,950 potions'],
        ]}
      />
      <p>
        Fully unlocking the Greed tree costs <strong>1,950 Talent Tree Potions</strong> — more than
        eleven times the cost of a single standard tree. The complete four-tree unlock requires{' '}
        <strong>2,472 potions</strong> in total (522 for Attack + Defence + Utility, plus 1,950 for
        Greed).
      </p>

      {/* ===== THE FOUR TREES ===== */}
      <SectionHeading id="trees">The Four Trees</SectionHeading>
      <p>
        Each tree is independent — you can invest in all four simultaneously. Focus on the tree
        that best fits your playstyle first, then expand to the rest as your potion stock grows.
      </p>

      {/* ATTACK */}
      <SectionHeading id="attack" level={3}>Attack</SectionHeading>
      <p>
        The <strong>Attack</strong> tree focuses on raw offensive power — boosting P.Atk, M.Atk,
        critical damage, and other damage-amplifying stats. The primary choice for players who want
        to maximise damage output in both PvE and PvP.
      </p>
      <WikiFigure
        src={`${BASE}talent-attack.png`}
        alt="Talent Tree — Attack"
        caption="The Attack talent tree — 30 nodes across 10 columns, totalling 174 potions to fully unlock."
        size="lg"
      />

      {/* DEFENCE */}
      <SectionHeading id="defence" level={3}>Defence</SectionHeading>
      <p>
        The <strong>Defence</strong> tree improves survivability — P.Def, M.Def, HP bonuses, and
        resistances. Essential for players who want to increase their staying power in high-level
        zones or PvP encounters.
      </p>
      <WikiFigure
        src={`${BASE}talent-defence.png`}
        alt="Talent Tree — Defence"
        caption="The Defence talent tree — 30 nodes across 10 columns, totalling 174 potions to fully unlock."
        size="lg"
      />

      {/* UTILITY */}
      <SectionHeading id="utility" level={3}>Utility</SectionHeading>
      <p>
        The <strong>Utility</strong> tree covers supporting stats — speed, casting rate, skill
        cooldowns, and other quality-of-life improvements that enhance how smoothly your character
        performs in any situation.
      </p>
      <WikiFigure
        src={`${BASE}talent-utility.png`}
        alt="Talent Tree — Utility"
        caption="The Utility talent tree — 30 nodes across 10 columns, totalling 174 potions to fully unlock."
        size="lg"
      />

      {/* GREED */}
      <SectionHeading id="greed" level={3}>Greed</SectionHeading>
      <p>
        The <strong>Greed</strong> tree is dedicated to farming efficiency — drop rate, Adena gain,
        item acquisition bonuses, and other nodes that accelerate the rewards you get from hunting.
        It has the same 30-node layout as the other trees but every node costs far more: the
        cheapest nodes cost <strong>50 potions each</strong> and the deepest nodes cost{' '}
        <strong>100 each</strong>, for a total of <strong>1,950 potions</strong> to fully unlock.
        This makes it a long-term investment — see the breakdown table above.
      </p>
      <WikiFigure
        src={`${BASE}talent-greed.png`}
        alt="Talent Tree — Greed"
        caption="The Greed talent tree — 30 nodes, 1,950 potions to fully unlock."
        size="lg"
      />

      <InfoBox variant="tip" label="Suggested Priority">
        <p>
          Start with the tree that fits your immediate goal. If you are actively farming, invest in{' '}
          <strong>Greed</strong> early — the drop rate and Adena bonuses pay for themselves by
          accelerating everything else. Follow with <strong>Attack</strong> for faster kills, then{' '}
          <strong>Defence</strong> and <strong>Utility</strong> as your character matures.
        </p>
      </InfoBox>
    </>
  )
}
