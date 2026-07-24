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
import EventTimes           from './pages/lionna/EventTimes'
import MaterialsFinder      from './pages/lionna/MaterialsFinder'
import MidGradeHolyEnergy  from './pages/lionna/MidGradeHolyEnergy'
import RebirthSystem       from './pages/lionna/RebirthSystem'
import AltB                from './pages/lionna/AltB'
import Dolls               from './pages/lionna/alt-b/Dolls'
import RelicWeapon         from './pages/lionna/alt-b/RelicWeapon'
import Collection          from './pages/lionna/alt-b/Collection'
import Gem                 from './pages/lionna/alt-b/Gem'
import TalentTree          from './pages/lionna/alt-b/TalentTree'
import Luck               from './pages/lionna/alt-b/Luck'
import Cards              from './pages/lionna/alt-b/Cards'
import BattlePass         from './pages/lionna/alt-b/BattlePass'
import SoulHunt          from './pages/lionna/alt-b/SoulHunt'
import ShuffleSkill      from './pages/lionna/alt-b/ShuffleSkill'
import Ventus            from './pages/lionna/alt-b/Ventus'
import Rank              from './pages/lionna/alt-b/Rank'
import KairosSword       from './pages/lionna/alt-b/KairosSword'
import LuckyRoulette     from './pages/lionna/alt-b/LuckyRoulette'
import Factory          from './pages/lionna/alt-b/Factory'
import TalesOfHero      from './pages/lionna/alt-b/TalesOfHero'
import TattooInventory  from './pages/lionna/alt-b/TattooInventory'
import TopPlayers        from './pages/lionna/alt-b/TopPlayers'
import SoloInstances    from './pages/lionna/instances/SoloInstances'
import PartyInstances   from './pages/lionna/instances/PartyInstances'
import TiatInstance     from './pages/lionna/instances/TiatInstance'
import TowerInstance    from './pages/lionna/instances/TowerInstance'

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
          <Route path="events"                     element={<EventTimes />} />
          <Route path="rebirth-system"            element={<RebirthSystem />} />
          <Route path="mid-grade-holy-energy"     element={<MidGradeHolyEnergy />} />
          <Route path="alt-b"                      element={<AltB />} />
          <Route path="alt-b/relic-weapon"       element={<RelicWeapon />} />
          <Route path="alt-b/dolls"              element={<Dolls />} />
          <Route path="alt-b/collection"         element={<Collection />} />
          <Route path="alt-b/gem"                element={<Gem />} />
          <Route path="alt-b/talent-tree"        element={<TalentTree />} />
          <Route path="alt-b/luck"               element={<Luck />} />
          <Route path="alt-b/cards"              element={<Cards />} />
          <Route path="alt-b/ancestral-set"      element={<StubPage title="Ancestral Set"     tagline="Craft and upgrade the powerful Ancestral equipment set." />} />
          <Route path="alt-b/battle-pass"        element={<BattlePass />} />
          <Route path="alt-b/soul-hunt"          element={<SoulHunt />} />
          <Route path="alt-b/support-box"        element={<StubPage title="Support Box"       tagline="Claim Support Boxes earned through gameplay activities." />} />
          <Route path="alt-b/shuffle-skill"      element={<ShuffleSkill />} />
          <Route path="alt-b/ventus"             element={<Ventus />} />
          <Route path="alt-b/rank"               element={<Rank />} />
          <Route path="alt-b/kairos-sword"       element={<KairosSword />} />
          <Route path="alt-b/lucky-roulette"     element={<LuckyRoulette />} />
          <Route path="alt-b/top-players"        element={<TopPlayers />} />
          <Route path="alt-b/alchemist"          element={<StubPage title="Alchemist"         tagline="Craft and transmute materials through the Alchemist." />} />
          <Route path="alt-b/excellent-enchant"  element={<StubPage title="Excellent Enchant" tagline="Enchant gear to Excellent grade for bonus effects." />} />
          <Route path="alt-b/factory"            element={<Factory />} />
          <Route path="alt-b/tattoo-inventory"   element={<TattooInventory />} />
          <Route path="alt-b/tales-of-hero"      element={<TalesOfHero />} />
          <Route path="instances/solo"            element={<SoloInstances />} />
          <Route path="instances/party"           element={<PartyInstances />} />
          <Route path="instances/tiat"            element={<TiatInstance />} />
          <Route path="instances/tower"           element={<TowerInstance />} />
          <Route path="donations"         element={<StubPage title="Donations"       tagline="Support the server and see donation perks." />} />
          <Route path="faq"               element={<StubPage title="FAQ"             tagline="Common questions answered." />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
