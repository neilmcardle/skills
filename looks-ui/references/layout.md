# Layout

The page as a narrow, quiet column where the work leads.

## What the page is for

**Experience.** The work fills the first view; the chrome is minimal and small. A landing page persuades and a tool helps people work, but a portfolio lets the work lead.

Source: Impeccable.

## Column

**600px, left-aligned, 16px on phones.** A narrow column makes everything inside it, video included, feel smaller and more precise.

Source: [neilmcardle.com](https://neilmcardle.com).

## Navigation

**A side rail for one long page, a top bar for many.** The rail marks the current section and only shows where there is room for it; narrower screens get a short row of links beside the logo.

Source: [neilmcardle.com](https://neilmcardle.com).

## Sticky header

**Translucent, with a 16px blur.** A header that stays on screen needs to separate from what scrolls under it. On a dark page a translucent surface reads as depth. Blur is paid for on every scroll frame, so this is the only one allowed by default.

```css
background: rgb(13 13 12 / 0.82);
backdrop-filter: blur(16px) saturate(1.4);
box-shadow: 0 1px 0 rgb(255 255 255 / 0.06);
```

Source: Apple, [neilmcardle.com](https://neilmcardle.com).

## Voice

**Whoever owns the work.** A sole author writing "we" sounds like someone hiding behind a staff that does not exist, and a studio writing "I" sounds like nobody in particular. Name the real author and keep to it.

Source: [neilmcardle.com](https://neilmcardle.com).
