# Bilal Aouiss — Portfolio

One-page portfolio built with HTML, CSS and vanilla JavaScript. No installation, server-side code or build step is required.

## Structure

```text
index.html
style.css
script.js
assets/
  profile.jpg
.nojekyll
README.md
```

## Preview locally

Open `index.html` in a browser. Alternatively, run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Open your repository named `bilal-aouiss.github.io` on GitHub (create it as public if necessary).
2. Upload **all files and folders** at the repository root, not inside an extra directory.
3. Commit to the `main` branch.
4. Go to **Settings → Pages → Build and deployment**.
5. Select **Deploy from a branch**, `main` and `/(root)`, then save.
6. When GitHub finishes deployment, visit `https://bilal-aouiss.github.io/`.

For a repository with a different name, GitHub Pages usually publishes at `https://bilal-aouiss.github.io/REPOSITORY/`. This site's relative file paths work in either location.

## Maintenance

- `index.html`: page content, contact information and projects.
- `style.css`: layout, colors, typography, animation and responsive styles.
- `script.js`: light/dark theme switch, current year and section navigation.
- `assets/profile.jpg`: portrait.

To update a project, edit its `article.project-item` in the `#projects` section. All projects appear on the same page without individual project links. The website supports keyboard navigation and reduced-motion preferences.
