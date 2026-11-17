import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = JSON.parse(await readFile(join(root, "tokens/tokens.json"), "utf8"));

const hexToRgb = (hex) => {
  const h = hex.replace("#", "");
  if (h.length === 6) return hex;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  const a = Math.round((parseInt(h.slice(6, 8), 16) / 255) * 100) / 100;
  return `rgb(${r} ${g} ${b} / ${a})`;
};

const layer = ({ color, offsetX, offsetY, blur, spread }) =>
  `${offsetX} ${offsetY} ${blur} ${spread} ${hexToRgb(color)}`;

const format = (type, value) => {
  if (type === "color") return hexToRgb(value);
  if (type === "shadow") return [value].flat().map(layer).join(", ");
  return String(value);
};

const flat = [];
const walk = (node, path, inherited) => {
  const type = node.$type ?? inherited;
  if ("$value" in node) {
    flat.push({ path, value: format(type, node.$value), use: node.$description ?? "" });
    return;
  }
  for (const [key, child] of Object.entries(node)) {
    if (key.startsWith("$")) continue;
    walk(child, [...path, key], type);
  }
};
walk(source, [], undefined);

const name = (path) => `--${path.filter((p) => p !== "default").join("-")}`;
const tokensCss = `:root {\n  color-scheme: dark;\n${flat.map((t) => `  ${name(t.path)}: ${t.value};`).join("\n")}\n}\n`;

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
console.log(`Wrote ${flat.length} tokens to tokens.css and usage.md`);
