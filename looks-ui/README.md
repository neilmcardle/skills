# Looks UI

A dark aesthetic layer for interfaces where the impression matters most: portfolios, launches and brand pages. It sits on top of [performance-ui](https://neilmcardle.com/work/performance-ui), which keeps pages fast and usable, and changes only what a crafted, dark site does differently.

It is written for AI coding agents first and people second.

Made by [Neil McArdle](https://neilmcardle.com), a product designer.

## What is in it

- `SKILL.md` holds the hard rules. Load performance-ui first, then this; where they disagree, Looks UI wins.
- `AGENTS.md` points tools that do not load skills to `SKILL.md`.
- `references/` explains each rule with its value and why.
- `tokens/tokens.json` is the source for every value. `node scripts/build-tokens.mjs` writes `tokens/tokens.css` and `tokens/usage.md`, a table of what each token is for. Do not edit those two by hand.
- performance-ui's `scripts/check-drift.mjs` checks copies of both systems.

## Where it came from

Each rule was picked one at a time in a side-by-side picker, alongside performance-ui, from the same 141 decisions. Looks UI is the 33 where the answer changes when the impression matters more than the last kilobyte.

## Credits

These are the people and guides I learned from. Every rule names where its idea came from in `references/`. I chose and set every value myself, and many decisions came from my own [sites](https://neilmcardle.com), product brands and writing rules.

| Source | What I learned from |
|---|---|
| [Impeccable](https://github.com/pbakaus/impeccable), by Paul Bakaus | Design craft rules |
| Apple | WWDC talks and the Human Interface Guidelines |
| [Emil Kowalski](https://emilkowal.ski) | His writing on motion and interaction, and Sonner |
| [Emil Kowalski's skills](https://github.com/emilkowalski/skills) | break-ui, mobile-native, animation-performance and pick-ui-library, four of his agent skills |
| Derek Briggs | Motion that settles, ordering by importance, frame-rate checks and turning corrections into rules |
| frontend-design, by Anthropic | Design skill for agents |
| Wireframe and Inflight | Their sites, for type sizes, columns and controls |
| Vercel | Web interface guidelines and React rules |
| web.dev, WCAG and Core Web Vitals | Speed and access |
| Baymard Institute | Forms and checkout research |
| Studio sites and torph | Showpiece effects |
| Robert Bringhurst, Brilliant and the CMA | Type scale, first run and price rules |

Looks UI also owes its edges to [Jakub Krehel](https://jakub.kr/work/shadows), on using shadows instead of borders.

## Licence

MIT.
