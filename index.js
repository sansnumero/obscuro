const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const knexConfig = require('./db/knexfile');
const knex = require('knex')(knexConfig['development'])

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
