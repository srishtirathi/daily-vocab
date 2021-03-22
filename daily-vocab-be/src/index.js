const express = require('express');

const env = require('dotenv');

const app = express();
env.config();
const port = process.env.PORT || 8000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome');
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
