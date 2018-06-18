var app = require('express').Router();
var aluno = require('../controllers/aluno-controller');

app.post('/cadastrar', aluno.add);
