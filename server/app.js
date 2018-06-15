var express = require('express');
var app = express();
var PORT = 1000;

app.listen(PORT, ()=> {
    console.log(`Ouvindo na porta ${PORT} =)`);
})