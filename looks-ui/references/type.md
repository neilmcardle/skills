# Type

performance-ui's type scale, set lighter and looser for a dark page.

## Reading and interface text

**Reading 16px at 400, line height 1.6, no tracking. Interface 13px at 400.** Light text on a dark page looks heavier than dark on light, so the weight drops to 400 and the lines open up.

Source: [neilmcardle.com](https://neilmcardle.com).

## Subject in ink, the rest in grey

**The name or subject at weight 500 in ink; the rest of the sentence in grey.** It lets a single line carry a headline and its explanation without a second size.

```html
<p class="name"><span>The</span> Orchard Press<span> publishes field guides for people who would rather be outdoors.</span></p>
```

Source: [neilmcardle.com](https://neilmcardle.com).

## One typeface

**Inter only, unless a brand brings its own.** A project's own typeface can appear inside its card, never in the page around it.

Source: [neilmcardle.com](https://neilmcardle.com).

## No widows, no early wraps

**Balance headings and quotes, make paragraphs pretty, and let text use the column.** A last line with one word on it, or a quote that wraps at half the width it has, looks unfinished. Browsers fix both in two lines of CSS, so there is no excuse.

```css
h1, h2, h3, blockquote, .lede { text-wrap: balance; }
p, li, figcaption { text-wrap: pretty; }
p, blockquote { max-width: 64ch; }
```

Never set a quote or a short line narrower than the column it sits in. If a line still breaks badly, shorten the words, not the box.

Source: Web platform, [neilmcardle.com](https://neilmcardle.com).
