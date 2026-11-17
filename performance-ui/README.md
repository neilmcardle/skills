# performance-ui

An interface system for sites where speed matters most: booking flows, shops, news, and anything used on a slow phone with patchy signal. Every choice in it costs little or nothing in load time or smoothness.

It is written for AI coding agents first and people second. Give it to your agent and the pages it builds start from the same colours, sizes, motion and habits, with the reasons attached.

Made by [Neil McArdle](https://neilmcardle.com), a product designer.

## What is in it

- `SKILL.md` holds the hard rules and an index of the references. Agents read this first.
- `AGENTS.md` points tools that do not load skills to `SKILL.md`.
- `references/` explains every rule, area by area, with its value and why.
- `tokens/tokens.json` is the single source for every value, in the W3C design token format that Figma variables and Tokens Studio read.
- `tokens/tokens.css` and `tokens/theme.css` are generated from it: plain CSS variables, and a Tailwind v4 theme.
- `tokens/usage.md` is generated too: a table of every token, its value and what it is for.
- `tokens/budgets.json` holds the page weight budget and speed targets.
- `fonts/` holds Inter as one variable file, with its SIL Open Font License in `OFL.txt`.
- `specimen.html` shows the system in use. Serve the folder and open it in a browser.

## Use it with an agent

In Claude Code, copy this folder into `.claude/skills/performance-ui/` in your project, or into `~/.claude/skills/` to use it everywhere. The skill loads when you build or review UI.

With other tools, keep `AGENTS.md` at the root of your project and point it at this folder.

## Use the tokens

Plain CSS:

```css
@import "performance-ui/tokens/tokens.css";
```

Tailwind v4:

```css
@import "tailwindcss";
@import "performance-ui/tokens/theme.css";
```

## Change a value

Edit `tokens/tokens.json`, then run:

```bash
node scripts/build-tokens.mjs
```

Both CSS files and the usage table are rewritten from the source. Do not edit them by hand. To prove nobody has, rebuild and check that nothing moved:

```bash
node scripts/build-tokens.mjs && git diff --exit-code tokens/
```

## Check for drift

```bash
node scripts/check-drift.mjs
```

On its own it checks this repository: the hard rules are numbered without gaps, every reference file the skill names exists, the usage table lists exactly the tokens in `tokens.css`, no retired value has come back, and every easing curve in the system is a token. It says how many files it checked, so a pass is never silent.

To check your own projects against the system as well, copy `drift.config.example.json` to `drift.config.json` and name the copies and directories to watch. It then compares each copy of the skill and the tokens with the source, flags any CSS variable that has drifted from the token it aliases, and lists curves that are not tokens. A path in the config that does not exist is reported as a failure rather than skipped, so the check cannot pass by finding nothing.

It exits with an error when something is out of step, so it can run before a commit or in CI. `drift.config.json` is ignored by git, because the paths in it are yours.

## Where the choices came from

Each rule was picked one at a time in a side-by-side picker, against the practice of Apple, Emil Kowalski, Vercel, Baymard, Google's Core Web Vitals, WCAG 2.2 and Neil's own [sites](https://neilmcardle.com). The references name the source where it matters.

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

## Licence

MIT. Use it, change it, ship it. Inter, in `fonts/`, is by Rasmus Andersson and carries its own SIL Open Font License.
