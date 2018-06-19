const db = require('../config/db.js'); // recupera conexão com o banco
const Sequelize = require('sequelize'); // instancia sequelize

 const Aluno = db.define('aluno'/*nome da tabela*/,{
    id: {
        type: Sequelize.INTEGER, // tipo
        primaryKey: true, 
        autoIncrement: true 
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false, // não pode valores nuloes
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // não pode valores repetidos
    },
    senha:{
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    curso:{
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// comando para sincronizar com o banco e criar as tables
// db.sync({force: true})
//     .then(() => console.log('table create'))
//     .catch(() => console.log('erro'));

module.exports = Aluno;