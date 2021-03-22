const express = require('express');
const env = require('dotenv');
const { router } = require('./routes/health.route');

const app = express();
env.config();
const port = process.env.PORT || 8000;
app.use(express.json());
// app.get('/', (req, res) => {
//   res.send('Welcome');
// });
app.use('/health', router);
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
