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
import LionnaHome           from './pages/LionnaHome'
import LionnaGettingStarted from './pages/lionna/GettingStarted'
import LionnaCommands       from './pages/lionna/Commands'
import LionnaAutoFarm       from './pages/lionna/AutoFarm'
import LionnaLibroOscuro    from './pages/lionna/LibroOscuro'
import LionnaTattoos        from './pages/lionna/Tattoos'
import ElementalTattoo      from './pages/lionna/tattoos/ElementalTattoo'
import Ekimus              from './pages/lionna/Ekimus'
import AstaNormal          from './pages/lionna/AstaNormal'
import LionnaFarmZones      from './pages/lionna/FarmZones'
import Zone2                from './pages/lionna/farm-zones/Zone2'
import Zone3                from './pages/lionna/farm-zones/Zone3'
import Zone4                from './pages/lionna/farm-zones/Zone4'
import Octavia              from './pages/lionna/skills/Octavia'
import MaterialsFinder      from './pages/lionna/MaterialsFinder'

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
          <Route path="getting-started"   element={<LionnaGettingStarted />} />
          <Route path="server-info"       element={<StubPage title="Server Info"     tagline="Server rates, features, and rules." />} />
          <Route path="classes"           element={<StubPage title="Classes"         tagline="Class guides, builds, and progression paths." />} />
          <Route path="zones"             element={<StubPage title="Zones"           tagline="Hunting grounds, level ranges, and drop tables." />} />
          <Route path="bosses"            element={<StubPage title="Bosses"          tagline="Raid bosses, world bosses, and epic loot." />} />
          <Route path="events"            element={<StubPage title="Events"          tagline="Scheduled events, PvP tournaments, and seasonal content." />} />
          <Route path="community-board"   element={<StubPage title="Community Board" tagline="Alt+B features — Buffer, Rebirth, MultiSkill, and more." />} />
          <Route path="community-board/:sectionId" element={<StubPage title="Community Board" tagline="Coming soon." />} />
          <Route path="commands"          element={<LionnaCommands />} />
          <Route path="auto-farm"         element={<LionnaAutoFarm />} />
          <Route path="libro-oscuro"      element={<LionnaLibroOscuro />} />
          <Route path="tattoos"             element={<LionnaTattoos />} />
          <Route path="tattoos/elemental" element={<ElementalTattoo />} />
          <Route path="tattoos/ekimus"   element={<Ekimus />} />
          <Route path="tattoos/asta"     element={<AstaNormal />} />
          <Route path="farm-zones"                  element={<LionnaFarmZones />} />
          <Route path="farm-zones/zone-2"          element={<Zone2 />} />
          <Route path="farm-zones/zone-3"          element={<Zone3 />} />
          <Route path="farm-zones/zone-4"          element={<Zone4 />} />
          <Route path="skills/octavia"             element={<Octavia />} />
          <Route path="farm-zones/materials"        element={<MaterialsFinder />} />
          <Route path="donations"         element={<StubPage title="Donations"       tagline="Support the server and see donation perks." />} />
          <Route path="faq"               element={<StubPage title="FAQ"             tagline="Common questions answered." />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
