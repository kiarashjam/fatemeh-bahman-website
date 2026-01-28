# Comments & Review

This file holds project notes for maintainers: where things live, how they work, and a review checklist.

---

## Comments (project notes)

### Structure
- **`app/`** – Next.js App Router pages. `layout.tsx` wraps all pages with providers (Theme, Language), Header, Footer, SkipToContent, FloatingWhatsApp, BackToTop. `page.tsx` is the homepage; other routes: `about`, `contact`, `faq`, `lessons`, `pricing`.
- **`components/`** – `layout/` (Header, Footer), `sections/` (Hero, Testimonials, etc.), `ui/` (SkipToContent, BackToTop, FloatingWhatsApp), and `ErrorBoundary.tsx`.
- **`lib/`** – `constants.ts` (ASSETS, SITE_CONFIG), `content.ts` (en/fa copy for sections), `utils.ts` (cn), `contexts/` (LanguageContext, ThemeContext).

### Copy and assets
- **Text:** Section copy is in `lib/content.ts` under `en` and `fa`. Components use `content[language]` from `useLanguage()`. For nav/hero keys, `LanguageContext` has a small `translations` map.
- **Images:** Public images go in `public/images/`. Portrait: `fatemeh.jpeg` (see `ASSETS.portrait` and `public/images/.gitkeep`).
- **Contact:** Email and WhatsApp are in `lib/constants.ts` (`SITE_CONFIG`) and in Footer / contact page. Update there when contact details change.

### RTL and language
- **Language:** `LanguageContext` provides `language` (`en` | `fa`), `setLanguage()`, and `t(key)`. It sets `<html dir>` and `<html lang>` and persists to `localStorage`.
- **RTL:** When `language === 'fa'`, `dir="rtl"` is set on `<html>`. Components that position elements (Header drawer, BackToTop, FloatingWhatsApp) use `language === 'fa' ? 'left-6' : 'right-6'` (or similar) so the UI stays correct in RTL.

### Theme
- **ThemeContext** provides `theme` (`light` | `dark`) and `toggleTheme()`. It adds/removes `dark` on `<html>` and persists to `localStorage`. Tailwind dark variants use `dark:`.

### Accessibility
- **SkipToContent** links to `#main-content` (the `<main>` in `layout.tsx`). It’s sr-only until focused.
- **Focus:** `globals.css` sets a focus ring for `:focus-visible`. Header nav, mobile menu, and buttons use visible focus states.
- **Reduced motion:** `prefers-reduced-motion: reduce` is respected in `globals.css`.

---

## Review (checklist for maintainers)

Use this when reviewing or changing the codebase.

### Accessibility
- [ ] Skip link targets `#main-content` and is keyboard-visible.
- [ ] All interactive elements (links, buttons) have visible focus and, where needed, `aria-label` / `aria-expanded` / `aria-controls`.
- [ ] Form inputs (contact, etc.) have associated labels and error messages.
- [ ] Heading order is logical (no skipped levels); sections have appropriate `h2`/`h3`.

### RTL and language
- [ ] New UI that positions left/right (e.g. fixed buttons, drawers) is RTL-aware (swap for `language === 'fa'`).
- [ ] New copy is added to both `content.en` and `content.fa` (or `translations` in LanguageContext) so both languages stay in sync.
- [ ] No hardcoded `dir="ltr"` on content that should follow site language.

### Performance and SEO
- [ ] Images use Next.js `Image` where possible; portrait and large assets have sensible sizes.
- [ ] `metadata` in `layout.tsx` (and page-specific metadata where used) is correct for title, description, OG, and locale.
- [ ] `sitemap.ts` and `robots.ts` are updated if routes or indexing rules change.

### Data and config
- [ ] Contact details (email, WhatsApp) are updated in `lib/constants.ts` and any duplicate references (e.g. Footer, contact page).
- [ ] `SITE_CONFIG.url` matches the live domain when deploying.
- [ ] Environment variables (if any) are documented and not committed (use `.env.local` and `.gitignore`).

### Errors and edge cases
- [ ] `ErrorBoundary` in `layout.tsx` is kept so a single component error doesn’t break the whole app.
- [ ] `localStorage` access (theme, language) is wrapped in try/catch for SSR and private browsing.
- [ ] Optional images (e.g. Hero portrait) have a fallback or hide gracefully on load error.

### General
- [ ] New dependencies are justified and versioned; run `npm run build` after changes.
- [ ] Comments and this file are updated when adding new patterns or changing structure.

---

*Last updated: project comments and review checklist for Fatemeh Bahman – Persian teacher site.*
