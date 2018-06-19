var Sequelize = require('sequelize');

var aluno = require('../models/aluno');

exports.add = async(req, res) => {
  try {
      const newAluno = await req.body;
      console.log(newAluno);
  } catch (err) { 
      
  }  
};