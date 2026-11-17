# Layout and pages

The shape of a page and how it holds up from a phone to a wide screen.

## Page structure

**One centred column.** A single centred column reads in one line of sight. Grids and bands suit pages with many equal things; most portfolios are not that.

Source: Impeccable.

## Opening move

**Big type.** Open on the one thing the subject is known for, in whatever form carries it best. The huge figure over a small caption is a reflex rather than a decision, and `system.md` bans it.

Source: frontend-design.

## Section separation

**Hairlines.** Hairlines and space say where one part ends. Alternating background bands and numbered sections are template structure unless the order matters.

No section numbers unless the sequence itself is information.

Source: [neilmcardle.com](https://neilmcardle.com), frontend-design.

## Alignment

**Left.** Left alignment gives one clean edge to read down. Centred text suits a few short lines; mixing the two on one page loses the edge.

Source: General practice.

## Headings across screen sizes

**Fixed steps: 44px on phones, 56px from 700px wide.** Fluid headings grow smoothly between a phone and a wide screen with no breakpoints. Product UI and reading text are better kept fixed and predictable.

Together with the other sizes, the full list is 13, 16, 20, 24, 44 and 56px.

```css
font-size: var(--text-display-phone-size);
@media (min-width: 700px) { font-size: var(--text-display-size); }
```

Tailwind: `text-display-phone display:text-display`

Source: Apple, Impeccable.

## Phone side margins

**Side margin 16px.** On a phone, the side margin is the frame. Too narrow and text touches the glass; too wide and lines get short.

viewport-fit=cover, then pad with env(safe-area-inset-*)

```css
padding-inline: 16px;
```

Tailwind: `px-[16px]`

Source: [neilmcardle.com](https://neilmcardle.com).

## Where layouts change

**Container queries first.** Layouts should change where the content starts to fail, not at the width of a particular phone. Components that live in many places should respond to their container.

```css
.card-wrap { container-type: inline-size; }
@container (min-width: 420px) { .card { grid-template-columns: 1fr 1fr; } }
```

Tailwind: `@container on the parent, @md: variants on children`

Source: Impeccable.

## Footer

**One line.** A footer is where people look when they are done. On a small site one line is enough; big column footers suit sites with many destinations.

On a small site one line is enough; big column footers suit sites with many destinations.

Source: General practice.
