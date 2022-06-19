const { Sequelize } = require('sequelize');

module.exports=new Sequelize('library','postgres','esad',{
    host:'localhost',
    dialect:'postgres'
})
