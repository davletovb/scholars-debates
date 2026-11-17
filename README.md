# Scholars and debates

An interactive timeline of Muslim scholars and the debates they argued over, from 610 to 1980. A partial globe sits behind the timeline and turns to where things happened: select a scholar to follow the places of their life, or a debate to see where it was argued, year by year. With nothing selected, the globe follows the centuries in view.

The first version holds 99 scholars, 18 debates and 28 events across seven eras.

## Using it

Open `dist/index.html` in a browser. It is a single self-contained page; it loads d3, topojson-client and its fonts from public CDNs, so it needs an internet connection.

- Each star is a scholar, in the lane of their main discipline, placed at the middle of their life.
- The bars at the top are debates, spanning the years each was most active. Faint threads join each debate to its participants.
- Diamonds under the year axis are events.
- Search finds scholars, debates, events and places. Click a lane name to show only that discipline; the region menu does the same by region.
- Every scholar, debate and event has its own address, such as `index.html#ghazali` or `index.html#created-quran`.

## Project layout

| Path | What it holds |
| --- | --- |
| `src/data-places.js` | Regions, places with coordinates, historical region names for the globe, discipline lanes, eras and events |
| `src/data-figures.js` | Scholars |
| `src/data-debates.js` | Debates, with positions and a dated thread |
| `src/app.js` | Globe, timeline, side panel, search and filters |
| `src/style.css`, `src/index.html` | Styles and the page template |
| `geo/world.topo.json` | Land, rivers and lakes for the globe |
| `geo/build-geo.cjs` | Rebuilds `geo/world.topo.json` from Natural Earth |
| `build.mjs` | Inlines everything into `dist/index.html` |
| `check-data.cjs` | Checks that every reference in the data points at a real entry |
| `dist/index.html` | The built page |

## Building

Requires Node 18 or later.

```sh
npm run check   # validate the data
npm run build   # write dist/index.html
```

Rebuilding the map data is only needed if you change which rivers or lakes are drawn:

```sh
npm install
npm run geo     # downloads Natural Earth rivers and lakes, writes geo/world.topo.json
```

## Adding a scholar

Add an entry to `FIGURES` in `src/data-figures.js`, then run `npm run check` and `npm run build`.

```js
{ id: "ghazali", name: "Abu Hamid al-Ghazali", short: "al-Ghazali", ar: "أبو حامد الغزالي",
  b: 1058, d: 1111, dah: 505, lane: "theology", also: ["sufism", "law"],
  schools: ["Ash’ari", "Shafi’i"], places: ["tus", "nishapur", "baghdad", "damascus", "jerusalem", "tus"],
  teachers: ["juwayni"],
  text: "Two or three sentences.",
  works: [["Ihya’ ulum al-din", "The revival of the religious sciences"]] }
```

- `id` is permanent and used in addresses: lowercase letters, digits and hyphens.
- `b` and `d` are years CE. Add `bc: true` or `dc: true` when a year is approximate.
- `dah` is the death year AH where sources give it; otherwise the page works one out and marks it approximate.
- `lane` is one of `quran`, `hadith`, `law`, `theology`, `sufism`, `philosophy`, `sciences`, `letters`.
- `places` run in the order of the life and must exist in `PLACES`; the globe draws the route through them.
- `teachers` lists ids of other scholars; students are worked out from it.

A scholar joins a debate by appearing in that debate's `positions[].who` or `thread[].who`, so nothing is entered twice.

## Adding a debate

Add an entry to `DEBATES` in `src/data-debates.js` with `phases` (spans of years when it was most active), a one-sentence `question`, a short `text`, `positions` stated as their holders stated them, a dated `thread`, and `related` debate ids. Each thread entry names the places where it happened in `at`, which the globe uses to draw how the debate travelled.

## Status

Dates come from general reference works and still need checking against specialist sources, and references are not yet attached to each entry. Ibadi and Isma’ili scholars, Southeast Asia, Africa beyond Sokoto and more women scholars are still to be added.

## Credits

- Coastlines, rivers and lakes: [Natural Earth](https://www.naturalearthdata.com/) (public domain), land via [world-atlas](https://github.com/topojson/world-atlas).
- [d3](https://d3js.org/) and [topojson-client](https://github.com/topojson/topojson-client), loaded from jsDelivr.
- Fonts: Alegreya, Alegreya Sans and Amiri from Google Fonts.
