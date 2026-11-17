# Icons and imagery

Drawn marks, product shots and what shows while images load.

## Icon style

**Outline 1.5.** One stroke weight and one style across every icon. Mixed sets look assembled rather than drawn.

```css
stroke-width: 1.5;
```

Source: Impeccable craft floor.

## Icon size

**Icon size 16px.** Icons that match the cap height read as part of the line, not stickers on it.

```css
width: 16px;
height: 16px;
```

Tailwind: `size-[16px]`

Source: General practice.

## How product shots are shown

**Real size, flat.** A product drawn at real size reads as a working tool. Device frames say mobile. Full-bleed says mood.

Source: General practice.

## While images load

**Flat colour.** Something should hold the space so nothing jumps. A flat colour is free; a blurred preview is nicer but costs a few bytes per image.

```css
background: var(--dominant-colour);
aspect-ratio: 16 / 9;
```

Store each image's dominant colour with it and paint that while it loads.

Source: Vercel, web.dev.

## Emoji standing in for icons

**Drawn icons only.** Emoji and unicode glyphs render differently on every platform and never match the type. Icons should be drawn, in one weight.

Source: Impeccable craft floor.
