# Phase 2 Design Plan — Premium UI/UX & Visual Architecture

## 1. Current Visual Design Review & Stack Assessment
- **Existing Baseline:** Default Next.js 15 starter layout (`globals.css` configured with Tailwind CSS v4 `@import "tailwindcss";`, Geist fonts loaded via `next/font`).
- **Target Stack Alignment:** Next.js 15.3.4 (App Router), React 19, TypeScript 5, Tailwind CSS 4, `lucide-react`.
- **Primary Objective:** Deliver a recruiter-focused, technical developer portfolio with ultra-clean typography, dark-first slate/indigo palette, responsive layout, subtle interactive states, zero fake data, and fast compilation.

---

## 2. Strengths & Weaknesses Analysis

### Current Strengths
- Modern stack (Next.js 15 App Router, React 19, Tailwind v4).
- Clean compilation and static export compatibility.
- Standardized TypeScript configuration (`@/*` alias).

### Current Weaknesses
- Default Next.js starter page content present.
- Broken component `app/portfoliocomp/index.js` still present.
- Absence of centralized data structure (`data/portfolio.ts`).
- Missing sticky header, active scroll tracking, project spotlight cards, experience timeline, and mobile navigation drawer.

---

## 3. Proposed Visual System & Theme Architecture

### Color Palette (Restrained Modern Slate + Indigo Accent)
- **Canvas / Page Background:** `#090d16` (slate-950 midnight dark)
- **Card / Surface Background:** `#111726` (slate-900 surface)
- **Subtle Surface Hover:** `#182238` (slate-850 hover)
- **Border / Divider:** `#1e293b` (slate-800) / `#334155` (slate-700 hover)
- **Primary Accent:** `#6366f1` (indigo-500) / `#818cf8` (indigo-400)
- **Secondary Accent:** `#10b981` (emerald-500 for live status badges)
- **Heading Text:** `#f8fafc` (slate-50 high contrast)
- **Body Text:** `#94a3b8` (slate-400 readable body)
- **Muted Text:** `#64748b` (slate-500 metadata & labels)

### Visual Effects & Elevation
- Glassmorphism backdrop blur: `backdrop-blur-md bg-[#090d16]/80`
- Subtle glow effects: `shadow-[0_0_25px_rgba(99,102,241,0.1)]`
- Crisp borders: `border border-slate-800/80 hover:border-indigo-500/40`

---

## 4. Typography Strategy
- **Primary Sans Font:** `var(--font-geist-sans)` for body, subheadings, and section headers.
- **Monospace Accent Font:** `var(--font-geist-mono)` for tech badges, dates, code snippets, project metrics, and hero label prefixes.
- **Hierarchy Scale:**
  - Hero Main Headline: `text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight`
  - Section Titles: `text-2xl sm:text-3xl font-bold text-slate-100`
  - Section Subtitles / Badges: `text-xs font-mono uppercase tracking-widest text-indigo-400`
  - Body Text: `text-base text-slate-400 leading-relaxed`
  - Tech Pills: `text-xs font-mono text-slate-300 bg-slate-800/70 border border-slate-700/50`

---

## 5. Spacing Scale & Layout System
- Container Bounds: Max width `max-w-6xl` centered with `px-4 sm:px-6 lg:px-8`.
- Section Padding: Vertical padding `py-16 sm:py-24 lg:py-28`.
- Component Gap System: `gap-6` to `gap-12` between grid items.
- Line Length Limit: `max-w-2xl` for paragraph readability.

---

## 6. Detailed Component Architectural Strategy

1. **`data/portfolio.ts`**: Single source of truth. Fully typed TypeScript data object backing all sections. Uses `[ADD INFORMATION]`, `[ADD GITHUB URL]`, etc. for missing personal info.
2. **`components/Navbar.tsx`**: Sticky glassmorphic header, brand text, desktop navigation with smooth anchor links (`#about`, `#skills`, `#experience`, `#projects`, `#education`, `#contact`), active section indicator via `IntersectionObserver`, mobile drawer menu with scroll-lock, Resume CTA.
3. **`components/Hero.tsx`**: High-impact split hero layout. Left side: status pill ("Available for Opportunities"), main name headline, role title, brief value prop, primary buttons ("View Projects", "Contact Me", "Download Resume"), GitHub & LinkedIn icon links. Right side: Interactive SVG tech matrix / terminal snippet visual component.
4. **`components/About.tsx`**: Storytelling layout with personal intro and supporting factual summary cards (Education Focus, Core Technical Focus, Key Engineering Values).
5. **`components/Skills.tsx`**: Categorized technical skill matrix (Programming, Frontend, Backend, Database, AI & Data Science, Tools) with icons, badges, and hover lift effects.
6. **`components/WhatIDo.tsx`**: Modern 4-card grid highlighting technical capabilities (AI / Machine Learning, Full Stack Engineering, Data Science, REST & API Systems).
7. **`components/Experience.tsx`**: Vertical timeline card structure with company, role, dates, location, bulleted achievements, and technology tags.
8. **`components/Projects.tsx`**: Featured spotlight project layout (large visual container, problem, solution, key features, tech stack, repo & demo links) + grid for secondary projects. Includes SVG abstract tech card fallback when screenshot is missing.
9. **`components/Education.tsx`**: Clean cards showcasing Degree, College, Branch, CGPA, and relevant coursework.
10. **`components/Certifications.tsx`**: Grid of industry credentials with issuer info and credential link support (with elegant empty state).
11. **`components/Achievements.tsx`**: Hackathon and competition highlight cards.
12. **`components/Resume.tsx`**: Dedicated Resume section featuring a download CTA and instructions for adding `public/resume.pdf`.
13. **`components/Contact.tsx`**: Direct email, LinkedIn, and GitHub contact cards + interactive email form with mailto fallback and submission status feedback.
14. **`components/Footer.tsx`**: Clean footer with copyright notice, section links, and scroll-to-top button.

---

## 7. Responsive Strategy
- Tested across breakpoints: `320px`, `375px`, `390px`, `430px` (Mobile), `768px`, `820px` (Tablet), `1024px`, `1280px`, `1440px`, `1920px` (Desktop).
- Zero horizontal overflow (`overflow-x-hidden` on body container).
- Mobile-friendly touch targets (min 44px height for interactive elements).

---

## 8. Animation & Accessibility Standards
- CSS-first transitions with `prefers-reduced-motion: reduce` handling.
- Keyboard focus rings (`focus-visible:outline-2 focus-visible:outline-indigo-500`).
- Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Full ARIA labels for screen reader navigation.

---

## 9. Execution Timeline & Validation
- Step 1: Create `data/portfolio.ts` with centralized structured portfolio data.
- Step 2: Clean up broken `app/portfoliocomp/index.js` file and unused assets.
- Step 3: Create `public/projects/` directory.
- Step 4: Build all 13 UI components in `components/`.
- Step 5: Update `app/globals.css` with dark theme variables, custom scrollbars, and keyframe animations.
- Step 6: Assemble all sections in `app/page.tsx`.
- Step 7: Update SEO metadata and open graph headers in `app/layout.tsx`.
- Step 8: Verify build via `npm run build` and `npm run lint`.
- Step 9: Create `PORTFOLIO_CONTENT_GUIDE.md` and `PHASE_2_COMPLETION_REPORT.md`.
