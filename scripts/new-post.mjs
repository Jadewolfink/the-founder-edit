// Creates a new draft post:  npm run new-post -- "My Post Title" [wellbeing|entrepreneurship]
import fs from 'node:fs';

const [title, category = 'entrepreneurship'] = process.argv.slice(2);
if (!title) {
  console.error('Usage: npm run new-post -- "My Post Title" [wellbeing|entrepreneurship]');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-');
const file = `src/content/posts/${slug}.md`;
if (fs.existsSync(file)) {
  console.error(`${file} already exists.`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  file,
  `---
title: ${JSON.stringify(title)}
description: "One or two sentences shown under the title on the homepage and in search results."
date: ${today}
category: ${category}
# hero: /images/heroes/${slug}.svg
draft: true
---

Write the post here.
`,
);
console.log(`Created ${file} (draft). Remove "draft: true" when it's ready to publish.`);
