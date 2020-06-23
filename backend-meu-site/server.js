const express = require('express');

const server = express();


server.get('/', (req, res) => {
  return res.send('Rota index Done!');
});

server.listen(5000, () => {
  console.log("Server is Running!");
});