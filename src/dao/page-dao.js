import arangojs from 'arangojs';

import { getDb, getCollection } from './arango-db.js';

const aql = arangojs.aql;

export class PageDao {
  async search(text, lang) {
    let db = getDb();

    let expr = (text || '')
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .filter(x => x.length >= 3)
      .join(',|');

    if (!expr) return [];

    let query;

    if (lang) {
      query = aql`
      for p in FULLTEXT(pages, 'text', ${expr})
      filter p.lang == ${lang}
      limit 25
      return { id: p._id, url: p.url, title: p.title, text: p.text, favicon: p.favicon }
    `;
    } else {
      query = aql`
      for p in FULLTEXT(pages, 'text', ${expr})
      limit 25
      return { id: p._id, url: p.url, title: p.title, text: p.text, favicon: p.favicon }
    `;
    }

    const cursor = await db.query(query);
    const result = await cursor.all();

    return result;
  }
}

export default PageDao;
