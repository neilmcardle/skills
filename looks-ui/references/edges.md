# Edges

How surfaces separate from the page without borders.

## Shadows instead of borders

**A transparent ring plus two soft shadows.** A solid border colour only looks right on the background it was chosen for. A white ring at low opacity adapts to any surface, and the two dark shadows add depth that a border cannot.

```css
box-shadow: var(--edge);
```

Source: Jakub Krehel, jakub.kr/work/shadows, adapted for dark.

## Hover

**A stronger edge, faded in.** On hover the ring goes from 6% to 11% white and the shadows deepen. Put the hover edge on a layer and fade its opacity; transitioning `box-shadow` repaints every frame.

```css
.card::after { content: ""; position: absolute; inset: 0; border-radius: inherit; box-shadow: var(--edge-hover); opacity: 0; transition: opacity 0.2s var(--ease-out); pointer-events: none; }
.card:hover::after { opacity: 1; }
```

If the card clips its content, use an inner ring on the layer instead: `box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.11)`.

Source: [neilmcardle.com](https://neilmcardle.com), performance-ui motion rules.

## Lifted things

**Popovers, peeks and stacked cards use `--edge-lifted`.** A ring and one deep shadow, for anything that floats above the page.

Source: [neilmcardle.com](https://neilmcardle.com).

## Images and dividers

**1px, white at 6%.** Images get an inner outline so dark images do not melt into the page. Dividers are an inset line, not a border.

```css
img { outline: 1px solid var(--color-image-ring); outline-offset: -1px; }
.row + .row { box-shadow: inset 0 1px 0 var(--color-line); }
```

Source: [neilmcardle.com](https://neilmcardle.com).
