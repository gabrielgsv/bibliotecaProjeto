'use strict'

var express = require('express'); // Sistema de Rotas
var bodyParser = require('body-parser'); // BodyParser
var PORT = 8000; // Porta da minha aplicação
var db = require('./config/db'); // Recupero minha conexão

var app = express(); // Aplica as rotas ao meu app

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

// Rotas
var aluno = require('./routes/aluno-route');

// URL
app.use('/api/aluno', aluno);

// Iniciando aplicação
app.listen(PORT, () => {
    console.log(`Ouvindo na porta ${PORT} =)`);
});

