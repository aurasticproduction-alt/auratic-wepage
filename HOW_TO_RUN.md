# How to run Aurastic — fresh start

**If your site is showing old content** (like "DROP YOUR SHOWREEL" placeholder, or the old contact form), your Next.js dev server is serving cached code. Follow these steps **exactly** to get the latest version running:

## 1. Fresh install (if you haven't yet)

```bash
# Extract the zip, open terminal inside the aurastic folder
cd aurastic

# Delete any old caches (IMPORTANT)
rm -rf node_modules .next

# Install fresh
npm install
```

## 2. Verify the video files are there

```bash
ls -lh public/videos/
```

You should see:
```
aurastic-logo-poster.jpg   (~237 KB)
aurastic-logo.mp4          (~12 MB)
aurastic-logo.webm         (~11 MB)
```

If these files are missing, the zip didn't extract properly. Re-extract it.

## 3. Set up your Web3Forms key (one-time)

The contact form sends messages to your email using Web3Forms. Set it up in 30 seconds:

1. Go to **https://web3forms.com**
2. Enter the email where you want inquiries delivered (your Gmail, veltech email, etc.)
3. Click the button — you'll get an access key like `a1b2c3d4-...`
4. Create a file called `.env.local` in the project root (next to `package.json`)
5. Put this inside it:

```
NEXT_PUBLIC_WEB3FORMS_KEY=paste-your-access-key-here
```

Save the file.

## 4. Run the dev server

```bash
npm run dev
```

Open **http://localhost:3000** — hard-refresh with `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac) to bypass any browser cache.

## 5. What you should see

- **Hero section** — split layout, text on left, 3D stage scene in a frame on the right
- **Brand film section** (after marquee) — your actual AURASTIC logo video auto-plays muted, loops, click to pause
- **Contact Us section** — info/channels on left card, message form on right card, with a nice "Contact us." header

## If the video still shows a placeholder

1. Stop the dev server (`Ctrl+C`)
2. Delete the `.next` folder: `rm -rf .next` (or just delete the folder via File Explorer)
3. Restart: `npm run dev`
4. Hard-refresh browser: `Ctrl+Shift+R`

## If the contact form says "Something went wrong"

That means the `NEXT_PUBLIC_WEB3FORMS_KEY` isn't set. Re-check step 3 above and make sure:
- The file is named exactly `.env.local` (not `.env.local.txt` or `env.local`)
- It's in the project root (same folder as `package.json`)
- After creating/editing `.env.local`, **restart the dev server** (`Ctrl+C` then `npm run dev`)
  — Next.js only reads env files on startup

## Deploy to Vercel

1. Push the `aurastic` folder to a GitHub repo
2. Go to https://vercel.com/new and import it
3. Before deploying, go to **Environment Variables** and add:
   - Name: `NEXT_PUBLIC_WEB3FORMS_KEY`
   - Value: your access key
4. Click Deploy
