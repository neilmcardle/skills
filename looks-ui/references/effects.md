# Showpiece effects

A menu, not a list to use. Pick at most one per page, give it its own frame and caption, pause it off screen, and give reduced motion a still.

| Effect | Cost | Use it for |
|---|---|---|
| Particle form | Heavy | A mark that becomes something else, like a logo turning into a face. Up to 2,400 points, 1px, a 20px push. Load it only when near the screen. |
| Living background | Medium | Atmosphere behind one hero. Drifting blobs on a 17s cycle, 120px soft. Never behind text people must read. |
| Glass panel | Medium | A surface that must keep what is under it visible. 18px blur, white tint 20%, saturation 170%. Never as decoration. |
| Liquid glass | Heavy | One small control over moving content, such as a carousel button. An SVG displacement map applied through `backdrop-filter: url(#glass)` bends what is behind it at the edges like real glass. Chromium only, so the glass panel is the fallback for Safari and Firefox. Keep it small; it redraws whenever the content behind it moves. |
| Ambient light | Medium | A card showing an image or video. A heavily blurred copy of the current frame, drawn to a canvas behind the card, lights its surroundings in the same colours. Canvas, not a CSS filter, so it stays at 60fps. |
| Tilt toward the pointer | Light | One featured object. Up to 3°, eased at 0.08 per frame so it drifts rather than follows, mouse only. Nothing else on the object moves. |
| Headline entrance | Light | The page's one headline, a mask wipe. Never delays reading, never on every heading. |
| Spotlight cursor | Light | A dark stage where pointing is the interaction. Keep the system cursor visible. |
| Scrolling strip | Light | Logos or words in a loop of 24s. Pauses on hover, stops for reduced motion. |
| Scroll progress | Light | Long reads. CSS `animation-timeline: scroll()`, no JavaScript. |
| Grain | Light | Flat colour that should feel printed. SVG noise at 0.24, fineness 0.8, soft light. |

Left out on purpose: magnetic buttons (they move the target away from where people aim).

Before choosing one, watch a frame meter while it runs on a real phone. If it drops below 60fps or any frame takes over 25ms, choose a lighter effect.

Source: UI taste picks, 4 November 2026, Derek Briggs, [neilmcardle.com](https://neilmcardle.com).
