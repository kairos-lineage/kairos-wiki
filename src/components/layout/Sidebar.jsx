import SidebarSection from './SidebarSection'

export default function Sidebar({ nav, open }) {
  return (
    <nav className={`sidebar${open ? ' open' : ''}`} id="sidebar">
      {nav.map((section) => (
        <SidebarSection key={section.label} label={section.label} items={section.items} />
      ))}
    </nav>
  )
}
