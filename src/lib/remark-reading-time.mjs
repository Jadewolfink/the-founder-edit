// Adds `minutesRead` to each post's frontmatter: words ÷ 220, rounded, minimum 1.
import { visit } from 'unist-util-visit';

export function remarkReadingTime() {
  return function (tree, { data }) {
    let words = 0;
    visit(tree, ['text', 'inlineCode'], (node) => {
      words += node.value.split(/\s+/).filter(Boolean).length;
    });
    data.astro.frontmatter.minutesRead = Math.max(1, Math.round(words / 220));
  };
}
