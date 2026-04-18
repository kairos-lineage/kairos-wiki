import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layout and routing utilities (built in task #2 and #3)
// Pages (built in tasks #8–#11)
// Placeholder components until tasks are complete
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
      <Routes>
        <Route path="/"                element={<ComingSoonPage title="Home" />} />
        <Route path="/getting-started" element={<ComingSoonPage title="Getting Started" />} />
        <Route path="/server-info"     element={<ComingSoonPage title="Server Info" />} />
        <Route path="/classes"         element={<ComingSoonPage title="Classes" />} />
        <Route path="/zones"           element={<ComingSoonPage title="Zones" />} />
        <Route path="/bosses"          element={<ComingSoonPage title="Bosses" />} />
        <Route path="/events"          element={<ComingSoonPage title="Events" />} />
        <Route path="/community-board" element={<ComingSoonPage title="Community Board" />} />
        <Route path="/commands"        element={<ComingSoonPage title="Commands" />} />
        <Route path="/donations"       element={<ComingSoonPage title="Donations" />} />
        <Route path="/faq"             element={<ComingSoonPage title="FAQ" />} />
        <Route path="*"                element={<ComingSoonPage title="404 — Page Not Found" />} />
      </Routes>
    </BrowserRouter>
  )
}
