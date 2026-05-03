import PageHero  from '../components/ui/PageHero'
import CardGrid  from '../components/ui/CardGrid'
import Card      from '../components/ui/Card'

const CARDS = [
  {
    to:    '/community-board/tatto-master',
    icon:  '🔱',
    title: 'Tatto Master',
    desc:  'Browse all tattoo passives, their material requirements, and upgrade paths.',
  },
  {
    to:    '/urn',
    icon:  '🏺',
    title: 'URN Calculator',
    desc:  'Configure how many final items you need and instantly see every raw material required.',
  },
]

export default function Tattoo() {
  return (
    <>
      <PageHero
        title="Tattoo System"
        tagline="Permanent passive upgrades crafted from zone materials and mixed in the URN."
      />
      <p>
        The <strong>Tattoo System</strong> lets you permanently enhance your character with passive
        skills. Materials are farmed across zones, mixed in the <strong>URN</strong> into increasingly
        powerful reagents, and then registered through the <strong>Tatto Master</strong> in the
        Community Board.
      </p>
      <CardGrid>
        {CARDS.map(c => <Card key={c.to} {...c} />)}
      </CardGrid>
    </>
  )
}
