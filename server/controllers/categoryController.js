const {Category} = require("../../models/");

const newCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const category = new Category({
      categoryName
    });
    await category.save();
    res.send(category);
  } catch (error) {
    console.log("error", error);
  }

};
const getCategory = (req, res) => {
  res.json({ message: "GET category" });
};
const getAllCategories = async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.send(categories);
    } catch (error) {
      console.log("error", error);
    }
};
const updateCategory = (req, res) => {
  res.json({ message: "PUT category" });
};
const deleteCategory = (req, res) => {
  res.json({ message: "DELETE category" });
};
module.exports = {
  newCategory,
  getCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
