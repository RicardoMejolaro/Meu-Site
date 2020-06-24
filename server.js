const express = require('express');
const nunjucks = require('nunjucks');

const videos = require("./data");

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});

server.get('/', (req, res) => {
  const about = {
    avatar_url: "assets/imagem-perfil.jpg",
    name: "Ricardo Mejolaro",
    role: "Desenvolvedor WEB",
    description: "Formado em Sistemas de Informação, programador e estudante das principais tecnologias do universo WEB e Mobile:",
    tecnologies: [
      { name: "Html", url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/", icon: "assets/html-5.png" },
      { name: "Css", url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/", icon: "assets/css3.png" },
      { name: "Javascript", url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/", icon: "assets/javascript.png" },
      { name: "NodeJs", url: "https://nodejs.org/en/docs/", icon: "assets/node.png" },
      { name: "ReactJs", url: "https://pt-br.reactjs.org/", icon: "assets/react.png" },
      { name: "ReactNative", url: "https://reactnative.dev/", icon: "assets/react-native.png" },
    ]
  }
  return res.render('about', { about });
});

server.get('/videos', (req, res) => {
  return res.render('videos', { items: videos });
});

server.listen(5000, () => {
  console.log("Server is Running!");
});