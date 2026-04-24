# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (accessible on all network interfaces via --host 0.0.0.0)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

Single-page React app (Vite + React 19) with no router. Navigation is state-driven: `App.jsx` holds a `menuItem` state that conditionally renders either `<Gallary />` or `<About />` in the main content area.

**Page structure:**
- `App.jsx` — shell with header (nav), content area, and footer (SNS icons + scroll-to-top)
- `Gallary.jsx` — photo gallery with a preview grid and a popup lightbox for browsing images
- `About.jsx` — placeholder page (stub)

**Gallery data model:** Images are grouped into named collections (`gallary1`–`gallary4`), each with a corresponding array of imported JPEG assets and a text description string. All are defined as local arrays inside `Gallary.jsx`. To add a new gallery collection, import the images, add to `gallaryArrays`, `gallary`, and `gallaryDiscription` arrays.

**Fonts:** OCR-B and IBM Plex Mono are bundled locally under `src/assets/fonts/`.

**Images:** All images (gallery photos + SNS icons) live in `src/images/` and are imported directly into components.

**Responsive behavior:** `Gallary.jsx` skips the preview size calculation on mobile (≤768px width). Popup images are scaled to fit 75% of viewport on load.
