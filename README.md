# AURASTIC — Cinematic Website

> Every event deserves an aura. We create it.

A production-grade, fully animated single-page site for **Aurastic · An AI Event Management × Productions**, built on the same tech stack used by award-winning agencies (Active Theory, Resn, Studio Freight).

![Stack](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square) ![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat-square) ![Three.js](https://img.shields.io/badge/Three.js-r169-000?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6?style=flat-square) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square)

---

## 🧰 Tech stack

| Layer | Library | Why |
|---|---|---|
| Framework | **Next.js 14** (App Router, TypeScript) | Production-grade React, built-in image/video optimisation, SEO-perfect, one-click Vercel deploy |
| 3D / WebGL | **React Three Fiber** + **Drei** + **Postprocessing** | Declarative Three.js with cinematic bloom, god-rays, chromatic aberration, reflective floors |
| Scroll animations | **GSAP** + **ScrollTrigger** | Industry standard for scroll-driven camera moves and reveals |
| Smooth scroll | **Lenis** | Buttery smooth scroll, integrated with GSAP ticker |
| Component animation | **Framer Motion** | Loader, nav, mobile menu, page transitions |
| Styling | **Tailwind CSS** | Utility-first, custom design tokens in `tailwind.config.ts` |
| Type safety | **TypeScript 5** strict mode | Catches bugs at compile time |

---

## 🚀 Getting started

### 1. Install dependencies

```bash
cd aurastic
npm install
```

First install takes ~2 min (Three.js + R3F are chunky).

### 2. Run the dev server

```bash
npm run dev
```

Open **http://localhost:3000**. Hot-reload is on — edits save instantly.

### 3. Build for production

```bash
npm run build
npm run start
```

### 4. Type-check

```bash
npm run typecheck
```

---

## 📂 Project structure

```
aurastic/
├── app/
│   ├── layout.tsx          # Root layout + fonts + SEO metadata
│   ├── page.tsx            # Main page — ties 3D scene to scroll
│   └── globals.css         # Design tokens, Lenis styles, cursor
│
├── components/
│   ├── 3d/
│   │   └── HeroScene.tsx   # The centerpiece — full R3F stage scene
│   │
│   ├── sections/
│   │   ├── Hero.tsx            # Text overlay for 3D hero
│   │   ├── Marquee.tsx         # Scrolling services ticker
│   │   ├── About.tsx           # "We engineer auras"
│   │   ├── Services.tsx        # Bento grid of 10 capabilities
│   │   ├── Process.tsx         # 4-step How It Works
│   │   ├── Why.tsx             # 6 differentiators
│   │   ├── Audience.tsx        # B2B / B2C split cards
│   │   ├── Stats.tsx           # Headline metrics
│   │   ├── VideoShowcase.tsx   # Auto-play-on-view showreel
│   │   ├── Gallery.tsx         # Portfolio bento grid
│   │   ├── Founder.tsx         # Dwarakesh bio
│   │   └── Contact.tsx         # WhatsApp-integrated form
│   │
│   ├── ui/
│   │   ├── SmoothScroll.tsx    # Lenis + GSAP integration
│   │   ├── Loader.tsx          # Animated logo reveal on first load
│   │   ├── CursorGlow.tsx      # Custom desktop cursor with trailing glow
│   │   ├── Nav.tsx             # Hide-on-scroll floating nav
│   │   └── Footer.tsx          # Site footer
│   │
│   └── motion/
│       ├── Reveal.tsx          # GSAP fade+rise on scroll
│       ├── ParallaxImage.tsx   # Parallax image with scrub
│       └── SplitText.tsx       # Character-level text reveal
│
├── lib/
│   ├── gsap.ts            # GSAP + ScrollTrigger registration
│   └── utils.ts           # cn(), lerp, clamp, mapRange helpers
│
├── public/
│   ├── videos/            # Drop your showreel here (see /public/README.md)
│   ├── images/            # Drop event photos here
│   ├── logos/             # Drop logo files here
│   └── assets/            # Misc images (current: poster-hero, poster-launch)
│
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
└── README.md (you are here)
```

---

## 🎬 The 3D Hero Scene

`components/3d/HeroScene.tsx` is the cinematic centerpiece. It contains:

- **Reflective stage floor** — blurred mirror reflections (Drei's `MeshReflectorMaterial`)
- **Circular riser** with glowing torus rim
- **Two steel trusses** on either side (cylinder + diagonal bracing)
- **Overhead beam** connecting the trusses
- **4 moving spotlights** — each rotates independently, colored violet / magenta / purple, with pulsing intensity
- **LED wall** with animated fragment shader (noise + scanlines + pixel grid)
- **Floating Aurastic mark** — diamond frame + white play-arrow, gently bobbing
- **Sparkle haze** — two layers of atmospheric particles
- **Post-processing** — Bloom (critical for the cinematic feel), Chromatic Aberration, Vignette
- **Camera rig** — driven by a scroll progress ref from `app/page.tsx`:
  - `0.00` → wide establishing shot
  - `0.33` → push in on stage
  - `0.66` → orbit to the right
  - `1.00` → rise up high
  - Plus subtle mouse parallax throughout

The scene pins for 2 screens of scroll (`end: '+=200%'`) while the camera moves, then fades out as the About section begins.

---

## 🎥 Videos

The `VideoShowcase` section supports MP4 + WebM with:
- Auto-play when scrolled into view (muted by browser policy)
- Pause when out of view
- Play/pause and mute/unmute controls
- Scale-in reveal with rounded-border animation on scroll
- Graceful fallback when no video is present

**To add your showreel:**
1. Export your video as `showreel.mp4` (H.264, 1080p, ~2-4 Mbps)
2. Drop it at `/public/videos/showreel.mp4`
3. Optionally add `/public/videos/showreel.webm` for smaller file size

That's it — the site will pick it up automatically.

---

## 🚢 Deploy

### Vercel (recommended, free)

1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo — Vercel auto-detects Next.js
4. Deploy — you get a free `*.vercel.app` URL in ~60 seconds
5. Connect your custom domain (`aurastic.in`?) in project settings

**Why Vercel:** Built by the same team as Next.js. Edge CDN, automatic HTTPS, preview deploys on every git push, zero config.

### Other hosts

- **Netlify** — works, set build cmd `npm run build` and publish dir `.next`
- **Cloudflare Pages** — works, same config
- **Any Node host** — `npm run build && npm run start` runs on port 3000

---

## ✏️ Customising

### Colors
All design tokens are in `tailwind.config.ts`. Change `violet` / `magenta` and the whole site updates.

### Content
Every section's copy is in its component (`components/sections/*.tsx`). Search-and-replace is safe.

### Add a new section
1. Create `components/sections/MySection.tsx` using `Reveal` + Tailwind
2. Import it in `app/page.tsx` and drop it between existing sections

### Replace 3D content
Edit `components/3d/HeroScene.tsx`. The scene is fully declarative React — add a `<mesh>`, tweak a shader, swap colors. Hot-reload shows changes live.

---

## ⚠️ Things to confirm before launch

### 1. **Phone number mismatch**
- Pitch deck says `+91 7845746809`
- Launch poster says `+91 7845856809`
- The site currently uses **`+91 78458 56809`** (the poster number) in: `Nav`, `Contact`, `Footer`, and the WhatsApp form handler.

If it should be the other one, search for `7845856809` in the codebase and swap to `7845746809`. It appears in:
- `components/ui/Footer.tsx`
- `components/sections/Contact.tsx`

### 2. **Email**
Currently `vtu24360@veltech.edu.in` throughout. Change to a branded address like `hello@aurastic.in` once you have a domain + mailbox.

### 3. **Gallery images**
`components/sections/Gallery.tsx` pulls from Unsplash as placeholders. Replace the `src:` URLs with your own `/images/*` when you have real event photos.

### 4. **Founder photo**
Currently a stylized SVG portrait in `components/sections/Founder.tsx`. To use a real photo of Dwarakesh:
1. Drop `dwarakesh.jpg` in `/public/assets/`
2. Replace the `<FounderPortrait />` call with:
   ```tsx
   <Image src="/assets/dwarakesh.jpg" alt="Dwarakesh Venkateshan" fill className="object-cover" />
   ```

### 5. **Real logo**
Currently inline SVG mark. When you have your final logo files, drop them in `/public/logos/` and swap the `<svg>` blocks in `Nav.tsx`, `Footer.tsx`, and `Loader.tsx`.

---

## 🔮 What to add later

- [ ] **Contact form backend** — currently opens WhatsApp. Add Formspree / Resend / Web3Forms for email copies.
- [ ] **CMS integration** — Sanity or Payload so you can edit gallery / testimonials without code
- [ ] **Testimonials section** — client quotes, carousel
- [ ] **Client logos strip** — VIT, Anna University, etc.
- [ ] **Dedicated gallery page** — `/work` with filterable portfolio
- [ ] **Case studies** — `/work/[slug]` MDX pages
- [ ] **Instagram feed widget** — auto-pull latest posts
- [ ] **Google Analytics / Plausible**
- [ ] **Sitemap + robots.txt**
- [ ] **OG image generator** for link previews
- [ ] **Language toggle** — English / Tamil

---

## 🧠 Performance notes

- 3D scene uses `dpr={[1, 2]}` — caps pixel ratio on retina for perf
- Three.js is dynamically imported with `ssr: false` — no blocking on first paint
- All images use `next/image` for automatic AVIF/WebP + lazy loading
- Fonts use `next/font/google` — self-hosted, zero layout shift
- Lenis smooth scroll respects `prefers-reduced-motion`
- Custom cursor disabled on touch devices

For production, consider:
- Running Lighthouse — target 90+ perf on desktop
- Adding `next/bundle-analyzer` to see what's heavy
- Serving videos from Cloudflare R2 / Mux for better streaming

---

## Credits & stack links

- [Next.js](https://nextjs.org)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Drei](https://github.com/pmndrs/drei)
- [Postprocessing](https://github.com/pmndrs/postprocessing)
- [GSAP](https://gsap.com)
- [Lenis](https://lenis.studiofreight.com)
- [Framer Motion](https://www.framer.com/motion)
- [Tailwind CSS](https://tailwindcss.com)

---

**Built with intention. Ready to launch.**

**#anArtisticproduction**
