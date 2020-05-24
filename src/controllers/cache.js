import { PageDao } from '../dao/page-dao.js';

export class Cache {
  constructor() {
    this._pageDao = new PageDao();
  }

  async get(req, res) {
    console.log(`GET ${req.originalUrl}`);
    const url = req.params.url;
    if (!url) {
      res.status(400).end();
      return;
    }

    const cache = await this._pageDao.cache(url);
    res.json(cache);
  }
}
