import SectionHeading from '../ui/SectionHeading'
import WikiFigure     from '../ui/WikiFigure'
import WikiTable      from '../ui/WikiTable'
import InfoBox        from '../ui/InfoBox'
import HowItWorks     from './HowItWorks'
import UpgradeTable   from './UpgradeTable'
import ComingSoon     from './ComingSoon'
import Badge          from '../ui/Badge'
import TodoBadge      from '../ui/TodoBadge'
import { renderText } from '../../utils/renderText'

/** Render a cell value — handles null, TodoBadge rows, plain strings */
function Cell({ value, rowTodo, isLast }) {
  if (value === null && rowTodo && isLast) return <TodoBadge>{rowTodo}</TodoBadge>
  if (value === null) return '—'
  return renderText(String(value))
}

/** Render a generic table from JSON data */
function SectionTable({ data, isTierTable }) {
  if (!data) return null
  const rows = data.rows.map((row) =>
    row.cells.map((cell, ci) => {
      const isLast = ci === row.cells.length - 1
      // Tier badge column (multiskill retail table)
      if (isTierTable && ci === (data.tierBadgeColumn ?? -1)) {
        return <Badge key={ci} variant="gold">{cell}</Badge>
      }
      return <Cell key={ci} value={cell} rowTodo={row.todo} isLast={isLast} />
    })
  )
  return (
    <>
      {data.preText && <p>{renderText(data.preText)}</p>}
      <WikiTable columns={data.columns} rows={rows} />
    </>
  )
}

/**
 * Generic renderer for any Community Board section JSON.
 * Handles: stub, figure, intro, howItWorks, tables, upgradeCosts,
 * infoBoxes, and section-specific shapes (faction-war buff, tarot special rewards, etc.)
 */
export default function CommunityBoardSection({ data }) {
  if (!data) return null

  return (
    <section>
      <SectionHeading id={data.id}>{data.title}</SectionHeading>

      {/* STUB */}
      {data.stub && (
        <ComingSoon sectionName={data.title}>
          {data.stubNote && <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{renderText(data.stubNote)}</p>}
        </ComingSoon>
      )}

      {data.stub ? null : (
        <>
          {/* Intro paragraphs */}
          {data.intro  && <p>{renderText(data.intro)}</p>}
          {data.intro2 && <p>{renderText(data.intro2)}</p>}

          {/* Main figure */}
          {data.figure && <WikiFigure {...data.figure} />}

          {/* Cost rule box (multiskill) */}
          {data.costRule && (
            <InfoBox label={data.costRule.label}>
              <p>{renderText(data.costRule.body)}</p>
            </InfoBox>
          )}

          {/* Generic tables */}
          {data.tables?.map((t) => (
            <div key={t.id}>
              <SectionHeading id={t.id} level={3}>{t.title}</SectionHeading>
              <SectionTable data={t} isTierTable={t.tierBadgeColumn !== undefined} />
            </div>
          ))}

          {/* SP Scrolls list (rebirth) */}
          {data.spScrolls && (
            <>
              <SectionHeading id={data.spScrolls.id} level={3}>{data.spScrolls.title}</SectionHeading>
              <p>{renderText(data.spScrolls.preText)}</p>
              <ul>
                {data.spScrolls.items.map((item, i) => <li key={i}>{renderText(item)}</li>)}
              </ul>
            </>
          )}

          {/* Special rewards list (tarot) */}
          {data.specialRewards && (
            <>
              <SectionHeading id={data.specialRewards.id} level={3}>{data.specialRewards.title}</SectionHeading>
              <p>{renderText(data.specialRewards.preText)}</p>
              <ul>
                {data.specialRewards.items.map((item, i) => <li key={i}>{renderText(item)}</li>)}
              </ul>
            </>
          )}

          {/* Faction Leader buff (faction-war) */}
          {data.factionLeaderBuff && (
            <>
              <SectionHeading id={data.factionLeaderBuff.id} level={3}>{data.factionLeaderBuff.title}</SectionHeading>
              <WikiFigure {...data.factionLeaderBuff.figure} />
              <WikiTable
                columns={data.factionLeaderBuff.columns}
                rows={data.factionLeaderBuff.rows.map(r => r.cells)}
              />
            </>
          )}

          {/* Faction rewards table (faction-war) */}
          {data.rewardsTable && (
            <>
              <SectionHeading id={data.rewardsTable.id} level={3}>{data.rewardsTable.title}</SectionHeading>
              <WikiTable
                columns={data.rewardsTable.columns}
                rows={data.rewardsTable.rows.map(r => r.cells.map(c => renderText(String(c))))}
              />
            </>
          )}

          {/* How to Obtain (same shape as howItWorks) */}
          {data.obtaining && <HowItWorks data={data.obtaining} />}

          {/* Grades table (same shape as a generic table entry) */}
          {data.grades && (
            <div>
              <SectionHeading id={data.grades.id} level={3}>{data.grades.title}</SectionHeading>
              <SectionTable data={data.grades} />
            </div>
          )}

          {/* How It Works */}
          {data.howItWorks && <HowItWorks data={data.howItWorks} />}

          {/* Leveling steps (same shape as howItWorks) */}
          {data.leveling && <HowItWorks data={data.leveling} />}

          {/* Optional figure before upgrade costs (dolls, relics) */}
          {data.upgradeFigure && (
            <WikiFigure
              src={data.upgradeFigure.src}
              alt={data.upgradeFigure.alt}
              caption={data.upgradeFigure.caption}
              size={data.upgradeFigure.size}
            />
          )}

          {/* Upgrade costs table (guardians, dolls, relics) */}
          {data.upgradeCosts && <UpgradeTable data={data.upgradeCosts} />}

          {/* Difficulty rewards figure (player-difficulty) */}
          {data.rewardsFigure && (
            <>
              <SectionHeading id={data.rewardsFigure.id} level={3}>{data.rewardsFigure.title}</SectionHeading>
              <WikiFigure
                src={data.rewardsFigure.src}
                alt={data.rewardsFigure.alt}
                caption={data.rewardsFigure.caption}
                size={data.rewardsFigure.size}
              />
            </>
          )}

          {/* Info boxes — always last */}
          {data.infoBoxes?.map((box, i) => (
            <InfoBox key={i} variant={box.variant} label={box.label}>
              <p>{renderText(box.body)}</p>
            </InfoBox>
          ))}
        </>
      )}
    </section>
  )
}
