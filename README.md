# Interface systems

Two interface systems for building and reviewing UI, written for AI coding agents first and people second. Each one is a set of numbered rules with the values attached, a reference file per area giving the reason for every value and where the idea came from, design tokens in the W3C format, and a checker that tells you when a codebase has drifted from them.

**performance-ui** is for sites where speed matters most: booking flows, shops, news, anything used on a slow phone with patchy signal. Every choice in it costs little or nothing in load time or smoothness. 33 rules, 13 reference files, 88 tokens.

**looks-ui** is a dark layer that sits on top, for pages where the impression matters most: portfolios, launches, brand pages. It changes only what a crafted dark site does differently, and spends a little speed where the impression is worth it. 21 rules, 7 reference files, 32 tokens.

Load performance-ui first. Where the two disagree, looks-ui wins.

Made by [Neil McArdle](https://neilmcardle.com), a product designer.

## Install

```bash
npx skills@latest add neilmcardle/skills
```

Run the same command again to update. It re-clones the current version, so an installed copy does not otherwise change when these systems do. Each `SKILL.md` carries the version it was published at.

Or copy either folder into `.claude/skills/` in a project, or into `~/.claude/skills/` to use it everywhere. For tools that do not load skills, each folder has an `AGENTS.md` that points at its `SKILL.md`.

## Applying them to UI that already exists

Every rule in performance-ui is marked Foundation or Style. Foundation rules make any interface better: speed, access, restraint in motion, honest flows. Style rules are this system's own look.

When a page already has a brand or a design system of its own, only the Foundation rules apply. The existing colours, typefaces, radii, shadows, layout and section order are left alone, and a Foundation rule that carries a value keeps its intent rather than its number: reading lines still stop near 64 characters, the typeface still loads as one preloaded file, colour is still never the only signal, but all of it on the host's own scale.

This is the part most rule sets leave out, and it is why these can be pointed at work that is already underway.

## What is in each system

| | |
|---|---|
| `SKILL.md` | the hard rules, and an index of the references. Agents read this first |
| `references/` | one file per area: every rule with its value, its reason and its source |
| `tokens/tokens.json` | the single source for every value, in the W3C design token format that Figma variables and Tokens Studio read |
| `tokens/tokens.css` | generated CSS variables. performance-ui also generates `theme.css`, a Tailwind v4 theme |
| `tokens/usage.md` | generated: every token, its value, and where it must not go |
| `scripts/build-tokens.mjs` | rewrites the generated files from `tokens.json` |

performance-ui also carries `tokens/budgets.json`, the page weight budget and speed targets; `specimen.html`, the whole system in use on one page; `fonts/`, Inter as a single variable file; and the drift checker.

## Changing a value

Edit `tokens/tokens.json`, then rebuild:

```bash
node scripts/build-tokens.mjs
```

Never edit the generated files by hand. To prove nobody has:

```bash
node scripts/build-tokens.mjs && git diff --exit-code tokens/
```

## Checking a codebase against the systems

```bash
cd performance-ui
node scripts/check-drift.mjs
```

On its own it checks this repository: the hard rules are numbered without gaps, every reference file the skill names exists, the usage table matches `tokens.css`, no retired value has come back, and every easing curve is a token.

Installed with `npx skills add`, both systems sit side by side in `~/.agents/skills/`, which is the layout the script expects, so it runs there without any setup.

To check your own projects as well, copy `drift.config.example.json` to `drift.config.json` and name the copies and directories to watch. Paths in it resolve against `root`, which is itself relative to the system's own folder, so the example uses an absolute path to keep that unambiguous. It then compares each copy of a skill and its tokens against the source, flags any CSS variable that has drifted from the token it aliases, and lists curves that are not tokens. A path in the config that does not exist is reported as a failure rather than skipped, so the check cannot pass by finding nothing. It reports how many files it looked at, so a pass is never silent.

It exits non-zero when something is out of step, so it can run before a commit or in CI.

## Where the rules came from

Each system's own README has the full table. The short version: Apple's Human Interface Guidelines and WWDC talks, Emil Kowalski's writing and his skills, Impeccable by Paul Bakaus, Anthropic's frontend-design, Vercel's interface guidelines, Derek Briggs on motion, Baymard on forms and checkout, WCAG and Core Web Vitals, Jakub Krehel on shadows, and Bringhurst on type. Every rule in `references/` names its source. The values were chosen one at a time, in a side by side picker, across 141 decisions.

## Licence

MIT for both systems. Inter, in `performance-ui/fonts/`, is by Rasmus Andersson under the SIL Open Font License, included there as `OFL.txt`.
