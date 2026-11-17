# Colour

The quietest decisions on the page, and the ones every other choice sits on.

## Page background

**Off-white.** The colour everything sits on sets the temperature of the whole site. White panels and hairlines only read when the page is a step off white.

```css
--color-bg: #fafafa;
```

Tailwind: `bg-bg`

Spec: Page fill #fafafa

Source: [neilmcardle.com](https://neilmcardle.com).

## Reading text colour

**Ink grey #5c5c5c.** Near-black reading text at a large size is the main reason a page feels heavy. A grey that still passes contrast keeps it light.

```css
--color-text: #5c5c5c;
```

Tailwind: `text-text`

Spec: Body #5c5c5c, 6.4:1 on #fafafa

Source: General practice.

## Heading colour

**#0d1117.** Pure black against off-white is harsher than it needs to be. A softened black keeps headings strong without the glare.

```css
--color-ink: #0d1117;
```

Tailwind: `text-ink`

Source: General practice.

## Accent colour strategy

**None. The ink is the accent.** Rarity gives an accent its force. Spend it on one job and people learn where to look.

Actions, links and status use #1d1d1f. Emphasis comes from weight and underline, never a second colour.

Source: Impeccable, [Neil McArdle's brands](https://neilmcardle.com).

## Line colour

**Transparent black, strength 0.04.** Faint 1px lines define shapes without adding weight. Transparent black adapts to whatever sits underneath; solid grey stays exact.

```css
--color-line: rgb(0 0 0 / 0.04);
```

Tailwind: `border-line`

Source: General practice.

## Dark mode

**Light only, unless dark is obviously needed.** Pick light or dark from where and when people use the thing, not from the category. Ship light with `color-scheme: light`. Build a dark mode only when the product clearly calls for one, such as something used at night or in a dark room, and then compose it as its own palette from the same roles. Never invert.

Source: Impeccable, Apple.

## Status colours

**Ink and icon.** Success, warning and error need to read at a glance, but they should not shout louder than the content. Colour is never the only signal.

```css
--success: var(--color-action);
--warning: var(--color-action);
--error: var(--color-action);
```

Source: Apple, Impeccable.

## Grey temperature

**Neutral.** Greys lean warm, cool or neither. Tint them only when the brand hue gives a reason; neutral is a real choice too.

```css
--color-grey-50: #fafafa;
--color-grey-200: #e8e8e8;
--color-grey-400: #a3a3a3;
--color-grey-500: #737373;
--color-grey-600: #5c5c5c;
--color-grey-900: #1d1d1f;
```

Source: Impeccable.
