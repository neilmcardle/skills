# Token usage

Generated from tokens.json by scripts/build-tokens.mjs. Edit the descriptions there, not here.

| Token | Value | Use for |
| --- | --- | --- |
| `--color-bg` | `#fafafa` | Page background, a step off white so white panels and hairlines read. Only the page itself; never a card or control. |
| `--color-surface` | `#ffffff` | Panels, cards and the sticky header. Never the page background. |
| `--color-text` | `#5c5c5c` | Reading text, 6.4:1 on bg. Body copy only; headings use ink. |
| `--color-text-muted` | `#737373` | Secondary text and table headers. Never for anything someone must read to finish the task. |
| `--color-ink` | `#0d1117` | Headings, selection, caret, native controls and the focus outline. Not for body text. |
| `--color-action` | `#1d1d1f` | Buttons, links and status. The ink does an accent's job, so no other colour stands in for it. Status also needs an icon. |
| `--color-line` | `rgb(0 0 0 / 0.04)` | Hairlines and dividers, black at 4%. Not for field borders, which need field-border. |
| `--color-ring` | `rgb(0 0 0 / 0.06)` | The 1px inner ring on images, black at 6%. Images only. |
| `--color-field-border` | `#dcdcdc` | Text field borders only. Hairlines elsewhere use line. |
| `--color-scrollbar` | `#cfcfcf` | The thin scrollbar thumb only. |
| `--color-grey-50` | `#fafafa` | Raw scale step behind bg. Reach for the role token, not this. |
| `--color-grey-200` | `#e8e8e8` | Raw scale step. Use it only where no role token fits, such as a skeleton block. Never for text. |
| `--color-grey-400` | `#a3a3a3` | Raw scale step. Fails contrast on bg, so never for text someone must read. |
| `--color-grey-500` | `#737373` | Raw scale step behind text-muted. Use the role token. |
| `--color-grey-600` | `#5c5c5c` | Raw scale step behind text. Use the role token. |
| `--color-grey-900` | `#1d1d1f` | Raw scale step behind action. Use the role token. |
| `--font-family-sans` | `Inter, "Inter Fallback", system-ui, sans-serif` | One variable family, self-hosted, subset and preloaded. The only typeface allowed. |
| `--font-weight-reading` | `425` | Body copy at 16px. Not for interface text. |
| `--font-weight-interface` | `450` | Interface text at 13px: labels, menus, table cells. |
| `--font-weight-button` | `500` | Button labels only. |
| `--font-weight-display` | `520` | The 44px and 56px headings only. |
| `--text-interface-size` | `13px` | Interface text: labels, menus, captions, buttons. Not for reading text. |
| `--text-interface-tracking` | `-0.005em` | Pairs with the 13px size only. |
| `--text-body-size` | `16px` | Reading text and field input. Also stops phones zooming on focus. |
| `--text-body-tracking` | `-0.01em` | Pairs with the 16px size only. |
| `--text-body-leading` | `1.5` | Line height for reading text. |
| `--text-subhead-size` | `20px` | Subheadings inside a section. |
| `--text-subhead-tracking` | `-0.025em` | Pairs with the 20px size only. |
| `--text-title-size` | `24px` | Section titles and card titles. |
| `--text-title-tracking` | `-0.025em` | Pairs with the 24px size only. |
| `--text-display-phone-size` | `44px` | Big headings below the display step. One per page. |
| `--text-display-phone-tracking` | `-0.04em` | Pairs with the 44px size only. |
| `--text-display-phone-leading` | `1.02` | Pairs with the 44px size only. |
| `--text-display-size` | `56px` | Big headings from the display step up. One per page. |
| `--text-display-tracking` | `-0.04em` | Pairs with the 56px size only. |
| `--text-display-leading` | `1.02` | Pairs with the 56px size only. |
| `--text-measure` | `64ch` | Maximum line length for reading text. Not for tables or interface rows. |
| `--space-1` | `4px` | Icon to label, and tight inline gaps. |
| `--space-2` | `8px` | Gaps inside a control or between closely related items. |
| `--space-3` | `12px` | Padding inside rows and small cards. |
| `--space-4` | `16px` | Default gap between items, and side margins on phones. |
| `--space-6` | `24px` | Gap above a heading and padding inside cards. |
| `--space-8` | `32px` | Gap between groups within a section. |
| `--space-12` | `48px` | Gap between large blocks. |
| `--space-16` | `64px` | Gap between page sections. |
| `--layout-column` | `648px` | The one centred column. Wider layouts need a reason. |
| `--layout-gutter` | `16px` | Side margins on phones. |
| `--layout-section-gap` | `64px` | Vertical gap between page sections. |
| `--layout-heading-above` | `24px` | Space above a heading, so it belongs to what follows. |
| `--layout-heading-below` | `8px` | Space between a heading and its content. |
| `--layout-row-pad` | `12px` | Vertical padding in list and table rows. |
| `--layout-display-step` | `700px` | Width where headings move from 44px to 56px. Not a general breakpoint. |
| `--radius-button` | `999px` | Buttons and pill toggles only. |
| `--radius-card` | `12px` | Cards and panels. |
| `--radius-input` | `8px` | Text fields, selects and small chips. |
| `--radius-nested-outer` | `16px` | The outer corner of a card holding an inner card. |
| `--radius-nested-inner` | `10px` | The inner corner of a nested pair. Outer equals inner plus the gap. |
| `--radius-nested-gap` | `6px` | The gap between nested corners. |
| `--shadow-card` | `0px 4px 24px 0px rgb(0 0 0 / 0.08)` | The one shadow that separates cards from the page. Not for buttons, menus or text. |
| `--shadow-image-ring` | `0px 0px 0px 1px rgb(0 0 0 / 0.06)` | The 1px inner ring on images only. |
| `--size-icon` | `16px` | Icons beside 13px and 16px text. |
| `--size-button-height` | `36px` | Every button. The tap target around it still reaches 44px. |
| `--size-button-pad` | `16px` | Side padding inside buttons. |
| `--size-input-height` | `40px` | Every text field and select. |
| `--size-target` | `44px` | Minimum tap target. Pad the hit area, not the visible control. |
| `--size-focus-width` | `2px` | Keyboard focus outline width. |
| `--size-focus-offset` | `2px` | Gap between a control and its focus outline. |
| `--size-underline-offset` | `4px` | Link underlines. |
| `--size-underline-thickness` | `1px` | Link underlines. |
| `--icon-stroke` | `1.5` | Stroke width for line icons at the icon size. |
| `--ease-out` | `cubic-bezier(0.2, 0.8, 0, 1)` | Ease out. The default for everything that moves: quick travel, then a long soft settle. |
| `--ease-in` | `cubic-bezier(0.55, 0, 1, 0.45)` | Ease in. Only for something heading into a hard stop, such as a lid closing or a panel sliding against an edge: it gathers speed and stops dead. |
| `--duration-press` | `120ms` | Press feedback on buttons and cards. |
| `--duration-tooltip` | `160ms` | Tooltips appearing. |
| `--duration-dropdown` | `240ms` | Menus and dropdowns opening. |
| `--duration-enter` | `240ms` | Elements entering. The default when nothing more specific fits. |
| `--duration-exit` | `96ms` | Elements leaving, at 0.4 of the entrance. |
| `--duration-modal` | `320ms` | Modals and sheets. The longest standard move. |
| `--duration-toggle` | `240ms` | Switches and segmented controls changing state. |
| `--duration-fold` | `240ms` | Disclosure and accordion content opening. |
| `--duration-stagger-gap` | `80ms` | Delay between items in a stagger. Only for the page's one authored moment. |
| `--duration-stagger-item` | `360ms` | Each item's movement in a stagger. |
| `--duration-tooltip-delay` | `400ms` | Wait before a tooltip shows on hover. |
| `--duration-loading-delay` | `300ms` | Show nothing for waits shorter than this, then a skeleton. |
| `--spring-response` | `0.48` | Seconds. Gestures that land in open space only; never into a hard stop. |
| `--spring-damping` | `0.8` | Pairs with response. Gestures into open space only. |
| `--press-scale` | `0.97` | Shrink on press for buttons and tappable cards. Not for links. |
| `--link-rest-opacity` | `0.45` | Underline opacity on links at rest; the full colour on hover. |
