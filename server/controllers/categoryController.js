const newCategory = (req, res) => {
  res.json({ message: "POST new category" });
};
const getCategory = (req, res) => {
  res.json({ message: "GET category" });
};
const getAllCategories = (req, res) => {
  res.json({ message: "GET all categories" });
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
