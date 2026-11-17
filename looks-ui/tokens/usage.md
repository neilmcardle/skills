# Token usage

Generated from tokens.json by scripts/build-tokens.mjs. Edit the descriptions there, not here.

| Token | Value | Use for |
| --- | --- | --- |
| `--color-bg` | `#0d0d0c` | The page. Only the page itself; cards sit on raised. |
| `--color-raised` | `#161615` | Cards, frames, fields and anything lifted off the page. |
| `--color-raised-hover` | `#1d1d1b` | A raised surface under the pointer. Not a resting colour. |
| `--color-ink` | `#ecebe7` | Headings and the subject of a sentence. Never a whole paragraph. |
| `--color-text` | `#8f8c86` | Reading and interface text, 5.8:1 on bg. |
| `--color-underline` | `#48463f` | Link underlines at rest; ink on hover. |
| `--color-line` | `rgb(255 255 255 / 0.06)` | Hairlines and dividers, white at 6%. Not for card edges, which use edge. |
| `--color-image-ring` | `rgb(255 255 255 / 0.06)` | The 1px inner outline on images and video only. |
| `--edge` | `0 0 0 1px rgb(255 255 255 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.4), 0 2px 4px 0 rgb(0 0 0 / 0.3)` | The edge of every card, frame and button. Replaces borders. |
| `--edge-hover` | `0 0 0 1px rgb(255 255 255 / 0.11), 0 1px 2px -1px rgb(0 0 0 / 0.5), 0 2px 4px 0 rgb(0 0 0 / 0.4)` | The stronger edge for hover, faded in on a layer above. Never transition box-shadow to reach it. |
| `--edge-lifted` | `0 0 0 1px rgb(255 255 255 / 0.08), 0 14px 36px 0 rgb(0 0 0 / 0.5)` | Only for a stack or a featured card that lifts on hover. Other cards use edge-hover. |
| `--radius-frame` | `20px` | Cards and frames. |
| `--radius-media` | `10px` | Images and video inside a frame. |
| `--radius-field` | `10px` | Text fields and selects. |
| `--radius-chip` | `7px` | Chips and small tags. |
| `--radius-pill` | `999px` | Buttons only. |
| `--weight-subject` | `500` | The subject of a sentence, in ink. The rest of the sentence stays at the reading weight. |
| `--duration-travel` | `400ms` | Things moving across the page. Controls keep performance-ui's durations. |
| `--duration-press` | `160ms` | Press feedback, paired with press-scale. |
| `--press-scale` | `0.96` | Shrink on press for buttons and tappable cards. Not for links. |
| `--header-surface` | `rgb(13 13 12 / 0.82)` | A translucent sticky header only. |
| `--header-blur` | `16px` | The sticky header's backdrop blur. The only blur allowed by default. |
| `--text-reading-size` | `16px` | Reading text. |
| `--text-reading-weight` | `400` | Reading text. No tracking. |
| `--text-reading-leading` | `1.6` | Reading text line height. |
| `--text-interface-size` | `13px` | Interface text: labels, captions, menus. |
| `--text-interface-weight` | `400` | Interface text. |
| `--layout-column` | `600px` | The one left-aligned column. |
| `--spring-response` | `0.48s` | Gestures that land in open space only; never into a hard stop. |
| `--spring-damping` | `0.8` | Pairs with response. Gestures into open space only. |
| `--sound-volume` | `0.2` | The loudest any interface sound may be. |
| `--sound-gap` | `120ms` | The shortest time between two sounds. |
