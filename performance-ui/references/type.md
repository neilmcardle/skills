# Type

Size, weight, tracking and leading set as one system, never size alone.

## Sizes

**Six sizes and no others.** A fixed list does what a ratio scale does, more plainly: anyone building picks from it instead of inventing a new size.

| Size | Use | Token |
|--:|---|---|
| 13px | Interface text, labels, buttons | `--text-interface-size` |
| 16px | Reading text, inputs | `--text-body-size` |
| 20px | Subheads | `--text-subhead-size` |
| 24px | Titles | `--text-title-size` |
| 44px | Big headings on phones | `--text-display-phone-size` |
| 56px | Big headings from 700px wide | `--text-display-size` |

A size that is not on the list snaps to the nearest one.

Source: [neilmcardle.com](https://neilmcardle.com).

## Interface typeface

**Inter.** The system font costs nothing to load and is tuned for screens. A variable web font buys in-between weights like 425 and a consistent look everywhere.

```css
--font-family-sans: Inter, system-ui, sans-serif;
```

Tailwind: `fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] }`

Source: Apple, [neilmcardle.com](https://neilmcardle.com).

## Display typeface

**Same as interface.** One family can do everything. A second face earns its place only if it does a job the first cannot.

```css
font-family: var(--font-family-sans);
font-weight: 520;
letter-spacing: -0.04em;
```

Source: frontend-design, [Neil McArdle's brands](https://neilmcardle.com).

## Reading text

**Size 16.0px, weight 425, tracking -1.0%, line height 1.50.** Smaller, slightly heavier and slightly tighter reads as precise. [neilmcardle.com](https://neilmcardle.com) moved from 17px at 400 to 15px at 425 for that reason.

```css
font-size: 16px;
font-weight: 425;
letter-spacing: -0.01em;
line-height: 1.5;
```

Tailwind: `text-[16px] font-[425] tracking-[-0.01em] leading-[1.5]`

Spec: Inter 16/24, weight 425, tracking -1%

Source: [neilmcardle.com](https://neilmcardle.com).

## Interface text

**Size 13.0px, weight 450, tracking -0.5%.** Small and consistent is what makes the big moments feel big.

```css
font-size: 13px;
font-weight: 450;
letter-spacing: -0.005em;
```

Tailwind: `text-[13px] font-[450] tracking-[-0.005em]`

Source: General practice.

## Big headings

**Crisp 520, size 56px, tracking -4.0%, line height 1.02.** One big heading next to small, precise details is the contrast that makes a page feel dainty. Crisp weight with tight tracking reads modern; light weight reads fragile.

```css
font-size: 56px;
font-weight: 520;
letter-spacing: -0.04em;
line-height: 1.02;
```

Tailwind: `text-[56px] font-[520] tracking-[-0.04em] leading-[1.02]`

Source: General practice.

## Line length

**Measure 64ch.** Long lines make the eye lose its place on the way back. Short lines break up thought. Most reading sits well between 55 and 75 characters.

```css
max-width: 64ch;
```

Tailwind: `max-w-[64ch]`

Source: Impeccable, frontend-design.

## Tracking that changes with size

**Size-specific.** Letters look further apart as they grow, so large text wants negative tracking and small text wants none or a touch more. One value everywhere is wrong somewhere.

Display -4%, titles and subheads -2.5%, reading -1%, interface -0.5%.

Source: Apple.

## Numbers

**Tabular.** Proportional figures make columns of prices wobble and make counters jitter as they change. Tabular figures line up.

```css
font-variant-numeric: tabular-nums;
```

Tailwind: `tabular-nums`

Source: Impeccable, break-ui.

## Line breaks

**Balance headings, pretty text.** Browsers can now balance headings across lines and avoid a lonely last word in paragraphs. It costs one line of CSS.

```css
h1, h2, h3 { text-wrap: balance; }
p { text-wrap: pretty; }
```

Tailwind: `text-balance / text-pretty`

Source: Web platform.

## Small labels

**Sentence case.** Tracked-out capitals above everything is the most common template tell. Sentence case at the interface size reads as written by a person.

Source: frontend-design, no AI tells.

## How web fonts arrive

**Swap, matched fallback.** Between request and arrival the browser shows nothing, a fallback, or the real face. The worst outcome is text that jumps when the font swaps in.

```css
@font-face {
  font-family: "Inter Fallback";
  src: local("Arial");
  size-adjust: 107%;
  ascent-override: 90%;
}
font-display: swap;
```

Self-host one variable woff2, subset to the characters you use, preload it, and give the fallback matched metrics. next/font does this for you.

Source: Vercel, web.dev.

## Paragraph breaks

**Space between.** Either a space between paragraphs or an indent on the first line. Both at once marks the same boundary twice.

```css
p + p { margin-top: 0.75em; }
```

Source: Impeccable.
