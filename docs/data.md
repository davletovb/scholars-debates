# Data and editing guide

All content lives in four data files under `src/`, validated by `check-data.cjs` and bundled into `dist/index.html` by `build.mjs`. After any edit, run:

```sh
npm run check   # validate references, dates and sources
npm run build   # write dist/index.html
```

## Data files

| Path | What it holds |
| --- | --- |
| `src/data-places.js` | Regions (`REGIONS`), places with coordinates (`PLACES`), historical map labels (`MAP_REGIONS`), discipline lanes (`LANES`), eras (`ERAS`) and events (`EVENTS`) |
| `src/data-figures.js` | Scholars (`FIGURES`) |
| `src/data-debates.js` | Debates (`DEBATES`), with positions, scholar notes and a dated thread |
| `src/data-sources.js` | Source citations (`SOURCES`) for scholars, debates, thread entries, notes and events |
| `geo/world.topo.json` | Land, rivers and lakes for the globe |
| `geo/build-geo.cjs` | Rebuilds `geo/world.topo.json` from Natural Earth |

## Adding a scholar

Add an entry to `FIGURES` in `src/data-figures.js`, add its sources in `src/data-sources.js`, then run `npm run check` and `npm run build`.

```js
{ id: "ghazali", name: "Abu Hamid al-Ghazali", short: "al-Ghazali", ar: "أبو حامد الغزالي",
  b: 1058, bc: true, bNote: "Medieval biographers give 1058 or 1059; …", d: 1111, dah: 505,
  lane: "theology", also: ["sufism", "law"], schools: ["Ash’ari", "Shafi’i"],
  places: ["tus", "nishapur", "baghdad", "damascus", "jerusalem", "mecca", "baghdad", "tus", "nishapur", "tus"],
  teachers: ["juwayni"],
  text: "Two or three sentences.",
  works: [["Ihya’ ulum al-din", "The revival of the religious sciences"]] }
```

- `id` is permanent and used in URL addresses: lowercase letters, digits and hyphens (`a-z`, `0-9`, `-`).
- `arLang` is an optional BCP 47 language code for `ar` when a native-script name uses non-Arabic orthography (for example `"fa"` for Perso-Arabic script); it defaults to `"ar"`.
- `b` and `d` are years CE. Add `bc: true` or `dc: true` when a year is approximate.
- `bNote` explains a disputed or uncertain birth year in one sentence; the panel shows it under the dates.
- `dNote` does the same for a disputed or uncertain death date, such as a year given differently by different sources.
- `bUnknown: true` (with `bc: true`) marks a birth year the sources do not give. `b` is then only where the life line starts: the page shows "d. 1102 CE" instead of a birth year and notes that the start is an estimate.
- `dah` is the death year AH where sources give it; otherwise the page computes one and marks it approximate.
- `lane` is one of `quran`, `hadith`, `law`, `theology`, `sufism`, `philosophy`, `sciences`, `letters`. Use `also` for secondary disciplines.
- `schools` holds legal, theological, confessional or Sufi order chips. For Twelver Shi’i scholars, `Ja’fari` is used when their primary lane is `law` or `hadith` (legal-school label) and `Twelver` when their primary lane is `theology`, `philosophy`, `quran` or `sciences` (confessional label).
- `places` run in the order of the life, returns included, and must exist in `PLACES`; the globe draws the route through them.
- `teachers` lists ids of other scholars; students are derived from it automatically. Where the link is weaker or different from direct study, write `{ id: "jafar", rel: "hadith transmission" }`; the label shows under the name on both scholars' panels, so phrase it to read either way.

A scholar joins a debate by appearing in that debate's `positions[].who` or `thread[].who`, so nothing is entered twice.

## Adding a debate

Add an entry to `DEBATES` in `src/data-debates.js` with:

- `phases`: spans of years (`[start, end]`) when the debate was most active.
- `lanes`: discipline lanes the debate belongs to.
- `question`: a one-sentence summary of the dispute.
- `text`: a short overview.
- `positions`: short editorial summaries of each side (`name`, `text`, `who` and optional `notes`). The panel lists the scholars associated with each position.
- `thread`: dated entries in chronological order (`y`, optional `c: true` for approximate years, `text`, `who`, `at`). Each entry names the places where it happened in `at`, which the globe uses to draw how the debate travelled.
- `related`: ids of related debates.

### Scholar notes on a position

A position card summarises what a group held. Where one scholar argued it in their own way, add a note for them to the position's `notes` object, keyed by their id:

```js
{ name: "Created", text: "…", who: ["jahiz", "abd-al-jabbar"],
  notes: { "abd-al-jabbar": "In the seventh part of al-Mughni, Abd al-Jabbar argues that …" } }
```

The note shows under the card on the scholar's panel and under "Associated with" on the debate's panel. Write it so it reads on its own, naming the scholar, and give it a source under `note:<debate>:<scholar>`.

## Places and events

Places and historical events live in `src/data-places.js`:

- `PLACES` maps a place id to `[name, lat, lon, region]`, where `region` must exist in `REGIONS`.
- `EVENTS` is ordered chronologically by `year` CE (with optional `circa: true`) and lists place ids in `places`. Events accept an optional explicit `ah` label when an exact or multi-year Hijri date is needed instead of the computed `c.` fallback.

## Sources

`src/data-sources.js` holds the sources for every entry, keyed by:

- `<id>` for a scholar
- `debate:<id>` for a debate
- `event:<id>` for an event
- `thread:<debate>:<year>` for a single dated debate entry
- `note:<debate>:<scholar>` for a scholar's note on a position

Each source is `[label, url]`, or `[label, url, what it supports]` when it backs one specific claim such as a birth year:

```js
"ghazali": [
  ["Stanford Encyclopedia of Philosophy: al-Ghazali", "https://plato.stanford.edu/entries/al-ghazali/"]
],
"thread:reform:1875": [
  ["Aligarh Muslim University: History", "https://www.amu.ac.in/about-us/history"]
]
```

`npm run check` fails if a scholar, debate, event or position note has no source, if a source URL is not `https://`, or if a key points at nothing.

## Rebuilding map data

Rebuilding `geo/world.topo.json` is only needed if you change which rivers or lakes are drawn in `geo/build-geo.cjs`:

```sh
npm install
npm run geo     # downloads Natural Earth rivers and lakes, writes geo/world.topo.json
```
