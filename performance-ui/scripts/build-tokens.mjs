import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = JSON.parse(await readFile(join(root, "tokens/tokens.json"), "utf8"));

const hexToRgb = (hex) => {
  const h = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  if (h.length === 6) return hex;
  const a = Math.round((parseInt(h.slice(6, 8), 16) / 255) * 100) / 100;
  return `rgb(${r} ${g} ${b} / ${a})`;
};

const format = (type, value) => {
  if (type === "color") return hexToRgb(value);
  if (type === "fontFamily") return value.map((f) => (f.includes(" ") ? `"${f}"` : f)).join(", ");
  if (type === "cubicBezier") return `cubic-bezier(${value.join(", ")})`;
  if (type === "shadow") {
    const { color, offsetX, offsetY, blur, spread } = value;
    return `${offsetX} ${offsetY} ${blur} ${spread} ${hexToRgb(color)}`;
  }
  return String(value);
};

const flat = [];
const walk = (node, path, inherited) => {
  const type = node.$type ?? inherited;
  if ("$value" in node) {
    flat.push({ path, type, value: format(type, node.$value), use: node.$description ?? "" });
    return;
  }
  for (const [key, child] of Object.entries(node)) {
    if (key.startsWith("$")) continue;
    walk(child, [...path, key], type);
  }
};
walk(source, [], undefined);

const name = (path) => `--${path.join("-")}`;
const tokensCss = `:root {\n${flat.map((t) => `  ${name(t.path)}: ${t.value};`).join("\n")}\n}\n`;

const get = (path) => flat.find((t) => t.path.join(".") === path)?.value;
const theme = [];
for (const t of flat) {
  const [group, ...rest] = t.path;
  const key = rest.join("-");
  if (group === "color") theme.push(`--color-${key}: ${t.value};`);
  if (group === "radius" && !key.startsWith("nested")) theme.push(`--radius-${key}: ${t.value};`);
  if (group === "shadow") theme.push(`--shadow-${key}: ${t.value};`);
  if (group === "ease") theme.push(`--ease-${key}: ${t.value};`);
  if (group === "font" && rest[0] === "family") theme.push(`--font-${rest[1]}: ${t.value};`);
  if (group === "font" && rest[0] === "weight") theme.push(`--font-weight-${rest[1]}: ${t.value};`);
}
for (const step of Object.keys(source.text).filter((k) => source.text[k].size)) {
  theme.push(`--text-${step}: ${get(`text.${step}.size`)};`);
  const tracking = get(`text.${step}.tracking`);
  const leading = get(`text.${step}.leading`);
  if (tracking) theme.push(`--text-${step}--letter-spacing: ${tracking};`);
  if (leading) theme.push(`--text-${step}--line-height: ${leading};`);
}
theme.push(`--spacing: ${get("space.1")};`);
theme.push(`--container-column: ${get("layout.column")};`);
theme.push(`--breakpoint-display: ${get("layout.display-step")};`);

const themeCss = `@theme {\n  --color-*: initial;\n${theme.map((l) => `  ${l}`).join("\n")}\n}\n`;

const cell = (text) => String(text).replace(/\|/g, "\\|");
const usage = [
  "# Token usage",
  "",
  "Generated from tokens.json by scripts/build-tokens.mjs. Edit the descriptions there, not here.",
  "",
  "| Token | Value | Use for |",
  "| --- | --- | --- |",
  ...flat.map((t) => `| \`${name(t.path)}\` | \`${cell(t.value)}\` | ${cell(t.use)} |`),
  "",
].join("\n");

await writeFile(join(root, "tokens/tokens.css"), tokensCss);
await writeFile(join(root, "tokens/usage.md"), usage);
await writeFile(join(root, "tokens/theme.css"), themeCss);
console.log(`Wrote ${flat.length} tokens to tokens.css, theme.css and usage.md`);
