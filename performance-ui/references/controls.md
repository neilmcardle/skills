# Buttons, links and inputs

The pieces people touch most, so the ones where small details add up fastest.

## Button shape and size

**Pill, height 36px, side padding 16px, text 13.0px.** Small, exact controls next to big type are what make a page feel precise.

```css
height: 36px;
padding: 0 16px;
border-radius: 999px;
font-size: 13px;
font-weight: 500;
```

Tailwind: `h-[36px] px-[16px] text-[13px] font-medium rounded-full`

Spec: Button H 36, padding 0 16, radius full, Inter 13/500

Source: [neilmcardle.com](https://neilmcardle.com).

## Button hierarchy

**Filled, outline, text.** The primary action should be findable in a second. Secondary and tertiary actions step down in weight, not just in colour.

Source: Apple, Impeccable.

## Press feedback

**Shrink to 0.97 over 120ms.** Feedback the instant a finger lands tells people the interface heard them. It should start on press, not on release.

```css
transition: transform var(--duration-press) var(--ease-out);
&:active { transform: scale(0.97); }
```

Tailwind: `transition-transform duration-[120ms] ease-out active:scale-[0.97]`

Source: Emil Kowalski, Apple.

## Arrows on buttons and links

**No arrows.** An arrow after every call to action is a template habit. The label should say where it goes.

Source: frontend-design, coverly.

## Hover only where there is a mouse

**Gate every hover.** Phones fire hover on tap, so an ungated hover state sticks after you lift your finger. Wrapping hover in a pointer query fixes it everywhere.

```css
@media (hover: hover) and (pointer: fine) {
  .card:hover { ... }
}
```

Tailwind: `Tailwind v4 gates hover: by default. On v3, set future.hoverOnlyWhenSupported.`

Source: Emil Kowalski, mobile-native.

## Link underlines

**Faint, darkens on hover, offset 4.0px, thickness 1.0px, resting strength 0.45.** A faint underline that darkens on hover keeps links findable without striping the paragraph. Offset keeps the line clear of descenders.

```css
text-decoration: underline;
text-underline-offset: 4px;
text-decoration-thickness: 1px;
text-decoration-color: rgb(29 29 31 / 0.45);
&:hover { text-decoration-color: currentColor; }
```

Tailwind: `underline underline-offset-[4px] decoration-[1px] decoration-black/45 hover:decoration-current`

Source: [neilmcardle.com](https://neilmcardle.com).

## Text fields

**Boxed, height 40px, text 16.0px.** A field should look like a place to type. Boxed fields are the clearest; underline-only fields are elegant but easy to miss.

```css
height: var(--size-input-height);
font-size: 16px;
border: 1px solid var(--color-field-border);
border-radius: var(--radius-input);
```

Tailwind: `h-[40px] text-[16px] border border-field-border rounded-input`

Source: Impeccable, mobile-native.

## Where labels go

**Above.** A label above the field is always visible. A placeholder used as the label disappears the moment someone starts typing.

Source: Baymard, Impeccable.

## When fields are checked

**After first leave, then live.** Checking on every keystroke scolds people mid-word. Checking only on submit hides problems until the end. The usual best is to wait for the first blur, then update live.

Source: Apple, Baymard.

## Keyboard focus

**Ink outline.** Focus is how keyboard users see where they are. It should be as designed as hover, and only appear for keyboard use.

```css
:focus-visible {
  outline: 2px solid var(--color-ink);
  outline-offset: 2px;
}
```

Tailwind: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink`

Source: Impeccable craft floor, WCAG.

## On and off controls

**Switch, movement 240ms.** A switch means the change happens now. A checkbox means it happens when you save. Mixing them up confuses what the control does.

Source: Apple.

## Tooltips

**Delay, then instant, first delay 400ms.** A short delay stops tooltips firing by accident. Once one is open, the next should appear instantly, so moving along a toolbar feels fast.

Source: Emil Kowalski.

## Browser surfaces

The caret, scrollbars and native checkboxes ship in browser defaults unless you theme them. Theming them is cheap and almost nobody does.

- Caret in the ink colour
- Thin scrollbar in the page greys
- Native controls in the ink colour
- Text selection themed

```css
caret-color: var(--color-ink);
scrollbar-width: thin;
scrollbar-color: var(--color-scrollbar) transparent;
accent-color: var(--color-ink);
::selection { background: var(--color-ink); color: #fff; }
```

Source: Impeccable craft floor.
