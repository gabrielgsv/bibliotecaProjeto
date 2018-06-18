const Sequelize = require('sequelize');
var PASS_DB = require('./passdb.js');

const db = new Sequelize(
  'db_teste'/*nome_banco*/, 
  'postgres'/*user*/, 
  PASS_DB,/*senha*/ {
    host: 'localhost',/*host*/
    dialect: 'postgres',/*tipo de banco*/
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
});

module.exports = db; /*exporto minha conexão*/