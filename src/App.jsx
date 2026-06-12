import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout         from './components/layout/Layout'
import ScrollToHash   from './components/routing/ScrollToHash'

// Shared pages
import ServerSelect   from './pages/ServerSelect'
import StubPage       from './pages/StubPage'
import NotFound       from './pages/NotFound'

// Multiskill pages
import Home           from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import CommunityBoard            from './pages/CommunityBoard'
import CommunityBoardSectionPage from './pages/CommunityBoardSectionPage'
import Commands       from './pages/Commands'
import Zones          from './pages/Zones'
import Pets           from './pages/Pets'
import Urn            from './pages/Urn'
import Tattoo         from './pages/Tattoo'
import Events         from './pages/Events'

// Lionna pages
import LionnaHome     from './pages/LionnaHome'
import LionnaCommands from './pages/lionna/Commands'
import LionnaAutoFarm from './pages/lionna/AutoFarm'

export default function App() {
  return (
    <BrowserRouter basename="/kairos-wiki">
      <ScrollToHash />
      <Routes>
        <Route index element={<ServerSelect />} />

        {/* Multiskill */}
        <Route path="multiskill" element={<Layout server="multiskill" />}>
          <Route index                    element={<Home />} />
          <Route path="getting-started"   element={<GettingStarted />} />
          <Route path="server-info"       element={<StubPage title="Server Info"  tagline="Server rates, features, and rules." />} />
          <Route path="classes"           element={<StubPage title="Classes"      tagline="Class guides, builds, and progression paths." />} />
          <Route path="zones"             element={<Zones />} />
          <Route path="bosses"            element={<StubPage title="Bosses"       tagline="Raid bosses, world bosses, and epic loot." />} />
          <Route path="events"            element={<Events />} />
          <Route path="community-board"            element={<CommunityBoard />} />
          <Route path="community-board/pets"       element={<Pets />} />
          <Route path="community-board/:sectionId" element={<CommunityBoardSectionPage />} />
          <Route path="urn"               element={<Urn />} />
          <Route path="tattoo"            element={<Tattoo />} />
          <Route path="commands"          element={<Commands />} />
          <Route path="donations"         element={<StubPage title="Donations"    tagline="Support the server and see donation perks." />} />
          <Route path="faq"               element={<StubPage title="FAQ"          tagline="Common questions answered." />} />
        </Route>

        {/* Lionna Multiskill */}
        <Route path="lionna" element={<Layout server="lionna" />}>
          <Route index                    element={<LionnaHome />} />
          <Route path="getting-started"   element={<StubPage title="Getting Started" tagline="Download the client, create your account, and connect." />} />
          <Route path="server-info"       element={<StubPage title="Server Info"     tagline="Server rates, features, and rules." />} />
          <Route path="classes"           element={<StubPage title="Classes"         tagline="Class guides, builds, and progression paths." />} />
          <Route path="zones"             element={<StubPage title="Zones"           tagline="Hunting grounds, level ranges, and drop tables." />} />
          <Route path="bosses"            element={<StubPage title="Bosses"          tagline="Raid bosses, world bosses, and epic loot." />} />
          <Route path="events"            element={<StubPage title="Events"          tagline="Scheduled events, PvP tournaments, and seasonal content." />} />
          <Route path="community-board"   element={<StubPage title="Community Board" tagline="Alt+B features — Buffer, Rebirth, MultiSkill, and more." />} />
          <Route path="community-board/:sectionId" element={<StubPage title="Community Board" tagline="Coming soon." />} />
          <Route path="commands"          element={<LionnaCommands />} />
          <Route path="auto-farm"         element={<LionnaAutoFarm />} />
          <Route path="donations"         element={<StubPage title="Donations"       tagline="Support the server and see donation perks." />} />
          <Route path="faq"               element={<StubPage title="FAQ"             tagline="Common questions answered." />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
