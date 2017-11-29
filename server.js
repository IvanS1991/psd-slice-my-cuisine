const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use('/', express.static('public'));
app.use('/lib', express.static('node_modules'));

app.listen(port, () => {
  console.log(`Listening on :${port}.. .  .   .`);
});
