'use strict'

var express = require('express'); // Sistema de Rotas
var bodyParser = require('body-parser'); // BodyParser
var app = express(); // Aplica as rotas ao meu app
var PORT = 8000; // Porta da minha aplicação
var db = require('./config/db'); // Recupero minha conexão

// Teste de conexão
db.authenticate()
  .then(() => {
    console.log('Conexão com banco OK ;)');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco ;(');
  });

// Configurando BodyParser
app.use(bodyParser.json()); // Dizendo que irei enviar os dados via json
app.use(bodyParser.urlencoded({extended: true})); // Os dados serão recuperados com method POST



// Iniciando aplicação
app.listen(PORT, () => {
    console.log(`Ouvindo na porta ${PORT} =)`);
});