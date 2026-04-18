import navData from '../../data/navigation.json'
import SidebarSection from './SidebarSection'

export default function Sidebar({ open }) {
  return (
    <nav className={`sidebar${open ? ' open' : ''}`} id="sidebar">
      {navData.map((section) => (
        <SidebarSection key={section.label} label={section.label} items={section.items} />
      ))}
    </nav>
  )
}
