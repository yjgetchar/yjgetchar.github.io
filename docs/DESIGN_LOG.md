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
| 2026-10-04 | Design log + README update; photos/samples gathered into one review page (`walkthrough.md` in session `6529afc1…`) | Committed `b1d9016`+, **not pushed** |

| 2026-10-04 | **User picks:** About under GitHub/LinkedIn in the sidebar, LinkedIn content in About, photo ⑨ (3D) with click → ③ (real), job in About, push | Done, pushed |
| 2026-10-04 | Drop education/language from About; all project covers redone in dark Apple product style (graphite + emerald, one object, no text); **AI Star Chaser** added (featured #2, Portfolio Site moved off the home grid); catchphrase header (`Hero.astro`) with 5 candidates, hidden until picked | Done |
| 2026-10-04 | **Catchphrase selected:** `Slow is Fast in AI — Just Do AI.` | Done, pushed |
| 2026-10-04 | Added recent interest (`최근 관심사 Paperclip, multica를 이용한 Agent 구조화.`) right below now-building bar | Done, pushed |
| 2026-10-04 | Removed GitHub activity section from /about; implemented interactive background effect (`InteractiveBackground.astro`: Metaball Energy Field + Deep Space Nodes + Parallax/Ripple); removed placeholder text and added real gameplay screenshots to Mini Game Heaven and AI Star Chaser | Done |

## A안 structure (as built)

- Desktop: fixed left sidebar (`Sidebar.astro` → `ProfileCard.astro`, GitHub/LinkedIn → `AboutCard.astro` → scrollspy nav (Experience/Projects/Contact), theme toggle) and a scrolling right column.
- Avatar (`Avatar.astro`): ⑨ 3D on the front, ③ real photo on the back. Clicking the profile avatar sets `html[data-avatar="photo"]`, which flips every avatar on the page (sidebar, mobile card, top bar, Ask AI).
- About content comes from the public LinkedIn profile: System Software Engineer @ Samsung Electronics, embedded systems · Android/Linux, 8+ years. (Education & languages removed per request).
- Mobile: the sidebar collapses into a top bar plus a profile card (profile + About, `#about`) at the top of the home page. The mobile menu adds an About link.
- Right column order: Catchphrase Hero (`Slow is Fast in AI — Just Do AI.`) → **Now strip** (`NowStrip.astro`: now building + local time + recent interest + stack marquee) → Experience (`ExperienceList.astro`) → Projects (`ProjectCard.astro`) → Contact.
- `AskAI.astro`: bottom-right "Ask AI" button opening a `<dialog>`. It answers only from prepared Q&A in `profile.ts`, with no server or API key, because GitHub Pages is static.
- Tokens: dark-first zinc (`#09090b`) + emerald accent, light theme kept.
- Companies are shown as initial badges (S / N / A) instead of logos to avoid trademark use.

## Catchphrase candidates (`heroOptions` in profile.ts, pick with `heroChoice`)

Eyebrow for all: `yj.getchar()` (wordmark idea from the GitHub handle; `getchar()` also nods to C/system programming).

⭐ **Selected:** `Slow is Fast in AI — Just Do AI.` (Sub: '원리와 기본을 단단하게 다질 때, AI는 가장 빠르고 확실한 제품이 됩니다. 고민은 짧게, 실행은 AI와 함께.')

Previous candidates preserved:
2. **Low-level by day, AI by night.** — 낮에는 임베디드와 Android/Linux, 밤에는 AI 에이전트와 웹 게임. (recommended: tells his own story)
3. **From kernel to agent.** — 커널에서 에이전트까지.
4. **Less repetition, more play.** — 반복은 AI에게, 재미는 사람에게.
5. **Input: an idea. Output: a product.**

Mockups are real screenshots per candidate: `~/.gemini/antigravity/brain/6529afc1-4b61-4e99-a9f0-93da823cc31c/mockups/`.

## Open decisions

1. ~~**Profile photo**~~ Decided: ⑨ 3D, click → ③ Dark Rim-light.
   - Source: `~/Downloads/이윤재(3x4).jpg`. LinkedIn blocked automated access (HTTP 999), so the LinkedIn photo itself was not used.
   - ① Studio Gray · ② Smart Casual · ③ Dark Rim-light · ④ Emerald Glow · ⑤ Seoul Outdoor · ⑥ Tech Office · ⑦ B&W Editorial · ⑧ Pastel Minimal · ⑨ 3D Avatar · ⑩ Vector Illustration
   - To swap: replace `src/assets/profile/avatar.jpg` with the chosen image (square crop, ~512px), then build.
2. **Section above Experience**: About moved to the sidebar; the right column keeps the now-building bar + stack marquee. Other samples (②–⑤) still available.
   - ① About + Now (kroszborg): conversational intro with inline badges + "now building" status bar
   - ② At a glance: number cards + GitHub contribution graph
   - ③ AI code card + question box (AI IDE feel; overlaps with the Ask AI button)
   - ④ Big headline + featured project (konpo / attiq)
   - ⑤ What I do cards + tech stack marquee (refact0r)
3. ~~Samsung role~~ Decided: System Software Engineer (from LinkedIn). Location: LinkedIn says Yongin, the site still says Seoul. Confirm.
4. Contact email (currently LinkedIn only) and site language (KO / EN / both).

## Where the images are

The generated images live outside the repo (they include the user's face, and the repo is public):

- Original session: `~/.gemini/antigravity/brain/4049a5a0-54d4-41fb-8695-dd89bb7c76ba/` (`photo_01..10_*.jpg`, `intro_01..05_*.jpg`, `combo_*`, `mockup_*`)
- Copies for review: `~/.gemini/antigravity/brain/6529afc1-4b61-4e99-a9f0-93da823cc31c/samples/`

## Deploy note

Pushing `main` triggers the GitHub Pages deploy.
