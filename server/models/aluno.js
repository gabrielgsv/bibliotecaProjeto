const db = require('../config/db.js'); // recupera conexão com o banco
const Sequelize = require('sequelize'); // instancia sequelize

 const Aluno = db.define('aluno',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
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

module.exports = Aluno;