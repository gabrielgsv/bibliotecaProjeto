var Sequelize = require('sequelize');

exports.add = async(req, res) => {
  try {
      const newAluno = await req.body;
      console.log(newAluno);
  } catch (err) { 
      
  }  
};