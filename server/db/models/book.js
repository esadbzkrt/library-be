const Sequelize = require("sequelize");
const db = "../../db/index";

const Book = db.define("book", {
  book_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  book_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  book_author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  book_category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  book_publisher: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = Book;
