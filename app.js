import express from 'express';
import { environment } from './src/env.js';
import searchRouter from './src/routes/search.js';
import cacheRouter from './src/routes/cache.js';

const app = express();

app.use(express.json());
app.use('/search', searchRouter);
app.use('/cache', cacheRouter);

app.listen(environment.server.port, () => console.log(`Listening on port ${environment.server.port}`));
