import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative, resolve } from "node:path";

const here = join(dirname(fileURLToPath(import.meta.url)), "..");
const siblings = join(here, "..");

const CONFIG = join(here, "drift.config.json");

const SYSTEMS = {
  "performance-ui": join(siblings, "performance-ui"),
  "looks-ui": join(siblings, "looks-ui"),
};

const RETIRED = [
  { value: /cubic-bezier\(\s*0?\.16\s*,\s*1\s*,\s*0?\.3\s*,\s*1\s*\)/, was: "the expo curve this system retired in favour of --ease-out" },
];

const SKIP = new Set(["node_modules", ".next", ".git", "dist", "build"]);
const TEXT = /\.(css|tsx?|jsx?|mjs|md|html|json)$/;

const problems = [];
const notes = [];
let checked = 0;

const read = (file) => readFileSync(file, "utf8");
const show = (file) => relative(siblings, file);
const norm = (v) => v.replace(/\s+/g, "").replace(/(^|[^\d])0\./g, "$1.").toLowerCase();

const cssVars = (css) => {
  const out = {};
  for (const m of css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) out[m[1]] = m[2].replace(/\s+/g, " ").trim();
  return out;
};

const files = (target) => {
  if (!existsSync(target)) return null;
  if (!statSync(target).isDirectory()) return TEXT.test(target) ? [target] : [];
  const out = [];
  for (const name of readdirSync(target)) {
    if (SKIP.has(name)) continue;
    const full = join(target, name);
    if (statSync(full).isDirectory()) {
      const nested = files(full);
      if (nested) out.push(...nested);
    } else if (TEXT.test(name)) out.push(full);
  }
  return out;
};

const config = existsSync(CONFIG) ? JSON.parse(read(CONFIG)) : null;
const configRoot = config?.root ? resolve(here, config.root) : siblings;
const fromRoot = (p) => resolve(configRoot, p);

const present = {};
const tokens = {};
for (const [name, dir] of Object.entries(SYSTEMS)) {
  const css = join(dir, "tokens", "tokens.css");
  if (!existsSync(css)) continue;
  present[name] = dir;
  tokens[name] = cssVars(read(css));
}

if (!Object.keys(present).length) {
  console.error("No system found next to this script. Expected performance-ui/tokens/tokens.css.");
  process.exit(1);
}

for (const [name, dir] of Object.entries(present)) {
  const skill = join(dir, "SKILL.md");
  if (existsSync(skill)) {
    const body = read(skill);
    const block = (body.split("## Hard rules")[1] ?? "").split(/\n## /)[0];
    const numbers = [...block.matchAll(/^(\d+)\. /gm)].map((m) => Number(m[1]));
    if (!numbers.length) problems.push(`${name}/SKILL.md: no numbered hard rules found`);
    numbers.forEach((n, i) => {
      if (n !== i + 1) problems.push(`${name}/SKILL.md: hard rules jump from ${numbers[i - 1] ?? 0} to ${n}`);
    });
    for (const m of body.matchAll(/`references\/([\w-]+\.md)`/g)) {
      if (!existsSync(join(dir, "references", m[1]))) problems.push(`${name}/SKILL.md names references/${m[1]}, which does not exist`);
    }
    checked += 1;
  }

  const usage = join(dir, "tokens", "usage.md");
  if (existsSync(usage)) {
    const listed = new Set([...read(usage).matchAll(/\|\s*`(--[\w-]+)`\s*\|/g)].map((m) => m[1]));
    for (const key of Object.keys(tokens[name])) {
      if (key !== "color-scheme" && !listed.has(key)) problems.push(`${name}/tokens/usage.md is missing ${key}. Rebuild it.`);
    }
    for (const key of listed) {
      if (!(key in tokens[name])) problems.push(`${name}/tokens/usage.md lists ${key}, which is not in tokens.css. Rebuild it.`);
    }
    checked += 1;
  }
}

const curveTokens = new Set(
  Object.values(tokens).flatMap((t) => Object.values(t)).filter((v) => v.startsWith("cubic-bezier")).map(norm),
);

const offSystem = new Map();
const scanCurves = (list, strict) => {
  for (const target of list) {
    const found = files(target);
    if (found === null) {
      if (strict) problems.push(`${show(target)} is in drift.config.json but does not exist`);
      continue;
    }
    for (const file of found) {
      for (const m of read(file).matchAll(/cubic-bezier\([^)]*\)/g)) {
        if (curveTokens.has(norm(m[0]))) continue;
        const key = m[0].replace(/\s+/g, " ");
        offSystem.set(key, [...new Set([...(offSystem.get(key) ?? []), show(file)])]);
      }
      checked += 1;
    }
  }
};

const allowed = (config?.allowRetired ?? []).map((a) => ({ ...a, abs: fromRoot(a.file) }));
const scanRetired = (list, strict) => {
  for (const target of list) {
    const found = files(target);
    if (found === null) {
      if (strict) problems.push(`${show(target)} is in drift.config.json but does not exist`);
      continue;
    }
    for (const file of found) {
      const text = read(file);
      const pass = allowed.find((a) => a.abs === file);
      for (const { value, was } of RETIRED) {
        if (!value.test(text)) continue;
        if (pass) notes.push(`${show(file)} uses ${was}, allowed: ${pass.why}`);
        else problems.push(`${show(file)} still uses ${was}`);
      }
      checked += 1;
    }
  }
};

const own = Object.values(present).flatMap((dir) => [
  join(dir, "references"),
  join(dir, "tokens"),
  join(dir, "SKILL.md"),
  join(dir, "specimen.html"),
]);
scanCurves(own, false);
scanRetired(own, false);

if (config) {
  for (const { system, file } of config.skillCopies ?? []) {
    const abs = fromRoot(file);
    if (!existsSync(abs)) {
      problems.push(`${show(abs)} is in drift.config.json but does not exist`);
      continue;
    }
    if (!tokens[system]) {
      problems.push(`${show(abs)} claims to copy ${system}, which is not here`);
      continue;
    }
    const [text, block = ""] = read(abs).split("\n## Tokens (tokens/tokens.css)");
    const source = read(join(present[system], "SKILL.md"));
    if (text.trim() !== source.trim()) problems.push(`${show(abs)}: skill text differs from ${system}/SKILL.md`);
    const copied = cssVars(block);
    for (const [k, v] of Object.entries(tokens[system])) {
      if (!(k in copied)) problems.push(`${show(abs)} is missing ${k}`);
      else if (norm(copied[k]) !== norm(v)) problems.push(`${show(abs)}: ${k} is ${copied[k]}, source is ${v}`);
    }
    for (const k of Object.keys(copied)) if (!(k in tokens[system])) problems.push(`${show(abs)}: ${k} is not in ${system}`);
    checked += 1;
  }

  for (const alias of config.varAliases ?? []) {
    const want = tokens[alias.system]?.[alias.token];
    if (!want) {
      problems.push(`drift.config.json aliases ${alias.name} to ${alias.system} ${alias.token}, which is not here`);
      continue;
    }
    for (const dir of alias.dirs ?? []) {
      const found = files(fromRoot(dir));
      if (found === null) {
        problems.push(`${show(fromRoot(dir))} is in drift.config.json but does not exist`);
        continue;
      }
      for (const file of found.filter((f) => f.endsWith(".css"))) {
        const got = cssVars(read(file))[alias.name];
        if (got && !got.startsWith("var(") && norm(got) !== norm(want)) {
          problems.push(`${show(file)}: ${alias.name} is ${got}, ${alias.system} ${alias.token} is ${want}`);
        }
        checked += 1;
      }
    }
  }

  scanCurves((config.curveScan ?? []).map(fromRoot), true);
  scanRetired((config.retiredScan ?? []).map(fromRoot), true);
}

console.log(`Checked ${checked} files across ${Object.keys(present).length} system(s): ${Object.keys(present).join(", ")}.`);
if (!config) {
  console.log("No drift.config.json, so only this repository was checked. Copy drift.config.example.json to check your own projects against it.");
}

if (notes.length) console.log(`\n${notes.map((n) => `  note  ${n}`).join("\n")}`);

if (offSystem.size) {
  console.log("\nEasing curves that are not tokens (fine if deliberate, worth a look if not):");
  for (const [curve, where] of offSystem) console.log(`  ${curve}\n    ${where.join("\n    ")}`);
}

if (problems.length) {
  console.log(`\n${problems.length} out of step:`);
  console.log(problems.map((p) => `  ${p}`).join("\n"));
  process.exit(1);
}

console.log("\nEverything checked matches its source.");
