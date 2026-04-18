import PageHero            from '../components/ui/PageHero'
import SectionHeading      from '../components/ui/SectionHeading'
import CardGrid            from '../components/ui/CardGrid'
import Card                from '../components/ui/Card'
import CommunityBoardSection from '../components/content/CommunityBoardSection'
import cbIndex             from '../data/community-board/index.json'
import sections            from '../data/community-board/sections'

export default function CommunityBoard() {
  return (
    <>
      <PageHero title={cbIndex.title} tagline={cbIndex.tagline} />

      <p>{cbIndex.intro}</p>

      <SectionHeading id="sections">Sections</SectionHeading>
      <CardGrid>
        {cbIndex.cards.map((card) => (
          <Card
            key={card.id}
            to={`/community-board#${card.id}`}
            icon={card.icon}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </CardGrid>

      {sections.map((section) => (
        <CommunityBoardSection key={section.id} data={section} />
      ))}
    </>
  )
}
