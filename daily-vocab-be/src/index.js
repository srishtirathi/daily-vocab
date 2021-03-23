const express = require('express');
const env = require('dotenv');
const { router } = require('./routes/health.route');
const { vocabRouter } = require('./routes/vocab.route');

const app = express();
env.config();
const port = process.env.PORT || 1337;
app.use(express.json());
// app.get('/', (req, res) => {
//   res.send('Welcome');
// });
app.use('/health', router);
app.use('/vocab', vocabRouter);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
