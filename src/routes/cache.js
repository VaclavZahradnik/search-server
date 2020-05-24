import express from 'express';
import { Cache } from '../controllers/cache.js';

const router = express.Router();
const cache = new Cache();

router.get('/:url', (req, res) => cache.get(req, res));

export default router;
