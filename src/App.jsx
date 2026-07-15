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
import AltB                from './pages/lionna/AltB'
import Dolls               from './pages/lionna/alt-b/Dolls'
import RelicWeapon         from './pages/lionna/alt-b/RelicWeapon'
import Collection          from './pages/lionna/alt-b/Collection'
import Gem                 from './pages/lionna/alt-b/Gem'

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
          <Route path="mid-grade-holy-energy"     element={<MidGradeHolyEnergy />} />
          <Route path="alt-b"                      element={<AltB />} />
          <Route path="alt-b/relic-weapon"       element={<RelicWeapon />} />
          <Route path="alt-b/dolls"              element={<Dolls />} />
          <Route path="alt-b/collection"         element={<Collection />} />
          <Route path="alt-b/gem"                element={<Gem />} />
          <Route path="alt-b/talent-tree"        element={<StubPage title="Talent Tree"       tagline="Unlock and level up Talents to strengthen your character." />} />
          <Route path="alt-b/luck"               element={<StubPage title="Luck"              tagline="Luck-based system with random rewards and bonuses." />} />
          <Route path="alt-b/cards"              element={<StubPage title="Cards"             tagline="Collect and play Cards for stat boosts and effects." />} />
          <Route path="alt-b/ancestral-set"      element={<StubPage title="Ancestral Set"     tagline="Craft and upgrade the powerful Ancestral equipment set." />} />
          <Route path="alt-b/battle-pass"        element={<StubPage title="Battle Pass"       tagline="Seasonal progression system with exclusive milestone rewards." />} />
          <Route path="alt-b/soul-hunt"          element={<StubPage title="Soul Hunt"         tagline="Hunt souls and claim rewards from the Soul Hunt system." />} />
          <Route path="alt-b/support-box"        element={<StubPage title="Support Box"       tagline="Claim Support Boxes earned through gameplay activities." />} />
          <Route path="alt-b/shuffle-skill"      element={<StubPage title="Shuffle Skill"     tagline="Randomize and discover new skill combinations." />} />
          <Route path="alt-b/ventus"             element={<StubPage title="Ventus"            tagline="Ventus system — wind-based progression and rewards." />} />
          <Route path="alt-b/rank"               element={<StubPage title="Rank"              tagline="Your server rank, ranking progression, and rewards." />} />
          <Route path="alt-b/kairos-sword"       element={<StubPage title="Kairos Sword"      tagline="The Kairos Sword — a unique server weapon and upgrade path." />} />
          <Route path="alt-b/lucky-roulette"     element={<StubPage title="Lucky Roulette"    tagline="Spin the roulette for a chance at rare items and prizes." />} />
          <Route path="alt-b/top-players"        element={<StubPage title="Top-Players"       tagline="Server-wide player rankings and leaderboard standings." />} />
          <Route path="alt-b/alchemist"          element={<StubPage title="Alchemist"         tagline="Craft and transmute materials through the Alchemist." />} />
          <Route path="alt-b/excellent-enchant"  element={<StubPage title="Excellent Enchant" tagline="Enchant gear to Excellent grade for bonus effects." />} />
          <Route path="alt-b/factory"            element={<StubPage title="Factory"           tagline="Production factory for crafting materials and equipment." />} />
          <Route path="alt-b/tattoo-inventory"   element={<StubPage title="Tattoo Inventory"  tagline="View and manage all Tattoos in your inventory." />} />
          <Route path="alt-b/tales-of-hero"      element={<StubPage title="Tales of Hero"     tagline="Hero story quests and narrative-driven reward chains." />} />
          <Route path="donations"         element={<StubPage title="Donations"       tagline="Support the server and see donation perks." />} />
          <Route path="faq"               element={<StubPage title="FAQ"             tagline="Common questions answered." />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
