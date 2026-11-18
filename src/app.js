"use strict";
(function () {
  const $ = (s) => document.querySelector(s);
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
  const NS = "http://www.w3.org/2000/svg";
  const RAD = Math.PI / 180;
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (typeof d3 === "undefined" || typeof topojson === "undefined") {
    const p = el("p", "noscript", "The map and timeline libraries could not load. Check your connection and reload the page.");
    document.body.appendChild(p);
    return;
  }

  // ---------------------------------------------------------------- data
  const LANE = Object.fromEntries(LANES.map((l, i) => [l.id, Object.assign({ index: i }, l)]));
  const SHORT_LANE = { quran: "Qur’an", hadith: "Hadith", law: "Law", theology: "Theology", sufism: "Sufism", philosophy: "Philosophy", sciences: "Sciences", letters: "Letters" };
  const FIG = new Map(FIGURES.map((f) => [f.id, f]));
  const DEB = new Map(DEBATES.map((d) => [d.id, d]));
  const EVT = new Map(EVENTS.map((e) => [e.id, e]));
  for (const f of FIGURES) {
    f.mid = (f.b + f.d) / 2;
    f.debates = [];
    f.students = [];
    f.studentLinks = [];
    f.regions = [...new Set(f.places.map((p) => PLACES[p][3]))];
    // a teacher link is an id, or { id, rel } when the relation needs a narrower label
    f.teacherLinks = (f.teachers || []).map((t) => (typeof t === "string" ? { id: t } : t));
    f.teachers = f.teacherLinks.map((t) => t.id);
  }
  for (const f of FIGURES) for (const t of f.teacherLinks) { const T = FIG.get(t.id); T.students.push(f.id); T.studentLinks.push({ id: f.id, rel: t.rel }); }
  for (const d of DEBATES) {
    const ids = new Set([...d.thread.flatMap((t) => t.who), ...d.positions.flatMap((p) => p.who)]);
    d.people = [...ids].map((id) => FIG.get(id)).sort((a, b) => a.mid - b.mid);
    for (const f of d.people) f.debates.push(d.id);
    d.start = d.phases[0][0];
    d.end = d.phases[d.phases.length - 1][1];
  }
  const byLane = {};
  for (const l of LANES) byLane[l.id] = FIGURES.filter((f) => f.lane === l.id).sort((a, b) => a.mid - b.mid);

  // ---------------------------------------------------------------- calendars
  const ahFromCE = (y) => Math.floor((y + 0.5 - 622.5356) / 0.970224) + 1;
  const ceOfAH = (a) => 622.5356 + (a - 1) * 0.970224;
  const lifeCE = (f) => (f.bUnknown ? `d. ${f.dc ? "c. " : ""}${f.d} CE` : `${f.bc ? "c. " : ""}${f.b}–${f.dc ? "c. " : ""}${f.d} CE`);
  const deathAH = (f) => (f.dah ? `died ${f.dah} AH` : `died c. ${ahFromCE(f.d)} AH`);
  const yearLabel = (y, c) => `${c ? "c. " : ""}${y}`;
  const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’'‘ʿʾ`]/g, "").toLowerCase();
  const placeName = (id) => PLACES[id][0];

  // ---------------------------------------------------------------- state
  const state = { sel: null, laneFilter: null, region: "" };
  const isNarrow = () => window.innerWidth <= 760;

  // ================================================================ GLOBE
  const Globe = (() => {
    const canvas = $("#globe");
    const ctx = canvas.getContext("2d");
    const land = topojson.feature(WORLD, WORLD.objects.land);
    const landLo = topojson.feature(WORLD, WORLD.objects.land110);
    const lakes = topojson.feature(WORLD, WORLD.objects.lakes);
    const rivers = topojson.feature(WORLD, WORLD.objects.rivers);
    const grat = d3.geoGraticule().step([15, 15])();
    const sphere = { type: "Sphere" };
    const proj = d3.geoOrthographic().clipAngle(90).precision(0.6);
    const path = d3.geoPath(proj, ctx);
    let W = 0, H = 0, dpr = 1;
    let frame = { fx: 0, fy: 0, R0: 800, free: { x0: 0, y0: 0, x1: 0, y1: 0 } };
    const view = { lon: 46, lat: 30, k: 1 };
    let anim = null, drift = null, overlay = null, idle = [], raf = 0, lastGeom = null;

    function layout() {
      W = window.innerWidth; H = window.innerHeight; dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      const top = $(".top").getBoundingClientRect();
      const band = $("#band").getBoundingClientRect();
      const panel = $("#panel");
      let x1 = W, y1 = band.top;
      if (!panel.hidden) {
        const pr = panel.getBoundingClientRect();
        if (isNarrow()) y1 = Math.min(y1, pr.top); else x1 = pr.left;
      }
      const y0 = Math.min(top.bottom + 8, y1 - 60);
      frame = { fx: x1 / 2, fy: y0 + (y1 - y0) * 0.56, R0: Math.max(W, H) * 0.8, free: { x0: 0, y0, x1, y1 } };
      // captions sit at the foot of the free map area
      $("#maphint").style.bottom = (H - y1 + 14) + "px";
    }

    // Place (lon, lat) at the focus point with the sphere centre below and to the left,
    // so the globe reads as a close-up with its horizon in the upper right.
    function aim(lon, lat, k) {
      const R = frame.R0 * k;
      const off = 0.64 * R, ang = 77 * RAD;
      const cx = frame.fx - off * Math.cos(ang), cy = frame.fy + off * Math.sin(ang);
      proj.scale(R).translate([cx, cy]);
      let r = [-lon, -lat, 0];
      for (let i = 0; i < 10; i++) {
        proj.rotate(r);
        const g = proj.invert([frame.fx, frame.fy]);
        if (!g || !isFinite(g[0])) break;
        const dl = ((g[0] - lon + 540) % 360) - 180, dp = g[1] - lat;
        if (Math.abs(dl) < 1e-3 && Math.abs(dp) < 1e-3) break;
        r = [r[0] + dl, Math.max(-89, Math.min(89, r[1] + dp)), 0];
      }
      proj.rotate(r);
      return { R, cx, cy, center: proj.invert([cx, cy]) };
    }

    const visible = (p, center) => d3.geoDistance(p, center) < Math.PI / 2 - 0.02;

    function haloText(t, x, y, font, fill, align) {
      ctx.font = font; ctx.textAlign = align || "left"; ctx.textBaseline = "middle";
      ctx.lineWidth = 4; ctx.strokeStyle = "rgba(5,8,24,0.85)"; ctx.lineJoin = "round";
      ctx.strokeText(t, x, y); ctx.fillStyle = fill; ctx.fillText(t, x, y);
    }

    function draw(hi, now) {
      const g = aim(view.lon, view.lat, view.k);
      lastGeom = g;
      const { R, cx, cy, center } = g;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#050819"; ctx.fillRect(0, 0, W, H);
      // atmosphere
      const halo = ctx.createRadialGradient(cx, cy, R * 0.985, cx, cy, R * 1.07);
      halo.addColorStop(0, "rgba(110,150,255,0.32)"); halo.addColorStop(1, "rgba(110,150,255,0)");
      ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(cx, cy, R * 1.07, 0, 2 * Math.PI); ctx.fill();
      // ocean, lit from the upper left
      const lx = cx - R * 0.3, ly = cy - R * 0.72;
      const og = ctx.createRadialGradient(lx, ly, R * 0.05, cx, cy, R);
      og.addColorStop(0, "#22398a"); og.addColorStop(0.55, "#142560"); og.addColorStop(1, "#0a1438");
      ctx.beginPath(); path(sphere); ctx.fillStyle = og; ctx.fill();
      ctx.beginPath(); path(grat); ctx.strokeStyle = "rgba(220,179,92,0.10)"; ctx.lineWidth = 0.8; ctx.stroke();
      const L = hi ? land : landLo;
      ctx.beginPath(); path(L); ctx.fillStyle = "#463e2a"; ctx.fill();
      ctx.beginPath(); path(lakes); ctx.fillStyle = "#172a66"; ctx.fill();
      ctx.beginPath(); path(rivers); ctx.strokeStyle = "rgba(120,170,235,0.6)"; ctx.lineWidth = 1; ctx.stroke();
      ctx.beginPath(); path(L); ctx.strokeStyle = "rgba(220,179,92,0.6)"; ctx.lineWidth = 0.8; ctx.stroke();
      // shading towards the limb
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, 2 * Math.PI); ctx.clip();
      const sh = ctx.createRadialGradient(lx, ly, R * 0.1, cx, cy, R * 1.01);
      sh.addColorStop(0, "rgba(255,238,200,0.07)"); sh.addColorStop(0.5, "rgba(0,0,0,0)"); sh.addColorStop(0.82, "rgba(3,6,20,0.22)"); sh.addColorStop(1, "rgba(3,6,20,0.7)");
      ctx.fillStyle = sh; ctx.fillRect(0, 0, W, H); ctx.restore();
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, 2 * Math.PI); ctx.strokeStyle = "rgba(160,190,255,0.4)"; ctx.lineWidth = 1.2; ctx.stroke();

      const placed = overlay ? drawOverlay(center, now) : drawIdle(center);
      const yMax = frame.free.y1 - 8;
      // historical region names, skipped where they would collide with a place label
      const rs = Math.max(12, Math.min(16, 14 * view.k));
      for (const [name, lat, lon] of MAP_REGIONS) {
        if (!visible([lon, lat], center)) continue;
        const p = proj([lon, lat]);
        const w = name.length * rs * 0.52 + 8;
        const box = [p[0] - w / 2, p[1] - rs * 0.7, p[0] + w / 2, p[1] + rs * 0.7];
        if (box[3] > yMax || box[2] > frame.free.x1) continue;
        if (placed.some((b) => !(box[2] < b[0] || box[0] > b[2] || box[3] < b[1] || box[1] > b[3]))) continue;
        placed.push(box);
        ctx.save();
        if ("letterSpacing" in ctx) ctx.letterSpacing = "1px";
        haloText(name, p[0], p[1], `italic 500 ${rs}px Alegreya, Georgia, serif`, "rgba(226,190,112,0.6)", "center");
        ctx.restore();
      }
    }

    function drawIdle(center) {
      const pts = idle.filter((d) => visible([d.lon, d.lat], center) && proj([d.lon, d.lat])[1] < frame.free.y1 + 2);
      for (const d of pts) {
        const p = proj([d.lon, d.lat]);
        const r = 2.5 + Math.sqrt(d.n) * 2.3;
        ctx.beginPath(); ctx.arc(p[0], p[1], r + 2, 0, 2 * Math.PI); ctx.fillStyle = "rgba(220,179,92,0.18)"; ctx.fill();
        ctx.beginPath(); ctx.arc(p[0], p[1], r, 0, 2 * Math.PI); ctx.fillStyle = "rgba(242,212,142,0.9)"; ctx.fill();
        ctx.lineWidth = 1.5; ctx.strokeStyle = "rgba(5,8,24,0.9)"; ctx.stroke();
      }
      const placed = [];
      for (const d of pts.slice().sort((a, b) => b.n - a.n).slice(0, 14)) {
        const p = proj([d.lon, d.lat]);
        const r = 2.5 + Math.sqrt(d.n) * 2.3;
        const box = [p[0] + r + 4, p[1] - 9, p[0] + r + 4 + d.label.length * 7.5, p[1] + 9];
        if (box[3] > frame.free.y1 - 6 || box[2] > frame.free.x1 - 4) continue;
        if (placed.some((b) => !(box[2] < b[0] || box[0] > b[2] || box[3] < b[1] || box[1] > b[3]))) continue;
        placed.push(box);
        haloText(d.label, p[0] + r + 5, p[1], "500 14px 'Alegreya Sans', system-ui, sans-serif", "#f3ead6", "left");
      }
      return placed;
    }

    function drawOverlay(center, now) {
      const o = overlay;
      const prog = anim ? 0 : reduceMotion ? 1 : Math.min(1, (now - (o.t0 || now)) / 1100);
      // routes
      const segs = o.arcs.length;
      if (segs && prog > 0) {
        const shown = prog * segs;
        for (let i = 0; i < segs; i++) {
          const f = Math.max(0, Math.min(1, shown - i));
          if (f <= 0) break;
          const [a, b] = o.arcs[i];
          const interp = d3.geoInterpolate(a, b);
          const n = 40, coords = [];
          for (let j = 0; j <= n * f; j++) coords.push(interp(j / n));
          if (f < 1) coords.push(interp(f));
          const line = { type: "LineString", coordinates: coords };
          ctx.beginPath(); path(line); ctx.lineWidth = 6; ctx.strokeStyle = "rgba(5,8,24,0.75)"; ctx.lineCap = "round"; ctx.stroke();
          ctx.beginPath(); path(line); ctx.lineWidth = 2.4; ctx.strokeStyle = "#e9c46f"; ctx.stroke();
        }
      }
      // stops: markers first, so labels can avoid them
      const placed = [];
      for (const s of o.stops) { if (!visible([s.lon, s.lat], center)) continue; const p = proj([s.lon, s.lat]); placed.push([p[0] - 10, p[1] - 10, p[0] + 10, p[1] + 10]); }
      const own = (p) => (b) => Math.abs((b[0] + b[2]) / 2 - p[0]) < 0.5 && Math.abs((b[1] + b[3]) / 2 - p[1]) < 0.5;
      for (const s of o.stops) {
        if (!visible([s.lon, s.lat], center)) continue;
        const p = proj([s.lon, s.lat]);
        ctx.beginPath(); ctx.arc(p[0], p[1], 11, 0, 2 * Math.PI); ctx.fillStyle = "rgba(233,196,111,0.18)"; ctx.fill();
        ctx.beginPath(); ctx.arc(p[0], p[1], s.num ? 9 : 6, 0, 2 * Math.PI); ctx.fillStyle = "#0b1436"; ctx.fill();
        ctx.lineWidth = 2; ctx.strokeStyle = "#e9c46f"; ctx.stroke();
        if (s.num) { ctx.font = "700 11px 'Alegreya Sans', system-ui, sans-serif"; ctx.fillStyle = "#f3ead6"; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(s.num, p[0], p[1] + 0.5); }
        // label: try right, then left, then below
        const w = Math.max(s.label.length * 8, (s.sub || "").length * 6.8) + 6;
        const mine = own(p);
        const h = s.sub ? 34 : 18;
        const tries = [[p[0] + 15, p[1] - h / 2, "left"], [p[0] - 15 - w, p[1] - h / 2, "left"], [p[0] - w / 2, p[1] + 14, "left"], [p[0] - w / 2, p[1] - 14 - h, "left"]];
        let spot = null;
        for (const t of tries) {
          const box = [t[0], t[1], t[0] + w, t[1] + h];
          if (box[0] < 4 || box[2] > frame.free.x1 - 4 || box[1] < 4) continue;
          if (!placed.some((b) => !mine(b) && !(box[2] < b[0] || box[0] > b[2] || box[3] < b[1] || box[1] > b[3]))) { spot = t; placed.push(box); break; }
        }
        if (!spot) continue;
        haloText(s.label, spot[0], spot[1] + 9, "700 14.5px 'Alegreya Sans', system-ui, sans-serif", "#fbf3df", "left");
        if (s.sub) haloText(s.sub, spot[0], spot[1] + 26, "500 12.5px 'Alegreya Sans', system-ui, sans-serif", "#e9c46f", "left");
      }
      return placed;
    }

    function tick(now) {
      raf = 0;
      let moving = false;
      if (anim) {
        const t = anim.dur ? Math.min(1, (now - anim.t0) / anim.dur) : 1;
        const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const p = anim.interp(e);
        view.lon = p[0]; view.lat = p[1];
        view.k = (anim.k0 + (anim.k1 - anim.k0) * e) * (1 - anim.dip * Math.sin(Math.PI * t));
        if (t >= 1) { anim = null; if (overlay) overlay.t0 = now; } else moving = true;
      } else if (drift) {
        const target = [drift.lon, drift.lat];
        const p = reduceMotion ? target : d3.geoInterpolate([view.lon, view.lat], target)(0.07);
        const dk = reduceMotion ? drift.k - view.k : (drift.k - view.k) * 0.07;
        view.lon = p[0]; view.lat = p[1]; view.k += dk;
        if (d3.geoDistance(p, target) < 0.0004 && Math.abs(dk) < 0.0004) drift = null; else moving = true;
      }
      const revealing = overlay && !anim && overlay.t0 != null && now - overlay.t0 < 1150 && !reduceMotion;
      draw(!moving, now);
      if (moving || revealing) raf = requestAnimationFrame(tick);
    }
    const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };

    function spherical_mean(points) {
      let x = 0, y = 0, z = 0;
      for (const [lo, la] of points) { x += Math.cos(la * RAD) * Math.cos(lo * RAD); y += Math.cos(la * RAD) * Math.sin(lo * RAD); z += Math.sin(la * RAD); }
      return [Math.atan2(y, x) / RAD, Math.atan2(z, Math.hypot(x, y)) / RAD];
    }

    function fit(points) {
      const uniq = [...new Map(points.map((p) => [p.join(","), p])).values()];
      const c = spherical_mean(uniq);
      if (uniq.length === 1) return { lon: c[0], lat: c[1], k: 1.2 };
      const f = frame.free;
      // keep every stop above the timeline, where its marker and label can be read
      const box = [f.x0 + 50, f.y0 + 24, f.x1 - 70, f.y1 - 16];
      for (let k = 1.25; k > 0.3; k *= 0.92) {
        const g = aim(c[0], c[1], k);
        let ok = true;
        for (const p of uniq) {
          if (!visible(p, g.center)) { ok = false; break; }
          const q = proj(p);
          if (q[0] < box[0] || q[0] > box[2] || q[1] < box[1] || q[1] > box[3]) { ok = false; break; }
        }
        if (ok) return { lon: c[0], lat: c[1], k };
      }
      return { lon: c[0], lat: c[1], k: 0.3 };
    }

    function flyTo(target) {
      drift = null;
      const from = [view.lon, view.lat], to = [target.lon, target.lat];
      const dist = d3.geoDistance(from, to) / RAD;
      anim = {
        t0: performance.now(), dur: reduceMotion ? 0 : 1100 + Math.min(1300, dist * 14),
        interp: d3.geoInterpolate(from, to), k0: view.k, k1: target.k, dip: Math.min(0.32, dist / 160)
      };
      kick();
    }

    return {
      init() { layout(); kick(); },
      resize() { layout(); kick(); },
      relayout() { layout(); kick(); },
      show(ov) {
        overlay = ov ? Object.assign({ t0: null }, ov) : null;
        if (ov) flyTo(fit(ov.stops.map((s) => [s.lon, s.lat])));
        else kick();
      },
      focusPlace(id) {
        const p = PLACES[id];
        flyTo({ lon: p[2], lat: p[1], k: 1.35 });
      },
      setIdle(dots) {
        idle = dots;
        if (overlay || anim) return;
        if (!dots.length) { kick(); return; }
        const pts = [];
        for (const d of dots) for (let i = 0; i < d.n; i++) pts.push([d.lon, d.lat]);
        const c = spherical_mean(pts);
        drift = { lon: c[0], lat: c[1], k: 1 };
        kick();
      },
      clearOverlay() { overlay = null; kick(); }
    };
  })();

  // ================================================================ TIMELINE
  const TL = (() => {
    const scroller = $("#scroller");
    const svg = d3.select("#tl");
    const axis = d3.select("#axis");
    const ov = d3.select("#overview");
    const labelsBox = $("#lanelabels");
    const Y0 = 590, Y1 = 1995;
    const ROW = 20, LPAD = 4, DROW = 17;
    let ppy = 3.4, padL = 180;
    const x = (y) => padL + (y - Y0) * ppy;
    const yearAt = (px) => Y0 + (px - padL) / ppy;
    let width = 1000, height = 600, lanes = {}, debRow = new Map(), figPos = new Map(), debLabels = [];
    const mctx = document.createElement("canvas").getContext("2d");
    const measure = (t, font) => { mctx.font = font; return mctx.measureText(t).width; };
    const FIG_FONT = "500 13px 'Alegreya Sans', system-ui, sans-serif";
    const DEB_FONT = "500 12.5px 'Alegreya Sans', system-ui, sans-serif";

    function starPath(R) {
      const pts = [];
      for (let i = 0; i < 16; i++) {
        const a = (i * 22.5 - 90) * RAD, r = i % 2 === 0 ? R : R * 0.7654;
        pts.push([Math.cos(a) * r, Math.sin(a) * r]);
      }
      return "M" + pts.map((p) => p[0].toFixed(2) + "," + p[1].toFixed(2)).join("L") + "Z";
    }
    const STAR = starPath(7.5), STAR_SM = starPath(6);

    function pack(items, gap) {
      const ends = [];
      for (const it of items) {
        let r = ends.findIndex((e) => e + gap <= it.x0);
        if (r === -1) { r = ends.length; ends.push(it.x1); } else ends[r] = it.x1;
        it.row = r;
      }
      return Math.max(1, ends.length);
    }

    function layout() {
      padL = isNarrow() ? 108 : 184;
      // extra room at the end so the latest scholars can scroll clear of the side panel
      width = Math.ceil(x(Y1) + 60 + (isNarrow() ? 0 : 440));
      // debates
      const dItems = DEBATES.map((d) => ({ d, x0: x(d.start) - 2, x1: Math.max(x(d.end), x(d.start) + measure(d.title, DEB_FONT) + 8) })).sort((a, b) => a.x0 - b.x0);
      const dRows = pack(dItems, 12);
      const debTop = 10;
      debRow = new Map(dItems.map((it) => [it.d.id, debTop + it.row * DROW]));
      let y = debTop + dRows * DROW + 12;
      const debBottom = y - 6;
      lanes = {};
      figPos = new Map();
      const placeLane = (l, up) => {
        const items = byLane[l.id].map((f) => {
          const xm = x(f.mid);
          return { f, x0: xm - 10, x1: xm + 12 + measure(f.short, FIG_FONT) };
        });
        const rows = pack(items, 10);
        const h = rows * ROW + LPAD * 2;
        lanes[l.id] = { y0: y, h, rows };
        for (const it of items) {
          const cy = up ? y + h - LPAD - ROW / 2 - it.row * ROW : y + LPAD + ROW / 2 + it.row * ROW;
          figPos.set(it.f.id, [x(it.f.mid), cy]);
        }
        y += h;
      };
      for (const l of LANES.filter((l) => l.side === "up")) placeLane(l, true);
      const spineY = y + 12;
      y += 24;
      for (const l of LANES.filter((l) => l.side === "down")) placeLane(l, false);
      height = Math.ceil(y + 18);
      return { debTop, debBottom, spineY };
    }

    function render() {
      const L = layout();
      svg.attr("width", width).attr("height", height).attr("role", "group").attr("aria-label", "Timeline of scholars and debates");
      svg.selectAll("*").remove();
      // eras
      const gEra = svg.append("g");
      ERAS.forEach((e, i) => {
        if (i % 2 === 0) gEra.append("rect").attr("class", "era-bg").attr("x", x(e.start)).attr("y", 0).attr("width", x(e.end) - x(e.start)).attr("height", height);
        gEra.append("line").attr("class", "era-line").attr("x1", x(e.start)).attr("x2", x(e.start)).attr("y1", 0).attr("y2", height);
      });
      // lane rules
      const gLane = svg.append("g");
      for (const l of LANES) {
        const ln = lanes[l.id];
        gLane.append("rect").attr("x", 0).attr("y", ln.y0).attr("width", width).attr("height", ln.h).attr("fill", l.color).attr("opacity", 0.035);
        gLane.append("line").attr("class", "lane-rule").attr("x1", 0).attr("x2", width).attr("y1", ln.y0).attr("y2", ln.y0);
      }
      gLane.append("line").attr("class", "lane-rule").attr("x1", 0).attr("x2", width).attr("y1", L.debBottom).attr("y2", L.debBottom);
      // spine: the year line between the two halves
      const gSp = svg.append("g").attr("aria-hidden", "true");
      gSp.append("line").attr("class", "spine").attr("x1", 0).attr("x2", width).attr("y1", L.spineY - 2).attr("y2", L.spineY - 2);
      gSp.append("line").attr("class", "spine").attr("x1", 0).attr("x2", width).attr("y1", L.spineY + 2).attr("y2", L.spineY + 2);
      for (let yr = 600; yr <= 1990; yr += 50) {
        gSp.append("path").attr("d", STAR_SM).attr("transform", `translate(${x(yr)},${L.spineY}) scale(${yr % 100 === 0 ? 0.75 : 0.45})`).attr("fill", "#0b1230").attr("stroke", "rgba(220,179,92,0.7)");
      }

      // debates
      const gDeb = svg.append("g").attr("aria-label", "Debates");
      for (const d of DEBATES) {
        const y = debRow.get(d.id);
        const g = gDeb.append("g").attr("class", "deb").attr("data-id", d.id).attr("tabindex", 0).attr("role", "button")
          .attr("aria-label", `Debate: ${d.title}, ${d.phases.map((p) => p[0] + " to " + p[1]).join(" and ")}`);
        const lw = measure(d.title, DEB_FONT);
        g.append("rect").attr("class", "hit").attr("x", x(d.start) - 4).attr("y", y - 1).attr("width", Math.max(x(d.end) - x(d.start), lw) + 8).attr("height", DROW).attr("fill", "transparent");
        const inlineStart = x(d.start) + lw + 7;
        d.phases.forEach((p, i) => {
          const mid = y + 8.5;
          if (i > 0) g.append("line").attr("class", "gap").attr("x1", Math.max(inlineStart, x(d.phases[i - 1][1]))).attr("x2", x(p[0])).attr("y1", mid).attr("y2", mid);
          if (i === 0 && inlineStart + 10 < x(p[1])) {
            g.append("rect").attr("class", "bar").attr("x", inlineStart).attr("y", mid - 1.5).attr("width", x(p[1]) - inlineStart).attr("height", 3).attr("rx", 1.5);
          } else if (i === 0) {
            g.append("rect").attr("class", "bar").attr("x", x(p[0])).attr("y", y + 14).attr("width", Math.max(3, x(p[1]) - x(p[0]))).attr("height", 2);
          } else {
            g.append("rect").attr("class", "bar").attr("x", x(p[0])).attr("y", mid - 1.5).attr("width", Math.max(3, x(p[1]) - x(p[0]))).attr("height", 3).attr("rx", 1.5);
          }
        });
        g.append("text").attr("class", "deb-label").attr("x", x(d.start)).attr("y", y + 12).attr("data-x0", x(d.start)).attr("data-x1", x(d.end)).attr("data-w", lw).text(d.title);
      }

      // ribbons
      const gRib = svg.append("g").attr("class", "ribbons").attr("aria-hidden", "true");
      const line = d3.line().curve(d3.curveCatmullRom.alpha(0.5));
      for (const d of DEBATES) {
        gRib.append("path").attr("class", "ribbon").attr("data-id", d.id).attr("d", line(ribbonPoints(d)));
      }
      svg.append("g").attr("class", "links").attr("aria-hidden", "true");
      svg.append("g").attr("class", "hoverlayer").attr("aria-hidden", "true");

      // figures
      const gFig = svg.append("g").attr("aria-label", "Scholars");
      for (const l of LANES) {
        for (const f of byLane[l.id]) {
          const [fx, fy] = figPos.get(f.id);
          const w = measure(f.short, FIG_FONT);
          const g = gFig.append("g").attr("class", "fig").attr("data-id", f.id).attr("transform", `translate(${fx},${fy})`)
            .attr("tabindex", 0).attr("role", "button").attr("aria-label", `${f.name}, ${lifeCE(f)}, ${l.name}`);
          g.append("rect").attr("class", "hit").attr("x", -11).attr("y", -11).attr("width", w + 26).attr("height", 22);
          g.append("path").attr("class", "star").attr("d", STAR).attr("fill", "#0b1230").attr("stroke", l.color).attr("stroke-width", 1.6);
          g.append("circle").attr("r", 2.4).attr("fill", l.color);
          g.append("text").attr("x", 12).attr("y", 4.5).text(f.short);
        }
      }
      svg.append("g").attr("class", "sellayer").attr("aria-hidden", "true");
      svg.append("g").attr("class", "overlayer").attr("aria-hidden", "true");
      svg.append("line").attr("class", "cursor-line").attr("y1", 0).attr("y2", height).attr("visibility", "hidden");

      debLabels = [...document.querySelectorAll("#tl .deb-label")];
      renderLabels(L);
      renderAxis();
      renderOverview();
      applyHighlight();
      applyFilters();
    }

    function ribbonPoints(d) {
      const pts = [[x(d.start) + 6, debRow.get(d.id) + 15.5]];
      for (const f of d.people) pts.push(figPos.get(f.id));
      return pts;
    }

    function renderLabels(L) {
      labelsBox.textContent = "";
      const inner = el("div", "ll-inner");
      labelsBox.appendChild(inner);
      for (const c of ["pin-up", "pin-down"]) { const b = el("button", "lane-pin " + c); b.type = "button"; b.hidden = true; labelsBox.appendChild(b); }
      const dl = el("div", "lane-label static");
      dl.textContent = "Debates";
      dl.dataset.top = L.debTop;
      dl.style.top = L.debTop + "px";
      inner.appendChild(dl);
      for (const l of LANES) {
        const ln = lanes[l.id];
        const b = el("button", "lane-label");
        b.type = "button";
        b.dataset.lane = l.id;
        b.setAttribute("aria-pressed", String(state.laneFilter === l.id));
        b.title = `Show only ${l.name}`;
        const s = document.createElementNS(NS, "svg");
        s.setAttribute("width", "16"); s.setAttribute("height", "16"); s.setAttribute("viewBox", "-8 -8 16 16"); s.setAttribute("aria-hidden", "true");
        const p = document.createElementNS(NS, "path");
        p.setAttribute("d", STAR_SM); p.setAttribute("fill", "#0b1230"); p.setAttribute("stroke", l.color); p.setAttribute("stroke-width", "1.6");
        s.appendChild(p);
        b.appendChild(s);
        b.appendChild(el("span", "full", l.name));
        b.appendChild(el("span", "short", SHORT_LANE[l.id]));
        const top = l.side === "up" ? ln.y0 + ln.h - 26 : ln.y0 + 2;
        b.dataset.top = Math.max(ln.y0 + 1, top);
        b.dataset.y0 = ln.y0;
        b.style.top = b.dataset.top + "px";
        if (state.laneFilter && state.laneFilter !== l.id) b.classList.add("muted");
        inner.appendChild(b);
      }
      syncScroll();
    }

    function renderAxis() {
      axis.attr("width", width).attr("height", 50);
      axis.selectAll("*").remove();
      const g = axis.append("g").attr("class", "axis-g");
      const step = ppy >= 6 ? 25 : ppy >= 2.6 ? 50 : 100;
      for (let yr = 600; yr <= 1990; yr += step) {
        const major = yr % 100 === 0;
        g.append("line").attr("class", "tick-line").attr("x1", x(yr)).attr("x2", x(yr)).attr("y1", major ? 0 : 8).attr("y2", 16);
        if (major || ppy >= 2.6) g.append("text").attr("class", "tick-ce").attr("x", x(yr) + 4).attr("y", 13).text(yr === 600 ? "600 CE" : yr);
      }
      const ahStep = ppy >= 4.5 ? 50 : 100;
      for (let a = 0; a <= 1400; a += ahStep) {
        const yr = ceOfAH(Math.max(1, a));
        g.append("line").attr("class", "tick-line ah").attr("x1", x(yr)).attr("x2", x(yr)).attr("y1", 17).attr("y2", 27);
        g.append("text").attr("class", "tick-ah").attr("x", x(yr) + 4).attr("y", 26).text(a === 0 ? "1 AH" : a + " AH");
      }
      const ge = g.append("g");
      for (const e of EVENTS) {
        const gg = ge.append("g").attr("class", "evt").attr("data-id", e.id).attr("transform", `translate(${x(e.year)},38)`).attr("tabindex", 0).attr("role", "button").attr("aria-label", `Event: ${e.title}, ${e.year}`);
        gg.append("rect").attr("x", -8).attr("y", -8).attr("width", 16).attr("height", 16).attr("fill", "transparent");
        gg.append("path").attr("d", "M0,-5L5,0L0,5L-5,0Z");
      }
      const tag = g.append("g").attr("class", "cursor-tag").attr("visibility", "hidden");
      tag.append("rect").attr("rx", 4).attr("height", 18).attr("y", 29);
      tag.append("text").attr("y", 42).attr("text-anchor", "middle");
      syncScroll();
    }

    // overview strip
    let ovScale = null;
    function renderOverview() {
      const node = $("#overview");
      const w = node.getBoundingClientRect().width || 600;
      ov.attr("width", w).attr("height", 34);
      ov.selectAll("*").remove();
      ovScale = d3.scaleLinear().domain([Y0, Y1]).range([2, w - 2]);
      for (const e of ERAS) {
        ov.append("rect").attr("class", "ov-era").attr("x", ovScale(e.start)).attr("y", 2).attr("width", ovScale(e.end) - ovScale(e.start)).attr("height", 30).attr("rx", 3);
        const label = e.short;
        if (ovScale(e.end) - ovScale(e.start) > measure(label, "12px 'Alegreya Sans'") + 10)
          ov.append("text").attr("class", "ov-era-label").attr("x", ovScale(e.start) + 5).attr("y", 14).text(label);
      }
      for (const f of FIGURES) ov.append("circle").attr("class", "ov-dot").attr("cx", ovScale(f.mid)).attr("cy", 24 + (LANE[f.lane].index % 4) * 1.6).attr("r", 1.6);
      ov.append("rect").attr("class", "ov-win").attr("y", 1).attr("height", 32).attr("rx", 4);
      updateOverview();
    }
    // width of the timeline not covered by the side panel
    const openWidth = () => {
      const p = $("#panel");
      return !p.hidden && !isNarrow() ? Math.max(200, scroller.clientWidth - p.getBoundingClientRect().width) : scroller.clientWidth;
    };
    function visibleRange() {
      const l = scroller.scrollLeft + padL * 0.6, r = scroller.scrollLeft + openWidth();
      return [yearAt(l), yearAt(r)];
    }
    function updateOverview() {
      if (!ovScale) return;
      const [a, b] = visibleRange();
      const x0 = ovScale(Math.max(Y0, a)), x1 = ovScale(Math.min(Y1, b));
      ov.select(".ov-win").attr("x", x0).attr("width", Math.max(6, x1 - x0));
    }

    function syncScroll() {
      axis.select(".axis-g").attr("transform", `translate(${-scroller.scrollLeft},0)`);
      // a debate that began off to the left keeps its name in view while it is still running
      const left = scroller.scrollLeft + labelsBox.getBoundingClientRect().width + 6;
      for (const t of debLabels) {
        const x0 = +t.dataset.x0, x1 = +t.dataset.x1, w = +t.dataset.w;
        t.setAttribute("x", Math.max(x0, Math.min(left, x1 - w)));
      }
      const inner = labelsBox.querySelector(".ll-inner");
      if (inner) {
        // labels follow their lanes; lanes scrolled out of view are named in a pin at the nearest edge
        const st = scroller.scrollTop, ch = scroller.clientHeight;
        const labels = [...inner.querySelectorAll(".lane-label[data-lane]")];
        const above = labels.filter((b) => +b.dataset.top - st < 2);
        const below = labels.filter((b) => +b.dataset.top - st > ch - 52);
        for (const b of labels) {
          b.style.top = (+b.dataset.top - st) + "px";
          b.style.visibility = above.includes(b) || below.includes(b) ? "hidden" : "visible";
        }
        const deb = inner.querySelector(".lane-label.static");
        if (deb) deb.style.visibility = +deb.dataset.top - st < 2 ? "hidden" : "visible";
        const pin = (cls, list, last) => {
          const b = labelsBox.querySelector(cls);
          if (!list.length) { b.hidden = true; return; }
          const target = last ? list[list.length - 1] : list[0];
          const name = SHORT_LANE[target.dataset.lane];
          b.hidden = false;
          b.dataset.y0 = target.dataset.y0;
          b.textContent = list.length > 1 ? `${name} and ${list.length - 1} more` : name;
          b.setAttribute("aria-label", `Scroll to ${LANE[target.dataset.lane].name}`);
        };
        pin(".pin-up", above, true);
        pin(".pin-down", below, false);
        const st0 = inner.querySelector(".lane-label.static");
        void st0;
      }
      updateOverview();
    }

    // idle globe: where the scholars in view lived
    let idleTimer = 0;
    function idleUpdate() {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        const [a, b] = visibleRange();
        const counts = new Map();
        for (const f of FIGURES) {
          if (f.d < a || f.b > b) continue;
          if (!passesFilters(f)) continue;
          for (const p of new Set(f.places)) counts.set(p, (counts.get(p) || 0) + 1);
        }
        const dots = [...counts].map(([id, n]) => ({ id, n, lon: PLACES[id][2], lat: PLACES[id][1], label: PLACES[id][0] }));
        Globe.setIdle(dots);
        if (!state.sel) $("#mapcap").textContent = "";
      }, 140);
    }

    function scrollToYear(y, smooth, top) {
      const target = x(y) - (openWidth() + padL) / 2;
      const opts = { left: Math.max(0, target), behavior: smooth && !reduceMotion ? "smooth" : "auto" };
      if (top != null) opts.top = top;
      scroller.scrollTo(opts);
    }

    function scrollToFig(f, smooth) {
      const pos = figPos.get(f.id);
      if (!pos) return;
      const left = pos[0] - (openWidth() + padL) / 2 + 40;
      const top = pos[1] - scroller.clientHeight / 2;
      scroller.scrollTo({ left: Math.max(0, left), top: Math.max(0, top), behavior: smooth && !reduceMotion ? "smooth" : "auto" });
    }

    function setPPY(next, anchorX) {
      next = Math.max(1.4, Math.min(12, next));
      if (Math.abs(next - ppy) < 0.001) return;
      const ax = anchorX == null ? scroller.clientWidth / 2 : anchorX;
      const yAnchor = yearAt(scroller.scrollLeft + ax);
      const top = scroller.scrollTop;
      ppy = next;
      render();
      scroller.scrollLeft = x(yAnchor) - ax;
      scroller.scrollTop = top;
      syncScroll();
      idleUpdate();
    }

    // highlighting
    function involved() {
      const s = state.sel;
      if (!s) return null;
      if (s.kind === "fig") {
        const f = FIG.get(s.id);
        return { figs: new Set([f.id, ...(f.teachers || []), ...f.students]), debs: new Set(f.debates), self: f.id };
      }
      if (s.kind === "deb") {
        const d = DEB.get(s.id);
        return { figs: new Set(d.people.map((p) => p.id)), debs: new Set([d.id]), self: d.id };
      }
      return null;
    }

    function applyHighlight() {
      const inv = involved();
      svg.selectAll(".fig").each(function () {
        const id = this.dataset.id;
        this.classList.toggle("sel", !!inv && inv.self === id);
        this.classList.toggle("on", !!inv && inv.figs.has(id) && inv.self !== id);
      });
      svg.selectAll(".deb").each(function () {
        const id = this.dataset.id;
        this.classList.toggle("sel", !!inv && inv.self === id);
        this.classList.toggle("dim", !!inv && state.sel.kind === "deb" && inv.self !== id);
      });
      svg.select(".ribbons").classed("quiet", !!inv);
      svg.selectAll(".ribbon").classed("near", function () { return !!inv && state.sel.kind === "fig" && inv.debs.has(this.dataset.id); });
      // selected ribbon with an over-and-under weave
      const sl = svg.select(".sellayer"); sl.selectAll("*").remove();
      const ol = svg.select(".overlayer"); ol.selectAll("*").remove();
      const lk = svg.select(".links"); lk.selectAll("*").remove();
      if (inv && state.sel.kind === "deb") {
        const d = DEB.get(state.sel.id);
        const dPath = d3.line().curve(d3.curveCatmullRom.alpha(0.5))(ribbonPoints(d));
        sl.append("path").attr("class", "sel-casing").attr("d", dPath);
        sl.append("path").attr("class", "sel-ribbon").attr("d", dPath);
        d.people.forEach((f, i) => {
          if (i % 2 === 1) {
            const node = svg.select(`.fig[data-id="${f.id}"]`).node();
            if (node) { const c = node.cloneNode(true); c.removeAttribute("tabindex"); c.removeAttribute("role"); c.removeAttribute("aria-label"); c.style.pointerEvents = "none"; ol.node().appendChild(c); }
          }
        });
      }
      if (inv && state.sel.kind === "fig") {
        const f = FIG.get(state.sel.id);
        const me = figPos.get(f.id);
        const curve = (a, b) => { const mx = (a[0] + b[0]) / 2, my = Math.min(a[1], b[1]) - 26 - Math.abs(a[0] - b[0]) * 0.08; return `M${a[0]},${a[1]}Q${mx},${my} ${b[0]},${b[1]}`; };
        for (const t of f.teachers || []) lk.append("path").attr("class", "link-line").attr("d", curve(figPos.get(t), me));
        for (const s of f.students) lk.append("path").attr("class", "link-line").attr("d", curve(me, figPos.get(s)));
        drawLife(f, sl);
      }
      applyFilters();
    }

    function drawLife(f, layer) {
      const [, cy] = figPos.get(f.id);
      const y = cy + 12;
      const a = x(f.b), b = x(f.d);
      const ca = f.bc ? Math.min(b, a + (f.bUnknown ? 25 : 10) * ppy) : a, cb = f.dc ? Math.max(ca, b - 10 * ppy) : b;
      if (f.bc) layer.append("line").attr("class", "life-circa").attr("x1", a).attr("x2", ca).attr("y1", y).attr("y2", y);
      layer.append("line").attr("class", "life").attr("x1", ca).attr("x2", cb).attr("y1", y).attr("y2", y);
      if (f.dc) layer.append("line").attr("class", "life-circa").attr("x1", cb).attr("x2", b).attr("y1", y).attr("y2", y);
      layer.append("line").attr("class", "life").attr("x1", a).attr("x2", a).attr("y1", y - 4).attr("y2", y + 4);
      layer.append("line").attr("class", "life").attr("x1", b).attr("x2", b).attr("y1", y - 4).attr("y2", y + 4);
    }

    function passesFilters(f) {
      if (state.laneFilter && f.lane !== state.laneFilter && !(f.also || []).includes(state.laneFilter)) return false;
      if (state.region && !f.regions.includes(state.region)) return false;
      return true;
    }
    function applyFilters() {
      const inv = involved();
      svg.selectAll(".fig").each(function () {
        const f = FIG.get(this.dataset.id);
        let dim = !passesFilters(f);
        if (inv && state.sel.kind === "deb" && !inv.figs.has(f.id)) dim = true;
        this.classList.toggle("dim", dim);
      });
      labelsBox.querySelectorAll(".lane-label[data-lane]").forEach((b) => {
        b.setAttribute("aria-pressed", String(state.laneFilter === b.dataset.lane));
        b.classList.toggle("muted", !!state.laneFilter && state.laneFilter !== b.dataset.lane);
      });
    }

    // hover
    const tip = $("#tip");
    function showTip(evt, html) {
      tip.textContent = "";
      for (const part of html) tip.appendChild(part);
      tip.hidden = false;
      const r = tip.getBoundingClientRect();
      let left = evt.clientX + 14, top = evt.clientY - r.height - 12;
      if (left + r.width > window.innerWidth - 8) left = evt.clientX - r.width - 14;
      if (top < 8) top = evt.clientY + 18;
      tip.style.left = left + "px"; tip.style.top = top + "px";
    }
    const hideTip = () => { tip.hidden = true; };
    function tipFor(target) {
      const fg = target.closest(".fig"), dg = target.closest(".deb"), eg = target.closest(".evt");
      if (fg) { const f = FIG.get(fg.dataset.id); return [el("strong", null, f.name), el("span", null, `${lifeCE(f)}, ${deathAH(f)}`), el("div", null, LANE[f.lane].name)]; }
      if (dg) { const d = DEB.get(dg.dataset.id); return [el("strong", null, d.title), el("div", null, d.question)]; }
      if (eg) { const e = EVT.get(eg.dataset.id); return [el("strong", null, `${e.circa ? "c. " : ""}${e.year}: ${e.title}`), el("div", null, e.text)]; }
      return null;
    }

    function bind() {
      scroller.addEventListener("scroll", () => { syncScroll(); idleUpdate(); }, { passive: true });
      // wheel: zoom with ctrl or cmd, otherwise move through time when there is nothing to scroll vertically
      scroller.addEventListener("wheel", (e) => {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          const r = scroller.getBoundingClientRect();
          setPPY(ppy * Math.exp(-e.deltaY * 0.004), e.clientX - r.left);
          return;
        }
        const vOverflow = scroller.scrollHeight > scroller.clientHeight + 2;
        if (!vOverflow && Math.abs(e.deltaY) > Math.abs(e.deltaX)) { e.preventDefault(); scroller.scrollLeft += e.deltaY; }
      }, { passive: false });
      // drag to pan
      let drag = null;
      scroller.addEventListener("pointerdown", (e) => {
        if (e.pointerType !== "mouse" || e.button !== 0) return;
        drag = { x: e.clientX, y: e.clientY, l: scroller.scrollLeft, t: scroller.scrollTop, moved: false };
      });
      window.addEventListener("pointermove", (e) => {
        if (!drag) return;
        const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
        if (!drag.moved && Math.hypot(dx, dy) > 4) { drag.moved = true; scroller.classList.add("dragging"); hideTip(); }
        if (drag.moved) { scroller.scrollLeft = drag.l - dx; scroller.scrollTop = drag.t - dy; }
      });
      window.addEventListener("pointerup", () => {
        if (drag && drag.moved) { scroller.classList.remove("dragging"); scroller.dataset.justDragged = "1"; setTimeout(() => delete scroller.dataset.justDragged, 0); }
        drag = null;
      });
      // clicks
      const onActivate = (target) => {
        const fg = target.closest(".fig"), dg = target.closest(".deb"), eg = target.closest(".evt");
        if (fg) App.select("fig", fg.dataset.id);
        else if (dg) App.select("deb", dg.dataset.id);
        else if (eg) App.select("evt", eg.dataset.id);
        else return false;
        return true;
      };
      scroller.addEventListener("click", (e) => {
        if (scroller.dataset.justDragged) return;
        if (!onActivate(e.target) && state.sel) App.clear();
      });
      $("#axis").parentElement.addEventListener("click", (e) => onActivate(e.target));
      for (const node of [scroller, $("#axis").parentElement]) {
        node.addEventListener("keydown", (e) => {
          if ((e.key === "Enter" || e.key === " ") && e.target.closest(".fig,.deb,.evt")) { e.preventDefault(); onActivate(e.target); }
        });
      }
      scroller.addEventListener("keydown", (e) => {
        if (e.target !== scroller) return;
        if (e.key === "ArrowRight") { scroller.scrollLeft += 120; e.preventDefault(); }
        if (e.key === "ArrowLeft") { scroller.scrollLeft -= 120; e.preventDefault(); }
      });
      // hover: tooltip, lifespan and year cursor
      const hl = () => svg.select(".hoverlayer");
      scroller.addEventListener("pointermove", (e) => {
        if (drag && drag.moved) return;
        const r = scroller.getBoundingClientRect();
        const px = e.clientX - r.left + scroller.scrollLeft;
        const yr = Math.round(yearAt(px));
        const show = px > padL && yr >= 600 && yr <= 1990;
        svg.select(".cursor-line").attr("x1", px).attr("x2", px).attr("visibility", show ? "visible" : "hidden");
        const tag = axis.select(".cursor-tag").attr("visibility", show ? "visible" : "hidden");
        if (show) {
          const label = `${yr} CE, ${ahFromCE(yr) > 0 ? ahFromCE(yr) + " AH" : "before the Hijra"}`;
          const w = measure(label, "700 12px 'Alegreya Sans'") + 14;
          tag.attr("transform", `translate(${px},0)`);
          tag.select("rect").attr("x", -w / 2).attr("width", w);
          tag.select("text").text(label);
        }
        const parts = tipFor(e.target);
        hl().selectAll("*").remove();
        if (parts) {
          showTip(e, parts);
          const fg = e.target.closest(".fig");
          if (fg) drawLife(FIG.get(fg.dataset.id), hl());
          const dg = e.target.closest(".deb");
          if (dg && !state.sel) svg.select(`.ribbon[data-id="${dg.dataset.id}"]`).classed("near", true);
        } else {
          hideTip();
          if (!state.sel) svg.selectAll(".ribbon").classed("near", false);
        }
      });
      scroller.addEventListener("pointerleave", () => {
        hideTip(); hl().selectAll("*").remove();
        svg.select(".cursor-line").attr("visibility", "hidden");
        axis.select(".cursor-tag").attr("visibility", "hidden");
        if (!state.sel) svg.selectAll(".ribbon").classed("near", false);
      });
      const axisWrap = $("#axis").parentElement;
      axisWrap.addEventListener("pointermove", (e) => { const p = tipFor(e.target); if (p) showTip(e, p); else hideTip(); });
      axisWrap.addEventListener("pointerleave", hideTip);
      // lane filter
      labelsBox.addEventListener("click", (e) => {
        const pin = e.target.closest(".lane-pin");
        if (pin) { scroller.scrollTo({ top: Math.max(0, +pin.dataset.y0 - 40), behavior: reduceMotion ? "auto" : "smooth" }); return; }
        const b = e.target.closest(".lane-label[data-lane]");
        if (!b) return;
        state.laneFilter = state.laneFilter === b.dataset.lane ? null : b.dataset.lane;
        applyFilters(); idleUpdate();
      });
      // overview
      const ovNode = $("#overview");
      let ovDrag = null;
      const ovMove = (clientX) => {
        const r = ovNode.getBoundingClientRect();
        const yr = ovScale.invert(clientX - r.left);
        scrollToYear(yr, false);
      };
      ovNode.addEventListener("pointerdown", (e) => { ovDrag = true; ovNode.setPointerCapture(e.pointerId); ovMove(e.clientX); });
      ovNode.addEventListener("pointermove", (e) => { if (ovDrag) ovMove(e.clientX); });
      ovNode.addEventListener("pointerup", () => { ovDrag = null; });
      $("#zoomIn").addEventListener("click", () => setPPY(ppy * 1.35));
      $("#zoomOut").addEventListener("click", () => setPPY(ppy / 1.35));
    }

    return {
      init(opts) {
        ppy = opts.ppy || Math.max(2.4, Math.min(5, window.innerWidth / 420));
        render();
        bind();
        if (opts.sx != null) { scroller.scrollLeft = opts.sx; scroller.scrollTop = opts.sy || 0; }
        else scroller.scrollLeft = x(isNarrow() ? 615 : 612) - padL;
        syncScroll();
        idleUpdate();
      },
      rerender() { const sx = scroller.scrollLeft, sy = scroller.scrollTop; render(); scroller.scrollLeft = sx; scroller.scrollTop = sy; syncScroll(); idleUpdate(); },
      resize() { const yA = yearAt(scroller.scrollLeft + scroller.clientWidth / 2); render(); scroller.scrollLeft = x(yA) - scroller.clientWidth / 2; syncScroll(); idleUpdate(); },
      highlight: applyHighlight,
      filters() { applyFilters(); idleUpdate(); },
      scrollToFig, scrollToYear,
      snapshot() { return { ppy, sx: scroller.scrollLeft, sy: scroller.scrollTop }; },
      idleUpdate,
      focusEvent(id) { d3.selectAll("#axis .evt").classed("sel", function () { return !!id && this.dataset.id === id; }); }
    };
  })();

  // ================================================================ PANEL
  const Panel = (() => {
    const panel = $("#panel"), body = $("#panelBody");
    const link = (kind, id, text) => { const b = el("button", "link", text); b.type = "button"; b.dataset.kind = kind; b.dataset.id = id; return b; };
    const section = (title) => { const h = el("h3", null, title); body.appendChild(h); return h; };
    const extLink = (text, url, title) => { const a = el("a", "ext", text); a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer"; if (title) a.title = title; return a; };
    // a source list: [label, url, what it supports]
    const sources = (list, after) => {
      if (!list || !list.length) return;
      section("Sources");
      const ul = el("ul", "sources");
      for (const [label, url, note] of list) {
        const li = el("li");
        li.appendChild(extLink(label, url));
        if (note) li.appendChild(el("span", "src-note", ` for ${note}`));
        ul.appendChild(li);
      }
      body.appendChild(ul);
      if (after) body.appendChild(el("p", "src-after", after));
    };
    const laneChip = (laneId) => {
      const l = LANE[laneId];
      const c = el("span", "chip");
      const s = document.createElementNS(NS, "svg");
      s.setAttribute("width", "14"); s.setAttribute("height", "14"); s.setAttribute("viewBox", "-8 -8 16 16"); s.setAttribute("aria-hidden", "true");
      const p = document.createElementNS(NS, "path");
      const pts = []; for (let i = 0; i < 16; i++) { const a = (i * 22.5 - 90) * RAD, r = i % 2 ? 4.6 : 6; pts.push([Math.cos(a) * r, Math.sin(a) * r]); }
      p.setAttribute("d", "M" + pts.map((q) => q.join(",")).join("L") + "Z");
      p.setAttribute("fill", "none"); p.setAttribute("stroke", l.color); p.setAttribute("stroke-width", "1.8");
      s.appendChild(p); c.appendChild(s); c.appendChild(document.createTextNode(l.name));
      return c;
    };

    function header(kicker, title, ar, extra) {
      body.textContent = "";
      const k = el("div", "kicker");
      for (const c of kicker) k.appendChild(c);
      body.appendChild(k);
      const h = el("h2", null, title); h.id = "panelTitle"; body.appendChild(h);
      if (ar) { const a = el("p", "ar", ar); a.lang = "ar"; body.appendChild(a); }
      if (extra) for (const n of extra) body.appendChild(n);
    }

    function figure(f) {
      const chips = [laneChip(f.lane), ...(f.also || []).map((a) => el("span", "chip plain", LANE[a].name)), ...(f.schools || []).map((s) => el("span", "chip plain", s))];
      const dates = el("p", "dates");
      dates.appendChild(el("strong", null, lifeCE(f)));
      dates.appendChild(el("span", null, deathAH(f)));
      const extra = [dates];
      if (f.bNote || f.bUnknown) {
        let note = f.bNote || "Birth year unknown.";
        if (f.bUnknown) note += ` The timeline starts the life line at about ${f.b} only as an estimate.`;
        extra.push(el("p", "bnote", note));
      }
      if (f.dNote) extra.push(el("p", "bnote", f.dNote));
      header(chips, f.name, f.ar, extra);
      body.appendChild(el("p", "body", f.text));
      // what this scholar argued in each debate: the position card(s) and the dated entries naming them
      if (f.debates.length) {
        section("Positions in debates");
        const list = el("div", "deb-list");
        for (const id of f.debates) {
          const deb = DEB.get(id);
          const item = el("div", "deb-item");
          item.appendChild(link("deb", id, deb.title));
          for (const pos of deb.positions.filter((p) => p.who.includes(f.id))) {
            item.appendChild(el("span", "deb-pos", pos.name));
            item.appendChild(el("p", "deb-arg", pos.text));
          }
          const own = deb.thread.filter((t) => t.who.includes(f.id));
          if (own.length) {
            const ol = el("ol", "thread deb-thread");
            for (const t of own) {
              const li = el("li");
              li.appendChild(el("span", "yr", yearLabel(t.y, t.c)));
              const tx = el("div", "tx", t.text);
              const src = SOURCES[`thread:${deb.id}:${t.y}`];
              if (src) {
                const s = el("span", "tsrc", src.length > 1 ? "Sources: " : "Source: ");
                src.forEach((r, i) => { if (i) s.appendChild(document.createTextNode("; ")); s.appendChild(extLink(r[0].split(": ")[0], r[1], r[0])); });
                tx.appendChild(s);
              }
              li.appendChild(tx);
              ol.appendChild(li);
            }
            item.appendChild(ol);
          }
          list.appendChild(item);
        }
        body.appendChild(list);
      }
      // places, numbered to match the map
      section("Selected places, in order of the life");
      const ol = el("ol", "plist");
      route(f).visits.forEach((s) => {
        const li = el("li");
        li.appendChild(el("span", "num", s.num));
        const b = link("place", s.id, s.label);
        li.appendChild(b);
        if (s.ret) li.appendChild(el("span", "ret", "returns"));
        ol.appendChild(li);
      });
      body.appendChild(ol);
      if (f.works && f.works.length) {
        section("Major works");
        const ul = el("ul", "works");
        for (const [t, en] of f.works) { const li = el("li"); li.appendChild(el("i", null, t)); li.appendChild(el("span", null, en)); ul.appendChild(li); }
        body.appendChild(ul);
      }
      const people = (title, list) => {
        if (!list.length) return;
        section(title);
        const d = el("div", "links");
        for (const t of list) {
          const s = el("span", "rel-link");
          s.appendChild(link("fig", t.id, FIG.get(t.id).name));
          if (t.rel) s.appendChild(el("span", "rel", t.rel));
          d.appendChild(s);
        }
        body.appendChild(d);
      };
      people("Teachers and mentors", f.teacherLinks);
      people("Students", f.studentLinks);
      const cont = FIGURES.filter((g) => g.id !== f.id).map((g) => ({ g, o: Math.min(g.d, f.d) - Math.max(g.b, f.b) })).filter((x) => x.o >= 15).sort((a, b) => b.o - a.o).slice(0, 8);
      if (cont.length) { section("Contemporaries"); const d = el("div", "links"); for (const { g } of cont) d.appendChild(link("fig", g.id, g.short)); body.appendChild(d); }
      sources(SOURCES[f.id]);
      const list = byLane[f.lane], i = list.indexOf(f);
      const nav = el("div", "nav-row");
      const prev = el("div"), next = el("div");
      if (i > 0) { prev.appendChild(el("span", null, "Earlier: ")); prev.appendChild(link("fig", list[i - 1].id, list[i - 1].short)); }
      if (i < list.length - 1) { next.appendChild(el("span", null, "Later: ")); next.appendChild(link("fig", list[i + 1].id, list[i + 1].short)); }
      nav.appendChild(prev); nav.appendChild(next);
      body.appendChild(nav);
    }

    function debate(d) {
      const chips = [el("span", "chip plain", "Debate"), ...d.lanes.map((l) => laneChip(l))];
      const term = el("p", "term", d.term);
      const dates = el("p", "dates");
      dates.appendChild(el("strong", null, "Most active " + d.phases.map((p) => `${p[0]}–${p[1]}`).join(", then ")));
      header(chips, d.title, d.ar, [term, dates]);
      body.appendChild(el("p", "question", d.question));
      body.appendChild(el("p", "body", d.text));
      section("Positions");
      for (const p of d.positions) {
        const box = el("div", "pos");
        box.appendChild(el("h4", null, p.name));
        box.appendChild(el("p", null, p.text));
        const who = el("div", "who");
        if (p.who.length) { who.appendChild(document.createTextNode("Associated with ")); p.who.forEach((id, i) => { if (i) who.appendChild(document.createTextNode(", ")); who.appendChild(link("fig", id, FIG.get(id).short)); }); }
        else who.textContent = "No scholar associated with this position is in the dataset yet.";
        box.appendChild(who);
        body.appendChild(box);
      }
      section("How the debate unfolded");
      const ol = el("ol", "thread");
      for (const t of d.thread) {
        const li = el("li");
        li.appendChild(el("span", "yr", yearLabel(t.y, t.c)));
        const tx = el("div", "tx", t.text);
        const meta = el("span", "meta");
        t.at.forEach((p, i) => { if (i) meta.appendChild(document.createTextNode(", ")); meta.appendChild(link("place", p, placeName(p))); });
        if (t.who.length) { meta.appendChild(document.createTextNode(t.at.length ? ". " : "")); t.who.forEach((id, i) => { if (i) meta.appendChild(document.createTextNode(", ")); meta.appendChild(link("fig", id, FIG.get(id).short)); }); }
        tx.appendChild(meta);
        const own = SOURCES[`thread:${d.id}:${t.y}`];
        if (own) {
          const s = el("span", "tsrc", own.length > 1 ? "Sources: " : "Source: ");
          own.forEach((r, i) => { if (i) s.appendChild(document.createTextNode("; ")); s.appendChild(extLink(r[0].split(": ")[0], r[1], r[0])); });
          tx.appendChild(s);
        }
        li.appendChild(tx);
        ol.appendChild(li);
      }
      body.appendChild(ol);
      if (d.related.length) { section("Related debates"); const r = el("div", "links"); for (const id of d.related) r.appendChild(link("deb", id, DEB.get(id).title)); body.appendChild(r); }
      sources(SOURCES[`debate:${d.id}`], "Dated entries without a source of their own rest on the sources listed for the scholars named in them.");
    }

    function event(e) {
      const dates = el("p", "dates");
      dates.appendChild(el("strong", null, `${e.circa ? "c. " : ""}${e.year} CE`));
      dates.appendChild(el("span", null, `${e.circa ? "c. " : ""}${Math.max(1, ahFromCE(e.year))} AH`));
      header([el("span", "chip plain", "Event")], e.title, null, [dates]);
      body.appendChild(el("p", "body", e.text));
      section("Where");
      const d = el("div", "links");
      for (const p of e.places) d.appendChild(link("place", p, placeName(p)));
      body.appendChild(d);
      sources(SOURCES[`event:${e.id}`]);
    }

    body.addEventListener("click", (e) => {
      const b = e.target.closest(".link");
      if (!b) return;
      if (b.dataset.kind === "place") Globe.focusPlace(b.dataset.id);
      else App.select(b.dataset.kind, b.dataset.id, { scroll: true });
    });

    return {
      show(sel) {
        const wasHidden = panel.hidden;
        if (sel.kind === "fig") figure(FIG.get(sel.id));
        if (sel.kind === "deb") debate(DEB.get(sel.id));
        if (sel.kind === "evt") event(EVT.get(sel.id));
        panel.hidden = false;
        document.body.classList.add("panel-open");
        panel.scrollTop = 0;
        return wasHidden;
      },
      hide() { panel.hidden = true; document.body.classList.remove("panel-open"); }
    };
  })();

  // ---------------------------------------------------------------- routes for the map
  function route(f) {
    const stops = [], arcs = [], visits = [], seen = new Map();
    let prev = null, n = 0;
    for (const id of f.places) {
      if (id === prev) continue;
      const p = PLACES[id];
      const ret = seen.has(id);
      if (!ret) { n++; const s = { id, num: String(n), label: p[0], lon: p[2], lat: p[1] }; seen.set(id, s); stops.push(s); }
      visits.push({ id, num: seen.get(id).num, label: p[0], ret });
      if (prev) arcs.push([[PLACES[prev][2], PLACES[prev][1]], [p[2], p[1]]]);
      prev = id;
    }
    return { stops, arcs, visits };
  }
  function debateRoute(d) {
    const byPlace = new Map(), arcs = [];
    let prev = null;
    for (const t of d.thread) {
      for (const id of t.at) {
        if (!byPlace.has(id)) { const p = PLACES[id]; byPlace.set(id, { id, label: p[0], lon: p[2], lat: p[1], years: [] }); }
        const s = byPlace.get(id);
        const yl = yearLabel(t.y, t.c);
        if (!s.years.includes(yl)) s.years.push(yl);
      }
      const here = t.at[0];
      if (prev && here !== prev) arcs.push([[PLACES[prev][2], PLACES[prev][1]], [PLACES[here][2], PLACES[here][1]]]);
      prev = here;
    }
    const stops = [...byPlace.values()].map((s) => Object.assign(s, { sub: s.years.length > 3 ? `${s.years[0]} to ${s.years[s.years.length - 1]}` : s.years.join(", ") }));
    return { stops, arcs };
  }
  function eventRoute(e) {
    const stops = e.places.map((id) => ({ id, label: PLACES[id][0], lon: PLACES[id][2], lat: PLACES[id][1], sub: `${e.circa ? "c. " : ""}${e.year}` }));
    const arcs = [];
    for (let i = 1; i < e.places.length; i++) arcs.push([[PLACES[e.places[i - 1]][2], PLACES[e.places[i - 1]][1]], [PLACES[e.places[i]][2], PLACES[e.places[i]][1]]]);
    return { stops, arcs: e.id === "hijra" ? arcs : [] };
  }

  // ================================================================ APP
  const App = {
    select(kind, id, opts = {}) {
      if (!(kind === "fig" ? FIG.has(id) : kind === "deb" ? DEB.has(id) : EVT.has(id))) return;
      if (state.sel && state.sel.kind === kind && state.sel.id === id && !opts.force) return;
      state.sel = { kind, id };
      if (location.hash.slice(1) !== id) history.replaceState(null, "", "#" + id);
      Panel.show(state.sel);
      Globe.relayout();
      TL.highlight();
      TL.focusEvent(kind === "evt" ? id : null);
      $("#maphint").hidden = true;
      const cap = $("#mapcap");
      if (kind === "fig") {
        const f = FIG.get(id);
        cap.textContent = `Places in the life of ${f.short}`;
        Globe.show(route(f));
        if (opts.scroll) TL.scrollToFig(f, true);
      } else if (kind === "deb") {
        const d = DEB.get(id);
        cap.textContent = `Where the debate on ${d.title.charAt(0).toLowerCase() + d.title.slice(1)} was argued`;
        Globe.show(debateRoute(d));
        if (opts.scroll) TL.scrollToYear(d.start + 60, true, 0);
      } else {
        const e = EVT.get(id);
        cap.textContent = `${e.title}, ${e.year}`;
        Globe.show(eventRoute(e));
        if (opts.scroll) TL.scrollToYear(e.year, true);
      }
    },
    clear() {
      if (!state.sel) return;
      state.sel = null;
      history.replaceState(null, "", location.pathname + location.search);
      Panel.hide();
      Globe.clearOverlay();
      Globe.relayout();
      TL.highlight();
      TL.focusEvent(null);
      $("#mapcap").textContent = "";
      $("#maphint").hidden = false;
      TL.idleUpdate();
    }
  };

  // ---------------------------------------------------------------- search
  const Search = (() => {
    const q = $("#q"), list = $("#results");
    if (isNarrow()) q.placeholder = "Search";
    const index = [
      ...FIGURES.map((f) => ({ kind: "fig", id: f.id, name: f.name, meta: `${lifeCE(f)}, ${LANE[f.lane].name}`, key: norm(`${f.name} ${f.short} ${f.ar}`) })),
      ...DEBATES.map((d) => ({ kind: "deb", id: d.id, name: d.title, meta: `Debate, ${d.start}–${d.end}`, key: norm(`${d.title} ${d.term} ${d.ar}`) })),
      ...EVENTS.map((e) => ({ kind: "evt", id: e.id, name: e.title, meta: `Event, ${e.year}`, key: norm(e.title) })),
      ...Object.entries(PLACES).map(([id, p]) => ({ kind: "place", id, name: p[0], meta: `Place, ${REGIONS[p[3]]}`, key: norm(p[0]) }))
    ];
    let items = [], active = -1;
    function run() {
      const s = norm(q.value.trim());
      list.textContent = "";
      active = -1;
      if (!s) { list.hidden = true; q.setAttribute("aria-expanded", "false"); return; }
      const words = s.split(/\s+/);
      const order = { fig: 0, deb: 1, evt: 2, place: 3 };
      const starts = (it) => words.every((w) => it.key.split(/[\s-]+/).some((k) => k.startsWith(w))) ? 0 : 1;
      items = index.filter((it) => words.every((w) => it.key.includes(w)))
        .sort((a, b) => starts(a) - starts(b) || order[a.kind] - order[b.kind]).slice(0, 9);
      if (!items.length) { const li = el("li"); li.appendChild(el("span", "r-meta", "No matches. Try a shorter name, such as Ghazali or Bukhara.")); list.appendChild(li); }
      items.forEach((it, i) => {
        const li = el("li"); li.setAttribute("role", "option"); li.id = "r" + i; li.dataset.i = i;
        li.appendChild(el("span", "r-name", it.name)); li.appendChild(el("span", "r-meta", it.meta));
        list.appendChild(li);
      });
      list.hidden = false; q.setAttribute("aria-expanded", "true");
    }
    function choose(it) {
      list.hidden = true; q.setAttribute("aria-expanded", "false"); q.blur();
      if (it.kind === "place") {
        const f = FIGURES.find((g) => g.places.includes(it.id));
        if (state.sel) App.clear();
        Globe.focusPlace(it.id);
        if (f) TL.scrollToFig(f, true);
      } else App.select(it.kind, it.id, { scroll: true });
    }
    q.addEventListener("input", run);
    q.addEventListener("keydown", (e) => {
      const lis = list.querySelectorAll("li[role=option]");
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (!lis.length) return;
        active = (active + (e.key === "ArrowDown" ? 1 : -1) + lis.length) % lis.length;
        lis.forEach((li, i) => li.setAttribute("aria-selected", String(i === active)));
        q.setAttribute("aria-activedescendant", "r" + active);
      } else if (e.key === "Enter") {
        e.preventDefault();
        const it = items[active >= 0 ? active : 0];
        if (it) choose(it);
      } else if (e.key === "Escape") { list.hidden = true; q.value = ""; }
    });
    list.addEventListener("click", (e) => { const li = e.target.closest("li[role=option]"); if (li) choose(items[+li.dataset.i]); });
    document.addEventListener("click", (e) => { if (!e.target.closest(".search")) list.hidden = true; });
  })();

  // ---------------------------------------------------------------- region filter, browse, about
  (function controls() {
    const sel = $("#region");
    sel.appendChild(new Option("All regions", ""));
    for (const [id, name] of Object.entries(REGIONS)) sel.appendChild(new Option(name, id));
    sel.addEventListener("change", () => { state.region = sel.value; TL.filters(); });

    const figsBox = $("#browseFigs"), debsBox = $("#browseDebs");
    for (const era of ERAS) {
      const figs = FIGURES.filter((f) => f.mid >= era.start && f.mid < era.end).sort((a, b) => a.mid - b.mid);
      if (!figs.length) continue;
      const box = el("div", "browse-era");
      box.appendChild(el("h4", null, era.end === 1990 ? `${era.name}, from ${era.start}` : `${era.name}, ${era.start}–${era.end}`));
      const links = el("div", "links");
      for (const f of figs) { const b = el("button", "link", f.short); b.type = "button"; b.dataset.kind = "fig"; b.dataset.id = f.id; links.appendChild(b); }
      box.appendChild(links);
      figsBox.appendChild(box);
    }
    const dl = el("div", "browse-debs");
    for (const d of DEBATES.slice().sort((a, b) => a.start - b.start)) {
      const row = el("div");
      const b = el("button", "link", d.title); b.type = "button"; b.dataset.kind = "deb"; b.dataset.id = d.id;
      row.appendChild(b); row.appendChild(el("span", null, `${d.start}–${d.end}`));
      dl.appendChild(row);
    }
    debsBox.appendChild(dl);

    let lastFocus = null;
    const open = (m) => { lastFocus = document.activeElement; m.hidden = false; m.querySelector("[data-close]").focus(); };
    const close = (m) => { m.hidden = true; if (lastFocus) lastFocus.focus(); };
    $("#browseBtn").addEventListener("click", () => open($("#browse")));
    $("#aboutBtn").addEventListener("click", () => open($("#about")));
    for (const m of document.querySelectorAll(".modal")) {
      m.addEventListener("click", (e) => {
        if (e.target === m || e.target.closest("[data-close]")) close(m);
        const b = e.target.closest(".link[data-kind]");
        if (b) { m.hidden = true; App.select(b.dataset.kind, b.dataset.id, { scroll: true }); }
      });
    }
    $("#panelClose").addEventListener("click", () => App.clear());
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      const m = [...document.querySelectorAll(".modal")].find((x) => !x.hidden);
      if (m) close(m); else if (state.sel) App.clear();
    });
  })();

  // ---------------------------------------------------------------- routing and boot
  function fromHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return false;
    if (FIG.has(id)) App.select("fig", id, { scroll: true, force: true });
    else if (DEB.has(id)) App.select("deb", id, { scroll: true, force: true });
    else if (EVT.has(id)) App.select("evt", id, { scroll: true, force: true });
    else return false;
    return true;
  }

  function start(saved) {
    saved = saved || {};
    Globe.init();
    TL.init(saved);
    if (saved.sel) App.select(saved.sel.kind, saved.sel.id, { force: true });
    else fromHash();
    window.addEventListener("hashchange", fromHash);
    let rt = 0;
    window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { Globe.resize(); TL.resize(); }, 120); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { TL.rerender(); Globe.relayout(); });
    if (window.claude && window.claude.hot) window.claude.hot.snapshot(() => Object.assign({ sel: state.sel }, TL.snapshot()));
  }
  const hot = window.claude && window.claude.hot;
  if (hot && hot.ready) hot.ready(start); else start((hot && hot.data) || {});
})();
