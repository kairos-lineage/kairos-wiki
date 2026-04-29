import CardGrid      from '../components/ui/CardGrid'
import Card          from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import InfoBox        from '../components/ui/InfoBox'

const NAV_CARDS = [
  { to: '/getting-started',  icon: '📖', title: 'Getting Started',  desc: 'Download the client, create your account, and connect.' },
  { to: '/server-info',      icon: '🖥️', title: 'Server Info',      desc: 'Rates, features, rules, and what makes Kairos unique.' },
  { to: '/classes',          icon: '⚔️', title: 'Classes',          desc: 'Class guides, builds, and progression paths.' },
  { to: '/zones',            icon: '🗺️', title: 'Zones',            desc: 'Hunting grounds, level ranges, and drop tables.' },
  { to: '/bosses',           icon: '👹', title: 'Bosses',           desc: 'Raid bosses, world bosses, and epic loot.' },
  { to: '/events',           icon: '🎉', title: 'Events',           desc: 'Scheduled events, PvP tournaments, and seasonal content.' },
  { to: '/community-board',  icon: '📋', title: 'Community Board',  desc: 'Buffer, Rebirth, Faction War, Alchemy, and more — all Alt+B features.' },
  { to: '/commands',         icon: '💬', title: 'Commands',         desc: 'In-game chat command reference.' },
  { to: '/faq',              icon: '❓', title: 'FAQ',              desc: 'Common questions answered.' },
]

export default function Home() {
  return (
    <>
      <div className="hero">
        <img
          src={`${import.meta.env.BASE_URL}images/logo.png`}
          alt="L2 Kairos Multiskill logo"
          className="hero-logo"
        />
        <p className="hero-tagline">Lineage 2 Custom Server — Community Wiki</p>
      </div>

      <SectionHeading id="welcome">Welcome</SectionHeading>
      <p>
        Welcome to the official Kairos community wiki. This is your complete resource for
        everything about the server — from setup guides and class breakdowns to boss strategies
        and event schedules.
      </p>
      <InfoBox variant="tip" label="New Player?">
        <p>Head over to the <a href="/getting-started">Getting Started</a> page for client download, account creation, and your first steps in the world of Kairos.</p>
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
