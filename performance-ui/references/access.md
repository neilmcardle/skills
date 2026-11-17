# Access and resilience

Works for everyone, on every device, with whatever data turns up.

## Contrast target

**AA, 4.5:1.** AA is the legal floor for most sites. AAA is stricter and rules out most light greys. Either way, check computed colours, not your eyes.

Body text 4.5:1 or more. Large text and icons 3:1 or more.

Source: WCAG, Impeccable.

## Touch target size

**Tap area 44px.** The visible mark can be small; the area that takes the tap should not be. Apple asks for 44pt, WCAG for at least 24px.

```css
min-width: 44px;
min-height: 44px;
```

Tailwind: `min-w-[44px] min-h-[44px]`

Source: WCAG, Apple.

## Keyboard

Plenty of people never touch a mouse. Everything that can be clicked must be reachable, visible and escapable from the keyboard.

- Every control reachable with Tab in a sensible order
- Focus always visible
- Escape closes menus and dialogs and returns focus
- A skip link to the main content
- Real buttons and links, never clickable divs

Source: WCAG.

## Respecting system settings

People tell their devices what they need. Pages should listen to reduced motion, reduced transparency, higher contrast and their chosen text size.

- prefers-reduced-motion
- prefers-reduced-transparency
- prefers-contrast: more
- forced-colors (Windows high contrast)
- Sizes in rem so text settings scale the layout

```css
@media (prefers-reduced-motion: reduce) {}
@media (prefers-reduced-transparency: reduce) {}
@media (prefers-contrast: more) {}
@media (forced-colors: active) {}
font-size: 1rem;
```

Source: Apple, web platform.

## Worst-case content

**Worst case, fixed.** Designs are drawn with tidy names. Real data has a 40-character surname, no photo and an email with no spaces. Lay out for that.

Long emails truncate with an ellipsis in compact rows; wrap them in full views.

```css
.avatar, .menu { flex-shrink: 0; }
.text { min-width: 0; }
.email { overflow-wrap: anywhere; }
```

Source: break-ui.

## Feeling native on a phone

On a phone the tells are in the platform layer, not the design. Clear these and the page stops reading as a browser tab.

- No grey tap flash
- Hover gated to real pointers
- 100dvh for app shells, 100svh for heroes
- Inputs at 16px so iOS does not zoom
- Feedback on press, not on release
- overscroll-behavior where pull-to-refresh would hijack
- Safe-area insets with viewport-fit=cover
- theme-color for light and dark
- Tested on a real phone

```css
-webkit-tap-highlight-color: transparent;
min-height: 100svh;
input { font-size: 16px; }
touch-action: manipulation;
padding-bottom: env(safe-area-inset-bottom);
```

Source: mobile-native.

## Other languages and formats

German labels run about a third longer than English. Numbers, dates, currencies and plurals all change by locale.

- Room for labels 40% longer
- Intl.NumberFormat and DateTimeFormat for every figure
- Intl.PluralRules, never a hardcoded 's'
- No words baked into images
- Logical properties (margin-inline) so right-to-left works

Source: break-ui, Impeccable.

## Structure underneath

Screen readers, search engines and agents read the structure, not the look. Correct HTML is free accessibility.

- One h1, headings in order
- Landmarks: header, nav, main, footer
- Alt text that says what the image shows, or empty for decoration
- Every input has a label tied to it
- Buttons for actions, links for places

Source: WCAG.
