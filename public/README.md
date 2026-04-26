# Drop your assets here

This folder holds everything static — anything here is served at the root of your site.
When you have your files ready, drop them into the folders below using these exact names
(or update the paths in the code).

## 📁 `/public/videos/`
Your showreel. The site expects one of:

- `showreel.mp4` — primary source (recommended, H.264 MP4, ~10–30 MB, 1080p, looped-safe)
- `showreel.webm` — optional secondary source for smaller file size

Tips:
- Keep it 10–30 seconds, loopable
- Compress to ~2–4 Mbps bitrate (use HandBrake or ffmpeg)
- No hard audio — the reel starts muted

Until you drop a video, the section shows a "drop your showreel at /public/videos/showreel.mp4" placeholder.

## 📁 `/public/images/`
Event photography for the gallery. Recommended:
- `event-1.jpg` through `event-7.jpg` (or whatever names — just update `Gallery.tsx`)
- JPG format, 1400px wide, ~80% quality
- Landscape for wide cards, portrait for tall cards

Currently the gallery pulls from Unsplash as placeholders. To swap, edit `components/sections/Gallery.tsx` and change the `src:` URLs to `/images/your-file.jpg`.

## 📁 `/public/logos/`
Your Aurastic logo files:
- `logo.svg` — primary vector logo (preferred, scales perfectly)
- `logo-mark.svg` — just the diamond mark
- `logo-light.svg` — inverted/light version if needed
- `favicon.svg` — browser tab icon

The site currently uses an inline SVG logo (rendered in code). To swap in your real logo, either:
1. Replace the inline `<svg>` in `components/ui/Nav.tsx` and `Footer.tsx`, OR
2. Drop a file here and reference it as `<img src="/logos/logo.svg" />`

## 📁 `/public/assets/`
General images. Currently contains:
- `poster-hero.png` — the purple hero poster you uploaded (used in the 3D scene fallback)
- `poster-launch.png` — the launch announcement poster (used in About section)

## Other public files you'll want later
- `/favicon.ico` — browser tab icon
- `/apple-touch-icon.png` — iOS home-screen icon (180x180)
- `/og-image.png` — social sharing preview (1200x630)
- `/robots.txt`, `/sitemap.xml` — for SEO

Drop them in `/public/` root and they'll be served at `/favicon.ico`, `/og-image.png`, etc.
