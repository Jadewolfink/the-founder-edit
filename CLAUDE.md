# The Founder Edit (yuhwen.com)

Wen's personal blog. Astro static site; this GitHub repo (Jadewolfink/the-founder-edit) is the single source of truth.

## Publishing
- Netlify project `the-founder-edit` (site id 987629ab-0ffb-44da-88eb-92be425f93d4) builds from the `main` branch automatically. To publish, commit to `main` and push. Do NOT deploy with the Netlify CLI from a local folder: that bypasses the repo and is how the original source files were lost.
- Run `npm run build` before pushing and fix any errors; a failed build leaves the live site on the previous version.

## Content
- Posts: `src/content/posts/<slug>.md`. Frontmatter: title, description, date (YYYY-MM-DD), category (`entrepreneurship` | `wellbeing`), optional hero (`/images/heroes/<slug>.svg`), optional `draft: true`.
- Hero images live in `public/images/heroes/`, usually as SVG illustrations.
- Existing posts keep the curly quotes and ellipses from the original site. New posts can use straight quotes; smartypants turns them curly.
- Reading time = words ÷ 220, rounded, minimum 1 (`src/lib/remark-reading-time.mjs`).
- Listing order: newest first, ties alphabetical by slug. Older/Newer links break ties by reverse slug (`src/lib/posts.ts`). Both match the original site.

## Wen's preferences for posts
- She doesn't want pieces to feel overly negative. Episodes should end on something hopeful, and titles shouldn't read as bleak.
- Season 1 episode planning lives in her Notion database "The Founder Edit — Season 1 Tracker".
