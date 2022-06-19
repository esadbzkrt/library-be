const Sequelize = require("sequelize");
const db = "../../db/index";

const Category = db.define("category", {
  category_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Category;
