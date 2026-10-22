# The Founder Edit (yuhwen.com)

Wen's personal blog. Astro static site; this GitHub repo (Jadewolfink/the-founder-edit) is the single source of truth.

## Publishing
- Hosted on GitHub Pages. `.github/workflows/deploy.yml` builds and publishes on every push to `main`. To publish, commit to `main` and push. `public/CNAME` must stay `yuhwen.com`.
- Never deploy from a local folder by any other route (e.g. the Netlify CLI): it bypasses the repo, which is how the original source files were lost. The old Netlify project `the-founder-edit` is retired.
- Run `npm run build` before pushing and fix any errors; a failed build leaves the live site on the previous version.
- The repo is PUBLIC: drafts committed here are readable by anyone.
- Domain DNS is at GoDaddy (ns49/ns50.domaincontrol.com).

## Content
- Posts: `src/content/posts/<slug>.md`. Frontmatter: title, description, date (YYYY-MM-DD), category (`entrepreneurship` | `wellbeing`), optional hero (`/images/heroes/<slug>.svg`), optional `draft: true`.
- Hero images live in `public/images/heroes/`, usually as SVG illustrations.
- Existing posts keep the curly quotes and ellipses from the original site. New posts can use straight quotes; smartypants turns them curly.
- Reading time = words ÷ 220, rounded, minimum 1 (`src/lib/remark-reading-time.mjs`).
- Listing order: newest first, ties alphabetical by slug. Older/Newer links break ties by reverse slug (`src/lib/posts.ts`). Both match the original site.

## Wen's preferences for posts
- She doesn't want pieces to feel overly negative. Episodes should end on something hopeful, and titles shouldn't read as bleak.
- Season 1 episode planning lives in her Notion database "The Founder Edit — Season 1 Tracker".
