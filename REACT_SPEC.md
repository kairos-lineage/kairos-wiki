# Kairos Wiki — React Migration Specification

## 1. Overview

Migrate the existing static HTML wiki into a **React + Vite** single-page application while preserving
the full visual design, deep-link anchor navigation (`community-board#multiskill`), and auto-deploy
pipeline on GitHub Pages from the `master` branch.

---

## 2. Tech Stack

| Concern | Choice | Reason |
|---|---|---|
| Bundler | **Vite 5** | Fast HMR, simple GitHub Pages config |
| Framework | **React 18** | Hooks, modern component model |
| Routing | **React Router v6 — BrowserRouter** | Clean URLs, native `#section` anchors |
| Styling | **CSS Modules + global vars** | Keep existing `styles.css` custom properties, scope component styles |
| Data | **Static JSON in `/src/data/`** | Zero backend, easy to update |
| Deployment | **GitHub Actions → master** | Existing auto-deploy pipeline |
| Fonts | Google Fonts (Cinzel Decorative, Nunito, Fira Code) | Same as current |

---

## 3. GitHub Pages Deployment

### 3.1 SPA Routing on GitHub Pages
GitHub Pages returns a 404 for any path that isn't a real file.
Fix with the **SPA redirect trick**:

**`404.html`** (lives at repo root, copied to `dist/` by build):
```html
<!DOCTYPE html>
<script>
  // Encode the full URL and redirect to index.html with it as a query param
  const l = window.location;
  l.replace(
    l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
    l.pathname.split('/').slice(0, 1 + 1).join('/') + '/?p=/' +
    l.pathname.slice(1).replace(/&/g, '~and~') +
    (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
    l.hash
  );
</script>
```

**`index.html`** — add before React mounts:
```html
<script>
  // Decode the redirect and push to history so React Router picks it up
  (function() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.href) {
      history.replaceState(null, null, redirect);
    }
    var q = window.location.search.slice(1).split('&').reduce(function(acc, s) {
      var r = s.split('=');
      acc[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('=').replace(/~and~/g, '&'));
      return acc;
    }, {});
    if (q.p) history.replaceState(null, null, q.p + (q.q ? '?' + q.q : '') + (location.hash || ''));
  })();
</script>
```

### 3.2 Vite Config
```js
// vite.config.js
export default {
  base: '/kairos-wiki/',   // repo name — adjust if domain is custom
  build: { outDir: 'dist' },
  plugins: [react()],
}
```

### 3.3 GitHub Actions Workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [master]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - name: Copy 404.html
        run: cp public/404.html dist/404.html
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: dist
          publish_branch: gh-pages   # Pages serves from gh-pages, master holds source
```

> **Note:** This separates source (`master`) from built output (`gh-pages`). GitHub Pages setting must point to `gh-pages` branch root.

---

## 4. Project Structure

```
kairos-wiki/
├── public/
│   ├── 404.html               # SPA redirect (copied as-is to dist)
│   └── images/                # All existing screenshots/images
├── src/
│   ├── main.jsx               # ReactDOM.createRoot + BrowserRouter
│   ├── App.jsx                # Route definitions
│   ├── styles/
│   │   ├── globals.css        # CSS custom properties, resets, typography
│   │   ├── animations.css     # :target blink, keyframes
│   │   └── layout.css         # site-wrapper, sidebar, main-content grid
│   ├── data/                  # JSON content — one file per logical domain
│   │   ├── navigation.json
│   │   ├── getting-started.json
│   │   ├── community-board/
│   │   │   ├── index.json     # CB overview cards
│   │   │   ├── buffer.json
│   │   │   ├── faction-war.json
│   │   │   ├── rebirth.json
│   │   │   ├── guardians.json
│   │   │   └── ...            # one file per CB section
│   │   ├── commands.json
│   │   └── server-info.json
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx         # Header + Sidebar + main + Footer wrapper
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── SidebarSection.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/
│   │   │   ├── PageHero.jsx       # ✦ ornament + h1 + tagline
│   │   │   ├── SectionHeading.jsx # h2/h3 with id= anchor + blink
│   │   │   ├── InfoBox.jsx        # tip / success / warning variants
│   │   │   ├── WikiTable.jsx      # thead + tbody from JSON columns/rows
│   │   │   ├── WikiFigure.jsx     # img + figcaption + size variant
│   │   │   ├── StepList.jsx       # ol.step-list from array of strings/JSX
│   │   │   ├── Badge.jsx          # inline badge: gold / orange / blue / red
│   │   │   ├── TodoBadge.jsx      # dark-yellow TODO marker
│   │   │   ├── CardGrid.jsx       # wrapping grid container
│   │   │   └── Card.jsx           # individual section overview card
│   │   ├── content/
│   │   │   ├── HowItWorks.jsx     # renders a JSON steps array as step-list
│   │   │   ├── UpgradeTable.jsx   # renders cost tables with TODO support
│   │   │   └── ComingSoon.jsx     # stub placeholder box
│   │   └── routing/
│   │       └── ScrollToHash.jsx   # useEffect that scrolls to #section on route change
│   └── pages/
│       ├── Home.jsx
│       ├── GettingStarted.jsx
│       ├── ServerInfo.jsx
│       ├── Classes.jsx
│       ├── Zones.jsx
│       ├── Bosses.jsx
│       ├── Events.jsx
│       ├── CommunityBoard.jsx     # renders all CB sections in order
│       ├── Commands.jsx
│       ├── Donations.jsx
│       ├── FAQ.jsx
│       └── NotFound.jsx           # 404 page
├── index.html
├── vite.config.js
├── package.json
└── REACT_SPEC.md
```

---

## 5. Routing

```jsx
// src/App.jsx
<BrowserRouter basename="/kairos-wiki">
  <ScrollToHash />         {/* handles #anchor scrolling on every navigation */}
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="getting-started" element={<GettingStarted />} />
      <Route path="server-info" element={<ServerInfo />} />
      <Route path="classes" element={<Classes />} />
      <Route path="zones" element={<Zones />} />
      <Route path="bosses" element={<Bosses />} />
      <Route path="events" element={<Events />} />
      <Route path="community-board" element={<CommunityBoard />} />
      <Route path="commands" element={<Commands />} />
      <Route path="donations" element={<Donations />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
</BrowserRouter>
```

### 5.1 Section Anchor Navigation
All links between pages keep the `page#section` format — e.g. `/community-board#multiskill`.
The `ScrollToHash` component handles scrolling:

```jsx
// src/components/routing/ScrollToHash.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    // Wait for page to render, then scroll
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Re-trigger :target animation by toggling a class
      el.classList.remove('anchor-highlight');
      void el.offsetWidth; // force reflow
      el.classList.add('anchor-highlight');
    }
  }, [pathname, hash]);

  return null;
}
```

Every `<SectionHeading>` renders the `id=` attribute so browser native `#anchor` links also work.

---

## 6. Component Specifications

### 6.1 Layout

```jsx
// Layout.jsx
<div className="site-wrapper">
  <Sidebar nav={navigationData} currentPath={location.pathname} currentHash={location.hash} />
  <main className="main-content">
    <div className="content-wrapper">
      <Outlet />
    </div>
  </main>
</div>
```

**Sidebar** receives the full `navigation.json` tree and marks the active link by comparing
`currentPath` (for page) and `currentHash` (for section). A nav item pointing to
`/community-board#buffer` is active when `pathname === '/community-board' && hash === '#buffer'`.

---

### 6.2 PageHero

```jsx
<PageHero title="Community Board" tagline="Your central hub — press Alt+B in-game." />
```

Renders:
```html
<div class="hero">
  <div class="hero-ornament">✦ ✦ ✦</div>
  <h1 class="hero-title">{title}</h1>
  <p class="hero-tagline">{tagline}</p>
</div>
```

Props: `title` (string), `tagline` (string or JSX)

---

### 6.3 SectionHeading

Wraps any heading level with a mandatory `id` for deep-linking and the `:target` blink animation.

```jsx
<SectionHeading id="guardian-types" level={3}>Guardian Types</SectionHeading>
```

Renders `<h2 id="guardian-types">` or `<h3>` depending on `level` prop.
The CSS `:target` rule animates a gold background flash on the element when navigated to via hash.

Props: `id` (required string), `level` (2 | 3, default 2), `children`

---

### 6.4 InfoBox

```jsx
<InfoBox variant="tip" label="Pro Tip">
  Use the recommended client version to avoid compatibility issues.
</InfoBox>
```

Variants: `"tip"` (default) | `"success"` | `"warning"` | `""` (neutral)
Renders the `.info-box` div with `.box-label` and children.

Props: `variant`, `label`, `children`

---

### 6.5 WikiTable

Data-driven table — pass column definitions and rows as JSON.

```jsx
<WikiTable
  columns={['Level', 'EXP Required', 'Gold Bars (GB)']}
  rows={[
    ['1 → 2', '100', '—'],
    ['2 → 3', '150', '15'],
    ['3 → 4', '210', <TodoBadge>add remaining levels</TodoBadge>],
  ]}
/>
```

Cells can contain strings, JSX, or `<TodoBadge>` markers.
Renders standard `<table class="wiki-table">` with thead/tbody.

Props: `columns` (string[]), `rows` (ReactNode[][]), `caption?` (string)

---

### 6.6 WikiFigure

```jsx
<WikiFigure
  src="images/guardians.png"
  alt="Guardian selection panel"
  caption="The Guardian panel — three guardian slots, each with its own level and EXP bar."
  size="md"    // sm | md | lg
/>
```

Renders `.wiki-figure` with the correct size modifier class.

Props: `src`, `alt`, `caption`, `size` ("sm" | "md" | "lg", default "md")

---

### 6.7 StepList

```jsx
<StepList
  steps={[
    <>Open <code>Alt+B</code> → Buffer and apply your buff scheme.</>,
    'Claim and unpack the Beginner Pack from your inventory.',
    <>Type <code>.play</code> and configure Auto Play to start grinding.</>,
  ]}
  ordered   // prop flag — renders <ol class="step-list">, omit for <ul>
/>
```

Props: `steps` (ReactNode[]), `ordered` (boolean, default true)

---

### 6.8 HowItWorks

A higher-level content component that renders a titled StepList section from JSON data.
Used for every "How It Works" section across the wiki.

```jsx
// JSON shape
{
  "title": "How It Works",
  "id": "buffer-how-it-works",
  "steps": [
    "Open the Community Board (Alt+B) and navigate to Buffer.",
    "Click the + button to browse available buffs.",
    "Save your selection as a named scheme."
  ]
}

// Usage
<HowItWorks data={bufferData.howItWorks} />
```

Renders: `<SectionHeading>` + `<StepList>`. Zero layout code in page files.

Props: `data` (HowItWorksData object)

---

### 6.9 CardGrid + Card

```jsx
<CardGrid>
  {sections.map(s => (
    <Card key={s.id} to={`/community-board#${s.id}`} icon={s.icon} title={s.title} desc={s.desc} />
  ))}
</CardGrid>
```

`Card` uses React Router `<Link>` internally. `icon` is an emoji string.
`CardGrid` renders `.card-grid`.

Props Card: `to` (route path + hash), `icon`, `title`, `desc`

---

### 6.10 Badge + TodoBadge

```jsx
<Badge variant="orange">Not recommended for daggers</Badge>
<TodoBadge>add remaining levels</TodoBadge>
```

`Badge` variants: `"gold"` | `"orange"` | `"blue"` | `"red"`
`TodoBadge` is a fixed-style component — dark yellow background, always uppercase, always prefixed with "TODO:".

---

### 6.11 UpgradeTable

Specialised table for cost/level progression with built-in `<TodoBadge>` support:

```jsx
// JSON shape
{
  "columns": ["Level", "EXP Required", "Gold Bars (GB)"],
  "rows": [
    { "cells": ["1 → 2", "100", "—"] },
    { "cells": ["2 → 3", "150", "15"] },
    { "cells": ["3 → 4", "210", null], "todo": "add remaining levels" }
  ]
}

<UpgradeTable data={guardiansData.upgradeCosts} />
```

Any row with `"todo"` renders a `<TodoBadge>` in the final cell.

---

### 6.12 ComingSoon

Placeholder for stub sections.

```jsx
<ComingSoon sectionName="Alchemy" />
```

Renders the `.info-box` "Coming Soon" box. When a section is documented, replace with real content — no other change needed.

---

## 7. Data Layer

### 7.1 `navigation.json`

```json
[
  {
    "label": "General",
    "items": [
      { "icon": "🏠", "text": "Home", "to": "/" },
      { "icon": "📖", "text": "Getting Started", "to": "/getting-started" },
      { "icon": "🖥️", "text": "Server Info", "to": "/server-info" }
    ]
  },
  {
    "label": "Community Board",
    "items": [
      { "icon": "📋", "text": "Overview", "to": "/community-board" },
      { "icon": "✨", "text": "Buffer", "to": "/community-board#buffer" },
      { "icon": "🔄", "text": "Rebirth", "to": "/community-board#rebirth" }
    ]
  }
]
```

Sidebar reads this file — adding a new nav item is one JSON line.

---

### 7.2 Per-Section JSON Shape

Every CB section is its own JSON file with a consistent schema:

```json
{
  "id": "guardians",
  "title": "Guardians",
  "intro": "Guardians are powerful companions...",
  "howItWorks": {
    "id": "guardian-leveling",
    "title": "Leveling Your Guardian",
    "steps": [
      "Gain EXP automatically — guardian EXP accumulates passively...",
      "Reach the EXP threshold — each guardian displays its current EXP progress.",
      "Pay Gold Bars (GB) — leveling up costs Gold Bars.",
      "Enjoy stronger stats — each level increases combat effectiveness."
    ]
  },
  "tables": [
    {
      "id": "guardian-types",
      "title": "Guardian Types",
      "columns": ["Type", "Role", "Best For"],
      "rows": [
        { "cells": ["Attack", "Offensive companion — deals damage.", "Solo grinding speed."] },
        { "cells": ["Defense", "Protective companion — increases survivability.", "Tanking tough zones."] },
        { "cells": ["Support", "Utility companion — buffs and healing.", "Long farming sessions."] }
      ]
    },
    {
      "id": "guardian-upgrade-costs",
      "title": "Upgrade Costs",
      "columns": ["Level", "EXP Required", "Gold Bars (GB)"],
      "rows": [
        { "cells": ["1 → 2", "100", "—"] },
        { "cells": ["2 → 3", "150", "15"] },
        { "cells": ["3 → 4", "210", null], "todo": "add remaining levels" }
      ]
    }
  ],
  "figures": [
    {
      "id": "guardians-figure",
      "src": "images/guardians.png",
      "alt": "Guardian selection panel",
      "caption": "The Guardian panel — three guardian slots, each with its own level and EXP bar.",
      "size": "md"
    }
  ],
  "infoBoxes": [
    {
      "variant": "tip",
      "label": "Switching Guardians",
      "body": "You can freely switch between your three guardians at any time..."
    }
  ]
}
```

A generic `<CommunityBoardSection data={sectionData} />` component can render any section
entirely from this shape — zero JSX changes needed to update content.

---

## 8. CSS Strategy

Keep the existing CSS custom property system exactly as-is. Migrate to **CSS Modules** for component-scoped styles:

```
src/styles/
  globals.css       ← :root vars, body, resets, typography
  animations.css    ← @keyframes section-blink, :target rule, .anchor-highlight
  layout.css        ← .site-wrapper, .sidebar, .main-content grid
  components/
    hero.module.css
    sidebar.module.css
    info-box.module.css
    wiki-table.module.css
    wiki-figure.module.css
    card.module.css
    badge.module.css
    step-list.module.css
```

Global classes (`.wiki-table`, `.step-list`, etc.) stay global — components apply them via
`className` strings for compatibility with any future custom CSS overrides.

---

## 9. Responsive Design

Breakpoints (mirror existing CSS):

| Name | Width | Sidebar behaviour |
|---|---|---|
| Mobile | `< 768px` | Sidebar hidden, hamburger opens overlay |
| Tablet | `768px – 1024px` | Sidebar collapsed to icons only |
| Desktop | `> 1024px` | Sidebar always visible, full labels |

The `<Sidebar>` component manages open/closed state via `useState`. The hamburger button in
`<Header>` calls `toggleSidebar()` via a shared context or prop callback — no global JS required.

---

## 10. Page Implementation Pattern

Every page follows the same pattern:

```jsx
// pages/CommunityBoard.jsx
import data from '../data/community-board/index.json';
import sections from '../data/community-board/sections'; // barrel import

export default function CommunityBoard() {
  return (
    <>
      <PageHero title={data.title} tagline={data.tagline} />
      <p>{data.intro}</p>

      <SectionHeading id="sections">Sections</SectionHeading>
      <CardGrid>
        {data.cards.map(c => <Card key={c.id} {...c} to={`/community-board#${c.id}`} />)}
      </CardGrid>

      {sections.map(section => (
        <CommunityBoardSection key={section.id} data={section} />
      ))}
    </>
  );
}
```

Adding a new CB section = create one JSON file + add it to the barrel export. No JSX editing.

---

## 11. Build & Deploy Checklist

```bash
# Initial setup (one time)
npm create vite@latest . -- --template react
npm install react-router-dom

# Development
npm run dev           # http://localhost:5173/kairos-wiki/

# Production build
npm run build         # outputs to dist/
cp public/404.html dist/404.html

# Manual deploy (or let GitHub Actions do it)
# Push source to master → Actions builds → pushes dist/ to gh-pages
git push origin master
```

### Pre-deploy validation
- [ ] All page routes resolve correctly at `/kairos-wiki/[page]`
- [ ] Hash anchors scroll correctly: `/kairos-wiki/community-board#multiskill`
- [ ] 404.html redirects unknown routes back to the app
- [ ] `NotFound.jsx` renders for invalid routes within the app
- [ ] Sidebar active state highlights correctly on page + section
- [ ] All images load from `public/images/` (paths are relative)
- [ ] Mobile hamburger menu opens/closes correctly
- [ ] No console errors in production build

---

## 12. Migration Order

Recommended build sequence to ship incrementally:

1. **Scaffold** — Vite setup, CSS globals, Layout, Header, Sidebar, Footer, ScrollToHash
2. **Navigation** — `navigation.json`, Sidebar reading it, active-state logic
3. **UI primitives** — PageHero, SectionHeading, InfoBox, Badge, TodoBadge
4. **Content primitives** — WikiTable, WikiFigure, StepList, CardGrid, Card
5. **Compound components** — HowItWorks, UpgradeTable, ComingSoon
6. **Pages (content-heavy first)** — CommunityBoard, GettingStarted, Commands
7. **Pages (stubs)** — Home, ServerInfo, Classes, Zones, Bosses, Events, Donations, FAQ
8. **Deploy** — GitHub Actions workflow, 404.html, vite.config base URL
9. **Validate** — full checklist pass, mobile test, hash anchor test
