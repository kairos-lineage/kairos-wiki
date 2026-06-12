# Kairos Wiki

Kairos Wiki is a React + Vite static website for documenting Kairos server features,
systems, commands, and player guides.

The site is built as a single page app and is configured for GitHub Pages under the
`/kairos-wiki/` base path.

## Run Locally

Install dependencies if needed:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

Vite will print a local URL. Because this project uses the `/kairos-wiki/` base path,
open:

```text
http://localhost:5173/kairos-wiki/
```

## Build

Create a production build:

```powershell
npm run build
```

Preview the production build:

```powershell
npm run preview
```

## Project Structure

```text
src/
  App.jsx                         Routes for all pages
  main.jsx                        React entry point
  components/                     Shared layout, UI, and content components
  data/
    navigation.json               Sidebar navigation
    community-board/              JSON content for community board sections
  pages/                          Page-level React components
  styles/                         Global, layout, and animation CSS

images/                           Source image assets used by pages
public/                           Static public files, including GitHub Pages 404
dist/                             Production build output
```

## Important Files

- `src/App.jsx` controls the route map.
- `src/data/navigation.json` controls the sidebar menu.
- `src/pages/` contains the main page components.
- `src/data/community-board/` contains most Community Board content.
- `src/styles/` contains shared CSS.
- `vite.config.js` contains the GitHub Pages base path.

## Adding Content

For most Community Board pages, edit or add a JSON file in:

```text
src/data/community-board/
```

For custom pages with special layout or behavior, add a React component in:

```text
src/pages/
```

Then wire the route in `src/App.jsx` and add the sidebar link in
`src/data/navigation.json`.

## Deployment

The project includes a GitHub Actions workflow in `.github/workflows/deploy.yml`.
On deployment, Vite builds the app and publishes the generated output for GitHub
Pages.
