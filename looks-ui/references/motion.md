# Motion and sound

performance-ui's timing for the interface, with room for a few crafted moments.

## Bigger movements take longer

**Ease out, 400ms for things that move across the page.** Controls keep performance-ui's short durations; cards, stacks and panels that travel take 400ms so the movement can be seen. Press shrinks to 0.96 over 160ms.

The 400ms is not slow. The ease-out curve, `cubic-bezier(0.2, 0.8, 0, 1)`, covers the distance in roughly the first 200ms and spends the rest on a soft landing, so it reads as quick and still feels cared for. Longer springs work the same way: a one second spring can look like a 200ms move with a gentle settle at the end.

Source: Emil Kowalski, Derek Briggs, [neilmcardle.com](https://neilmcardle.com).

## The most important thing settles last

**Order every sequence by weight.** In a card that assembles, the supporting pieces arrive first and the name or logo finishes last, a little later and a little slower, so the eye lands where it matters. Parts take their movement from the card they belong to, so dragging the card back rewinds them.

Source: Derek Briggs.

## Quiet by default

**Nothing reveals on scroll, and pages change instantly.** The crafted moments stand out because nothing else moves.

Source: frontend-design, Impeccable.

## Card hover

**Lift only for a stack or a featured card.** A lift on every card is a template default. Everything else gets the stronger edge from `edges.md`.

Source: Emil Kowalski, [neilmcardle.com](https://neilmcardle.com).

## Reduced motion

**Swap movement for a short fade.** People who ask for reduced motion still need to see that something changed. Remove the movement, keep a 200ms fade, never remove the feedback.

Source: Apple, Emil Kowalski.

## Springs only into air

**A hard stop eases; open space can spring.** If an element is heading for something solid (the screen edge, a panel beside it, the end of its track, text next to it), it eases in and stops, with no overshoot. Only things moving into space, such as a toast rising over the page, a floating input or a card thrown across an empty stage, settle with a spring.

The ease-in is Performance UI's `--ease-in`, `cubic-bezier(0.55, 0, 1, 0.45)`: slow to start, then a dead stop at the edge. Anything attached to the moving part, such as its shadow, shares the curve and the duration.

Source: Derek Briggs.

## Gestures settle with a spring

**Response 0.48s, damping 0.8.** While a finger drags, things follow it exactly, written to the element each frame, not through a framework render. On release they settle with a spring and carry on after a flick.

Source: Apple, performance-ui springs, [neilmcardle.com](https://neilmcardle.com).

## Signature interactions

**At most one per section, in its own frame, with a caption.** A crafted interaction lands harder when the page around it is still. Give it a frame, a short caption saying what to do, and a still fallback for reduced motion.

Source: [neilmcardle.com](https://neilmcardle.com).

## Sound

**Optional, quiet and polite.** Volume 0.2 or less. Mouse and keyboard only, never on scroll or touch. At least 120ms between sounds, and a new one cuts off the last. Nothing plays until the visitor has clicked once, because browsers block audio before that and queued sounds burst out together.

Source: [neilmcardle.com](https://neilmcardle.com).
