import express from 'express';
import { apiRouter } from './routers/api';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json({ type: 'application/json' }));

app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
