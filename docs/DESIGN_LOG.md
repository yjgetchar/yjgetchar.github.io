# Design Log

Decisions and open items for the portfolio redesign, kept so the work can resume across sessions.
Update this file whenever a decision is made or a step is committed.

## Reference portfolios (from the user)

| Site | What to borrow |
|---|---|
| https://www.kroszborg.co | Left sidebar with intro, Experience list |
| https://refact0r.dev/projects | Project grid / cards |
| https://www.attiq.design | Editorial tone |
| https://alejandro-gomez.vercel.app/apps/financetelli | AI IDE feel |
| https://www.konpo.studio | Bold studio headline |
| https://bruno-simon.com | 3D world (asked about feasibility only) |

## Timeline

| Date | Step | Status |
|---|---|---|
| 2026-10-04 | 10 layout mockups + 3 combos (A/B/C, desktop + mobile) | Done |
| 2026-10-04 | **A안 (실속형) selected** | Decided |
| 2026-10-04 | 10 profile photo styles generated from the ID photo | Done, waiting for the user's pick |
| 2026-10-04 | 5 samples for the section above Experience | Done, waiting for the user's pick |
| 2026-10-04 | A안 implemented with defaults (photo ④, section ① + ⑤ marquee) | Committed `441f385`, **not pushed** |

## A안 structure (as built)

- Desktop: fixed left sidebar (`Sidebar.astro` → `ProfileCard.astro`, GitHub/LinkedIn, scrollspy nav, theme toggle) and a scrolling right column.
- Mobile: the sidebar collapses into a top bar plus a profile card at the top of the home page.
- Right column order: **About intro** (`AboutIntro.astro`) → Experience (`ExperienceList.astro`) → Projects (`ProjectCard.astro`) → Contact.
- `AskAI.astro`: bottom-right "Ask AI" button opening a `<dialog>`. It answers only from prepared Q&A in `profile.ts`, with no server or API key, because GitHub Pages is static.
- Tokens: dark-first zinc (`#09090b`) + emerald accent, light theme kept.
- Companies are shown as initial badges (S / N / A) instead of logos to avoid trademark use.

## Open decisions

1. **Profile photo** (①–⑩). Current default: ④ Emerald Glow.
   - Source: `~/Downloads/이윤재(3x4).jpg`. LinkedIn blocked automated access (HTTP 999), so the LinkedIn photo itself was not used.
   - ① Studio Gray · ② Smart Casual · ③ Dark Rim-light · ④ Emerald Glow · ⑤ Seoul Outdoor · ⑥ Tech Office · ⑦ B&W Editorial · ⑧ Pastel Minimal · ⑨ 3D Avatar · ⑩ Vector Illustration
   - To swap: replace `src/assets/profile/avatar.jpg` with the chosen image (square crop, ~512px), then build.
2. **Section above Experience** (①–⑤, can be mixed). Current default: ① + the stack marquee from ⑤.
   - ① About + Now (kroszborg): conversational intro with inline badges + "now building" status bar
   - ② At a glance: number cards + GitHub contribution graph
   - ③ AI code card + question box (AI IDE feel; overlaps with the Ask AI button)
   - ④ Big headline + featured project (konpo / attiq)
   - ⑤ What I do cards + tech stack marquee (refact0r)
3. Samsung Electronics role line (only what is OK to make public). Currently company name and dates only.
4. Contact email (currently LinkedIn only) and site language (KO / EN / both).

## Where the images are

The generated images live outside the repo (they include the user's face, and the repo is public):

- Original session: `~/.gemini/antigravity/brain/4049a5a0-54d4-41fb-8695-dd89bb7c76ba/` (`photo_01..10_*.jpg`, `intro_01..05_*.jpg`, `combo_*`, `mockup_*`)
- Copies for review: `~/.gemini/antigravity/brain/6529afc1-4b61-4e99-a9f0-93da823cc31c/samples/`

## Deploy note

Pushing `main` triggers the GitHub Pages deploy. The A안 commit is held locally until the photo is chosen.
