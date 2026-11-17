# Performance

What visitors never see but always feel. Most of this is decided before any pixel is drawn.

## Page weight budget

**150 KB of JavaScript, 800 KB per page, one font file, 25 requests.** A budget turns speed from a hope into a rule. Set it before building, and treat going over it as a bug.

JavaScript is measured compressed, as Next.js reports first load. The values also live in `tokens/budgets.json`.

Source: Vercel, web.dev.

## Speed targets

**Largest paint 1.8s, interaction delay 120ms, layout shift 0.02.** Largest paint is how fast it looks loaded, interaction delay is how fast it responds, and layout shift is how much it jumps. Pick targets stricter than the pass mark.

Measured on a mid-range phone at the 75th percentile of visits. Google's pass marks are 2.5s, 200ms and 0.1.

Source: Google Core Web Vitals.

## How pages are built

**Server-rendered, small islands.** Static HTML arrives ready to read. Server rendering with small interactive islands is close behind. A client-side app shows nothing until its JavaScript runs.

Source: Vercel.

## JavaScript habits

Every kilobyte of script is parsed and run on the visitor's phone. The cheapest script is the one never sent.

- Server components by default, client only where there is interaction
- Load heavy components only when they are needed
- Import from the exact file, not barrel index files
- Defer analytics and third parties until after load
- No inline component definitions that remount on every render
- Animate through refs, never through state

Detect things scrolling into view with IntersectionObserver, never a scroll listener.

Source: Vercel React rules.

## How many fonts

**One variable family.** Each family and weight is another download in the way of the text. One variable family covers every weight in one file.

Source: Vercel, Impeccable.

## Image habits

Images are usually most of a page's weight. Modern formats, the right size for the screen and lazy loading below the fold do most of the work.

- AVIF or WebP, with a fallback
- Sized for the screen with srcset and sizes
- Lazy-load everything below the fold
- High fetch priority on the main hero image
- Width and height or aspect-ratio always set
- No image over about 200 KB without a reason

Videos and audio over 1 MB live in file storage such as Vercel Blob, not inside the site.

```css
<img src="hero.avif" width="1200" height="675"
  sizes="(max-width: 699px) 100vw, 600px"
  fetchpriority="high" alt="...">
<img loading="lazy" decoding="async" ...>
```

Source: web.dev, Next.js.

## Holding space for what loads

**Reserve the space.** When an image or ad arrives late and pushes text down, people lose their place or tap the wrong thing. Reserve the space before it loads.

```css
aspect-ratio: 16 / 5;
```

Or set width and height attributes on the image.

Source: web.dev.

## Third-party code

Every outside script can slow the page, break it, or read what is on it. A strict content security policy blocks the ones nobody asked for.

- No third-party scripts unless they earn it
- Analytics loads after the page is idle
- Video and map embeds load on click behind a still image
- Fonts are self-hosted, not fetched from another domain
- A content security policy lists every allowed source

Source: Vercel.

## Video habits

Autoplaying video is the heaviest thing most portfolios ship. A poster and loading only when visible keep it from blocking everything else.

- preload="none" with a poster image
- Muted autoplay only while in view
- Paused when scrolled off screen
- A modern codec with an H.264 fallback
- Loops kept short, ideally under 2 MB

```css
<video muted playsinline loop preload="none"
  poster="first-frame.jpg">
  <source src="clip.webm" type="video/webm">
  <source src="clip.mp4" type="video/mp4">
</video>
```

Source: [neilmcardle.com](https://neilmcardle.com).

## Animation that stays smooth

Transform and opacity skip layout and paint. Width, height, margin and top redo the whole page every frame.

- Animate transform and opacity, not size or position
- CSS or the Web Animations API for set pieces
- Never transition: all
- will-change only after seeing a problem
- Blur under 20px and never on large animated areas
- Never animate a CSS variable on a parent
- Per-frame pixel work, such as an ambient blur of a playing video, goes on a canvas, not a CSS filter

### Measure the frame rate

**60fps on a mid-range phone, no frame over 25ms.** Smoothness is part of the design, so measure it while choosing between options, not only before shipping. Keep a frame meter on screen while the motion plays: frames per second, the slowest frame in the last second, and a count of frames that took over 25ms. Check it on a real phone, because a laptop hides most jank.

Source: animation-performance, Derek Briggs.

## Feeling fast

Perceived speed is what people judge. Starting work before the click and showing results before the server answers both feel like a faster site.

- Prefetch links when they come into view or on hover
- Optimistic updates for likely outcomes
- Show loading states only after about 300ms
- Fast-spinning spinners
- Tooltips instant after the first
- No-flash theme script before paint

Source: Emil Kowalski, Vercel.

## Long pages

Browsers lay out and paint everything on a page, even what is far off screen, unless told otherwise.

- content-visibility: auto on off-screen sections
- Virtualise any list over a few hundred rows
- Start heavy demos only when they scroll into view
- Pause canvas and video loops off screen

```css
section { content-visibility: auto; contain-intrinsic-size: auto 800px; }
```

Source: Vercel, break-ui.
