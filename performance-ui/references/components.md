# Components

The recurring pieces of a site.

## Site navigation

**Top bar.** Navigation should answer where am I and where can I go. A side rail suits a long single page; a top bar suits many pages.

Source: [neilmcardle.com](https://neilmcardle.com).

## Sticky header surface

**Solid with hairline.** A header that stays on screen needs to separate from content scrolling under it. Translucent blur looks rich but costs paint on every scroll frame.

```css
background: var(--color-surface);
border-bottom: 1px solid var(--color-line);
```

Source: Apple.

## How a set of things is shown

**Hairline list.** Identical cards in a grid are the default container for everything. A hairline list is quieter and reads in order; a table is for comparing.

Source: Impeccable craft floor, [neilmcardle.com](https://neilmcardle.com).

## Notifications

**Next to the action.** A toast should leave the way it came, so swiping it away feels obvious. Confirmation next to the action is often better than a toast at all.

Source: Emil Kowalski (Sonner).

## Overlays

**Sheet on phones, modal on desktop.** A modal interrupts and protects focus, so it is for tasks that need both. On phones a bottom sheet sits where thumbs are. Expanding in place keeps people in their flow.

Source: Apple, Impeccable.

## Folds and accordions

**Animated height, duration 240ms.** Animating the height shows where the content came from. Native details elements can now animate to auto height in Chromium with no JavaScript.

```css
:root { interpolate-size: allow-keywords; }
details::details-content {
  block-size: 0;
  overflow: hidden;
  transition: block-size var(--duration-fold) var(--ease-out), content-visibility var(--duration-fold) allow-discrete;
}
details[open]::details-content { block-size: auto; }
```

Source: [neilmcardle.com](https://neilmcardle.com).

## Tabs

**Sliding underline.** An indicator that slides between tabs shows the relationship between them. A colour change alone is fine where tabs are used many times a minute.

Source: Emil Kowalski.

## Loading states

**Shimmering skeleton.** Under about 300ms, show nothing. Longer, show the shape of what is coming. If the outcome is near certain, show it immediately and fix it if the server disagrees.

Show nothing for the first 300ms. After that, a skeleton the shape of the real content, always shimmering.

```css
.skeleton {
  background: linear-gradient(90deg, #eee 25%, #f6f6f6 50%, #eee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.2s linear infinite;
}
@keyframes shimmer { to { background-position: -200% 0; } }
@media (prefers-reduced-motion: reduce) { .skeleton { animation: none; } }
```

Source: Emil Kowalski, Vercel.

## Empty states

**One line and an action.** An empty state has a job: say what belongs here and give one way to put it there. Atmosphere is not the job.

Source: frontend-design, Impeccable.

## Data tables

**Hairline rows.** Tables are for comparing, so numbers line up right, figures are tabular and lines stay out of the way of the data.

Source: Impeccable, break-ui.
