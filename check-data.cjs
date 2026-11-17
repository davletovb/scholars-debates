const fs = require("fs"), vm = require("vm");
const ctx = {}; vm.createContext(ctx);
for (const f of ["data-places.js", "data-figures.js", "data-debates.js"]) vm.runInContext(fs.readFileSync(__dirname + "/src/" + f, "utf8") + "\n;globalThis.__x={PLACES,REGIONS,MAP_REGIONS,LANES,ERAS,EVENTS," + (f.includes("fig") || f.includes("deb") ? "FIGURES," : "") + (f.includes("deb") ? "DEBATES" : "") + "}", ctx);
const { PLACES, LANES, ERAS, EVENTS, FIGURES, DEBATES, REGIONS } = ctx.__x;
const errs = [], warn = [];
const lane = new Set(LANES.map(l => l.id)), fig = new Map(FIGURES.map(f => [f.id, f])), deb = new Set(DEBATES.map(d => d.id));
const ids = [...FIGURES.map(f => f.id), ...DEBATES.map(d => d.id), ...EVENTS.map(e => e.id)];
const dup = ids.filter((x, i) => ids.indexOf(x) !== i); if (dup.length) errs.push("duplicate ids " + dup);
for (const id of ids) if (!/^[a-z0-9-]+$/.test(id)) errs.push("bad id " + id);
for (const [k, p] of Object.entries(PLACES)) if (!REGIONS[p[3]]) errs.push("place region " + k);
for (const f of FIGURES) {
  if (!lane.has(f.lane)) errs.push(f.id + " lane");
  for (const a of f.also || []) if (!lane.has(a)) errs.push(f.id + " also " + a);
  for (const p of f.places || []) if (!PLACES[p]) errs.push(f.id + " place " + p);
  if (!f.places || !f.places.length) errs.push(f.id + " no places");
  for (const t of f.teachers || []) { if (!fig.has(t)) errs.push(f.id + " teacher " + t); else { const T = fig.get(t); if (T.d < f.b - 2) errs.push(`${f.id} teacher ${t} died ${T.d} before birth ${f.b}`); if (T.b > f.d) errs.push(`${f.id} teacher born after`); } }
  if (!(f.b < f.d)) errs.push(f.id + " dates");
  if (f.dah) { const est = (f.d - 622.5356) / 0.970224 + 1; if (Math.abs(est - f.dah) > 1.6) warn.push(`${f.id}: d ${f.d} -> AH≈${est.toFixed(1)} vs dah ${f.dah}`); }
  if (!f.text) errs.push(f.id + " text");
}
for (const d of DEBATES) {
  for (const l of d.lanes) if (!lane.has(l)) errs.push(d.id + " lane " + l);
  for (const r of d.related || []) if (!deb.has(r)) errs.push(d.id + " related " + r);
  for (const p of d.positions) for (const w of p.who) if (!fig.has(w)) errs.push(d.id + " pos who " + w);
  for (const t of d.thread) {
    for (const w of t.who) { if (!fig.has(w)) errs.push(d.id + " thread who " + w); else { const F = fig.get(w); if (t.y < F.b + 8 || t.y > F.d + 1) warn.push(`${d.id}: ${w} (${F.b}-${F.d}) at ${t.y}`); } }
    for (const a of t.at) if (!PLACES[a]) errs.push(d.id + " thread place " + a);
  }
  const ys = d.thread.map(t => t.y); for (let i = 1; i < ys.length; i++) if (ys[i] < ys[i - 1]) errs.push(d.id + " thread order");
  for (const [s, e] of d.phases) if (!(s < e)) errs.push(d.id + " phase");
}
for (const e of EVENTS) for (const p of e.places) if (!PLACES[p]) errs.push(e.id + " place " + p);
const inDebate = new Set(DEBATES.flatMap(d => [...d.thread.flatMap(t => t.who), ...d.positions.flatMap(p => p.who)]));
console.log("figures", FIGURES.length, "debates", DEBATES.length, "events", EVENTS.length, "places", Object.keys(PLACES).length);
console.log("figures in no debate:", FIGURES.filter(f => !inDebate.has(f.id)).map(f => f.id).join(", "));
console.log("WARN\n " + warn.join("\n "));
console.log(errs.length ? "ERRORS\n " + errs.join("\n ") : "no errors");
process.exit(errs.length ? 1 : 0);
