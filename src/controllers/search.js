import { PageDao } from '../dao/page-dao.js';

export class Search {
  constructor() {
    this._pageDao = new PageDao();
  }

  async post(req, res) {
    console.log(`POST ${req.originalUrl}`, req.body);
    if (!req.body) {
      res.status(400).end();
      return;
    }

    const { text, lang } = req.body;

    const pages = await this._pageDao.search(text, lang);
    res.json(pages);
  }
}
