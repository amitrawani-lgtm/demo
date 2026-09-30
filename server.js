import express from 'express';
import sum from './sum.js';
const app = express();

app.get('/sum/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const result = sum(Number(a), Number(b));
  res.json({ msg : result });
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});