# ClicknGro Interactive Studio — React Frontend

Static, fully hardcoded conversion of the existing `index.html` into a React + Vite project using **shadcn/ui** primitives (for the button/nav shell) and **lucide-react** (for iconography where emojis are replaced/augmented). No backend, no API calls, no dynamic data — every string, link, and animation is hardcoded exactly as in the source HTML.

This README is written so an IDE agent can implement the project end-to-end without further clarification. Follow it top to bottom.
---
## 1. Stack
- **Vite** (`react-ts` template)
- **React 18**
- **Tailwind CSS** (v3) — used instead of the raw `<style>` blocks, but must reproduce every visual rule 1:1
- **shadcn/ui** — only for the `Button` component (nav CTA + card CTAs use plain anchor/hint text, so shadcn's footprint here is intentionally small)
- **lucide-react** — for the arrow icons (`ArrowRight`, `ChevronDown`) currently expressed as `→` / `↓` text glyphs, and optionally to back the emoji scenes (see §5.4)
- **react-router-dom v6** — the nav bar and cards link to `ai-solutions.html`, `mobile-apps.html`, `projects.html`, `contact.html`. These become real routes with placeholder pages (see §7)
- Plain CSS Modules (or a single `index.css` with custom properties) for the bespoke keyframe animations that Tailwind doesn't cleanly express (orbit spin, floating core, talking robot, typing cursor, etc.)

---

## 2. Project setup commands

```bash
npm create vite@latest clickngro-frontend -- --template react-ts
cd clickngro-frontend
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Routing
npm install react-router-dom

# Icons
npm install lucide-react

# shadcn/ui
npx shadcn@latest init
npx shadcn@latest add button
```

During `shadcn init`, choose:
- Style: **Default**
- Base color: **Slate**
- CSS variables: **Yes**

## 3. Design tokens (extract into `tailwind.config.js` + `:root` CSS vars)

Pull these directly from the source `<style>` block — do not invent new values.

**Colors**
| Token | Hex / value | Usage |
|---|---|---|
| `bg-base` | `#050914` | page background |
| `text-base` | `#f2f5ff` | primary text |
| `text-muted` | `#9da9c1` | nav links |
| `text-sub` | `#8e9bb8` / `#9ca9c2` / `#96a3bd` | secondary copy, varies slightly by section — preserve each literal value |
| `accent-tag` | `#a6b4ff` | eyebrow/tag text |
| `accent-violet` | `#8e95ff` | logo "n" |
| `gradient-btn` | `linear-gradient(135deg, #725cff, #168eff)` | CTA buttons |
| `gradient-text` | `linear-gradient(100deg, #fff, #81b4ff 52%, #b18bff)` | `.grad` headline text (background-clip: text) |
| `border-soft` | `rgba(255,255,255,.08)` / `rgba(130,150,255,.35)` / `rgba(151,175,255,.19)` | nav border, button border, card border |
| `card-bg` | `linear-gradient(145deg, rgba(30,40,73,.9), rgba(7,12,27,.95))` | card `.inner` |
| `scene-bg` | `radial-gradient(circle at 50% 10%, rgba(106,91,255,.5), transparent 40%), linear-gradient(135deg,#10183b,#07101f)` | card `.scene` |

**Ambient background glow** (fixed, behind everything, `z-index:-1`):
```css
background:
  radial-gradient(circle at 15% 10%, rgba(91,83,255,.16), transparent 24%),
  radial-gradient(circle at 88% 45%, rgba(0,185,255,.13), transparent 25%);
```

**Typography**
- Font family: `Arial, Helvetica, sans-serif` (keep as-is — no webfont was used in source)
- Hero H1: `font-size: clamp(44px, 7vw, 82px)`, `letter-spacing: -3px`, `line-height: .98`
- Section H2 (services): `45px`
- Feature H2: `28px`
- Card H3: `20px`
- Body copy: `17px` (hero/page-head), `14px` (card), `13px` (nav links)

**Radii / shadows**
- Buttons: `border-radius: 99px` (pill)
- Cards `.inner`: `border-radius: 26px`
- Card `.scene`: `border-radius: 19px`
- Feature blocks: `border-radius: 28px`
- Card shadow: `0 25px 60px rgba(0,0,0,.38), inset 0 1px rgba(255,255,255,.07)`, hover → `0 25px 70px rgba(59,79,255,.25)`

---

## 4. Global layout rules

- `scroll-behavior: smooth` on `html`
- Sticky nav: `height: 72px`, `position: sticky; top:0; z-index:30`, `backdrop-filter: blur(18px)`, background `rgba(5,9,20,.78)`
- Section horizontal padding: `7%` (drop to `5%` under 560px)
- Hero: `grid-template-columns: 1.1fr .9fr`, collapses to `1fr` under 950px
- Cards grid: `repeat(4, 1fr)` → `repeat(2, 1fr)` under 950px → `1fr` under 560px
- `.grid2` (features): `repeat(2, 1fr)` → `1fr` under 950px
- Nav `.links` are hidden entirely under 950px (no hamburger menu in source — replicate exactly, do not add one unless asked)

Reproduce all breakpoints as Tailwind `md:` (950px → custom breakpoint, since Tailwind's default `md` is 768px, add a custom `950px` screen) and a custom `sm-plus: 560px` screen in `tailwind.config.js`:

```js
theme: {
  extend: {
    screens: {
      'lg-custom': '950px',
      'sm-custom': '560px',
    },
  },
}
```

---

## 5. Component breakdown

Build these as separate components under `src/components/`:

### 5.1 `Navbar.tsx`
- Logo: `Click` + bold `n` (colored `accent-violet`) + `Gro.`, links to `/`
- Nav links (hidden below 950px): Home (`/`), AI Solutions (`/ai-solutions`), Mobile Apps (`/mobile-apps`), Projects (`/projects`), Contact (`/contact`)
- CTA: shadcn `<Button>` styled to match `.btn` gradient/pill, text `Start a Project →` (use lucide `ArrowRight` icon instead of the glyph if you prefer icon consistency — optional, keep text-only glyph is also acceptable since source is glyph-based)
- Use `react-router-dom`'s `Link`/`NavLink`, not `<a href>`, for in-app routes

### 5.2 `Hero.tsx`
- Eyebrow tag: `INTERACTIVE DIGITAL EXPERIENCES`
- H1: `Every service should feel like a ` + gradient span `mini digital world.`
- Paragraph copy exactly as source
- CTA button: `Explore Experiences ↓` scrolling to `#services` (use an anchor `<a href="#services">` — plain in-page scroll, not a route)
- Visual: two nested divs — `.orbit` (rotated ellipse ring, `spin` keyframe 10s linear infinite) and `.core` (radial-gradient sphere, `float` keyframe 5s ease-in-out infinite)

### 5.3 `ServicesSection.tsx`
Section heading: eyebrow `EXPLORE CLICKNGRO`, H2 `Hover. Watch. ` + gradient `Interact.`, sub-copy `Every card has its own animated scene.`

Renders a 4-card grid. Each card is `Card.tsx` taking props: `title`, `description`, `hint`, `pillLabel`, `href` (optional — only 2 of 4 cards are links in source), and a `scene` slot (see 5.4). Preserve exactly which cards are links vs. plain divs:
1. **Web Experiences** — plain `<div class="card">` (NOT a link in source — keep it non-clickable, do not invent an href)
2. **Mobile App Development** — links to `/mobile-apps`
3. **AI Solutions** — links to `/ai-solutions`
4. **UI / UX Design** — plain `<div class="card">` (also not a link — preserve this)

Card hover: `translateY(-12px) rotateX(3deg)` on `.card`, border/shadow shift on `.inner` — implement with Tailwind `group` + `group-hover` or CSS module `:hover`.

### 5.4 Scene components (`src/components/scenes/`)
Each is a small self-contained animated component, matching source class names/keyframes 1:1:

- **`WebScene.tsx`** — 💻 emoji (`.device`, `float` 3s infinite) + pill `LIVE BUILD`
- **`AppScene.tsx`** — `.phone` (CSS-only rounded rect with notch + dots, `phone` keyframe 4s rotate/translate) + pill `APP IN MOTION`
- **`AiScene.tsx`** — 🧑🏻‍💻 emoji (`.robot`, `talk` keyframe .5s alternate) + `.wave` of 5 bars with staggered `wave` keyframe animation-delays (0, .1s, .2s, .3s, .4s) + pill `AI TALK • 0:05`
- **`DesignScene.tsx`** — 👨🏻‍🎨 emoji (`.designer`, `design` keyframe 3s) + `.canvas` (gradient rectangle) + `↖` cursor glyph (`cursor` keyframe 2s, translates diagonally) + pill `DESIGNING LIVE`

Reproduce every `@keyframes` block verbatim (`float`, `spin`, `talk`, `wave`, `phone`, `design`, `cursor`, `bars`, `pulse`, `orbitdot`) in `src/index.css` even if some (`.brain`/`.chart`/`.device`(full)/`.client`/`.floatdot`) aren't used on this page yet — they exist in source CSS and are likely used by the linked subpages (`ai-solutions.html` etc.), so keep them available globally for §7.

**On emoji vs. lucide-react:** the source uses raw emoji for characters/objects (💻🧑🏻‍💻👨🏻‍🎨). Keep these as literal emoji — they are illustrative characters, not UI icons, and lucide-react has no equivalent. Reserve lucide-react for actual interface icons only (arrows, chevrons) if you choose to upgrade the `→` / `↓` text glyphs.

### 5.5 `FeatureGrid.tsx`
Two `.feature` cards in a 2-col grid:
1. Eyebrow `CLIENT JOURNEY`, H2 `Your client should see their idea before it exists.`, sub-copy, button `See Projects →` → `/projects`
2. Eyebrow `START A CONVERSATION`, H2 `Don't end with a boring contact form.`, sub-copy, button `Talk to GRO →` → `/contact`

### 5.6 `Footer.tsx`
Centered text: `© 2026 ClicknGro — Build experiences people remember.`

---

## 6. Page assembly

`src/pages/Home.tsx`:
```tsx
<Navbar />
<Hero />
<ServicesSection />
<FeatureGrid />
<Footer />
```

---

## 7. Routing

Set up in `src/main.tsx` or `src/App.tsx` with `react-router-dom`:

| Path | Component | Notes |
|---|---|---|
| `/` | `pages/Home.tsx` | full page from source |
| `/ai-solutions` | `pages/AiSolutions.tsx` | **placeholder** — reuse `Navbar` + `Footer`, page-head block only (`.page-head h1/p` pattern), content TBD since source HTML wasn't provided for this page |
| `/mobile-apps` | `pages/MobileApps.tsx` | placeholder, same pattern |
| `/projects` | `pages/Projects.tsx` | placeholder, same pattern |
| `/contact` | `pages/Contact.tsx` | placeholder, same pattern |

Each placeholder page should still use the shared `Navbar`/`Footer` and the `.page-head` styling (`page-head h1` uses the same `clamp()` sizing as hero h1, `max-width: 850px`) so navigation feels complete even before real content is supplied. Do not fabricate marketing copy for these — use a simple `Coming soon` placeholder under the page-head H1 until real content is provided.

---

## 8. File structure

```
src/
  components/
    Navbar.tsx
    Hero.tsx
    ServicesSection.tsx
    Card.tsx
    FeatureGrid.tsx
    Footer.tsx
    scenes/
      WebScene.tsx
      AppScene.tsx
      AiScene.tsx
      DesignScene.tsx
  pages/
    Home.tsx
    AiSolutions.tsx
    MobileApps.tsx
    Projects.tsx
    Contact.tsx
  components/ui/        (shadcn-generated, e.g. button.tsx)
  index.css              (Tailwind base + custom keyframes + CSS vars)
  App.tsx                (Router + Routes)
  main.tsx
```

---

## 9. Implementation checklist

- [ ] Scaffold project, install deps (§2)
- [ ] Configure `tailwind.config.js` with custom screens + token colors (§3)
- [ ] Port every `@keyframes` rule from source into `index.css` verbatim (§5.4)
- [ ] Build `Navbar`, `Hero`, `Card`/scenes, `ServicesSection`, `FeatureGrid`, `Footer`
- [ ] Wire up `react-router-dom` with the 5 routes (§7), preserving which cards/links are real `<Link>`s vs. static `<div>`s
- [ ] Verify responsive breakpoints at 950px and 560px match source exactly
- [ ] Verify hover states on cards and buttons match source transitions/timings
- [ ] Cross-check every hardcoded string (headings, paragraphs, pill labels, hints) against the source HTML — copy must match character-for-character, this is a pixel/content-accurate port, not a rewrite
