// Fails if components/app code hard-codes colors that would ignore the theme switch.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const roots = ["components", "app"];
const skip = new Set(["globals.css"]); // the only place raw color values may live
const palette = "slate|gray|zinc|neutral|stone|red|orange|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose";
const rules = [
  [/#[0-9a-fA-F]{3,8}\b/, "hex color"],
  [/\brgba?\(/, "rgb()/rgba()"],
  [/\bhsla?\(/, "hsl()/hsla()"],
  [new RegExp(`\\b(?:bg|text|border|ring|from|via|to|fill|stroke|shadow|divide|outline|decoration|accent|caret)-(?:${palette})-\\d{2,3}\\b`), "default Tailwind palette color"],
];
const allowed = [/text-amber-400/]; // gold review stars

const files = [];
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if ([".tsx", ".ts", ".css"].includes(extname(p)) && !skip.has(f)) files.push(p);
  }
};
roots.forEach(walk);

let bad = 0;
for (const file of files) {
  readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    if (allowed.some((a) => a.test(line))) return;
    for (const [re, what] of rules) {
      if (re.test(line)) {
        console.error(`${file}:${i + 1}  ${what}: ${line.trim().slice(0, 110)}`);
        bad++;
        break;
      }
    }
  });
}
if (bad) {
  console.error(`\n${bad} hard-coded color(s). Use theme tokens (brand-*, accent, ink, surface-muted, line) so both themes work.`);
  process.exit(1);
}
console.log("check:theme ✓ no hard-coded colors");
