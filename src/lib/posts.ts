import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** Published posts (plus drafts while running `npm run dev`), newest first. */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  // Newest date first; posts sharing a date are listed alphabetically by slug.
  return all.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id),
  );
}

/** Order used for the Older / Newer links at the bottom of each post. */
export function navOrder(posts: Post[]): Post[] {
  return [...posts].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime() || b.id.localeCompare(a.id),
  );
}

const fmt = (d: Date, opts: Intl.DateTimeFormatOptions) =>
  d.toLocaleDateString('en-US', { timeZone: 'UTC', ...opts });

export const longDate = (d: Date) => fmt(d, { year: 'numeric', month: 'long', day: 'numeric' });
export const shortDate = (d: Date) => fmt(d, { month: 'short', day: 'numeric' });
export const shortDateYear = (d: Date) => fmt(d, { year: 'numeric', month: 'short', day: 'numeric' });
