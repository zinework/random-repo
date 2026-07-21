# CLAUDE.md — Project Memory & Engineering Rules

> Claude Code: read this at session start. This is long-lived project memory — the codebase
> is planned to grow for ~5 years, so every decision favors extensibility over shortcuts.
> Keep this file updated as decisions change; keep it under ~5k tokens (overflow → /docs).

---

## 1. OPERATING RULES

### Confirmation gates
- **Small tasks** (single component, small fix, config tweak, one file): just do it.
- **Medium/large tasks** (new pages/routes, structural changes, multi-file work, deploy
  config, schema changes): propose a SHORT plan (3–6 bullets) and WAIT for the user's go.
- **Never install a new npm dependency without asking.** No exceptions.

### Token discipline
- Build exactly what was asked — nothing speculative.
- Read only files relevant to the task; never re-scan the whole codebase.
- Edit existing files; never regenerate them.
- Brief explanations only (user is a UX designer learning code — 1–2 lines of "why" on
  non-obvious decisions).
- Session hygiene: on request, append a compact summary to docs/progress.md. Start
  sessions from this file + docs/progress.md instead of re-deriving context.

### Current state
- **Repo is EMPTY.** First task: scaffold Next.js (TypeScript, Tailwind, App Router).

---

## 2. PROJECT SUMMARY (brief)

Research-hub website for Dr. Jasmin Zine (Wilfrid Laurier University) visualizing her
scholarship on Islamophobia in Canada. Umbrella: **MIRC**; flagship: **VIP (Visualizing
Islamophobia Project)**. Audience: academics/students, then policymakers/media. Register:
scholarly + editorial (data-journalism), never corporate. The client is non-technical and
iterates often; a non-technical editor will manage content via CMS. The site will grow
for years: new visualization projects, media types, and sections will be added regularly.
The subject matter draws hostility — security and airtight sourcing are requirements.

Phases: **1** foundation + private Vercel site → **2** Sanity CMS + Cloudflare + soft
launch → **3** full build-out + public launch. Don't build ahead of phase unless asked.

---

## 3. ARCHITECTURE — BUILT TO GROW FOR 5 YEARS

### Core principle: content/data is separated from code
Never hardcode content in components. All content flows through a **data layer**:
typed data files now → Sanity CMS later. Components are content-agnostic renderers.

### The data layer is an abstraction (critical for CMS swap)
- All content access goes through functions in `/src/lib/content/` (e.g. `getProjects()`,
  `getNavItems()`, `getPodcasts()`), NOT direct imports of data files in components.
- Today those functions read from `/src/data/*.ts`. In Phase 2 their internals switch to
  Sanity queries — **components never change**. This is the seam the CMS migration
  happens through; protect it.
- Define shared TypeScript types for every content shape in `/src/types/` (e.g.
  `Project`, `NavItem`, `Podcast`, `TeamMember`). Data files and future Sanity schemas
  both conform to these types.

### Hub-and-spokes routing
- Home routes to everything. Each visualization project = its own route group, fully
  self-contained (its components, its data hooks) so projects ship/evolve independently
  and new ones slot in without touching existing ones.
- Nav is data-driven (built from `getNavItems()`); adding a project = one data entry.
- Use grouped dropdown nav + burger with complete index; it must scale to 15+ projects.

### Folder structure
```
/src
  /app                → routes (App Router)
    /(site)           → main pages
    /projects/[slug]  → or per-project route groups as they're built
  /components
    /ui               → primitives (Button, Card, Section, …)
    /layout           → Nav, Footer, shells
    /viz              → visualization-specific components (charts, scroll scenes)
  /lib
    /content          → the data-access layer (the CMS seam)
    /utils            → helpers
  /data               → typed content files (Phase 1 only; replaced by Sanity)
  /types              → shared content + domain types
  /styles             → globals, tokens
/docs                 → progress.md, decisions.md, reference notes (load on demand)
/public               → static assets
```

---

## 4. CODE STYLE & CONVENTIONS

- **TypeScript strict.** No `any`. Type every content shape and component prop.
- **Naming:** PascalCase components (`ProjectCard.tsx`), camelCase functions/vars,
  kebab-case routes/folders, UPPER_SNAKE for true constants. Descriptive over short.
- **Components:** function components only; props typed via interface above the
  component; one component per file; co-locate small private subcomponents.
- **Server Components by default**; add `"use client"` only where interactivity requires.
- **Imports:** absolute via `@/` alias, grouped (external → internal → types).
- **No premature abstraction** — extract a shared component after the 2nd–3rd repeat,
  not before. But DO abstract the data layer from day one (see §3).
- **Comments:** only for non-obvious "why"; code should read clearly without them.
- **Formatting:** Prettier defaults + ESLint (Next.js config). Don't fight the formatter.
- **Commits:** small, frequent, imperative messages ("add nav dropdown", not "stuff").
  `main` is always deployable — every push auto-deploys to the client-visible link.
- Sections/components must render gracefully **empty** (content often arrives later).
- Laptop-first; mobile must work. Test both before calling a task done.

---

## 5. DESIGN APPROACH — FLEXIBLE, TOKEN-DRIVEN

- Visual identity is not final and will evolve (Figma designs arriving over time).
  Therefore: **all visual decisions go through design tokens** — CSS variables +
  Tailwind theme (colors, type scale, spacing, radii). No hardcoded hex values, font
  names, or magic numbers in components. Restyling the site must be a token edit,
  not a component hunt.
- Until Figma specs exist for a screen: build clean, minimal, neutral styling using the
  tokens (sensible defaults are fine — don't invent a strong visual identity, and don't
  leave things unusably bare either). When Figma arrives, update tokens/components to
  match.
- Two font slots (heading serif, body sans) defined as tokens, swappable.
- Motion: calm, subtle, no flashing, no autoplay of anything. Respect
  `prefers-reduced-motion`.
- Accessibility is non-negotiable: semantic HTML, alt text, keyboard navigation, visible
  focus states, WCAG 2.1 AA contrast, never color alone for meaning. Scroll-driven viz
  needs a readable non-scroll fallback.

---

## 6. SECURITY RULES (from commit one)

- **Never commit secrets.** Verify `.gitignore` covers `.env*` before first push. Keys go
  in Vercel env vars — never in code or repo history.
- Site stays **static/pre-rendered**: no public database, no public login, no public
  write path. Do NOT introduce server-side DB/auth without explicit direction — the
  static architecture is a deliberate security posture (site may be targeted; DDoS/
  defacement are realistic threats given the subject).
- Content changes only via Git or (Phase 2) Sanity, both behind account security.
- No third-party scripts beyond the approved stack without asking.
- Everything must be rebuildable from Git in minutes.

## 7. SENSITIVE-CONTENT RULES

- Quebec City mosque attack content: restrained — context, never spectacle; no graphic
  content; individual victims' stories link out to a separate memorial, not embedded.
- Every statistic carries a source; advocacy-group figures get traced to original
  pollsters before public launch (mark unverified stats visibly in dev).
- Named individuals/orgs need attributed, airtight sourcing ("according to Zine, 2022").
- Polling/hate-crime framing: climate/correlation, **never** direct causation.

---

## 8. STACK (decided — don't substitute)

Next.js (App Router) · TypeScript · Tailwind · Vercel (auto-deploy, GitHub: zinework) ·
Sanity CMS (Phase 2, via the /lib/content seam) · Cloudflare (Phase 2) · Figma (design).
Visualization libs (D3, GSAP/ScrollTrigger, etc.) will be proposed per-project — ask
before adding any.

---

## 9. OPEN QUESTIONS (flag if a task depends on these)

- Final branding (name, accent, wordmark) — awaiting client + Figma.
- Emotional goal for visitors (understand scale / feel injustice / act).
- Phase 1 priority order.

## 10. WORKING WITH THE USER

- UX designer, strong in Figma, learning code — brief "why"s, no essays.
- Ambiguous task → ask ONE clarifying question, don't guess expensively.
- Remind the user to commit after each completed piece.
