const { DataTypes,sequelize } = require("sequelize");
const db = require("./db");
const author= sequelize.define("author", {
  authorID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  authorName: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})

  module.exports = author; 
