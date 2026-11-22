# Scholars and debates

An interactive timeline of Muslim scholars and the debates they argued over, from 610 to 1988. A partial globe sits behind the timeline and turns to where things happened: select a scholar to follow their itinerary, or a debate to trace where it was argued year by year. With nothing selected, the globe follows the centuries in view.

It currently holds 98 scholars, 20 debates and 29 events across seven eras.

## Using it

Open `dist/index.html` in a browser. It is a single self-contained page that loads d3, topojson-client and its fonts from public CDNs, so it requires an internet connection.

- **Scholars** appear as stars in their main discipline lane, placed at the middle of their life.
- **Debates** appear as bars at the top spanning their most active years, with faint threads joining each debate to its participants.
- **Events** appear as diamonds under the year axis.
- **Search and filters** find scholars, debates, events and places; click a lane name to filter by discipline, or use the region menu to filter by region.
- **Direct links** work for every scholar, debate and event, such as `index.html#ghazali` or `index.html#created-quran`.

## Building

Requires Node 18 or later.

```sh
npm run check   # validate data references and sources
npm run build   # bundle everything into dist/index.html
```

## Project layout

| Path | What it holds |
| --- | --- |
| `src/data-*.js` | Places, eras, events, scholars, debates and source citations |
| `src/app.js`, `src/style.css`, `src/index.html` | Globe, timeline, UI logic, styles and page template |
| `geo/` | Globe geometry (`world.topo.json`) and its Natural Earth build script |
| `build.mjs`, `check-data.cjs` | Single-file bundler and data validator |
| `dist/index.html` | Built standalone page |

## Documentation

- [Data and editing guide](docs/data.md) — schemas and conventions for scholars, debates, events, places, sources and rebuilding map geometry.
- [Editorial status](docs/status.md) — verification audits, coverage notes and planned additions.

## Credits

- Coastlines, rivers and lakes: [Natural Earth](https://www.naturalearthdata.com/) (public domain), land via [world-atlas](https://github.com/topojson/world-atlas).
- [d3](https://d3js.org/) and [topojson-client](https://github.com/topojson/topojson-client), loaded from jsDelivr.
- Fonts: Alegreya, Alegreya Sans and Amiri from Google Fonts.
