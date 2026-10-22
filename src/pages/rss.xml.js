import rss from '@astrojs/rss';
import { getPosts } from '../lib/posts';

export async function GET(context) {
  const posts = (await getPosts()).filter((p) => !p.data.draft);
  return rss({
    title: 'The Founder Edit',
    description: "Wen's notes on entrepreneurship, wellbeing, and figuring life out.",
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/${p.id}/`,
    })),
  });
}
