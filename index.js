const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});