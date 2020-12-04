import remark from 'remark';
import html from 'remark-html';

export default async function markdownToHtml(markdown) {
    const result = await remark().use(html).process(markdown);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return result.toString();
}
