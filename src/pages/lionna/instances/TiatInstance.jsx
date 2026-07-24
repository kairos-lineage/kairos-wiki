import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import InfoBox        from '../../../components/ui/InfoBox'
import WikiFigure     from '../../../components/ui/WikiFigure'

export default function TiatInstance() {
  return (
    <>
      <PageHero
        title="Tiat Instance"
        tagline="The hardest repeatable instance on Kairos — no cooldown, party required, and the only reliable source of Champion Tattoo upgrades and Liora's Vengeance."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <WikiFigure
        src="images/lionna/instances/tiat-instance.png"
        alt="Tiat — the final boss of the Tiat Instance"
        caption="Tiat — the hardest boss available through the Instance Keeper"
      />
      <p>
        Tiat Instance is one of the hardest instances available on the Kairos server. Unlike
        every other instance it has <strong>no 24-hour cooldown</strong> — it can be entered
        and repeated continuously, with only a short 1-minute window between runs. This makes
        it the go-to farming loop for players who want to push their champion tattoos and
        accumulate <strong>Liora's Vengeance</strong> stacks as fast as possible.
      </p>
      <WikiFigure
        src="images/lionna/instances/tiat-instance-1.png"
        alt="Tiat Instance overview and rules"
        caption="Instance rules and mechanics overview"
      />

      {/* ===== ACCESS ===== */}
      <SectionHeading id="access">How to Access</SectionHeading>
      <p>
        Open the <strong>Instance Keeper</strong> NPC in <strong>Giran town</strong>, navigate
        to <strong>Page 2</strong>, and look for the <strong>HARDCORE</strong> section. Tiat
        Instance is listed there. A <strong>party of at least 2 players</strong> is required
        to enter — solo entry is not possible.
      </p>
      <InfoBox variant="tip" label="No Cooldown — Loop It">
        <p>
          Tiat Instance resets after roughly <strong>1 minute</strong>. Once your party
          finishes a run, exit, wait for the cooldown, and re-enter immediately. This loop
          is by far the fastest path to improving champion tattoos and leveling up Liora's
          Vengeance.
        </p>
      </InfoBox>

      {/* ===== INSIDE THE INSTANCE ===== */}
      <SectionHeading id="inside">Inside the Instance</SectionHeading>
      <WikiFigure
        src="images/lionna/instances/tiat-instance-3.png"
        alt="Tiat Instance interior — three crystal camps"
        caption="Three crystal camps (circled) must be cleared before Tiat appears"
      />
      <p>
        When your party enters, you will find <strong>three crystal camps</strong> spread
        across the zone — each guarded by a group of Hardcore mobs. You must{' '}
        <strong>clear all three camps and every mob within them</strong> before Tiat himself
        will spawn at the central summoning circle.
      </p>

      {/* ===== TIAT BOSS ===== */}
      <SectionHeading id="boss">Fighting Tiat</SectionHeading>
      <WikiFigure
        src="images/lionna/instances/tiat-instance-4.png"
        alt="Tiat boss fight"
        caption="Tiat boss encounter — clear all camps first, then engage"
      />
      <p>
        Tiat is an exceptionally tough boss. To have a realistic chance of killing him your
        party will need <strong>top-tier gear</strong> — filled collections, full card sets,
        level 6 Ancestral equipment, scroll buffs, and more. Do not underestimate him with
        average gear.
      </p>
      <p>
        Two mechanics make Tiat progressively harder the longer the fight lasts:
      </p>
      <ul>
        <li>
          His <strong>defence increases by +5% every minute</strong> he remains alive — a
          slow start becomes a brick wall if the fight drags on.
        </li>
        <li>
          He <strong>recovers 5% of his total HP</strong> periodically — sustained,
          uninterrupted damage output is essential to outpace the regen.
        </li>
      </ul>
      <InfoBox variant="tip" label="On Kill">
        <p>
          When Tiat is defeated there is a chance to{' '}
          <strong>upgrade a Champion Tattoo</strong> belonging to one of the party members,
          and a chance to drop <strong>Liora's Vengeance</strong>. The upgrade chance is up
          to <strong>80%</strong> per party member involved in the kill.
        </p>
      </InfoBox>

      {/* ===== CHAMPION TATTOOS ===== */}
      <SectionHeading id="tattoos">Champion Tattoos</SectionHeading>
      <WikiFigure
        src="images/lionna/instances/tiat-instance-2.png"
        alt="Champion Tattoo improvement interface"
        caption="Champion Tattoos are improved through the Alt+B Champion section"
      />
      <p>
        The five champion tattoos that Tiat can upgrade are the same ones purchased from{' '}
        <strong>Asta → Champion Level 20 Store</strong>. Each tattoo starts at base level
        and can be improved <strong>up to Improvement level 4</strong> — a massive jump in
        stats with every step.
      </p>
      <WikiFigure
        src="images/lionna/instances/tiat-instance-5.png"
        alt="Champion Tattoo stats — base vs Improvement 4"
        caption="All five champion tattoos: base Champion (1) vs final Improvement 4"
      />
      <p>
        The stat gains from base to Improvement 4 are substantial across the board:
      </p>
      <div className="zone-table-wrap">
        <table className="wiki-table">
          <thead>
            <tr>
              <th>Tattoo</th>
              <th>Champion (1)</th>
              <th>Improvement 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Heroic Audacity</td>
              <td>Stats +100%, +100% Crit Dmg, +100% Magic Crit Power</td>
              <td>Stats +339%, +339% Crit Dmg, +339% Magic Crit Power</td>
            </tr>
            <tr>
              <td>Mastery of Arms</td>
              <td>+100% Crit Power / Magic / Dmg</td>
              <td>+339% Crit Power / Magic / Dmg</td>
            </tr>
            <tr>
              <td>Natural Instinct</td>
              <td>+100% P/M Def, +100% HP/CP</td>
              <td>+339% P/M Def, +339% HP/CP</td>
            </tr>
            <tr>
              <td>Cunning Hunter</td>
              <td>+200% P/M Atk</td>
              <td>+600% P/M Atk</td>
            </tr>
            <tr>
              <td>Balance of Warrior</td>
              <td>+150 STAT</td>
              <td>+507 STAT</td>
            </tr>
          </tbody>
        </table>
      </div>
      <InfoBox variant="info" label="Alternative Farming">
        <p>
          The same champion tattoos can also be upgraded by farming regular mobs in the{' '}
          <strong>Hardcore zone</strong> available through the Instance Keeper. However,
          those mobs are very strong and the upgrade chance is significantly lower than
          inside Tiat's Instance — the Tiat loop remains the preferred route.
        </p>
      </InfoBox>

      {/* ===== LIORAS VENGEANCE ===== */}
      <SectionHeading id="lioras-vengeance">Liora's Vengeance</SectionHeading>
      <WikiFigure
        src="images/lionna/instances/tiat-instance-6.png"
        alt="Liora's Vengeance level 1 vs level 1000"
        caption="Liora's Vengeance — level 1 (left) and the fully stacked level 1000 (right)"
      />
      <p>
        Killing monsters inside Tiat Instance accumulates stacks on <strong>Liora's
        Vengeance</strong> — a unique amulet that grows from <strong>level 1 all the way
        to level 1000</strong>, continuously increasing attack and defense stats with every
        level gained. The amulet is passive while leveling, requiring no activation until
        it hits the cap.
      </p>
      <InfoBox variant="warning" label="Activate at Level 1000 or Lose the Stats">
        <p>
          When Liora's Vengeance reaches <strong>level 1000</strong> the accumulated bonuses
          are <strong>lost</strong> unless you activate it. Go to{' '}
          <strong>Alt+B → Tattoo Inventory → Page 8</strong> and activate it there to make
          the level-1000 bonuses a permanent passive on your character. Do not skip this
          step.
        </p>
      </InfoBox>
    </>
  )
}
