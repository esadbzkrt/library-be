const Sequelize = require("sequelize");
const db = "../../db/index";

const Author = db.define("author", {
  author_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  author_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Author;
