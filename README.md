# The Founder Edit

Wen's personal blog, live at **[yuhwen.com](https://yuhwen.com)**.

This repository is the master copy of the site, and it's also what publishes it. Every change saved to the `main` branch is built and published to yuhwen.com automatically by GitHub Pages, usually within a couple of minutes. Nothing needs to be uploaded by hand. Progress shows under the repository's **Actions** tab.

This repository is public, so anything committed here, drafts included, can be read by anyone.

## Publishing a new post

1. Add a Markdown file to `src/content/posts/`. The file name becomes the web address, so `what-are-we-rushing-for.md` is published at `yuhwen.com/what-are-we-rushing-for/`.
2. Start the file with this header:

   ```markdown
   ---
   title: "What Are We Rushing For?"
   description: "One or two sentences shown on the homepage and in search results."
   date: 2026-10-14
   category: wellbeing          # or: entrepreneurship
   hero: /images/heroes/what-are-we-rushing-for.svg   # optional header image
   draft: true                  # optional: delete this line to publish
   ---
   ```

3. Write the post below the header. Paragraphs are separated by a blank line, `*italics*`, `**bold**`, `[a link](https://…)`, `---` for a divider and `> ` for a quote.
4. Put any header image in `public/images/heroes/`.
5. Save the change to `main`. GitHub publishes it.

Shortcut for a blank draft: `npm run new-post -- "My Post Title" wellbeing`

The homepage, category pages, Older/Newer links, reading time, RSS feed and sitemap all update by themselves.

## Drafts

A post with `draft: true` shows up (tagged DRAFT) when previewing locally with `npm run dev`, but is never published to the live site. Delete the line when it's ready. Because the repository is public, a draft's text is still readable on GitHub itself. Keep anything private somewhere else until it's ready.

## Other pages

| Page | File |
| --- | --- |
| Start Here | `src/pages/start-here.astro` |
| About | `src/pages/about.astro` |
| Contact | `src/pages/contact.astro` |
| Header, footer, page head | `src/layouts/Base.astro` |
| Site-wide colours and fonts | `src/styles/global.css` |

## Working on it locally

```sh
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # produces the finished site in dist/
```

Built with [Astro](https://astro.build). Hosted on GitHub Pages; the publishing steps are in `.github/workflows/deploy.yml`, and `public/CNAME` holds the domain. The domain is registered at GoDaddy.
