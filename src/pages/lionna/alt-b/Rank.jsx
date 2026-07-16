import PageHero       from '../../../components/ui/PageHero'
import SectionHeading from '../../../components/ui/SectionHeading'
import WikiFigure     from '../../../components/ui/WikiFigure'
import WikiTable      from '../../../components/ui/WikiTable'
import InfoBox        from '../../../components/ui/InfoBox'

const BASE = 'images/lionna/alt-b/'

export default function Rank() {
  return (
    <>
      <PageHero
        title="Rank"
        tagline="Server rankings, live boss status, and the fastest way to know when the next event is — all in one informational panel."
      />

      {/* ===== OVERVIEW ===== */}
      <SectionHeading id="overview">Overview</SectionHeading>
      <p>
        The <strong>Rank</strong> section, accessed through <strong>Alt+B → Rank</strong>,
        is a purely informational panel. There is nothing to craft or upgrade here — it is a
        live window into the server's current state. It contains seven tabs covering player
        leaderboards, raid boss status, and server statistics. The most practically useful
        tab for active players is <strong>Server Stats</strong>.
      </p>
      <WikiFigure
        src={`${BASE}rank-server-stats.png`}
        alt="Rankings panel — Server Stats tab showing players online, active, shops, capacity, and server online time"
        caption="The Rankings panel with the Server Stats tab open — the go-to view for tracking event timers."
        size="lg"
      />

      {/* ===== TABS ===== */}
      <SectionHeading id="tabs">Rankings Tabs</SectionHeading>

      <SectionHeading id="top-pvp" level={3}>Top PvP</SectionHeading>
      <p>
        Lists the top players ranked by <strong>Player vs. Player kills</strong>. PvP score
        increases when you kill other players in consensual combat — both parties are flagged
        and no Karma is earned. This leaderboard reflects who is most active and dominant in
        open-world and event PvP.
      </p>

      <SectionHeading id="top-pk" level={3}>Top PK</SectionHeading>
      <p>
        Lists the top players ranked by <strong>Player Kill count</strong> — one-sided kills
        where the attacker gains <strong>Karma</strong> and enters a <strong>red-name</strong>{' '}
        (chaotic) state. Karma is a dangerous condition: while red-named, you can{' '}
        <strong>drop items on death</strong>, including top-grade equipment. The higher your PK
        score, the higher your Karma accumulation and the more at risk your gear becomes if
        another player kills you.
      </p>
      <InfoBox variant="warning" label="High PK Score = High Risk">
        <p>
          Players with very high PK counts carry significant Karma and are prime targets for
          other players looking for a drop. Karma can be reduced over time by{' '}
          <strong>farming in Hardcore zones</strong> — the more you farm, the faster it clears.
          Do not log out in open areas while red-named.
        </p>
      </InfoBox>

      <SectionHeading id="top-online" level={3}>Top Online</SectionHeading>
      <p>
        Lists the players with the most <strong>total time online</strong> since the start of
        the current server season. These are the most dedicated players on the server — the
        ones logging hours every day from the very beginning. A useful reference for seeing
        who the long-term committed community members are.
      </p>

      <SectionHeading id="top-clans" level={3}>Top Clans</SectionHeading>
      <p>
        Lists the top clans ranked by <strong>clan level and fame</strong>. Clan fame accumulates
        through PvP, raid boss participation, and other competitive activities. A high-ranking
        clan on this list is typically a well-organised group that is active in server-wide
        content.
      </p>

      <SectionHeading id="raidbosses" level={3}>Raidbosses</SectionHeading>
      <p>
        Shows the status of regular Raid Bosses on the server. This tab is{' '}
        <strong>partially functional</strong> — not all bosses may display correctly.
        Use it as a rough reference rather than a definitive tracker.
      </p>

      <SectionHeading id="grand-raidbosses" level={3}>G. Raidbosses</SectionHeading>
      <p>
        Shows the alive / dead status of <strong>Grand Raid Bosses</strong> — the server's
        most powerful world-level bosses: <strong>Antharas</strong>,{' '}
        <strong>Valakas</strong>, <strong>Ant Queen</strong>, <strong>Orfen</strong>, and
        others. At this time, <strong>Orfen</strong> is the most actively tracked — she is
        the only Grand Boss currently worth monitoring consistently. Some other Grand Bosses
        are not yet available on the server.
      </p>

      {/* ===== SERVER STATS ===== */}
      <SectionHeading id="server-stats">Server Stats — Event Timer Reference</SectionHeading>
      <p>
        The <strong>Server Stats</strong> tab is the most practically useful view in the entire
        Rankings panel. It shows live figures including Players Online, Players Active, Player
        Shops, Server Capacity, and — most importantly — <strong>Server Online Time</strong>:
        the amount of time elapsed since the last server restart.
      </p>
      <p>
        For experienced players who know the event schedule, <strong>Server Online Time</strong>{' '}
        is a quick and reliable way to confirm when the next event will fire without needing
        to ask in chat or check external sources. All recurring events run on fixed intervals
        counted from the moment of server restart.
      </p>
      <InfoBox variant="tip" label="How to Use Server Online Time">
        <p>
          Open <strong>Alt+B → Rank → Server Stats</strong> and note the{' '}
          <strong>Server Online Time</strong>. Then use the event schedule below to calculate
          exactly how long until the next spawn. For example, if the server has been online for
          2h 53m, the next World Boss window opened 53 minutes ago and the one after will fire
          in about 1h 7m.
        </p>
      </InfoBox>

      <SectionHeading id="event-schedule" level={3}>Event Schedule — Intervals from Restart</SectionHeading>
      <WikiTable
        columns={['Event', 'Interval', 'Access / Notes']}
        rows={[
          ['World Boss (WB)',          'Every 2h',          'Open-world spawn — check announcements for location'],
          ['Captain Morgull',          'Every 2.5h',        '.heine → talk to Flauen NPC → port to Giran Harbor'],
          ['Aden Tiat Territory',      'Every 4h',          'Territory event in Aden area'],
          ['Rabbit Event',             'Every 2h 15–20min', 'Approximate — slight variance each cycle'],
          ['Bomb Event',               'TBD',               '—'],
          ['Devastated Castle Event',  'TBD',               '—'],
        ]}
      />
      <InfoBox variant="tip" label="Captain Morgull — How to Get There">
        <p>
          Type <strong>.heine</strong> in chat for a quick port, then find the{' '}
          <strong>Flauen NPC</strong> and ask for the port to <strong>Giran Harbor</strong>.
          Captain Morgull spawns there every 2.5 hours after server restart and drops the{' '}
          <strong>Festival Box</strong> — the only source of <strong>Radiant Star gems</strong>.
          Never miss this event if you are working on your gem slots.
        </p>
      </InfoBox>
    </>
  )
}
