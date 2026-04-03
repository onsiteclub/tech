# OnSite Tech — tech.onsiteclub.ca

## Project Overview
Landing page for OnSite Club's technology/SaaS arm. Presents the digital solutions and custom development services that OnSite can offer to construction companies.

## Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Fonts:** Montserrat (body), Space Mono (mono) — same as main site
- **Deploy:** Vercel (subdomain: tech.onsiteclub.ca)

## Brand Guidelines
- **Primary accent:** #F6C343 (OnSite gold/amber)
- **Dark background:** #181C24 (cool charcoal)
- **Font family:** Montserrat for body, Space Mono for labels/mono
- **Tone:** Professional but approachable. B2B focused — speaking to construction company owners/managers
- **Logo:** Use OnSite Club logo assets from main site (`Onsite-website-2/public/images/logo-*`)

## Project Structure
```
onsite-tech/
├── public/images/          # Static assets
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Landing page
│   ├── components/         # React components
│   └── styles/             # Global styles
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── CLAUDE.md
```

## Key Products to Showcase
1. **OnSite Calculator** — Voice-powered construction calculator (Web, iOS, Android)
2. **OnSite Timekeeper** — GPS time tracking with geofence (Web, Android)
3. **OnSite Checklist** — AI-powered job checklists (Web)
4. **Custom Solutions** — Tailored SaaS tools for construction companies

## Related Projects
- Main website: `../Onsite-website-2` (onsiteclub.ca)
- Calculator: `../onsite-calculator`
- Timekeeper: `../onsite-timekeeper`
- Dashboard: `../onsite-dashboard`

## Commands
```bash
npm install          # Install dependencies
npm run dev          # Dev server (localhost:3000)
npm run build        # Production build
npm run lint         # Lint check
```

## Conventions
- Use `'use client'` only when needed (event handlers, hooks, browser APIs)
- Prefer server components by default
- Keep components small and focused
- Use semantic HTML
- Mobile-first responsive design
- All text should be bilingual-ready (EN/PT at minimum, FR/ES later)
