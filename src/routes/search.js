import express from 'express';
import { Search } from '../controllers/search.js';

const router = express.Router();
const search = new Search();

router.post('/', (req, res) => search.post(req, res));

export default router;
