"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init(
    {
      bookName: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      publisher:{
        type: DataTypes.STRING,
        allowNull: false 
      },
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;

};

