# Fuel & EV Converter

A small single-page app for converting fuel and energy consumption between imperial and metric units — built for car enthusiasts.

## Features

- **EV conversions** — mi/kWh ↔ kWh/100 km ↔ MPGe (EPA)
- **Combustion vehicle conversions** — US mpg ↔ UK mpg ↔ L/100 km
- **Dark mode** — respects `prefers-color-scheme`, manual toggle, choice persisted in `localStorage`
- **Language** — auto-detects Swedish or English via browser locale, manual toggle
- **Responsive** — single-column layout on mobile, two-column on desktop
- **No runtime dependencies** — icons are inline SVG (Lucide), no icon library required

## Tech stack

- [Svelte 4](https://svelte.dev)
- [Vite 5](https://vitejs.dev)

## Getting started

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build   # output in dist/
```

Configured for Netlify via `netlify.toml` (build command: `npm run build`, publish dir: `dist`).

