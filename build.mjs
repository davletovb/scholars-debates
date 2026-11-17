import fs from "fs";
const src = (f) => fs.readFileSync(new URL("./src/" + f, import.meta.url), "utf8");
const world = fs.readFileSync(new URL("./geo/world.topo.json", import.meta.url), "utf8");
let html = src("index.html");
const data = ["data-places.js", "data-figures.js", "data-debates.js"].map(src).join("\n");
html = html.replace("/*CSS*/", () => src("style.css"))
  .replace("/*WORLD*/", () => "const WORLD = " + world + ";")
  .replace("/*DATA*/", () => data)
  .replace("/*APP*/", () => src("app.js"));
fs.mkdirSync(new URL("./dist/", import.meta.url), { recursive: true });
fs.writeFileSync(new URL("./dist/index.html", import.meta.url), html);
console.log("dist/index.html", (html.length / 1024).toFixed(0) + " KB");
