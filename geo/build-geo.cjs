// Builds geo/world.topo.json: land at two levels of detail, selected rivers and lakes.
// Run with `npm run geo` after `npm install`. Needs Node 18 or later.
// Rivers and lakes come from Natural Earth (public domain); they are downloaded on first run.
const fs = require("fs");
const path = require("path");
const topoServer = require("topojson-server");
const topoSimp = require("topojson-simplify");
const topoClient = require("topojson-client");

const DIR = __dirname;
const NE = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/";
const SOURCES = ["ne_50m_rivers_lake_centerlines", "ne_50m_lakes", "ne_50m_lakes_historic"];

async function download() {
  const cache = path.join(DIR, "cache");
  fs.mkdirSync(cache, { recursive: true });
  for (const name of SOURCES) {
    const file = path.join(cache, name + ".geojson");
    if (fs.existsSync(file)) continue;
    console.log("downloading", name);
    const res = await fetch(NE + name + ".geojson");
    if (!res.ok) throw new Error(`Download of ${name} failed: HTTP ${res.status}`);
    fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  }
  return (name) => JSON.parse(fs.readFileSync(path.join(cache, name + ".geojson"), "utf8"));
}

// Rivers drawn on the globe, by their Natural Earth names.
const KEEP_RIVERS = new Set(["Nile", "El Bahr el Abyad", "El Bahr el Azraq", "Blue Nile", "White Nile", "Rosetta Branch", "Damietta Branch",
  "Tigris", "Dicle", "Euphrates", "Al Furat", "Firat", "Shatt al Arab", "Amu  Darya", "Panj", "Syr Darya", "Naryn", "Indus", "Chenab",
  "Sutlej", "Ganges", "Yamuna", "Niger", "Benue", "Bénoué", "Volga", "Kama", "Don", "Dnipro", "Dnepre", "Danube", "Donau", "Jordan",
  "Helmand", "Tajo", "Tejo", "Duero", "Ebro", "Tarim", "Yarkant", "Sénégal", "Ural", "Atbara"]);
const KEEP_LAKES = /^(Lake Urmia|Lake Van|Lake Sevan|Lake Tuz|Issyk-Kul|Lake Balkhash|Dead Sea|Sea of Galilee|Lake Victoria|Lake Tana)$/;

// Keep only rivers with some part between 20°W–95°E and 0–62°N.
function inRegion(f) {
  const c = JSON.stringify(f.geometry.coordinates).match(/-?\d+(\.\d+)?/g).map(Number);
  for (let i = 0; i < c.length; i += 2) if (c[i] > -20 && c[i] < 95 && c[i + 1] > 0 && c[i + 1] < 62) return true;
  return false;
}

(async () => {
  const read = await download();
  const land50 = require("world-atlas/land-50m.json");
  const land110 = require("world-atlas/land-110m.json");
  const rivers = read("ne_50m_rivers_lake_centerlines");
  const lakes = read("ne_50m_lakes");
  const historic = read("ne_50m_lakes_historic");

  const riv = rivers.features.filter((f) => KEEP_RIVERS.has(f.properties.name) && inRegion(f))
    .map((f) => ({ type: "Feature", properties: { n: f.properties.name.replace(/\s+/g, " ") }, geometry: f.geometry }));
  const lk = lakes.features.filter((f) => KEEP_LAKES.test(f.properties.name))
    .map((f) => ({ type: "Feature", properties: { n: f.properties.name }, geometry: f.geometry }));
  // The Aral Sea is drawn at its historical extent.
  for (const f of historic.features) lk.push({ type: "Feature", properties: { n: f.properties.name + " (historic)" }, geometry: f.geometry });

  let topo = topoServer.topology({
    land: topoClient.feature(land50, land50.objects.land),
    land110: topoClient.feature(land110, land110.objects.land),
    rivers: { type: "FeatureCollection", features: riv },
    lakes: { type: "FeatureCollection", features: lk }
  }, 6e4);
  topo = topoSimp.presimplify(topo);
  const minWeight = topoSimp.quantile(topo, 0.65); // keep about 65% of points
  topo = topoSimp.simplify(topo, minWeight);
  topo = topoSimp.filter(topo, topoSimp.filterWeight(topo, minWeight));

  // Back to plain features, drop the simplification weights, and quantize again.
  const objs = {};
  for (const k of Object.keys(topo.objects)) {
    objs[k] = JSON.parse(JSON.stringify(topoClient.feature(topo, topo.objects[k]),
      (key, v) => (Array.isArray(v) && v.length === 3 && typeof v[0] === "number" ? [v[0], v[1]] : v)));
  }
  const out = JSON.stringify(topoServer.topology(objs, 6e4));
  fs.writeFileSync(path.join(DIR, "world.topo.json"), out);
  console.log(`geo/world.topo.json: ${(out.length / 1024).toFixed(0)} KB, ${riv.length} river lines, ${lk.length} lakes`);
})().catch((e) => { console.error(e.message); process.exit(1); });
