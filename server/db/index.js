const { Sequelize } = require("sequelize");
const db = {};

const sequelize = new Sequelize("library", "postgres", "esad", {
  host: "localhost",
  dialect: "postgres",
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;