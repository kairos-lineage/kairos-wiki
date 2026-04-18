import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout         from './components/layout/Layout'
import ScrollToHash   from './components/routing/ScrollToHash'

// Pages
import Home           from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import CommunityBoard from './pages/CommunityBoard'
import Commands       from './pages/Commands'
import NotFound       from './pages/NotFound'
import StubPage       from './pages/StubPage'

export default function App() {
  return (
    <BrowserRouter basename="/kairos-wiki">
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route index                    element={<Home />} />
          <Route path="getting-started"   element={<GettingStarted />} />
          <Route path="server-info"       element={<StubPage title="Server Info"  tagline="Server rates, features, and rules." />} />
          <Route path="classes"           element={<StubPage title="Classes"      tagline="Class guides, builds, and progression paths." />} />
          <Route path="zones"             element={<StubPage title="Zones"        tagline="Hunting grounds, level ranges, and drop tables." />} />
          <Route path="bosses"            element={<StubPage title="Bosses"       tagline="Raid bosses, world bosses, and epic loot." />} />
          <Route path="events"            element={<StubPage title="Events"       tagline="Scheduled events, PvP tournaments, and seasonal content." />} />
          <Route path="community-board"   element={<CommunityBoard />} />
          <Route path="commands"          element={<Commands />} />
          <Route path="donations"         element={<StubPage title="Donations"    tagline="Support the server and see donation perks." />} />
          <Route path="faq"               element={<StubPage title="FAQ"          tagline="Common questions answered." />} />
          <Route path="*"                 element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
