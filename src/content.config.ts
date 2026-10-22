import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIES = {
  entrepreneurship: 'Entrepreneurship',
  wellbeing: 'Wellbeing',
} as const;

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['entrepreneurship', 'wellbeing']),
    hero: z.string().optional(),
    // Drafts show on the dev server with a DRAFT tag but are never published.
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
