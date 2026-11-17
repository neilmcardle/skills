# Touch

Making hover-led interactions work on a phone.

## Two taps for anything with a preview

**First tap shows, second tap opens, tapping elsewhere closes.** Hover previews do not exist on touch. Without this, the first tap jumps straight to the page and the preview is never seen.

Source: [neilmcardle.com](https://neilmcardle.com).

## Swipe through a stack

**Sideways swipes move the stack; up and down still scroll the page.** Set `touch-action: pan-y` on the stack. A calm swipe moves one item; a quick flick can carry two. The ends stretch a little and spring back.

Source: [neilmcardle.com](https://neilmcardle.com).
