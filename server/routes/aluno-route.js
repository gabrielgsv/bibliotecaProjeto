var router = require('express').Router();
var aluno = require('../controllers/aluno-controller');

router.post('/cadastrar', aluno.add);

module.exports = router;