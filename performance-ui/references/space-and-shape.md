# Space and shape

Spacing, column width, corners and how one surface separates from the next.

## Spacing unit

**4px.** A 4px base gives the useful in-between steps an 8px-only scale misses. Fluid spacing grows with the viewport but is harder to reason about.

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
```

Tailwind: `Tailwind's default spacing is already a 4px scale.`

Source: Impeccable.

## Density

**Density 1.10×.** How much sits in a region should follow how often it is used. Tools used all day can be dense; a portfolio can breathe.

Picked at 1.1 times, which is 11px. Snapped to 12px, the nearest step on the 4px scale.

```css
--layout-row-pad: 12px;
```

Source: Impeccable.

## Content column

**Column width 648px.** A narrow column makes everything inside it, video included, feel smaller and more precise.

```css
max-width: 648px;
```

Tailwind: `max-w-[648px]`

Source: [neilmcardle.com](https://neilmcardle.com).

## Space between sections

**Section gap 64px, above heading 24px, below heading 8px.** Space inside a group stays tight and space between groups opens up. A heading sits closer to the text it introduces than to whatever came before, so it reads as belonging forward.

```css
section + section { margin-top: 64px; }
h2 { margin: 24px 0 8px; }
```

Source: Impeccable craft floor.

## Corner radius

**Pill buttons, card radius 12px, input radius 8px.** One radius on everything is a template tell. Radius should follow size: small controls get small corners, big surfaces get bigger ones, and buttons can be pills.

```css
--radius-card: 12px;
--radius-input: 8px;
--radius-button: 999px;
```

Tailwind: `rounded-card / rounded-input / rounded-button`

Source: [neilmcardle.com](https://neilmcardle.com), Impeccable.

## Nested corners

**Outer = inner + gap, inner radius 10px, gap 6px.** When a rounded thing sits inside another, the outer radius should equal the inner radius plus the gap. Matching radii look pinched at the corners.

```css
.outer { border-radius: 16px; padding: 6px; }
.inner { border-radius: 10px; }
```

Source: General practice.

## How surfaces separate

**Soft shadow.** Hairlines, shadows, a change of tint, or nothing but space. Each says something different about how much a thing stands apart.

```css
box-shadow: var(--shadow-card);
```

Tailwind: `shadow-card`

Source: Apple.

## Shadow recipe

**Single, offset 4px, blur 24px, strength 0.08.** A shadow stands for light arriving from above, so it falls downward and its edge stays soft. Sit it dead centre and it turns into a glow; harden the edge and it turns into a costume.

```css
box-shadow: var(--shadow-card);
```

Tailwind: `shadow-card`

Source: Impeccable craft floor.

## Image edges

**Inner ring.** A white screenshot on a white page has no edge. A faint inner ring finds the edge without drawing a border around the work.

```css
box-shadow: var(--shadow-image-ring);
```

Tailwind: `shadow-image-ring`

Source: [neilmcardle.com](https://neilmcardle.com).

## Divider style

**Fading.** Solid lines separate. Dashed lines separate more quietly, which suits steps within one group. A fade suggests the list goes on.

```css
border-top: 1px solid;
border-image: linear-gradient(90deg, var(--color-line), transparent) 1;
```

Source: [neilmcardle.com](https://neilmcardle.com).
