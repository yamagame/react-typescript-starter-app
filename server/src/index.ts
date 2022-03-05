import express from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json({ type: 'application/json' }));

app.post('/pages', (req, res) => {
  res.send([
    { id: '1', title: 'ページ1', content: 'ページ1の本文' },
    { id: '2', title: 'ページ2', content: 'ページ2の本文' },
    { id: '3', title: 'ページ3', content: 'ページ3の本文' },
    { id: '4', title: 'ページ4', content: 'ページ4の本文' },
    { id: '5', title: 'ページ5', content: 'ページ5の本文' },
    { id: '6', title: 'ページ6', content: 'ページ6の本文' },
  ]);
});

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
