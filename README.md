# Amit Roy — Portfolio (Next.js + React + Tailwind)

A rebuilt version of the portfolio site, now a proper React/Next.js app,
updated with everything from your latest CV (`Amit_Roy_CV_Final_v3_0_0.docx`)
that was missing from the old single-file HTML page:

- **Additional Languages** (PHP, Ruby, Perl, Lua, Lisp, C#, R, MATLAB, Zig,
  Swift, Nim, Scala, Objective-C, HTML, CSS)
- **Networking & Infrastructure** skill category (TCP/IP, CCNA, Windows
  Server, Firewall/IDS/IPS, VPN, DNS/DHCP…) — this whole category was absent
  from the old site
- **Frameworks & Dev Tools** (React, Next.js, Django, Flask, Node.js, Vue.js…)
- **Academic Skill Coverage** — the full Sem 1–8 BSc(H) ANCS syllabus mapping
- **Soft Skills** and **Spoken Languages** sections
- GitHub stats (33+ repos, 5+ actively maintained) folded into Achievements
- Kali Linux / ParrotOS added to the offensive tools list

The visual identity (dark, terminal/hacker-green theme) is kept, because it's
already distinctive and fits a cybersecurity engineer's brand. The hero photo
placeholder has been replaced with an animated terminal "recon scan" panel
since no headshot was supplied — swap it out any time (see below).

## Tech stack

- **Next.js 14** (App Router, static export)
- **React 18** + **TypeScript**
- **Tailwind CSS**
- Zero backend — the contact form opens the visitor's email client
  (`mailto:`) with the message pre-filled; there's no server to run.

## 1. Install dependencies

This project's dependencies were **not** installed in the sandbox that
generated it (no internet access there). On your own machine, with Node.js
18+ installed:

```bash
cd portfolio
npm install
```

## 2. Run it locally

```bash
npm run dev
```

Open http://localhost:3000

## 3. Add your photo (optional)

Drop an image into `public/`, e.g. `public/headshot.png`, then swap the
`TerminalCard` in `components/Hero.tsx` for an `<img>`/`next/image`, or ask
me to wire it in for you.

## 4. Edit your content

Everything textual — bio, skills, projects, experience, certs, education,
hobbies, contact links — lives in one place: **`data/cv.ts`**. Edit that file
and every section on the page updates automatically.

## 5. Deploy to GitHub Pages

### One-time setup

1. Create a GitHub repo (e.g. `portfolio`) and push this project to it:

   ```bash
   git init
   git add .
   git commit -m "Portfolio v4 — rebuilt in Next.js with full CV update"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```

2. Open **`next.config.mjs`** and set `REPO_NAME` to your repo's name
   (already set to `"portfolio"` — change it if you named the repo
   differently). If your repo is the special `<username>.github.io` repo,
   set `REPO_NAME = ""`.

3. In the GitHub repo: **Settings → Pages → Build and deployment → Source**,
   choose **GitHub Actions**.

### Every push after that

Just push to `main` — `.github/workflows/deploy.yml` builds the static site
with `next build` (using `output: "export"`) and publishes the `out/`
folder to GitHub Pages automatically. Your site will be live at:

```
https://<your-username>.github.io/portfolio/
```

(or `https://<your-username>.github.io/` if you used the
`<username>.github.io` repo).

### Manual export (no CI)

```bash
npm run build   # generates static site in ./out
```

Then upload the contents of `out/` to any static host (GitHub Pages,
Netlify, Vercel, S3, etc.).

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx        # <head> metadata
│   ├── page.tsx           # assembles all sections
│   └── globals.css        # design tokens / theme
├── components/            # one component per section
├── data/cv.ts              # ← all your content lives here
├── next.config.mjs         # static export + GitHub Pages basePath
└── .github/workflows/deploy.yml
```
