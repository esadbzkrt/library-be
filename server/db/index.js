const { Promise } = require("sequelize");
const { Sequelize } = require("sequelize");
const db = {};

const sequelize = new Sequelize("library", "postgres", "esad", {
  host: "localhost",
  dialect: "postgres",
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected Database");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

db.createTables = async () => {
    const author = require("./models/author");
    author.sync({ force: true }); 


}


module.exports = db;
