import CardGrid      from '../components/ui/CardGrid'
import Card          from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import InfoBox        from '../components/ui/InfoBox'

const NAV_CARDS = [
  { to: '/lionna/getting-started',  icon: '📖', title: 'Getting Started',  desc: 'Download the client, create your account, and connect.' },
  { to: '/lionna/server-info',      icon: '🖥️', title: 'Server Info',      desc: 'Rates, features, rules, and what makes Lionna unique.' },
  { to: '/lionna/classes',          icon: '⚔️', title: 'Classes',          desc: 'Class guides, builds, and progression paths.' },
  { to: '/lionna/zones',            icon: '🗺️', title: 'Zones',            desc: 'Hunting grounds, level ranges, and drop tables.' },
  { to: '/lionna/bosses',           icon: '👹', title: 'Bosses',           desc: 'Raid bosses, world bosses, and epic loot.' },
  { to: '/lionna/events',           icon: '🎉', title: 'Events',           desc: 'Scheduled events, PvP tournaments, and seasonal content.' },
  { to: '/lionna/community-board',  icon: '📋', title: 'Community Board',  desc: 'Buffer, Rebirth, MultiSkill, Pets, and more — all Alt+B features.' },
  { to: '/lionna/commands',         icon: '💬', title: 'Commands',         desc: 'In-game chat command reference.' },
  { to: '/lionna/faq',              icon: '❓', title: 'FAQ',              desc: 'Common questions answered.' },
]

export default function LionnaHome() {
  return (
    <>
      <div className="hero">
        <p className="hero-tagline" style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Lionna Multiskill</p>
        <p className="hero-tagline">Lineage 2 Custom Server — Community Wiki</p>
      </div>

      <SectionHeading id="welcome">Welcome</SectionHeading>
      <p>
        Welcome to the Kairos Lionna Multiskill wiki. Your complete resource for
        everything about this server — from setup guides and class breakdowns to boss strategies
        and event schedules.
      </p>
      <InfoBox variant="tip" label="New Player?">
        <p>Head over to the <a href="/lionna/getting-started">Getting Started</a> page for client download, account creation, and your first steps.</p>
      </InfoBox>

      <SectionHeading id="explore">Explore</SectionHeading>
      <CardGrid>
        {NAV_CARDS.map((card) => (
          <Card key={card.to} {...card} />
        ))}
      </CardGrid>
    </>
  )
}
