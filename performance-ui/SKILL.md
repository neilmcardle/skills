---
name: performance-ui
description: Neil McArdle's interface system for sites where speed matters most, such as booking flows, shops, news and anything used on slow phones. Use it when building, styling or reviewing UI for that kind of site, before choosing any colour, size, space, radius, motion, component pattern or loading strategy. Values live in tokens/; the reasons and the detail live in references/.
---

# performance-ui

Interfaces that are fast, calm and precise. Every choice here costs little or nothing in load time or smoothness. The page exists to help someone finish a task, so the interface does its job and stays out of the way.

Use the values in `tokens/tokens.css` (or `tokens/theme.css` with Tailwind). Never type a raw colour, size, space, radius or duration that a token already covers. `tokens/usage.md` says what each token is for and where it must not go.

## Hard rules

Every rule is either **Foundation** or **Style**. Foundation rules make any interface better: speed, access, restraint in motion, honest flows. Style rules are Performance UI's own look. See "When other UI is already there" below for which ones apply.

### Colour
1. **Style.** Page `#fafafa`, surfaces white, reading text `#5c5c5c`, headings `#0d1117`.
2. **Style.** No accent colour. Actions, links and status use `#1d1d1f`; emphasis comes from weight and underline.
3. **Style.** Hairlines are black at 4%. Greys are neutral.
4. **Foundation.** Status is ink plus an icon, never colour alone.
5. **Style.** Light only, unless the product obviously needs a dark mode. Then compose one from the same roles; never invert.

### Type
6. **Style.** Inter only, one self-hosted variable file, preloaded, with a metric-matched fallback.
7. **Foundation.** Six sizes and no others: 13, 16, 20, 24, 44 and 56px. Anything else snaps to the nearest one.
8. **Style.** Reading text 16px at weight 425, tracking -1%, line height 1.5. Interface text 13px at 450.
9. **Style.** Big headings 44px on phones and 56px from 700px wide, weight 520, tracking -4%, line height 1.02.
10. **Foundation.** Sentence case everywhere. No labels above headings. Tabular figures for numbers.

### Space and shape
11. **Foundation.** Spacing comes from the 4px scale: 4, 8, 12, 16, 24, 32, 48, 64.
12. **Style.** One centred column, 648px wide, 16px side margins on phones. Reading lines stop at 64 characters.
13. **Style.** Buttons are pills, cards 12px, fields 8px. A nested corner equals the inner radius plus the gap.
14. **Style.** Cards separate with one shadow, `0 4px 24px` at 8%. Images get a 1px inner ring at 6%.

### Controls
15. **Style.** Buttons are 36px tall, 16px side padding, 13px text at 500. Filled, then outline, then plain text. No arrows.
16. **Foundation.** Fields are boxed, 40px tall, 16px text, label above. Check a field after the first time someone leaves it, then live.
17. **Foundation.** Every tap target is at least 44px. Hover only applies to real pointers.
18. **Foundation.** Focus is a 2px ink outline, offset 2px, shown for keyboard use only.

### Motion
19. **Style.** Ease out, `cubic-bezier(0.2, 0.8, 0, 1)`. Entrances 240ms, exits at 0.4 of that, modals 320ms. The curve covers the distance early and spends the rest settling, so judge motion by how fast it looks, not its total length.
20. **Foundation.** Animate transform and opacity only. Use transitions for anything that can be triggered twice in a second.
21. **Foundation.** The more often something is seen, the less it moves. Nothing triggered from the keyboard animates. Anything moving towards a hard stop eases in and stops; only things moving into open space may spring.
22. **Foundation.** One authored moment per page. No fade-up on every section, no intro sequence.
23. **Foundation.** Reduced motion swaps movement for a short fade.

### Components and flows
24. **Foundation.** One-column forms. Errors sit under the field and say how to fix it.
25. **Foundation.** Show the total price from the first price people see.
26. **Foundation.** Undo instead of confirming, except for what cannot be undone.
27. **Foundation.** Show nothing for waits under 300ms. After that, a shimmering skeleton the shape of what is coming.
28. **Foundation.** Search results update as you type and the search term lives in the URL.

### Performance
29. **Foundation.** Budgets: 150 KB of JavaScript (compressed), 800 KB per page, one font file, 25 requests, no image over 200 KB without a reason.
30. **Foundation.** Targets on a mid-range phone at the 75th percentile: largest paint 1.8s, interaction delay 120ms, layout shift 0.02. Motion holds 60fps with no frame over 25ms; watch a frame meter before choosing between designs.
31. **Foundation.** Server-rendered pages with small interactive islands. Heavy parts load when needed, analytics after load.
32. **Foundation.** Reserve the space for everything that loads. Video waits behind a poster until it is in view.

### Words
33. **Foundation.** No em dashes, no closing summary lines, buttons say exactly what they do, errors say the problem and the fix.

## When other UI is already there

- If Performance UI is the only system on the page, apply every rule.
- If the page already has a brand or a design system, or another skill is loaded after this one, apply the Foundation rules only. Keep the existing colours, typefaces, radii, shadows, layout and section order.
- Foundation rules that carry values keep their intent rather than their numbers. Use the page's own type and spacing scale if it has one, but stay on it. Whatever typeface is kept still loads as one preloaded file, reading lines still stop near 64 characters, and colour is still never the only signal.
- Never reorder, remove or merge sections you did not add.

## Before you call it done

Run the finishing list and the review habits in `references/system.md`, and check every list with worst-case data from `references/access.md`. Then write the gaps file described there: every rule you could not follow, every value you were unsure of, and what a person should check by hand.

## References

Open the one you need:

- `references/colour.md`
- `references/type.md`
- `references/space-and-shape.md`
- `references/icons-and-imagery.md`
- `references/controls.md`
- `references/motion.md`
- `references/components.md`
- `references/flows.md`
- `references/layout.md`
- `references/words.md`
- `references/performance.md`
- `references/access.md`
- `references/system.md`
