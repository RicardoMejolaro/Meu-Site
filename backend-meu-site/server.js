const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.set('view engine', 'html');

nunjucks.configure('views', {
  express: server
});

server.get('/', (req, res) => {
  return res.send('Rota index Done!');
});

server.listen(5000, () => {
  console.log("Server is Running!");
});