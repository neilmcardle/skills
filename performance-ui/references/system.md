# System and identity

The overarching calls that every smaller decision should agree with.

## What the page is for

**Operate.** A landing page persuades, a tool helps people work, docs help people understand, a portfolio lets the work lead. The same detail is right in one and wrong in another.

Operate: the fixed sizes, stable density, and motion only as feedback.

Source: Impeccable.

## Where the boldness goes

**One memorable thing.** Let one thing be memorable and keep everything around it quiet. Bold everywhere is loud; bold nowhere is forgettable.

Source: frontend-design.

## Motion personality

**Crisp.** Motion carries the mood of the product. This one is built for finishing a task, so the movement is brisk and never asks to be noticed.

Short and decisive: the durations in `motion.md`, the ease-out curve, and no bounce unless a gesture throws something into open space.

Source: Emil Kowalski.

## Banned defaults

These appear whatever the subject, which is what makes a page read as generated. Ticked items are banned unless a brief asks for them by name.

- Cream background with a terracotta accent
- Near-black page with one acid-green or vermilion accent
- Broadsheet hairlines with zero radius everywhere
- Identical rounded cards with the same soft shadow
- Tracked capital labels above headings
- Details joined with middle dots
- Arrows on every link and button
- Gradient text
- Glass and blur as decoration
- Thick coloured left borders on cards and alerts
- Hard offset block shadows
- Monospace as a costume
- Emoji standing in for icons
- Fade-up on every section
- Big-number hero with small label
- Em dashes in copy

Source: [Neil McArdle's rules](https://neilmcardle.com), frontend-design, Impeccable.

## Same look, same behaviour

**Strict.** If two things look alike, that is a promise: they behave alike and they are found in comparable positions. A convention people already hold gets broken only on evidence.

Anything that looks like a button behaves like one everywhere. One component per job; no near-duplicates.

Source: Apple.

## Values that are not on the scale

**Snap to the nearest step.** Sooner or later an agent meets a 19px heading or a 22px gap. Without a rule it keeps the stray value, and the system quietly drifts.

Any size, space or radius not on its scale snaps to the nearest step. Never keep an arbitrary value.

Source: landing-page-design skill.

## Token names

**By role.** Names that describe the job survive a rebrand; names that describe the value lie the moment the value changes.

```css
--color-text: #5c5c5c;
--color-text-muted: #737373;
--color-surface: #ffffff;
--color-line: rgb(0 0 0 / 0.04);
--color-action: #1d1d1f;
```

Source: Impeccable.

## How tokens ship

**All three from one source.** Agents and people both need the same values in the format they work in. One source exported to every format keeps them from drifting.

`tokens/tokens.json` is the source. `node scripts/build-tokens.mjs` writes `tokens.css`, `theme.css` and `usage.md` from it, and Figma variables import the JSON.

**Every token says where it goes.** A value alone invites an agent to use it wherever the number looks right. Each token's description says what it is for and, where it matters, where it must not go: a text colour that is never a background, a spring that never heads into a hard stop. The description is written once in the JSON and generated into `usage.md`, so it cannot drift from the value.

**Copies are checked, not trusted.** Wherever the tokens or the skill are copied (another repo, a product that embeds them, a site that hard-codes a curve), `node scripts/check-drift.mjs` compares each copy with the source and lists every difference. The comparison is a plain script, not a model, so it gives the same answer every time.

Source: General practice.

## How the repos are fed to agents

**Skill with references.** The repos only help if an agent loads the right part at the right time. Short rules up front, detail behind references, tokens as data.

`SKILL.md` holds the hard rules, `references/` the detail, `tokens/` the values. `AGENTS.md` points other tools to the skill.

Source: [Neil McArdle's skills setup](https://neilmcardle.com).

## The finishing list

A site can look done and still feel unfinished. These are the small pieces people only notice when they are missing. Skip links and alt text live in Access and resilience.

- A custom 404 with a way back
- Privacy and terms links in the footer
- A favicon in the brand
- Title, description and a share image on every page
- Forms check required fields and email format before sending
- Cookie consent only where the law asks for it
- No link that goes nowhere
- The current page marked in the navigation

Source: landing-page-design skill.

## How work gets checked

Taste shows up in the checking as much as the making. These are the passes that catch what the first look misses.

- Screenshot desktop and phone together
- Play motion in slow motion and frame by frame
- Look again the next day
- Run worst-case data through every list
- Try it on a real phone
- Tab through every page
- Measure, do not eyeball, contrast and spacing
- Watch a frame meter while anything moves
- Before shipping, name what success looks like and how it will be measured

Source: Emil Kowalski, Apple, Impeccable, Derek Briggs.

## Write down the gaps

**Every run ends with a gaps file.** When an agent cannot follow a rule exactly, it fills the gap with a plausible guess, and the guess looks fine in a screenshot. Asking it to write the gaps down makes them visible before anyone has to find them.

At the end of a piece of work, write `GAPS.md` in the project with three lists:

- **Could not follow.** Each rule that was bent or broken, why, and the decision taken instead.
- **Unsure.** Each value or behaviour that was a guess.
- **Check by hand.** What a person should look at: states that only exist in behaviour, motion, worst-case data, a real phone.

Keep it short and replace it on each run. When the same gap appears twice, it is a rule waiting to be written; see below.

Source: Christine Vallaure.

## Corrections become rules

When someone corrects the work, the correction is a rule waiting to be written. At the end of a long session, list the questions and fixes that changed the outcome, then add each one to the project's agent instructions in a line, so the next session gets it right without being asked.

Keep these files short and prune them as models improve: a rule that the model now follows on its own can go.

Source: Derek Briggs.

# Showpiece effects

Things that exist to be looked at. In this system almost all of them are left out.

## Living background

**At most one static gradient, never animated.** Slow-moving colour behind a hero gives a page atmosphere. Large blurred layers repaint constantly, so they cost more than they look.

If a hero needs atmosphere, use one still gradient behind it. Nothing in it moves, so it never repaints.

Source: makeEbook intro.

## Intro sequence

**None.** An intro sets the tone once. Shown on every visit it becomes a wall between people and the work.

No intro. People land on the page they asked for.

Source: [neilmcardle.com](https://neilmcardle.com).

## Left out

These are deliberately not part of performance-ui. Most cost speed, and the rest suit a site where the impression matters more than the task.

- Particle forms
- Glass panels
- Tilt toward the pointer
- Magnetic buttons
- Headline entrances
- Custom cursor
- Scrolling strips
- Scroll-linked motion
- Grain and texture
- Interface sound

Text selection is set by Browser surfaces in `controls.md`, and the type scale is replaced by the fixed sizes in `type.md`.
