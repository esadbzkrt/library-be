const Sequelize = require("sequelize");
const db = "../../db/index";

const Publisher = db.define("publisher", {
  publisher_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  publisher_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Publisher;
