import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: '::ngrhadi::',
    description: 'a Portfolio of Adi Nugraha, write on Astro v5 and colection content using markdown file.',
    site: 'https://ngrhadi.web.id',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}
