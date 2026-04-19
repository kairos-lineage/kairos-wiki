import { useParams, Link } from 'react-router-dom'
import PageHero              from '../components/ui/PageHero'
import CommunityBoardSection from '../components/content/CommunityBoardSection'
import NotFound              from './NotFound'
import sections              from '../data/community-board/sections'

export default function CommunityBoardSectionPage() {
  const { sectionId } = useParams()
  const data = sections.find((s) => s.id === sectionId)

  if (!data) return <NotFound />

  return (
    <>
      <div style={{ marginBottom: '1rem' }}>
        <Link to="/community-board">← Community Board</Link>
      </div>
      <PageHero title={data.title} />
      <CommunityBoardSection data={data} standalone />
    </>
  )
}
