import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import multiskillNav from '../../data/multiskill/navigation.json'
import lionnaNav from '../../data/lionna/navigation.json'

const NAV = { multiskill: multiskillNav, lionna: lionnaNav }

export default function Layout({ server }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  // Close sidebar on navigation (mobile)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useState(() => { setSidebarOpen(false) }, [location.pathname])

  function toggleSidebar() {
    setSidebarOpen((prev) => !prev)
  }

  return (
    <>
      <Header sidebarOpen={sidebarOpen} onToggleSidebar={toggleSidebar} />
      <div className="site-wrapper">
        <Sidebar nav={NAV[server]} open={sidebarOpen} />
        <main className="main-content">
          <div className="content-wrapper">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
