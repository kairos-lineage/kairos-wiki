import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE     = 'images/lionna/alt-b/'
const ICONS    = 'images/lionna/icons/'

export default function ShuffleSkill() {
  return (
    <>
      <PageHero
        title="Shuffle Skill"
        tagline="Unlock 11 randomized passive skills and level each one to 99 — up to 990% bonus per stat, one of the longest but most rewarding progressions on the server."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Shuffle Skill</strong> system, accessed through{' '}
        <strong>Alt+B → Shuffle Skill</strong>, lets you unlock and level up{' '}
        <strong>11 unique passive skills</strong>, each one boosting a specific combat stat.
        Every skill has its own <strong>99 levels</strong> — at max level each skill grants a{' '}
        <strong>990% bonus</strong> to its respective stat. The skills are permanently active
        once unlocked and stack on top of all other bonuses on your character.
      </p>
      <WikiFigure
        src={`${BASE}shuffle-skill.png`}
        alt="Shuffle Skill interface — 11 skill slots with individual level indicators"
        caption="The Shuffle Skill interface — 11 independent passive skills, each leveled separately up to 99."
        size="lg"
      />

      {/* ===== THE 11 SKILLS ===== */}
      <SectionHeading id="skills">The 11 Shuffle Skills</SectionHeading>
      <p>
        Each Shuffle Skill covers one specific combat stat. Once a skill is unlocked it is
        permanently active — there is no activation required. All 11 skills combined cover the
        full spectrum of offensive, defensive, and PvE damage stats:
      </p>
      <WikiTable
        columns={['#', 'Stat Boosted']}
        rows={[
          ['1',  'M. Atk'],
          ['2',  'P. Atk'],
          ['3',  'P. Def'],
          ['4',  'M. Def'],
          ['5',  'Max HP'],
          ['6',  'Critical Dmg'],
          ['7',  'Magic Critical Power'],
          ['8',  'PvE Bow Dmg'],
          ['9',  'PvE Bow Skill Dmg'],
          ['10', 'PvE Magic Dmg'],
          ['11', 'PvE Melee Dmg'],
        ]}
      />

      {/* ===== LEVELING ===== */}
      <SectionHeading id="leveling">Skill Levels — Up to 990% Per Stat</SectionHeading>
      <p>
        Each Shuffle Skill has <strong>99 levels</strong>. Every level adds roughly{' '}
        <strong>10% to the stat bonus</strong>, bringing the maximum to{' '}
        <strong>990% at level 99</strong>. Each of the 11 skills progresses independently —
        leveling one does not affect the others. The tooltip for each skill shows you the
        current level, current bonus, and what the next level will provide, so you always
        know exactly where you stand.
      </p>
      <WikiFigure
        src={`${BASE}shuffle-skill-details.png`}
        alt="Shuffle Skill detail panel — current level, current bonus, and next level preview"
        caption="Skill detail panel — current level and bonus shown alongside the preview for the next level."
        size="md"
      />

      {/* ===== HOW TO UNLOCK ===== */}
      <SectionHeading id="unlock">How to Unlock Skills — Jewel Shuffle Stone</SectionHeading>
      <p>
        Unlocking a Shuffle Skill slot is a <strong>randomized process</strong>. Each attempt
        consumes one <strong>Jewel Shuffle Stone</strong> and gives you a chance to unlock
        one of the 11 skills. There is no guarantee which skill will be unlocked — the result
        is random each time, meaning some skills may appear more than once before all 11 are
        revealed.
      </p>
      <WikiFigure
        src={`${ICONS}shuffle.png`}
        alt="Jewel Shuffle Stone — rare material used to unlock Shuffle Skills"
        caption="Jewel Shuffle Stone — each one gives a randomized chance to unlock one of the 11 Shuffle Skills."
        size="sm"
      />
      <p>
        The <strong>Jewel Shuffle Stone</strong> is a rare drop with limited sources:
      </p>
      <ul>
        <li><strong>World Boss 15</strong> — chance to drop on kill</li>
        <li><strong>World Boss 17</strong> — chance to drop on kill</li>
        <li><strong>Custom Events</strong> — awarded during special GM-run and scheduled server events</li>
      </ul>
      <InfoBox variant="warning" label="Unlock Order Is Random">
        <p>
          You cannot choose which skill to unlock. If the same skill is selected twice, the
          extra result is wasted — you do not gain a second copy or a level. Stones are rare,
          so treat each one as a valuable resource and attend World Boss kills and events
          consistently to keep your supply growing.
        </p>
      </InfoBox>
      <InfoBox variant="tip" label="Long-Term Investment">
        <p>
          Fully unlocking all 11 skills and then leveling each to 99 is an enormous undertaking
          — but the combined stat bonuses across all 11 slots at max level represent one of the
          largest single sources of passive power on the server. Even partial progress is
          meaningful: every unlocked skill and every level gained is a permanent improvement.
        </p>
        <p>
          To put the scale in perspective: each level costs <strong>1 Jewel Shuffle Stone</strong>,
          so maxing every skill requires <strong>11 skills × 99 levels = 1,089 Stones</strong> in
          total. Given that Stones only drop from World Boss 15, World Boss 17, and occasional
          events, this is a commitment measured in months of consistent play — plan accordingly
          and celebrate every stone you earn.
        </p>
      </InfoBox>
    </>
  )
}
