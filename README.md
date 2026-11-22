# Scholars and debates

An interactive timeline of Muslim scholars and the debates they argued over, from 610 to 1988. A partial globe sits behind the timeline and turns to where things happened: select a scholar to follow the places of their life, or a debate to see where it was argued, year by year. With nothing selected, the globe follows the centuries in view.

The first version holds 98 scholars, 20 debates and 29 events across seven eras.

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
  b: 1058, bc: true, bNote: "Medieval biographers give 1058 or 1059; …", d: 1111, dah: 505,
  lane: "theology", also: ["sufism", "law"], schools: ["Ash’ari", "Shafi’i"],
  places: ["tus", "nishapur", "baghdad", "damascus", "jerusalem", "mecca", "baghdad", "tus", "nishapur", "tus"],
  teachers: ["juwayni"],
  text: "Two or three sentences.",
  works: [["Ihya’ ulum al-din", "The revival of the religious sciences"]] }
```

- `id` is permanent and used in addresses: lowercase letters, digits and hyphens.
- `arLang` is an optional BCP 47 language code for `ar` when a native-script name uses non-Arabic orthography (e.g. `"fa"` for Perso-Arabic script); it defaults to `"ar"`.
- `b` and `d` are years CE. Add `bc: true` or `dc: true` when a year is approximate.
- `bNote` explains a disputed or uncertain birth year in one sentence; the panel shows it under the dates.
- `dNote` does the same for a disputed or uncertain death date, such as a year given differently by different sources.
- `bUnknown: true` (with `bc: true`) marks a birth year the sources do not give. `b` is then only where the life line starts: the page shows "d. 1102 CE" instead of a birth year and says the start is an estimate.
- `dah` is the death year AH where sources give it; otherwise the page works one out and marks it approximate. Events in `src/data-places.js` likewise accept an optional explicit `ah` label when an exact or multi-year Hijri date is needed instead of the computed `c.` fallback.
- `lane` is one of `quran`, `hadith`, `law`, `theology`, `sufism`, `philosophy`, `sciences`, `letters`.
- `schools` holds legal, theological, confessional or Sufi order chips. For Twelver Shi’i scholars, `Ja’fari` is used when their primary lane is `law` or `hadith` (legal-school label) and `Twelver` when their primary lane is `theology`, `philosophy`, `quran` or `sciences` (confessional label).
- `places` run in the order of the life, returns included, and must exist in `PLACES`; the globe draws the route through them.
- `teachers` lists ids of other scholars; students are worked out from it. Where the link is weaker or different from direct study, write `{ id: "jafar", rel: "hadith transmission" }`; the label shows under the name on both scholars' panels, so phrase it to read either way.

A scholar joins a debate by appearing in that debate's `positions[].who` or `thread[].who`, so nothing is entered twice.

A position card summarises what a group held. Where one scholar argued it in his own way, add a note for him to the position, keyed by his id:

```js
{ name: "Created", text: "…", who: ["jahiz", "abd-al-jabbar"],
  notes: { "abd-al-jabbar": "In the seventh part of al-Mughni, Abd al-Jabbar argues that …" } }
```

The note shows under the card on the scholar's panel and under "Associated with" on the debate's panel. Write it so it reads on its own, naming the scholar, and give it a source under `note:<debate>:<scholar>`.

## Sources

`src/data-sources.js` holds the sources, keyed by a scholar id, `debate:<id>`, `event:<id>`, `thread:<debate>:<year>` for a single dated debate entry, or `note:<debate>:<scholar>` for a scholar's note on a position. Each source is `[label, url]`, or `[label, url, what it supports]` when it backs one claim such as a birth year:

```js
"ghazali": [
  ["Stanford Encyclopedia of Philosophy: al-Ghazali", "https://plato.stanford.edu/entries/al-ghazali/"]
],
"thread:reform:1875": [
  ["Aligarh Muslim University: History", "https://www.amu.ac.in/about-us/history"]
]
```

`npm run check` fails if a scholar, debate, event or note has no source, or if a key points at nothing.

## Adding a debate

Add an entry to `DEBATES` in `src/data-debates.js` with `phases` (spans of years when it was most active), a one-sentence `question`, a short `text`, `positions` written as short editorial summaries (the panel lists the scholars associated with each), a dated `thread`, and `related` debate ids. Each thread entry names the places where it happened in `at`, which the globe uses to draw how the debate travelled.

## Status

Birth years, teacher links, works and several itineraries and dated events were checked in a November 2026 audit against specialist reference works (TDV İslâm Ansiklopedisi, Encyclopaedia Iranica, the Stanford Encyclopedia of Philosophy and others). Every scholar, debate and event now lists its sources (`src/data-sources.js`), shown at the end of its panel. A full-content review later that month narrowed several position cards and biographies, added death-date notes where sources disagree, corrected a few map sites and routes (Siffin, Ulugh Beg, Ali Qushji, al-Nawawi, Suhraward), upgraded secondary citations to specialist reference works and peer-reviewed studies, closed internal debate gaps (`tafsir`, `reform`, `renewal`, `philosophy`, `sufism-law`, `heavens`, `sama`, and `ijtihad`), and linked five previously unlinked scholars into existing debates. Counted by life midpoint (the rule used in the Browse modal), the 1500–1800 era holds 10 scholars (13 overlapping lifespans), and counted by primary lane, the Sciences lane holds 7 scholars (8 including secondary `also` tags). Ibadi and Isma’ili scholars, Southeast Asia, Africa beyond Sokoto and more women scholars are still to be added, as is a debate on early Arabic grammar for the one scholar still unlinked (`sibawayh`, listed by `npm run check`).

## Credits

- Coastlines, rivers and lakes: [Natural Earth](https://www.naturalearthdata.com/) (public domain), land via [world-atlas](https://github.com/topojson/world-atlas).
- [d3](https://d3js.org/) and [topojson-client](https://github.com/topojson/topojson-client), loaded from jsDelivr.
- Fonts: Alegreya, Alegreya Sans and Amiri from Google Fonts.
