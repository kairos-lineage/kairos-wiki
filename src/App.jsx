import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToHash from './components/routing/ScrollToHash'

// Pages (replaced as each task completes)
function ComingSoonPage({ title }) {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '2rem', marginBottom: '1rem' }}>
        {title}
      </h1>
      <p style={{ color: 'var(--text-dim)' }}>This page is being built — check back soon.</p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/kairos-wiki">
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route index                    element={<ComingSoonPage title="Home" />} />
          <Route path="getting-started"   element={<ComingSoonPage title="Getting Started" />} />
          <Route path="server-info"       element={<ComingSoonPage title="Server Info" />} />
          <Route path="classes"           element={<ComingSoonPage title="Classes" />} />
          <Route path="zones"             element={<ComingSoonPage title="Zones" />} />
          <Route path="bosses"            element={<ComingSoonPage title="Bosses" />} />
          <Route path="events"            element={<ComingSoonPage title="Events" />} />
          <Route path="community-board"   element={<ComingSoonPage title="Community Board" />} />
          <Route path="commands"          element={<ComingSoonPage title="Commands" />} />
          <Route path="donations"         element={<ComingSoonPage title="Donations" />} />
          <Route path="faq"               element={<ComingSoonPage title="FAQ" />} />
          <Route path="*"                 element={<ComingSoonPage title="404 — Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
