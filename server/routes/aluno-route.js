var router = require('express').Router();
var aluno = require('../controllers/aluno-controller');

router.get('/cadastrar', aluno.add);

module.exports = router;