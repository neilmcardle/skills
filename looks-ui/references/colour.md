# Colour

Dark, warm and quiet, so the work is the brightest thing on the page.

## Dark only

**Page #0d0d0c.** A near-black with a little warmth reads as a room with the lights low, not a screen turned off. This replaces performance-ui's light page.

```css
--color-bg: #0d0d0c;
color-scheme: dark;
```

Source: [neilmcardle.com](https://neilmcardle.com).

## Raised surfaces

**#161615, and #1d1d1b on hover.** Surfaces separate from the page by a small step in lightness plus the edge shadow, never by a border.

Source: [neilmcardle.com](https://neilmcardle.com).

## Ink and reading text

**Ink #ecebe7, text #8f8c86.** The subject of a sentence and every heading is ink; the rest is grey. The grey is 5.8:1 on the page, above the 4.5:1 floor.

Source: [neilmcardle.com](https://neilmcardle.com), WCAG.

## One accent

**A real colour, on the main action and the logo only.** Performance UI allows no accent at all, which strips a brand of its colour. Looks UI allows exactly one: the product's own hue, spent on the one thing people should press and on the logo. It has to read as a colour. A cream, beige, grey or near-white button looks like no accent at all, so it does not count. Its text must reach 4.5:1.

```css
--color-brand: /* the product's own hue, required */;
--color-on-brand: /* black or white, whichever passes 4.5:1 */;
```

Source: Performance UI test on a car rental home screen, Looks UI demo, 4 November 2026.

## Work carries its own colour

**A project card can wear its brand; the page cannot.** On a portfolio, the colours of each project live inside its card. The page around them stays ink and grey, so every project looks like itself and nothing fights.

Source: [neilmcardle.com](https://neilmcardle.com).

## Lines and selection

**Lines white at 6%; selection in ink.** Transparent white adapts to whatever surface it sits on. Selected text turns ink with page-coloured text, the dark page inverted for a moment.

```css
--color-line: rgb(255 255 255 / 0.06);
::selection { background: #ecebe7; color: #0d0d0c; }
```

Source: Impeccable craft floor, [neilmcardle.com](https://neilmcardle.com).

## Warm greys

**Greys lean warm.** The reading grey #8f8c86 and the surfaces carry a little warmth, so the page reads as a room with the lights low rather than a screen.

Source: [neilmcardle.com](https://neilmcardle.com).
