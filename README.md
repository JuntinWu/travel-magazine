# VOYAGER — 我的旅行誌

A dark-themed, editorial-style travel journal built as a static site. Documenting our journeys with photography, food, and stories from around the world.

## About

We are a couple who love travel, photography, and food. This site serves as our digital travel magazine — recording every trip with a cinematic, immersive experience. Currently on the path to **F.I.R.E.**

## Site Structure

```
travel_magazine/
├── index.html                     # Homepage — timeline & about
├── 2025-Norway_Finland/
│   └── index.html                 # Arctic winter road trip
├── 2026-Switzerland-Italy/
│   └── index.html                 # Honeymoon itinerary
├── resources/                     # Design references
└── vercel.json                    # Deployment config
```

## Trips

| Trip | Date | Highlights |
|------|------|------------|
| Norway & Finland | 2025.01 | Aurora, Lofoten, Fjords, Arctic Circle road trip |
| Switzerland x Italy | 2026.05 | Matterhorn, Lucerne, Dolomites, Venice |

## Tech Stack

- **Pure HTML + Tailwind CSS** — no build step, no framework
- **Google Fonts** — Plus Jakarta Sans, Inter, Manrope
- **Leaflet.js** — interactive route maps
- **Glassmorphism** — frosted glass UI with backdrop-blur
- **Design** — generated with Google Stitch, refined by hand

## Design System

Each trip page has its own design language:

- **Arctic Etherealism** (Norway) — polar night blues, aurora teal `#00E0B7`, icy depth
- **The Alpine Lens** (Switzerland) — forest greens `#A1D1B9`, mountain earth tones
- **The Midnight Curator** (Homepage) — unified dark editorial, bioluminescent `#48FDD2`

## Deploy

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/justinwu/travel-magazine)

Or import this repo at [vercel.com/new](https://vercel.com/new) — select **Other** as framework.

### Local Preview

```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

## License

This project is for personal use. Travel content and photography are our own.
