import PageHero    from '../../components/ui/PageHero'
import SectionHeading from '../../components/ui/SectionHeading'
import events from '../../data/lionna/events.json'

const CX = 200
const CY = 200
const FACE_R  = 155
const MARK_R  = 140
const NUM_R   = 120
const HAND_R  = 90

function hourToAngle(h) {
  return ((h % 12) / 12) * Math.PI * 2 - Math.PI / 2
}

function polar(cx, cy, r, angle) {
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
}

function ClockFace() {
  const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  return (
    <g>
      {/* Outer glow ring */}
      <circle cx={CX} cy={CY} r={FACE_R + 6} fill="none" stroke="rgba(212,168,67,0.15)" strokeWidth="12" />
      {/* Gold rim */}
      <circle cx={CX} cy={CY} r={FACE_R} fill="none" stroke="#d4a843" strokeWidth="1.5" />
      {/* Inner fill */}
      <circle cx={CX} cy={CY} r={FACE_R - 1} fill="#0d0d18" />

      {/* Hour tick marks */}
      {hours.map((_, i) => {
        const a = (i / 12) * Math.PI * 2 - Math.PI / 2
        const p1 = polar(CX, CY, FACE_R - 2, a)
        const p2 = polar(CX, CY, FACE_R - 10, a)
        return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#d4a843" strokeWidth="1.5" strokeOpacity="0.5" />
      })}

      {/* Hour numbers */}
      {hours.map((h, i) => {
        const a = (i / 12) * Math.PI * 2 - Math.PI / 2
        const p = polar(CX, CY, NUM_R, a)
        return (
          <text key={h} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central"
            fill="#a5842f" fontSize="13" fontFamily="Cinzel Decorative, serif">
            {h}
          </text>
        )
      })}

      {/* Decorative hands (static, pointing at 12) */}
      <line x1={CX} y1={CY} x2={CX} y2={CY - HAND_R} stroke="#d4a843" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <line x1={CX} y1={CY} x2={CX} y2={CY - HAND_R * 0.65} stroke="#d4a843" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
      {/* Center dot */}
      <circle cx={CX} cy={CY} r={4} fill="#d4a843" opacity="0.7" />
    </g>
  )
}

function EventMarkers() {
  // Group markers by hour slot so we can fan them when stacked
  const byHour = {}
  events.forEach(ev => {
    ev.hours.forEach(h => {
      const key = (h % 12).toFixed(2)
      byHour[key] = byHour[key] || []
      byHour[key].push({ color: ev.color, id: ev.id, name: ev.name, h })
    })
  })

  const markers = []
  Object.values(byHour).forEach(group => {
    const baseAngle = hourToAngle(group[0].h)
    const count = group.length
    // Fan spread: spread markers radially ±offset around the base angle
    const spread = 0.06 // radians between markers when stacked
    group.forEach((m, i) => {
      const offset = (i - (count - 1) / 2) * spread
      const angle = baseAngle + offset
      // Slightly vary the radius so stacked ones don't overlap
      const r = MARK_R - (count > 1 ? i * 4 : 0)
      markers.push({ ...m, angle, r })
    })
  })

  return (
    <g>
      {markers.map((m, i) => {
        const pos = polar(CX, CY, m.r, m.angle)
        return (
          <g key={`${m.id}-${i}`}>
            <circle cx={pos.x} cy={pos.y} r={11} fill={m.color} opacity="0.15" />
            <circle cx={pos.x} cy={pos.y} r={7}  fill={m.color} />
          </g>
        )
      })}
    </g>
  )
}

export default function EventTimes() {
  return (
    <>
      <PageHero
        title="Event Times"
        tagline="Server event schedule — 12-hour dial, each marker fires twice daily (day + night)."
      />

      <SectionHeading id="clock">Daily Event Clock</SectionHeading>
      <p style={{ marginBottom: '1.5rem', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
        12-hour dial · each marker fires twice daily (day + night). All times are server time.
      </p>

      <div className="et-clock-wrap">
        <svg viewBox="0 0 400 400" className="et-clock-svg" aria-label="Event clock">
          <ClockFace />
          <EventMarkers />
        </svg>

        {/* Legend */}
        <div className="et-legend">
          {events.map(ev => (
            <div key={ev.id} className="et-legend-item">
              <span className="et-legend-dot" style={{ background: ev.color }} />
              <div className="et-legend-body">
                <span className="et-legend-name">{ev.name}</span>
                <span className="et-legend-freq">{ev.freq}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionHeading id="schedule">Full Schedule</SectionHeading>
      <div className="et-cards">
        {events.map(ev => (
          <div key={ev.id} className="et-card" style={{ '--et-color': ev.color }}>
            <div className="et-card-header">
              <span className="et-card-dot" style={{ background: ev.color }} />
              <span className="et-card-name">{ev.name}</span>
            </div>
            <div className="et-card-freq">{ev.freq}</div>
            <div className="et-card-times">
              {ev.hours.map((h, i) => {
                const hh = Math.floor(h)
                const mm = Math.round((h - hh) * 60)
                const label = `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`
                return <span key={i} className="et-time-chip">{label}</span>
              })}
            </div>
            {ev.note && <p className="et-card-note">{ev.note}</p>}
          </div>
        ))}
      </div>
    </>
  )
}
