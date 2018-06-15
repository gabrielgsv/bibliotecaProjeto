var express = require('express');
var app = express();
var PORT = 8000;

// Iniciando aplicação
app.listen(PORT, () => {
    console.log(`Ouvindo na porta ${PORT} =)`);
});