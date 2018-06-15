'use strict'

var express = require('express'); // Sistema de Rotas
var bodyParser = require('body-parser'); // BodyParser
var app = express(); // Aplica as rotas ao meu app
var PORT = 8000; // Porta da minha aplicação

// Configurando BodyParser
app.use(bodyParser.json()); // Dizendo que irei enviar os dados via json
app.use(bodyParser.urlencoded({extended: true})); // Os dados serão recuperados com method POST


app.get('/api/helloword', (req, res) => {
    res.send({ msg: "hello word de minha api !! ;)"});
});

// Iniciando aplicação
app.listen(PORT, () => {
    console.log(`Ouvindo na porta ${PORT} =)`);
});