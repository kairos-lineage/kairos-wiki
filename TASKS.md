# Kairos Wiki — React Migration Tasks

Track progress here. Mark `[ ]` → `[x]` as each task is completed.

## Dependency Order

```
#1  Scaffold
 ├── #2  Layout shell
 └── #3  navigation.json + ScrollToHash
          ↓
     #4  UI primitives
          ↓
     #5  Content primitives
          ↓
     #6  Compound components
      ├── #7  CB JSON data  →  #8  CommunityBoard page
      ├── #9  GettingStarted page
      ├── #10 Commands page
      └── #11 Stub pages
               ↓ (all four)
          #12 GitHub Actions deploy
               ↓
          #13 Full validation
```

---

## Tasks

- [x] **#1** — Scaffold Vite + React project
  - Init Vite React project, install react-router-dom
  - `vite.config.js` with `base: '/kairos-wiki/'`
  - `index.html` with SPA redirect decode script
  - Split `styles.css` into `globals.css`, `animations.css`, `layout.css`
  - `src/main.jsx` + `src/App.jsx` route shell

- [x] **#2** — Build Layout shell *(blocked by #1)*
  - `Layout.jsx` — Header + Sidebar + Outlet + Footer
  - `Header.jsx` — logo sigil SVG + hamburger toggle
  - `Sidebar.jsx` — reads navigation.json, active state
  - `Footer.jsx` — copyright line

- [x] **#3** — Create navigation.json + ScrollToHash *(blocked by #1)*
  - `src/data/navigation.json` — all sidebar groups/items
  - `ScrollToHash.jsx` — watches pathname+hash, scrollIntoView + blink

- [x] **#4** — Build UI primitive components *(blocked by #2, #3)*
  - `PageHero.jsx` — ornament + h1 + tagline
  - `SectionHeading.jsx` — h2/h3 with `id` + anchor blink
  - `InfoBox.jsx` — tip / success / warning / neutral
  - `Badge.jsx` — gold / orange / blue / red
  - `TodoBadge.jsx` — dark-yellow, uppercase, "TODO:" prefix

- [x] **#5** — Build content primitive components *(blocked by #4)*
  - `WikiTable.jsx` — columns[] + rows[][] (ReactNode cells)
  - `WikiFigure.jsx` — src / alt / caption / size (sm|md|lg)
  - `StepList.jsx` — steps[] + ordered flag
  - `CardGrid.jsx` — grid wrapper
  - `Card.jsx` — React Router Link + icon / title / desc

- [x] **#6** — Build compound components *(blocked by #5)*
  - `HowItWorks.jsx` — SectionHeading + StepList from JSON
  - `UpgradeTable.jsx` — WikiTable with TodoBadge row support
  - `ComingSoon.jsx` — InfoBox stub placeholder

- [x] **#7** — Create Community Board JSON data files *(blocked by #6)*
  - `src/data/community-board/index.json` — overview cards
  - One JSON per section: buffer, faction-war, tarot, noblesse, rebirth,
    collection, champion, multiskill, tatto-master, player-difficulty, guardians
  - Stubs: server-tools, raid-teleport, alchemy, dolls, relics, compound, pets, skinning, torment

- [x] **#8** — Build CommunityBoard page *(blocked by #7)*
  - `CommunityBoard.jsx` — PageHero + CardGrid + CommunityBoardSection per section
  - `CommunityBoardSection.jsx` — renders any section fully from its JSON

- [x] **#9** — Build GettingStarted page *(blocked by #6)*
  - `src/data/getting-started.json`
  - `GettingStarted.jsx` — all steps, figures, checklist, mana fix

- [x] **#10** — Build Commands page *(blocked by #6)*
  - `src/data/commands.json`
  - `Commands.jsx` — essential commands table + Auto Play section + tables + badge

- [x] **#11** — Build remaining stub pages *(blocked by #6)*
  - `Home.jsx`, `ServerInfo.jsx`, `Classes.jsx`, `Zones.jsx`, `Bosses.jsx`
  - `Events.jsx`, `Donations.jsx`, `FAQ.jsx`, `NotFound.jsx`
  - All routes wired in `App.jsx`

- [x] **#12** — Set up GitHub Actions deploy *(blocked by #8, #9, #10, #11)*
  - `.github/workflows/deploy.yml` — build + deploy to `gh-pages` branch
  - `public/404.html` SPA redirect file
  - Verify GitHub Pages repo setting points to `gh-pages`

- [x] **#13** — Full validation pass *(blocked by #12)*
  - All routes resolve, hash anchors scroll, 404 redirects, NotFound renders
  - Sidebar active state, images load, mobile hamburger, no console errors
