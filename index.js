'use strict';

const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;
const HOST = '0.0.0.0';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('./views/index.html');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
