# Motion

How things move, how fast, and when they should not move at all.

## Default easing curve

**Ease out, `cubic-bezier(0.2, 0.8, 0, 1)`, duration 240ms.** Easing is most of what makes motion feel right. This curve covers the distance quickly, then creeps the last few per cent in slowly, like a drawer that cushions shut. At 400ms it is 90% of the way there by about 120ms, quicker to the eye than the browser's 200ms `ease`.

```css
--ease-out: cubic-bezier(0.2, 0.8, 0, 1);
transition: transform 240ms var(--ease-out);
```

Tailwind: `ease-[cubic-bezier(0.2,0.8,0,1)] duration-[240ms]`

Spec: Figma: custom bezier 0.2, 0.8, 0, 1, 240ms

Source: Derek Briggs, Emil Kowalski.

## Fast to the eye, soft at the end

**Judge the travel, not the total.** A good ease-out covers almost all of the distance in the first half of its duration and spends the rest settling. A 400ms move on this curve looks as quick as a 200ms linear one, but the extra time buys a soft landing, like a drawer that cushions shut. So pick durations by how fast the motion looks, and let the curve keep the tail.

Source: Derek Briggs, Emil Kowalski.

## Duration by element

**Press 120ms, tooltip 160ms, dropdown 240ms, modal 320ms.** Small things move fast and large things take a little longer. Interface motion should almost always finish under 300ms.

```css
--duration-press: 120ms;
--duration-tooltip: 160ms;
--duration-dropdown: 240ms;
--duration-modal: 320ms;
```

Tailwind: `transitionDuration: { press: "120ms", tooltip: "160ms", dropdown: "240ms", modal: "320ms" }`

Source: Emil Kowalski.

## How things appear

**Fade and scale, duration 240ms.** A slight scale or rise with a fade reads as arriving; growing ex nihilo reads as popping out of a hole.

```css
@keyframes enter { from { opacity: 0; transform: scale(0.95); } }
animation: enter var(--duration-enter) var(--ease-out);
```

Source: Emil Kowalski, Apple.

## Leaving faster than arriving

**Exit faster, enter 240ms, exit as share of enter 0.40×.** People wait for things to arrive but have already moved on when they leave. Exits should be quicker, and leave the way they came.

Entrances take 240ms. Exits take 96ms and leave the way they came.

Source: Emil Kowalski.

## Menus grow from their button

**From the trigger.** A menu that scales out of its own trigger shows where it came from. Modals are the exception; they belong to the screen as a whole, so they grow from the centre.

```css
transform-origin: var(--transform-origin);
```

Set the origin to the side of the trigger. Modals grow from the centre.

Source: Emil Kowalski, Apple.

## Springs

**Damping 0.80, response 0.48s.** A spring settles rather than running for a set time. Damping sets the overshoot, response sets the speed, and the settle time follows from the two. Apple starts everything critically damped and adds bounce only after a flick.

Springs are for gestures such as drags and swipes, and only when the thing lands in open space. Menus, modals and folds use the ease-out curve.

**Hard stops never spring.** If an element is moving towards something solid (the edge of the screen, a neighbouring panel, the end of a track, content it sits beside), it eases in and stops. A spring's overshoot would push into that edge, nudge what is next to it and make text wrap or truncate for a frame. Springs are only for things moving into air: a toast rising over the page, a card thrown across empty space, an input floating above everything.

**The ease-in curve is `cubic-bezier(0.55, 0, 1, 0.45)`.** It starts slowly, gathers speed and stops dead at the edge, the way a lid falls shut. Use it only for movement into a hard stop; everything else uses the ease-out curve. Pick the duration as for any other move. Parts attached to the moving element, such as its shadow, use the same curve and duration so they arrive together.

```css
--ease-in: cubic-bezier(0.55, 0, 1, 0.45);
.lid { transition: transform var(--duration-enter) var(--ease-in); }
.lid-shadow { transition: transform var(--duration-enter) var(--ease-in); }
```

```css
transition: transform 792ms linear(0, 0.0271, 0.0693, 0.1241, 0.1872, 0.2551, 0.3249, 0.3945, 0.4622, 0.5269, 0.5876, 0.6439, 0.6953, 0.7419, 0.7837, 0.8207, 0.8533, 0.8816, 0.906, 0.9269, 0.9446, 0.9594, 0.9716, 0.9816, 0.9897, 0.996, 1.001, 1.0047, 1.0074, 1.0093, 1.0105, 1.0112, 1.0114, 1.0113, 1.011, 1.0104, 1.0098, 1.009, 1.0082, 1.0074, 1.0066, 1.0059, 1.0052, 1.0045, 1.0039, 1.0033, 1.0028, 1.0023, 1.0019, 1.0016, 1.0012, 1.001, 1.0008, 1.0006, 1.0004, 1.0003, 1.0002, 1.0001, 1, 1, 0.9999, 0.9999, 0.9999, 0.9999, 1);
```

Spec: Motion: { type: "spring", visualDuration: 0.48, bounce: 0.2 }. SwiftUI: .spring(response: 0.48, dampingFraction: 0.8)

Source: Apple.

## Bounce only into free air

**Stop softly beside content, overshoot only in open space.** A panel that slides in next to a table should stop without a bounce: a few pixels of overshoot shifts the content beside it and can make text wrap or truncate for a frame. Something that floats over everything, like a toast or a bottom input, has nothing to disturb, so it can settle with a small spring.

Source: Derek Briggs.

## Parts follow their parent

**One value drives the whole card.** When a card moves, the things inside it (a logo, a rating, an image) should take their position from the card's own movement, not run separate timelines. Then a drag that reverses rewinds them too, and the card feels like one object.

Motion: derive each part with `useTransform` from the card's position. Without a library: write every part's transform from the same value in one frame loop.

Source: Derek Briggs.

## Related movement shares momentum

**Same curve, same direction.** When one action moves two things, such as a sidebar opening while an input slides aside, give them the same curve and let them travel the same way, so they read as one movement rather than two.

Source: Derek Briggs.

## Stagger

**Gap between items 80ms, each item 360ms.** Items that arrive one after another feel more natural than a block appearing at once. Long gaps make the page feel slow, and nothing should wait for the stagger to finish.

```css
animation: enter var(--duration-stagger-item) var(--ease-out) both;
animation-delay: calc(var(--i) * var(--duration-stagger-gap));
```

Order a stagger by importance: the most important element, such as the brand's name or logo, settles last, so the eye ends on it.

Source: Emil Kowalski, Derek Briggs.

## Motion by how often it is seen

**By frequency.** Something used a hundred times a day should not animate at all. Raycast's menu has no open animation for that reason. Save delight for rare moments.

100+ times a day: no animation. Tens of times: barely any. Occasional: standard. Rare: room for delight. Never animate keyboard-triggered actions.

Source: Emil Kowalski.

## Motion that can change its mind

**Transitions.** Transitions pick up from wherever an element is when you change direction. Keyframe animations restart from the beginning, so a quick double tap makes things jump.

Use transitions for anything people can trigger twice in a second. Keyframes only for set pieces.

Source: Emil Kowalski, Apple.

## Reduced motion

**Swap movement for fades.** People who ask for reduced motion still need to see that something changed. Swap movement for a short fade rather than removing feedback entirely.

```css
@media (prefers-reduced-motion: reduce) {
  .enter { animation: fade 200ms ease; transform: none; }
}
```

Source: Apple, Emil Kowalski.

## Content appearing on scroll

**One authored moment.** Every section fading up as it scrolls in is the most common generated-site move. One authored moment lands harder than the same effect everywhere.

One entrance, on the page's lead element only.

Source: frontend-design, Impeccable.

## Moving between pages

**Shared element.** View transitions let the browser animate between two states, including two pages. A shared element that morphs keeps people oriented.

```css
@view-transition { navigation: auto; }
.thumb { view-transition-name: project-hero; }
```

Source: Web platform.

## Card hover

**Border darkens.** Hover tells people a thing is clickable. A lift on every card is a template default; a quiet border change or an image zoom says the same with less noise.

Source: Emil Kowalski, frontend-design.

## Changing numbers

**Slide in.** When a price or count updates, motion shows that it changed and by how much. Snapping is honest; rolling digits feel alive.

Re-key the number so it re-enters with a short rise.

Source: pick-ui-library.
