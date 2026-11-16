# Kanzasset web

Kanzasset FZCO public website, hosted on GitHub Pages at `https://kanzasset.github.io/web/`.

## Pages

- `/` : pre-licence landing page (`index.html`, images in `landing/`). Content limits set by Compliance: name and logo, registered office, corporate email, VARA disclaimer. No services, products, tokens, prices, fees, sign-up or forms. Compliance approves all text before it goes live.
- `/app/` : client panel prototype (React, `src/`), opened from the Login button. Sign-in only, no sign-up. Demo data only: there is no real authentication yet (a static site cannot check users; that needs a backend).

## Run locally

```
npm ci
npm run dev
```

Then open http://localhost:5173/web/ (landing) or http://localhost:5173/web/app/ (panel).

## Deploy

`.github/workflows/deploy.yml` deploys on every push to `main`, or by hand from Actions > Deploy to GitHub Pages > Run workflow. Settings > Pages > Source must be GitHub Actions.

## Origin

Moved on 16 Nov 2026 from `engincetin/kanzasset-web` (panel) and `engincetin/kanzasset-landing` (landing page). Design prototypes and design chat files stay in the old repo.

## Open before go live

- `info@kanzasset.com` is used as the contact email but is not yet a confirmed live mailbox.
