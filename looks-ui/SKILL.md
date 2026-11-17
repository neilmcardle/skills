---
name: looks-ui
description: Neil McArdle's dark aesthetic layer for interfaces where the impression matters most, such as portfolios, launches and brand pages. It sits on top of performance-ui. Load performance-ui first, then this skill; where they disagree, Looks UI wins.
---

# Looks UI

performance-ui keeps a page fast and usable. Looks UI gives it a dark, quiet, crafted feel, and spends a little speed where the impression is worth it. Load performance-ui first. Every rule here replaces the matching performance-ui rule; anything not mentioned still follows performance-ui.

Use the values in `tokens/tokens.css`. Never type a raw colour, radius, shadow or duration that a token already covers. `tokens/usage.md` says what each token is for and where it must not go. Finish with performance-ui's gaps file, adding any Looks UI rule you could not follow.

## Hard rules

### What the page is for
1. Experience: the work fills the first view and the chrome stays small. One memorable thing per page; everything around it stays quiet.

### Colour
2. Dark first. Page `#0d0d0c`, raised surfaces `#161615`, raised on hover `#1d1d1b`, `color-scheme: dark`.
3. Ink `#ecebe7` for headings and the subject of a sentence. Reading text `#8f8c86`, 5.8:1 on the page. Greys lean warm.
4. One accent, and it must be a real colour: the product's own hue, on the main action and the logo only. Cream, beige, grey or near-white do not count. Its text must reach 4.5:1. A project card can wear its own brand; the page around it cannot.
5. Lines are white at 6%. Text selection is ink with page-coloured text.

### Edges and shape
6. Shadows, not borders: a white ring at 6% plus two soft dark shadows (`--edge`). Hover fades in `--edge-hover` on a layer, never by transitioning `box-shadow`.
7. Images and video get a 1px inner outline, white at 6%.
8. Cards and frames 20px, media inside them 10px, fields 10px, chips 7px, buttons are pills.

### Type
9. Inter only. Reading text 16px at 400, line height 1.6, no tracking. Interface text 13px at 400. performance-ui's heading sizes stay.
10. The subject of a sentence in ink at 500; the rest in grey.
11. No widows and no early wraps. Headings, quotes and short lines use `text-wrap: balance`; paragraphs use `text-wrap: pretty`. Text fills the column up to 64 characters; never cap a quote or line narrower than the column it sits in.

### Layout
12. One left-aligned column, 600px wide, 16px phone margins. A side rail suits one long page; use a top bar when there are many pages.
13. A sticky header may be translucent: `rgb(13 13 12 / 0.82)` with a 16px blur. It is the only blur allowed by default.

### Motion and sound
14. Ease out (performance-ui's curve), 400ms for things that move across the page; performance-ui durations for controls. The 400ms should look as quick as 200ms, with the rest spent settling. In a sequence, the most important element settles last. Press shrinks to 0.96 over 160ms.
15. Nothing reveals on scroll and pages change instantly. Gestures settle with a spring (response 0.48s, damping 0.8), but only into open space; anything heading for a hard stop eases in.
16. Lift on hover only for a stack or a featured card. Every other card gets the stronger edge, not a lift.
17. Reduced motion swaps movement for a short fade. It never removes the feedback.
18. Sound is optional: quiet (0.2 or less), mouse and keyboard only, never on scroll or touch, at least 120ms apart, silent until the first click.
19. Hover previews need a touch version: first tap shows, second tap opens, tapping elsewhere closes.

### Showpiece effects
20. At most one showpiece per page, in its own frame with a caption, paused off screen, with a still for reduced motion. Choose from the menu in `references/effects.md`, which states each one's cost.

### Words
21. Write as whoever owns the work: a sole author as I, anything larger as itself. Sentence case, no em dashes, no labels above headings.

## References

- `references/colour.md`
- `references/edges.md`
- `references/type.md`
- `references/layout.md`
- `references/motion.md`
- `references/touch.md`
- `references/effects.md`
