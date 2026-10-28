# GreenNest deployment — fix for /src/main.jsx 404

Your old GitHub Pages deployment served the Vite **development** `index.html`, which references `/src/main.jsx`. GitHub Pages must serve the **built** `dist/index.html` instead.

## Recommended: GitHub Actions (included)

1. Extract this ZIP. Open the inner `greennest` folder in VS Code (it contains `package.json`, `index.html`, `src`, and `.github`).
2. Replace the old repository contents with the **contents of this inner folder** at the repository root. Do not upload another nested `greennest` folder. Ensure `.github/workflows/deploy.yml` is committed.
3. Commit and push to the `main` branch of `aruna0999/greennest`.
4. On GitHub: Settings > Pages > Build and deployment > Source: **GitHub Actions**.
5. Go to Actions and wait for **Deploy GreenNest to GitHub Pages** to succeed (or run it manually using Run workflow).
6. Visit https://aruna0999.github.io/greennest/ (use hard refresh).

## Local development

    npm install
    npm run dev

## Local build test

    npm run build
    npm run preview

## Alternative: gh-pages branch (do not use together with GitHub Actions)

    npm install
    npm run deploy

Then set Pages Source to Deploy from a branch, branch `gh-pages`, folder `/(root)`.

This project uses `base: '/greennest/'` and `HashRouter`. Login and register are browser-only demos; use test credentials.
